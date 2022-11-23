import { StyleSheet } from "react-native";
import themes from "../../themes";

export const styles = StyleSheet.create({

    button: {
        height: 500,
        width: 300,
        backgroundColor: themes.COLORS.Roxo.escuro,
        padding: 30,
        borderRadius: 15,
        marginBottom: 50,
        alignItems: 'flex-end'

    },

    buttonText: {
        color: themes.COLORS.Roxo.maisClaro,
        alignContent: 'flex-end',
        textAlign: 'center',
        fontSize: 70
    },

})
