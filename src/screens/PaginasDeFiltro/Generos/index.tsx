import React, { useContext, useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getGeneros } from "../../../services/api"
import { CardGenero } from "../../../components/CardGenero/CardGenero"
import { styles } from "./styles"
import { ButtonGo } from "../../../components/ButtonGo"
import { ListaContexto } from "../../../context/listaContexto"

export interface genero {
   id: string,
   name: string,
}

export const Generos = () => {
   const setSearchParam = useContext(ListaContexto).setSearchParams
   const searchParam = useContext(ListaContexto).searchParams
   const [generos, setGeneros] = useState<genero[]>([])
   const [generosSelecionados, setGenerosSelecionados] = useState<string[]>([])


   function addGenres() {
      getGeneros()
         .then(res => {
            setGeneros(res.data.genres)

         })
         .catch(err => {
            console.log(err)
         })
   }

   function addGenerosParam(){
      setSearchParam({...searchParam, with_genres: generosSelecionados.toString()})
   }

   useEffect(() => {
      addGenres()
   }, [])

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>selecione seus gêneros favoritos</Text>
         </View>

         <FlatList
            style={styles.flatList}
            data={generos}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>
               <CardGenero genero={item} selected={generosSelecionados} setSelected={setGenerosSelecionados} />
            }
         />

         <View style={styles.buttonContainer}>
            <ButtonGo title={"Avançar"} next={"Ano"} metodoExtra={addGenerosParam} />
         </View>
      </View>
   )
}