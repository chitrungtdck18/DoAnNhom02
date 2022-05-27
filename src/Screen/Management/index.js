
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
export default function App(props) {
    const [selectedItem, setSelectedItem] = useState(-1);
    const [textseach, settextseach] = useState("")
    const [data, setdata] = useState([
        { title: '1. How to setting enviroment', price: '20$' },
        { title: '2. How to setting enviroment', price: '10$' },
        { title: '3. How to setting enviroment', price: '50$' },
        { title: '4. How to setting enviroment', price: '40$' },
    ])
    const [Filter, setFilter] = useState(data)
   const dataitem =[{id: -1, title: "All"}].concat(arrayCategory)
   console.log(dataitem)
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct', { item: item })}>
                <View style={styles.viewitem}>
                    <Text>{item.title}</Text>
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
                        dataSet={dataitem}
                        ChevronIconComponent={
                            <DownIcon />
                        }
                    />

                </View>
            </View>
            <View>
                <FlatList
                    ListHeaderComponentStyle={{ elevation: 10 }}
                    data={Filter}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
        </SafeAreaView>
    );
};


