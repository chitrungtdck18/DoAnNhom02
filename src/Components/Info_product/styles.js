import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    height: 500,
    width: "80%",
    backgroundColor: '#F5FCFF',
    borderRadius:15
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
  }
})