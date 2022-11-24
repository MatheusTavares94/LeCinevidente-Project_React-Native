import { Dimensions, StyleSheet } from "react-native";
import themes from "../../../themes";
import Constants from "expo-constants"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30,
        width: Dimensions.get("screen").width,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.COLORS.fundo
    },
    
    titleContainer:{
        width: Dimensions.get("screen").width,
        height: 110,
        padding: 20
    },

    title:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        color: themes.COLORS.Roxo.maisClaro,
    },

    buttonContainer:{
        zIndex:1,
        position: 'absolute',
        right: 30,
        bottom: 22
    },

    flatList: {
        marginBottom: 100,
    }

})