import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { styles } from "./styles"

export const ButtonHome = () => {

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                I WANT TO PLAY A GAME
            </Text>
        </TouchableOpacity>
    )
}

