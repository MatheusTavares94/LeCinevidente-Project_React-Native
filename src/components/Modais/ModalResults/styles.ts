import { StyleSheet } from 'react-native';
import themes from '../../../themes';

export const styles = StyleSheet.create({
    
    closeIcon: {
        tintColor: themes.COLORS.Roxo.maisClaro,
        height: 25,
        width: 25,
    },

    text: {
        color: themes.COLORS.Roxo.maisClaro,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 2
    },

    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055'
    },

    modalContainer: {
        backgroundColor: themes.COLORS.Roxo.escuro,
        flexDirection: "column",
        borderRadius: 10,
        padding: "5%",
        alignItems: "flex-start",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        maxHeight: "80%",
    },
   
})