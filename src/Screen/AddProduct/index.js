
import React, { useState, useEffect } from 'react';
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
import ImagePicker from 'react-native-image-crop-picker';
import { createProduct, Default_Image_Add } from '../../Model/Product';
import storage from '@react-native-firebase/storage';
import Notification from '../../Components/Notification';
export default function App(props) {
    const [choose, setchoose] = useState(false)
    const [Name, setName] = useState('')
    const [Price, setPrice] = useState('')
    const [Desc, setDesc] = useState('')
    const [selectedItem, setSelectedItem] = useState(-1);
    const [Photo1, setPhoto1] = useState("")
    const [Photo2, setPhoto2] = useState("")
    const [Photo3, setPhoto3] = useState("")
    const [Type, setType] = useState("")

    const check = () => {
        if (checkPhoto() ) {
        if (Name === "" || Price === "" || Desc === "") {
            alert("Vui Lòng nhập đầy đủ thông tin ")
        }
        else {
            createProduct({
                Name: Name,
                Price: Price,
                Type: Type,
                Desc: Desc,
                PhotoUrl1: Photo1,
                PhotoUrl2: Photo2,
                PhotoUrl3: Photo3
            })

        }
        }
        else {
            alert("Vui lòng chọn ảnh!!!")
        }

    }
    const checkPhoto = async () => {
        if (Photo1.length < 1 || Photo2.length < 1 || Photo3.length < 1) {
            return false
        }
        else {
            return true
        }
    }
    const changePhoto = (i, path) => {
        switch (i) {
            case 1:
                setPhoto1(path);
                break;
            case 2:
                setPhoto2(path);
                break;
            case 3:
                setPhoto3(path);
                break;
            default:
                setPhoto1(Default_Image_Add)
                setPhoto2(Default_Image_Add)
                setPhoto3(Default_Image_Add)
                break;
        }
    }
    const choosePhotoFromLibrary = async (i) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
            mediaType: "application/octet-stream;BASE64",
            includeBase64: true,
        }).then(image => {
            handleUpimge(i, image.path)

        });
    }
    const handleUpimge = async (i, path) => {
        const uploadUrl = "Products/" + Date.now() + ".png"
        const reference = storage().ref(uploadUrl);
        await reference.putFile(path)
            .then(() => {
                reference
                    .getDownloadURL()
                    .then((url) => {
                        changePhoto(i, url)
                    })
            })

    }
    const dataitem = [...arrayCategory].filter((i) => i.id > -2);
    return (
        <SafeAreaView style={styles.safeareaview}>
            <Header name={"Add Product"} />
            <View style={styles.view_image}>
                <TouchableOpacity onPress={() => choosePhotoFromLibrary(1)}>
                    <Image source={{ uri: Photo1 || Default_Image_Add }} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => choosePhotoFromLibrary(2)}>
                    <Image source={{ uri: Photo2 || Default_Image_Add }} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => choosePhotoFromLibrary(3)}>
                    <Image source={{ uri: Photo3 || Default_Image_Add }} style={styles.image} />
                </TouchableOpacity>
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
                            item && setSelectedItem(item.id);
                            item && setType(item.title);
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
            <TouchableOpacity style={styles.view_save} onPress={()=>setchoose(true)}>
                <Text style={styles.textsave}>Save</Text>
            </TouchableOpacity>
            <Notification
                ModalVisible={choose}
                cancel={e => setchoose(e)}
                ok={() => check()}
                name={"Add new Product"}
                describe={"Are you sure you want to  add this proudct!??"}
            />
        </SafeAreaView>
    );
};



