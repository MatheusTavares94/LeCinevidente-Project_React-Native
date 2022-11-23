import React from "react"
import { Text, TouchableOpacity } from 'react-native'
import { styles } from "./styles"

export const ButtonGo = () => {

    return (
        <TouchableOpacity
            style={styles.button}
             >
            <Text
                style={styles.buttonText}
            >
                GO
            </Text>
        </TouchableOpacity>
    )
}

