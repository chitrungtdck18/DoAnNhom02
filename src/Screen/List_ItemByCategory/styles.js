import { StyleSheet } from "react-native";
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
    backgroundColor: '#BD8522',
    height: 170,
  },
  touchIconMenu: {
    padding: 20,
  },
  header: {
    backgroundColor: '#BD8522',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameapp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 20,
  },
  safeareaview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})