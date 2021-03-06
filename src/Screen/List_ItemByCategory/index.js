
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
import { getDatabase, ref, onValue } from "firebase/database"
import { database } from '../../Utils/firebase-Config';
export default function App(props) {
    const renderItem = ({ item, }) => (
        <Items_Product item={item} />
    );
    const [data, setdata] = useState([])
    const [Filter, setFilter] = useState([])
    const _getData = () => {
        const Ref = ref(database, 'products/');
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var item = childSnapshot.val();
                if (item.Type == props.route.params.name) {
                    returnArr.push(item);
                }
            });
            setdata(returnArr)
            setFilter(returnArr)
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
            setFilter(newData)

        } else {
            setFilter(data)
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
            <View style={{ flex: 1 ,marginHorizontal:15}}>
                <FlatList
                    data={Filter}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};



