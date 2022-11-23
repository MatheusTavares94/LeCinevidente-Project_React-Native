import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from './styles'

export const CardFilme = ({ filme }) => {

   return (
      <TouchableOpacity activeOpacity={0.5} style={styles.filmeBox}>
         <Image
            source={{ uri: "https://www.themoviedb.org/t/p/original" + filme.poster_path }}
            style={styles.filmeImagem}
            resizeMode="cover"
         />
         <View>
            <Text style={styles.filmeTitulo}>
               {filme.title}
            </Text>
         </View>
      </TouchableOpacity>
   )
}
