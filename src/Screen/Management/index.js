
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
import Items_Product from"../../Components/items_Product"
import { async } from '@firebase/util';
export default function App(props) {
    const [selectedItem, setSelectedItem] = useState(-2);
    const [selectedItem_name, setselectedItem_name] = useState("");
    const [textseach, settextseach] = useState("")
    const [data, setdata] = useState([])
    const [Filter, setFilter] = useState([])

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
            setFilter(returnArr)
        });

    };
    const renderItem = ({ item, }) => (
        <Items_Product item={item} isupdate={true} />
    );
    const handleSearch = (text) => {
        settextseach(text)
        if (text) {
            const newData = data.filter(function (item) {
                if (selectedItem === -2) {
                    const itemData = item.Name
                        ? item.Name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                }
                else {
                    if (selectedItem_name == item.Type) {
                        const itemData = item.Name
                            ? item.Name.toUpperCase()
                            : ''.toUpperCase();
                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                    }
                }

            });
            setFilter(newData)
        } else {
            if (selectedItem == -2) {
                setFilter(data)
            }
            else {
                const result = data.filter((i) => i.Type == selectedItem_name)
                setFilter(result)
            }
        }
    };
    const handleSearchbyCategory = async (text) => {
        if (textseach == "") {
            if (text == "All") {
                setFilter(data)
            } else {
                const result = data.filter((i) => i.Type == text)
                setFilter(result)
            }
        }
        else {

            if (text != "All") {
                const textData = textseach.toUpperCase();
                const result = data.filter((i) => i.Type == text
                    && i.Name.toUpperCase().indexOf(textData) > -1)
                setFilter(result)
            }
            else if (text == "All") {
                const textData = textseach.toUpperCase();
                const result = data.filter((i) => i.Name.toUpperCase().indexOf(textData) > -1)
                setFilter(result)
            }

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
                            item && setselectedItem_name(item.title)
                            item && handleSearchbyCategory(item.title)
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
            <View style={styles.view_list}>
                <FlatList
                    data={Filter}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.productID}
                    horizontal={false}
                    numColumns={2}
                />
            </View>

        </SafeAreaView>
    );
};


