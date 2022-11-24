import { StyleSheet } from 'react-native';
import themes from '../../themes';

export const styles = StyleSheet.create({

    botaoOrder: {
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.maisClaro,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderColor: themes.COLORS.Roxo.medio,
        borderWidth: 5
    },

    textoOpcao: {
        fontSize: 25,
        color: themes.COLORS.Roxo.escuro,
        textAlign: "center",
        margin: 20,
        marginBottom: 7
    },

    textoOrder: {
        textAlign: "center",
        fontSize: 20,
        color: "black"
    },
})