import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  Image_avt: {
    height: 150,
    width: 150,
    borderRadius: 80,
    alignSelf: "center",

  },
  input: {
    fontSize: 16,
    color: '#BD8522',
    fontWeight: 'bold',
    marginLeft: 5,
    textTransform: "capitalize",
    textAlign: "left",
    marginBottom: 5,
    width: "90%"
  },
  Textput: {

    height: 55,
    width: "80%",
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#BD8522',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    paddingTop: 10,
    paddingHorizontal: 15
  },
  safeareaview: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  save: {
    height: 40,
    width: 350,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
  },
  Save_text: {
    textAlign: "center",

    color: "#fff",
    textTransform: "capitalize"
  }
})