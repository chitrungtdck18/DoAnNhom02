import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  viewDesc: {
    padding: 20,
    borderBottomWidth: 2,
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
    color: Colors.second,
    textAlign: 'center',
    width: '40%',
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: Colors.primary,
  },
  nameProduct: {
    fontSize: 24,
    fontWeight: "500",
  },
  imgproduct: {
    borderWidth: 2,
    borderColor: "red",
    marginVertical: 20,
    borderRadius: 10,
  },
  viewimg: {
    alignItems: "center",
    borderWidth: 1,
    paddingBottom: 30,
  },
  touchIconMenu: {
    padding: 20,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center"
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
    backgroundColor: Colors.second,
  },
  header:{
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})