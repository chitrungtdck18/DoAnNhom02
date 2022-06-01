
import React, { useState, useEffect, useContext } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import GoBack from '../../Icons/GoBack'
import CartIcon from '../../Icons/CartIcon'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue } from "firebase/database"
import { Colors } from "../../Utils/Color";
import { AuthContext } from '../../Redux/AuthContext';
import { database } from '../../Utils/firebase-Config';
export default function Register(props) {
    const navigation = useNavigation();
    const { token } = useContext(AuthContext)
    const [numbercart, setnumbercart] = useState(0)
    const _getData = () => {
        const Ref = ref(database, 'shoppingCart/' + token.userid);
        onValue(Ref, (snapshot) => {
            var returnArr = [];
            snapshot.forEach(function (childSnapshot) {
                var item = childSnapshot.val();
                returnArr.push(item);
            });
            setnumbercart(returnArr.length)
        });

    };
    useEffect(() => {
        _getData()
    }, [])
    return (
        <View style={styles.header}>
            <View style={{ width: '18%' }}>
                <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.goBack()}>
                    <GoBack />
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center', width: '64%' }}>
                <Text style={styles.nameapp}>{props.name}</Text>
            </View>
            <View style={{ width: '18%' }}>
                <TouchableOpacity style={styles.touchIconMenu} onPress={() => navigation.navigate('Cart')}>
                    <CartIcon />
                    {numbercart > 0 ? <View style={styles.numberCart}>
                        <Text style={styles.textnumberCart}>{numbercart}</Text>
                    </View> : null}

                </TouchableOpacity>
            </View>
        </View>

    );
};



