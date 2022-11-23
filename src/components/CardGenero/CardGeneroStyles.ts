import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.escuro,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        // maxWidth: '40%',
        justifyContent: 'center',
        
    },
    cardText: {        
        fontSize: 18,
        color: "white"
    }

})