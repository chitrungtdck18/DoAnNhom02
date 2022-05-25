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
    textTransform: "capitalize",
    textAlign: "left",
    width: "90%",
  },
  Textput: {
    height: 55,
    width: "80%",
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#BD8522',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,

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
    color: "#fff", fontSize: 16
  },
  touchModal: {
    borderRadius: 5,
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    width: 220,
    backgroundColor: "#FF8600"
  },
  Chosse_acction: {
    color: '#FF8600', fontSize: 16
  },
  view_button: {
    padding: 10, marginVertical: 10
  },
  Lock:{
    marginHorizontal:10,
    marginVertical:12
  }
})