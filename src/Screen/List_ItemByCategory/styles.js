import { StyleSheet } from "react-native";
import { Colors } from "../../Utils/Color";
export const styles = StyleSheet.create({
  imglist: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  viewimg: {
    width: 100,
    height: 80,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  viewitem: {
    marginHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: Colors.primary,
    height: 170,
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
    backgroundColor: Colors.second,
  },
})