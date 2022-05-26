import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
import { Colors } from '../../Utils/Color';
export const styles = StyleSheet.create({
  viewDesc: {
    padding: 20,
  },
  Desc: {
    fontSize: 24,
    fontWeight: "500",
    textTransform: "capitalize"
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
    width: '100%',
  },
  viewimg: {
    alignItems: "center",
    flex: 1
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
    backgroundColor:"#fff"
  },
  ImageBackground: {
    width: Dimensions.get('window').width,
    height: 400,
    justifyContent: 'flex-end',
    backgroundColor: Colors.second
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
  input: {
    fontSize: 16,
    borderWidth: 2,
    margin: 7,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    color: Colors.primary,
    borderColor: Colors.primary,
    fontWeight: 'bold',
  },
  containerStyle: {
    flexGrow: 1, flexShrink: 1
  },
  textInputProps: {
    color: 'black',
    backgroundColor: Colors.second,
    paddingLeft: 18,
    borderRadius: 10,
  },

  rightButtonsContainerStyle: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  view_type: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center"
  },
  viewdropdown: {
    width: (windowWidth - 30) / 2,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 10,
    zIndex: 500,
    borderRadius: 10
  },
  text_type: {
    textAlign: "center",
    color: "#000"
  },
  input_Desc: {
    fontSize: 16,
    borderWidth: 2,
    margin: 7,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: Colors.primary,
    borderColor: Colors.primary,
    fontWeight: 'bold',

    textAlign: "left"
  },
  view_image: {
    flexDirection: "row",
    marginVertical: 15
  },
  image: {
    height: 125,
    width: 100,
    marginHorizontal: 15,
    borderColor: "#BD8522",
    borderWidth: 2,
    borderRadius:5
  },
  view_save: {
    justifyContent: "center",
    backgroundColor: "#38761d",
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    height: 40,
    width: "90%",
    marginBottom: 10,
    position:"absolute",
    bottom:5
  },
  textsave: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
})