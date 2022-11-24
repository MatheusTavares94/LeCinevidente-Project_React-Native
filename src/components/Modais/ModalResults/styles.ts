import { StyleSheet } from 'react-native';
import themes from '../../../themes';

export const styles = StyleSheet.create({
    
    IconContainer:{
        width: "100%",
        alignItems: 'flex-end',
    },

    closeIcon: {
        height: 25,
        width: 25,
        marginBottom: 10,
        tintColor: themes.COLORS.Roxo.maisClaro,
    },

    text: {
        color: themes.COLORS.Roxo.maisClaro,
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 2
    },

    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerRight:{
        paddingVertical: 5
    },
    generos:{
        justifyContent: 'space-between'
    },

    filmeImagem: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 20,
        backgroundColor: themes.COLORS.Roxo.escuro,
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
        alignItems: "center",
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