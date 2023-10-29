import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { getToken } from 'firebase/messaging';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}
export async function getfmcToken() {
    let fcmtoken = await AsyncStorage.getItem("fmctoken")
    console.log(fcmtoken, "old token")
    if (!fcmtoken) {
        try {
            await messaging().registerDeviceForRemoteMessages();
            const token = await messaging().getToken();
           
            await AsyncStorage.setItem("fmctoken", token);
        } catch (e) {
            console.log(e)
        }
    }
}
export const NotificationLister = () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        });
        // navigation.navigate(remoteMessage.data.type);
        // Check whether an initial notification is available
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification,
                    );
                    // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
                }
            });
        messaging().onMessage(async remoteMessage => {
            console.log("...", remoteMessage);
        })
    
    
}