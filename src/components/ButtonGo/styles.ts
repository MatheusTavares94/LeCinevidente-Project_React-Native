import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({

    button: {
        height: 80,
        width: 80,
        backgroundColor: themes.COLORS.Roxo.escuro,
        borderRadius: 15,
        alignContent: 'space-between',
},
    buttonText: {
        color: themes.COLORS.Roxo.maisClaro,
        fontSize: 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        
},
})