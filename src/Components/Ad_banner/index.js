
import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Cancel from '../../Icons/Cancel'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import { Colors } from "../../Utils/Color";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob-alpha'
export default function app(props) {
    const navigation = useNavigation();
    const handleCancel = () => {
        props.cancel(false)
    }
    const handleyes = () => {
        props.ok()
        props.cancel(false)
    }
    const adIDAppopen = "ca-app-pub-3940256099942544/3419835294"
    const adIDBanner = "ca-app-pub-3940256099942544/6300978111"
    const adIDInterstitial = "ca-app-pub-3940256099942544/1033173712"
    const adIDRewardedl = "ca-app-pub-3940256099942544/5224354917"
    const adIDRewarded_Interstitial = "ca-app-pub-3940256099942544/5354046379"
    const adIDNative = "ca-app-pub-3940256099942544/2247696110"

    const [adID, setadID] = useState("ca-app-pub-0664570763252260/1769900428")

    return (
        <AdMobBanner
            adSize="fullBanner"
            adUnitID={adID}
            testDevices={[AdMobBanner.simulatorId]}
            adViewDidReceiveAd={(a) => console.log("RECEIVED AD " + a)}
            onAdFailedToLoad={error => console.error(error)} />
    );
};



