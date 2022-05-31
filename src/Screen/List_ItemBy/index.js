
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import Header from '../../Components/header_info';
import SearchIcon from '../../Icons/SearchIcon'
import { styles } from './styles';
import { Colors } from '../../Utils/Color';
import Items_Product from '../../Components/items_Product'
import { getDatabase, ref, onValue, query, orderByChild } from "firebase/database"
export default function App(props) {
    const renderItem = ({ item, }) => (
        <Items_Product item={item} />
    );

    const [data, setdata] = useState([])
    const _getData = () => {
        const Ref = ref(getDatabase(), 'products/');
        onValue(query(Ref, orderByChild(props.route.params.method, "desc")), (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setdata(returnArr.reverse())
        });

    };
    const handleseach = (text) => {
        if (text) {
            const newData = data.filter(function (item) {
                const itemData = item.Name
                    ? item.Name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setdata(newData)
        } else {
            _getData()
        }
    }
    useEffect(() => {
        _getData()
    }, [])

    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={props.route.params.name} />
            <View style={styles.viewSearch}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor={Colors.primary}
                    onChangeText={(e) => handleseach(e)}
                />
                <TouchableOpacity>
                    <SearchIcon />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
};



