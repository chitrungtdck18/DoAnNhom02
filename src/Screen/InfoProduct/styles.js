import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  viewDesc: {
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  Desc: {
    fontSize: 24,
    fontWeight: "500",
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
    color: '#FFFFFF',
    textAlign: 'center',
    width: '40%',
    paddingVertical: 3,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#BD8522',
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
  },
  ImageBackground: {
    width: Dimensions.get('window').width, height: 400, justifyContent: 'flex-end'
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
})