import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    height: 200,
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
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize"
  }

})