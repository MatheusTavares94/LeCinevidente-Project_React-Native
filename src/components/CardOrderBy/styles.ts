import { StyleSheet } from 'react-native';
import themes from '../../themes';

export const styles = StyleSheet.create({

    botaozinOrder: {
        padding: 10,
        backgroundColor: themes.COLORS.Roxo.medio,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderColor: "#fff",
        borderWidth: 2
    },

    textin: {
        fontSize: 20,
        color: themes.COLORS.Roxo.maisClaro,
        textAlign: "center", 
        margin: 30,
    },

    textinOrder: {    
        textAlign: "center",    
        fontSize: 20,
        color: "white"
    },
})