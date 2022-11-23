import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        width:'40%',
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.escuro,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        // maxWidth: '40%',
        justifyContent: 'center',
        
    },
    cardText: {    
        textAlign: "center",    
        fontSize: 14,
        color: "white"
    }

})