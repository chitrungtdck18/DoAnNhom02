import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    priceText: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '700',
        color: 'white'

    },
    priceitem: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        borderBottomWidth: 2,
        borderColor: '#FFFFFF',
        fontStyle: 'italic',
        color: '#000000',
    },
    viewPrice: {
        margin: 10,
        justifyContent: 'center',
    },
    viewtopitems: {
        flexDirection: 'row',
    },
    imglist: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    descriptionitem: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',

    },
    titleitem: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    textitem: {
        margin: 10,
    },
    viewitem: {
        marginLeft: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#BD8522',
        width: 210,
        height: 170,
        marginRight: -10,
    },
    touchIconShow: {
        alignSelf: 'flex-end'
    },
    viewimg: {

        width: 100,
        height: 80,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },

    viewType2: {
        flexDirection: 'row',
        justifyContent: 'center'

    },
    viewType:
    {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    touchImage: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#BD8522',
        borderRadius: 10,
        margin: 7,
    },
    viewSearch: {
        alignItems: 'center',
        borderWidth: 1,
        flexDirection: 'row',

        borderColor: '#BD8522',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        margin: 10,
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 20,
        color: '#BD8522',
        borderColor: '#BD8522',
        fontWeight: '500',
        width: '88%',
    },
    touchIconMenu: {
        padding: 20,
    },
    header: {
        backgroundColor: '#BD8522',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    nameapp: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 20,
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
    safeareaview: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    modalContainer: {
        alignSelf: "center",
        height: "120%",
        width: "80%",
        backgroundColor: '#F5FCFF',
        position: "absolute",
        left: -20,
        top: -20,
    },
    Modal: {
        position: "absolute",
        backgroundColor: '#fff',
        height: "100%",
        width: "5%",

    },

    Image_avt: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
        marginLeft: 20,

    },
    userInfoSection: {
        flexDirection: "row",
        width: '100%',
        height: 150,
        paddingTop: 45,
        justifyContent: "space-between",
        backgroundColor: 'gray',
        alignItems: 'center'
    },
    item_Drawer: {
        margin: 25,
        flex: 1,

    },
    Cancel: {
        position: "absolute",
        top: 20,
        right: 20
    },
    info: {
        flex: 2,
    },
    view_item_Drawer: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 25,
    },
    text_item: {
        marginLeft: 25,
        textTransform: "capitalize",
        fontSize: 16,
    },
    userName: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        textTransform:"capitalize"
    },
    userEmail: {
        fontSize: 14,
        lineHeight: 14,
        textTransform:"capitalize"
    },
    Exit: {
        flexDirection: "row",
        alignItems: 'center',
        position: "absolute",
        bottom: 150,
        left: 10,
        width: '100%',
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2,
        paddingTop: 5
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,

    },
    view_preference: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomColor: '#f4f4f4',
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2,
        borderBottomWidth: 2

    }

})