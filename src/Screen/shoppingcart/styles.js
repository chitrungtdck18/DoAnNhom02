import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
    },
    payment: {
        justifyContent: "center",
        backgroundColor: "#38761d",
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "90%",
        marginBottom: 10
    },
    textpayment: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500"
    },
    ship: {
        flexDirection: "row",
        alignSelf: "flex-end"

    },
    total: {
        flexDirection: "row",
        alignSelf: "flex-end",

    },
    viewimg: {
        width: 150,
        height: 140,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    viewitem: {
        marginHorizontal: 10,
        borderRadius: 10,
        margin: 5,
        height: 170,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: "row",
        paddingVertical: 5
    },
    imglist: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    view_add_remove: {
        flexDirection: "row",

    },
    content_item: {
        paddingVertical: 15,
        justifyContent: "space-between",
        flex: 1
    },
    add_remove: {
        flexDirection: "row",
        borderColor: '#000',
        borderWidth: 1,
        alignContent: "center",
        marginRight: 10
    },
    item_quantity: {
        marginHorizontal: 15
    },
    name: {

    },
    view_name: {

        flexDirection: "row",
        justifyContent: "space-between"
    },
    remove_icon: {
        padding: 5,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "flex-end",
        marginRight: 20
    },
    list: {
        flex: 3
    },
    view_money: {
        flex: 0.5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})