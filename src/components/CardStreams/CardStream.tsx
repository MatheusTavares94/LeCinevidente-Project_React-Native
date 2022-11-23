import React from "react"
import { TouchableOpacity, Image } from "react-native"
import themes from "../../themes"
import { styles } from "./styles"

export const CardStream = ({ stream }) => {   

   return (
      <TouchableOpacity activeOpacity={0.8}>
         <Image
            source={{ uri: "https://www.themoviedb.org/t/p/original" + stream.logo_path }}
            style={styles.filmeImagem}
            resizeMode="contain"
         />
      </TouchableOpacity>
   )
}
