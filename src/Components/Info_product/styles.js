import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    height: 510,
    width: "80%",
    backgroundColor: '#F5FCFF',
    borderRadius: 15
  },
  view_header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    borderBottomColor: '#f4f4f4',
    borderBottomColor: 2,
  },
  title: {
    textTransform: "capitalize",
  },
  Cancel: {
    position: "absolute",
    right: 20
  },
  Image: {
    marginTop: 10,
    height: 300,
    width: "100%"
  },
  addtocart: {
    justifyContent: "center",
    backgroundColor: "#38761d",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    height: 40,
    width: "90%",

  },
  textaddtocart: {
    color: Colors.second,
    fontSize: 18,
    fontWeight: "500"
  },
  view_Price: {
    flexDirection: "row",
    marginVertical: 10
  },
  Price: {
    paddingHorizontal: 10
  },
  viewDesc: {
    paddingHorizontal: 10
  }
})