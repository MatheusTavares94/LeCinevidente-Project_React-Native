import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({

    button: {
        alignContent: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 3,
        backgroundColor: themes.COLORS.Roxo.escuro,
},

    buttonText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        color: themes.COLORS.Roxo.maisClaro,
},
    
})