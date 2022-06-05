import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
    },
    payment: {
        justifyContent: "center",
        backgroundColor: Colors.primary,
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 20,
        height: 40,
        width: "100%",
        marginTop: 30,
        borderRadius: 15
    },
    textpayment: {
        color: Colors.second,
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

        backgroundColor: Colors.second,
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
        justifyContent: "space-between"
    },
    content_item: {
        paddingVertical: 15,
        justifyContent: "space-between",
        flex: 1
    },
    add_remove: {
        flexDirection: "row",
        // borderColor: Colors.tenth,
        // borderWidth: 1,
        alignContent: "center",
        marginRight: 10,
        // paddingHorizontal: 5,
        // borderRadius: 5,
        // borderRadius: 20
    },
    item_quantity: {
        fontWeight: "bold",
        color: Colors.primary,
        textAlign: "center"
    },
    name: {
        width: "80%",
        color: Colors.eleventh
    },
    view_name: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    remove_icon: {
        padding: 5,
        position: "absolute",
        right: 5
    },
    list: {
        flex: 2
    },
    view_money: {
        flex: 0.5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: Colors.second,
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        height: 70,
        paddingTop: 10,
        paddingHorizontal: 30,
        width: "100%"
    },
    plus_sub: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.primary
    },
    bottomCheckout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10,
        width: "100%"
    },
    item_text: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.primary
    },
    sub: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
    },
    view_plus: {
        borderColor: Colors.tenth,
        borderWidth: 0.75,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: 20
    },
    view_quanty: {
        borderColor: Colors.tenth,
        borderWidth: 0.75,
        width: 30
    },
    view_sub: {
        borderColor: Colors.tenth,
        borderWidth: 0.75,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        width: 20
    },
    money: {
        color: Colors.eleventh
    }
})