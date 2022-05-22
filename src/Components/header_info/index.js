/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Goback from '../../Icons/GoBack'
import Cancel from '../../Icons/Cancel'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
export default function App( props) {
    const navigation = useNavigation();
    return (
        <View style={[styles.view_header]}>
            <View style={styles.Goback}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Goback color={"#000"}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>{props.name}</Text>
            <View style={styles.Cancel}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Cancel color={"#000"} />
                </TouchableOpacity>

            </View>
        </View>

    )

}