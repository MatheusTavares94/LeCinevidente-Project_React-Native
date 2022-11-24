import { StyleSheet } from 'react-native';
import themes from '../../themes';

export const styles = StyleSheet.create({

    streamIcon: {
        width: 100,
        height: 100,
        margin: 20,
        borderRadius: 15,
        borderColor: themes.COLORS.Roxo.medio,
        borderWidth: 10,
    },

    streamIconSelected:{
        width: 105,
        height: 105,
        margin: 20,
        borderRadius: 15,
        borderColor: themes.COLORS.Roxo.maisClaro,
        borderWidth: 10,
    }
})