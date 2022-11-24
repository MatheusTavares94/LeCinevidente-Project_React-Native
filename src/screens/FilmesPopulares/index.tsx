import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getPopularMovies } from "../../services/api"
import { CardFilme } from "../../components/CardFilme/CardFilme"
import Constants from "expo-constants"
import themes from "../../themes"
import { ModalResults } from "../../components/Modais/ModalResults"


interface ResponseFilmesPop {
   "page": number,
   "total_results": number,
   "total_pages": number,
  "results": Filme[]
}

export interface Filme{
   "id": number,
   "adult": boolean,
   "backdrop_path": string,
   "genre_ids": number[],
   "original_language": string,
   "original_title": string,
   "overview": string,
   "popularity": number,
   "poster_path": string,
   "release_date": string,
   "title": string,
   "video": boolean,
   "vote_average": number,
   "vote_count": number,
 }

export const FilmesPopulares = () => {
   const [filmesPopulares, setFilmesPopulares] = useState<Filme[]>([])

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
            keyExtractor={item => item.id.toString()}
         />
      </View>
   )
}

// {
//    modal &&
//       <ModalResults
//          index={indexSelecionado}
//          modal={modal}
//          setModal={setModal}
//    />
// }