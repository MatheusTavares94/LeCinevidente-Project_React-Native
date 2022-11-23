import { StyleSheet } from "react-native";
import themes from "../../../themes";
import Constants from "expo-constants"

export const styles = StyleSheet.create({
    Container: {       
        paddingTop: Constants.statusBarHeight,
        flexDirection:'row',   
    },
    
    cardText: {        
        fontSize: 18,
        color: "white"
    }

})