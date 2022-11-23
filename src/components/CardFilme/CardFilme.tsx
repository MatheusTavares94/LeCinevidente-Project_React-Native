import React from "react"
import { View, Text, Image } from "react-native"
import themes from "../../themes"

export const CardFilme = ({ filme }) => {   

   return (
      <View
         style={{
            marginVertical: 10,
            marginHorizontal: 30,
            padding: 10,
            backgroundColor: themes.COLORS.Roxo.medio,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
         }}>
         <Image
            source={{ uri: "https://www.themoviedb.org/t/p/original" + filme.poster_path }}
            style={{ width: 100, height: 100, borderRadius: 15, marginRight: 20, backgroundColor: themes.COLORS.Roxo.escuro }}
            resizeMode="cover"
         />
         <View>
            <Text style={{ textAlign: "right", fontSize: 18 }}>
               {filme.title}
            </Text>
         </View>
      </View>
   )
}
