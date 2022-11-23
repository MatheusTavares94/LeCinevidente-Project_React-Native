import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import themes from "../../themes"
import { styles } from "./CardGeneroStyles";

export const CardGenero = ({ genero }) => {          
    
   return (
      <TouchableOpacity
      style={styles.cardContainer}>        
         <View>
            <Text style={styles.cardText}>
               {genero.name}               
            </Text>
         </View>
      </TouchableOpacity>
   )
}
