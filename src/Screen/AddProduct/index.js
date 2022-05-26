
import React, { useState } from 'react';
import {
    SafeAreaView,
    TextInput,
    Text,
    View,
    Image,
    TouchableOpacity

} from 'react-native';
import Header from '../../Components/header_info';
import DownIcon from '../../Icons/DownIcon'
import { Dimensions } from 'react-native';
import { styles } from './styles';
import { arrayCategory } from '../../Model/Category';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { Colors } from '../../Utils/Color';
export default function App(props) {
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Desc, setDesc] = useState('')
    const [selectedItem, setSelectedItem] = useState(-1);

    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={"Add Product"} />
            <View style={styles.view_image}>
                <Image source={require("../../Static/Images/img_add.png")} style={styles.image}/>
                <Image source={require("../../Static/Images/img_add.png")} style={styles.image}/>
                <Image source={require("../../Static/Images/img_add.png")} style={styles.image}/>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Name..."
                placeholderTextColor={Colors.primary}
                value={Name}
                onChangeText={e => setName(e)}
            />
            <TextInput
                style={styles.input}
                placeholder="Price..."
                placeholderTextColor={Colors.primary}
                keyboardType='numeric'
                value={Price}
                onChangeText={e => setPrice(e)}
            />
            <View style={styles.view_type}>
                <Text style={styles.text_type}>Type</Text>
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
            <View style={styles.viewDesc}>
                <Text style={styles.Desc}> description </Text>
                <TextInput
                    style={[styles.input_Desc]}
                    placeholder="Description..."
                    placeholderTextColor={Colors.primary}
                    value={Desc}
                    onChangeText={e => setDesc(e)}
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.view_save}>
                    <Text style={styles.textsave}>Save</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
};



