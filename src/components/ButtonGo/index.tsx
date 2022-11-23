import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

interface ButtonGoProps extends TouchableOpacityProps{
   title: string;
   next?: string; 
}

export const ButtonGo = ({ title, next, ...resto }: ButtonGoProps,{} ) => {
   const nav = useNavigation()

   return (
      <TouchableOpacity style={styles.button} onPress={() => nav.navigate(next)}>
         <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
   )
}
