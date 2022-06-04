import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  viewDesc: {
    padding: 20,
  },
  Desc: {
    fontSize: 24,
  },
  DeContent: {
    marginVertical: 3,
    fontSize: 16,
  },
  viewText: {
    padding: 20,
    backgroundColor: Colors.second,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  priceProduct: {
    fontSize: 18,
    color: Colors.seventh,
    fontWeight: "bold",
    // textAlign: 'center',
    width: '40%',
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 15,
    // backgroundColor: Colors.primary,
  },
  nameProduct: {
    fontSize: 16,
  },
  imgproduct: {
    width: '100%',
  },
  viewimg: {
    alignItems: "center",
  },
  touchIconMenu: {
    padding: 20,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameapp: {
    fontSize: 20,
    color: Colors.second,
    textAlign: 'center',
    padding: 20,
  },
  safeareaview: {
    flex: 1,

  },
  ImageBackground: {
    width: Dimensions.get('window').width,
    height: 320,
    justifyContent: 'flex-end',
    backgroundColor: Colors.second

  },
  view_dot:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: "flex-end",
  },
  item: {
    width: "100%",
    height: "10%",
    alignSelf: "center",
  },
  payment: {
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    height: 40,
    width: "90%",
    marginBottom: 10,

  },
  textpayment: {
    color: Colors.second,
    fontSize: 18,

  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0,
    backgroundColor: Colors.second
  },
  view_bottom: {
    backgroundColor: Colors.second,
    marginTop: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  travel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 15
  },
  view_travel: {
    marginHorizontal: 15,
  },
  view_item_travel: {
    flexDirection: "row",
    marginVertical:10
  },
  ShowIcon: {
    alignSelf: "center",
    position:"absolute",
    right:5
  },
  text_deliver:{
    marginHorizontal:5,
    fontSize:14
  }
})