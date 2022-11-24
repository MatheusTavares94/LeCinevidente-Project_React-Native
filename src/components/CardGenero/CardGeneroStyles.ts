import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({
    
    cardContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        width:'45%',
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.maisClaro,
        borderRadius: 10,
        borderColor: themes.COLORS.Roxo.medio,
        borderWidth: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
    },

    cardText: {    
        textAlign: "center",    
        fontSize: 14,
        color: "black"
    }

})