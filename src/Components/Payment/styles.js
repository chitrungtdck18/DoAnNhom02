import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    height: 700,
    width: "85%",
    backgroundColor: '#F5FCFF',
    borderRadius: 15
  },
  view_header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
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
  view_Selection: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 30
  },
  describe: {
    textTransform: "capitalize",
    textAlign: "center",
    width: "100%",
    color: "#000000",
    fontWeight: "600",
    fontSize: 20,

  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 110,

  },
  text_button: {
    color: Colors.second,
    textAlign: "center",
    textTransform: "capitalize"
  },
  imglist: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 10,
  },
  viewitem: {
    marginHorizontal: 10,
    borderRadius: 10,
    margin: 5,
    height: 140,
    backgroundColor: Colors.second,
    flexDirection: "row",
    paddingVertical: 5
  },
  viewimg: {
    width: 120,
    height: 140,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  content_item: {
    paddingVertical: 15,
    justifyContent: "space-between",
    flex: 1
  },
  view_name: {
    justifyContent: "space-between",
    alignSelf: "center",
    marginVertical: 15
  },
  Price: {
    marginVertical: 10,
    width: "80%"
  },
  name: {
    width: 140
  },
  payment: {
    justifyContent: "center",
    backgroundColor: "#38761d",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    height: 40,
    width: "75%",
    marginTop: 30,
    alignSelf:"center",
    marginBottom:5
  },
  textpayment: {
    color: Colors.second,
    fontSize: 18,
    fontWeight: "500",
    textTransform:"capitalize"
  },
})