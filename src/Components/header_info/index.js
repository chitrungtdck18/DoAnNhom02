/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Goback from '../../Icons/GoBack'
import Add from '../../Icons/AddIcon'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from "../../Utils/Color";
export default function App(props) {
    const navigation = useNavigation();
    return (
        <View style={[styles.view_header]}>
            <View style={styles.Goback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Goback />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.Cancel}>
                {props.isAdd ?
                    <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
                        <Add  />
                    </TouchableOpacity>
                    : null}
            </View>
        </View>

    )

}