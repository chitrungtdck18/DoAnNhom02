
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import SearchIcon from '../../Icons/SearchIcon'
import DownIcon from '../../Icons/DownIcon'
import Header from '../../Components/header_info';
import { Dimensions } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { styles } from './styles';
import { arrayCategory } from '../../Model/Category';
import { Colors } from '../../Utils/Color';
import { getDatabase, ref, onValue } from "firebase/database"
export default function App(props) {
    const [selectedItem, setSelectedItem] = useState(-2);
    const [textseach, settextseach] = useState("")
    const [data, setdata] = useState([

    ])

    const _getData = () => {
        const Ref = ref(getDatabase(), 'products/');
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata(returnArr)
        });

    };
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('UpdateProduct', { item: item })}>
                <View style={styles.viewitem}>
                    <Text>{item.Name}</Text>
                    <View style={styles.viewimg}>
                        <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const handleSearch = (text) => {
        if (text) {
            const newData = data.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = textseach.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilter(newData)
        } else {
            setFilter(data)
        }
    };
    const handleSearchbyCategory = (text) => {
        if (text) {
            const newData = arrayCategory.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = textseach.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilter(newData)
        } else {
            alert("khong co")
        }
    }
    useEffect(() => {
        _getData()
    }, [])
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={"Management"} isAdd />
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10 }}>
                <View style={styles.viewinputSearch}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        placeholderTextColor={Colors.primary}
                        onChangeText={e => handleSearch(e)}
                    />
                    <TouchableOpacity>
                        <SearchIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewdropdown}>
                    <AutocompleteDropdown
                        suggestionsListMaxHeight={Dimensions.get('window').height * 0.5}
                        clearOnFocus={true}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue={{ id: selectedItem }}
                        showClear={false}
                        containerStyle={styles.containerStyle}
                        onSelectItem={(item) => {
                            item && setSelectedItem(item.id)
                        }}
                        textInputProps={{
                            autoCorrect: false,
                            autoCapitalize: "none",
                            style: styles.textInputProps
                        }}
                        rightButtonsContainerStyle={styles.rightButtonsContainerStyle}
                        dataSet={arrayCategory}
                        ChevronIconComponent={
                            <DownIcon />
                        }
                    />

                </View>
            </View>
            <View>
                <FlatList
                    ListHeaderComponentStyle={{ elevation: 10 }}
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </SafeAreaView>
    );
};


