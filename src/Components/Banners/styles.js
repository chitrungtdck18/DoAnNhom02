import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../Utils/Color";
import { Fonts } from "../../Utils/Fonts";
import { verticalScale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width - 32,
        height: verticalScale(115)
    },
    gradientView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRadius: 5
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 5
    },
    content:{
        justifyContent: "center",
        height: "100%",
        width: "45%",
        marginRight: 15
    },
    title: {
        fontFamily: Fonts.font_700,
        fontSize: 15,
        color: Colors.seventh,
    },
    description: {
        fontFamily: Fonts.font_500,
        fontSize: 14,
        color: Colors.second,
    },
    button: { 
        alignItems: "baseline"
    },
    textButton: {
        backgroundColor: Colors.second,
        paddingHorizontal: 9,
        paddingVertical: 3,
        borderRadius: 3,
        fontFamily: Fonts.font_500,
        fontSize: 10,
        color: Colors.seventh,
    }
})