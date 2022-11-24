import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getPopularMovies } from "../../services/api"
import { CardFilme } from "../../components/CardFilme/CardFilme"
import Constants from "expo-constants"
import themes from "../../themes"

export const FilmesPopulares = () => {
   const [filmesPopulares, setFilmesPopulares] = useState<[]>([])

   function oberFilmesLista() {
      getPopularMovies()
         .then(res => {
            setFilmesPopulares(res.data.results)
         })
         .catch(err => {
            console.log(err)
         })
   }

   useEffect(() => {
      oberFilmesLista()
   }, [])

   return (
      <View style={{ paddingTop: Constants.statusBarHeight, backgroundColor: themes.COLORS.fundo }}>
         <FlatList
            data={filmesPopulares}
            renderItem={({item}) => <CardFilme filme={item} />}
            //keyExtractor={item}
         />
      </View>
   )
}
