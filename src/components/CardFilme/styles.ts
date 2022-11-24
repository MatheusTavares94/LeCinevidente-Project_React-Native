import { StyleSheet } from 'react-native';
import { textChangeRangeNewSpan } from 'typescript';
import themes from '../../themes';

export const styles = StyleSheet.create({

    filmeBox: {
        marginVertical: 10,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.medio,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    filmeImagem: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 20,
        backgroundColor: themes.COLORS.Roxo.escuro,
    },
    
    filmeTitulo: {
        textAlign: "left",
        fontSize: 18,
        color: "#000",
        width: 200,
        backgroundColor: "red"
    },
})