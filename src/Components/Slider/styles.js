import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    paginationWrapperBanner: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        marginTop: 12
    },
    paginationWrapper: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1,
        position: "absolute",
        zIndex: 3,
        bottom: 5
    },
    dotView:{
        marginHorizontal: 3
    }
});