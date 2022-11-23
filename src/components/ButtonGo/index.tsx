import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { styles } from "./styles"
import { useNavigation } from '@react-navigation/native';

export const ButtonGo = ({next}) => {

    const nav = useNavigation();

    return (
        <TouchableOpacity
            
            style={styles.button}
             onPress = {()=>nav.navigate(next)}
             >
            <Text
                style={styles.buttonText}
            >
                GO
            </Text>
        </TouchableOpacity>
    )
}

