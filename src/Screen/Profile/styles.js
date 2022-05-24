import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  Image_avt: {
    height: 150,
    width: 150,
    borderRadius: 80,
    alignSelf: "center",
    marginTop: 20,
    borderColor: "#000",
    borderWidth: 1
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textTouch: {
    color: "#000", fontSize: 14
  },
  touchModal: {
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    width: 220
  }
})