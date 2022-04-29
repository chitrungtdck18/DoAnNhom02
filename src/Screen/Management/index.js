
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Dimensions
} from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

import MenuIcon from '../../Icons/MenuIcon'
import CartIcon from '../../Icons/CartIcon'
import SearchIcon from '../../Icons/SearchIcon'
import ShowIcon from '../../Icons/ShowmoreIcon'
import UpIcon from '../../Icons/UpIcon'
import DownIcon from '../../Icons/DownIcon'
import { styles } from './styles';
const windowWidth = Dimensions.get('window').width;


export default function Register(props) {
    const [selectedItem, setSelectedItem] = useState(-1);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('InfoProduct')}>
                <View style={styles.viewitem}>
                    <View style={styles.viewimg}>
                        <Image source={require('../../Static/Images/logonew.png')} style={styles.imglist}>
                        </Image>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
        },
    ];

    return (

        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.header}>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu} onPress={() => props.navigation.goBack()}>
                        <MenuIcon />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', width: '64%' }}>
                    <Text style={styles.nameapp}>Management</Text>
                </View>
                <View style={{ width: '18%' }}>
                    <TouchableOpacity style={styles.touchIconMenu}>
                        <CartIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10 }}>
                <View style={styles.viewinputSearch}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        placeholderTextColor={'#BD8522'}
                    />
                    <TouchableOpacity>
                        <SearchIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewdropdown}>
                    <AutocompleteDropdown
                        clearOnFocus={true}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue={{ id: selectedItem }}
                        onSelectItem={(item) => {
                            item && setSelectedItem(item.id)

                        }}
                        textInputProps={{
                            autoCorrect: false,
                            autoCapitalize: "none",
                            style: {
                                color: 'black',
                                backgroundColor: '#FFFFFF',
                                paddingLeft: 18,
                                borderRadius: 10,
                            }
                        }}
                        rightButtonsContainerStyle={{
                            borderRadius: 10,
                            backgroundColor: "#FFFFFF"
                          }}
                          

                        dataSet={[
                            { id: -1, title: 'All' },
                            { id: 1, title: 'Alpha' },
                            { id: 2, title: 'Beta' },
                            { id: 3, title: 'Gamma' },
                        ]}
                        ChevronIconComponent={
                            <DownIcon />
                        }
                        showClear={false}
                    />
                    
                </View>
            </View>
            <FlatList
                    data={[
                        { title: '1. How to setting enviroment', price: '20$' },
                        { title: '2. How to setting enviroment', price: '10$' },
                        { title: '3. How to setting enviroment', price: '50$' },
                        { title: '4. How to setting enviroment', price: '40$' },
                        { title: '5. How to setting enviroment', price: '0$' },
                        { title: '6. How to setting enviroment', price: '4$' },
                        { title: '7. How to setting enviroment', price: '45$' },
                        { title: '8. How to setting enviroment', price: '0$' },
                        { title: '9. How to setting enviroment', price: '48$' },
                        { title: '10. How to setting enviroment', price: '90$' },

                    ]}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />

        </SafeAreaView>
    );
};


