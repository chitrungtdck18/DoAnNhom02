import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    view_header: {
        height: 70,
        backgroundColor: '#fff',
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 24,
        justifyContent: 'space-between',
      
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 2,
      
    },     
    title: {
        flex: 12,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    Goback: {
        flex: 1,
    },
    Cancel:
    {
        flex:1,
        alignItems: 'flex-end'
    }

})