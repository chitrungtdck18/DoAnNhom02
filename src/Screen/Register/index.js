
import React from 'react';
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
    TouchableOpacity
} from 'react-native';
export default function Register({ navigation }) {

    return (
        <SafeAreaView style={styles.safeareaview}>
            <View style={styles.viewTop}>
                <Text style={styles.textCreate}>Create an Account</Text>
            </View>
            <View style={styles.viewMid}>
                <TextInput
                    style={styles.input}
                    placeholder="Full name..."
                    placeholderTextColor={'#BD8522'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Account..."
                    placeholderTextColor={'#BD8522'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password..."
                    placeholderTextColor={'#BD8522'}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm..."
                    placeholderTextColor={'#BD8522'}
                    secureTextEntry
                />


            </View>
            <View style={styles.viewBot}>
                <TouchableOpacity style={styles.touchLogin}>
                    <Text style={styles.textLogin}> Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textDA}>I already have an account. Login now</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textCreate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BD8522',
        marginTop: 30,
    },
    textDA: {
        alignSelf: 'flex-end',
        fontSize: 16,
        borderBottomWidth: 1 / 2,
        borderColor: '#44bcd8',
        fontStyle: 'italic',
        color: '#154c79',
        fontWeight: '500',
        margin: 10,

    },
    textLogin: {
        fontWeight: '700',
        fontSize: 18,
        padding: 15,
        color: '#FFFFFF',
    },
    touchLogin: {
        backgroundColor: '#BD8522',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
    },
    input: {
        fontSize: 16,
        borderWidth: 2,
        margin: 7,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        color: '#BD8522',
        borderColor: '#BD8522',
        fontWeight: 'bold',
    },
    safeareaview: {
        flex: 1,
    },
    viewTop: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewMid: {
        marginTop: 10,
        flex: 1,
    },
    viewBot: {
        marginBottom: 10,
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'center',
    },
});

