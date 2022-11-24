import React from "react"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../../routes"

interface ButtonGoProps extends TouchableOpacityProps {
   title: string;
   metodoExtra:() => void;
   next?: "SplashScreen" | 
   "HomeScreen" | 
   "Generos" | 
   "Streams" | 
   "Ano" | 
   "OrderBy"|
   "ListaScreen";
}



type AuthScreenProp = NativeStackNavigationProp<RootStackParamList, "SplashScreen">

export const ButtonGo = ({ title, next, metodoExtra, ...resto }: ButtonGoProps) => {
   const nav = useNavigation<AuthScreenProp>()
   
   function handleFazerCoisas(){
      nav.navigate(next)
      metodoExtra()
   }

   return (
      <TouchableOpacity style={styles.button} onPress={handleFazerCoisas} {...resto}>
         <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
   )
}
