import React from "react"
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Filme } from "../../screens/FilmesPopulares"
import { styles } from './styles'

interface CardFilmeProps extends TouchableOpacityProps{
   filme: Filme
}

export const CardFilme = ({ filme, ...rest }:CardFilmeProps) => {
   return (
      <TouchableOpacity {...rest } activeOpacity={0.5} style={styles.filmeBox}>
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
