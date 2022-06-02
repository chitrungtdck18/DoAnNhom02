import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  viewDesc: {
    padding: 20,
    borderTopWidth: 2,
  },
  Desc: {
    fontSize: 24,
    fontWeight: "500",
  },
  DeContent: {
    marginVertical: 3,
    fontSize: 16,
    fontWeight: '500',

  },
  viewText: {
    margin: 20,
  },
  priceProduct: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.seventh,
    // textAlign: 'center',
    width: '40%',
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 15,
    // backgroundColor: Colors.primary,
  },
  nameProduct: {
    fontSize: 24,
    fontWeight: "500",
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
    fontWeight: 'bold',
    color: Colors.second,
    textAlign: 'center',
    padding: 20,
  },
  safeareaview: {
    flex: 1,
  },
  ImageBackground: {
    width: Dimensions.get('window').width,
     height: 350, 
     justifyContent: 'flex-end',
     marginTop:5
  },
  dot: {
    paddingHorizontal: 20
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
    fontWeight: "500"
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 15,
    marginHorizontal: 10,
    padding: 0,
    margin: 0,
  }
})