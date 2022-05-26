import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
    textCreate: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primary,
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
        color: Colors.second,
    },
    touchLogin: {
        backgroundColor: Colors.primary,
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
        color: Colors.primary,
        borderColor: Colors.primary,
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
    imgLogo: {
        width: 280,
        height: 180,
        marginTop: 20,
    },

})