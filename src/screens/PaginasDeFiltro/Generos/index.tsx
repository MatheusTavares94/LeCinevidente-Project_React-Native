import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getGeneros } from "../../../services/api"
import Constants from "expo-constants"
import { CardGenero } from "../../../components/CardGenero/CardGenero"
import { styles } from "./styles"
import { ButtonGo } from "../../../components/ButtonGo"
import { Ano } from "../Anos"

export interface generos {
   id: string,
   name: string,
}

export const Generos = () => {


   const [generos, setGeneros] = useState<generos[]>([])

   function addGenres() {
      getGeneros()
         .then(res => {
            setGeneros(res.data.genres)

         })
         .catch(err => {
            console.log(err)
         })
   }

   useEffect(() => {
      addGenres()
   }, [])

   const [generosSelecionados, setGenerosSelecionados] = useState<[]>([])
   const [generoSelecionado, setGeneroSelecionados] = useState()

   // function selecionarGenero(id:string){
   //    let genero  = 
   //       setGenerosSelecionados([...generosSelecionados, generoSelecionado])
   // }


   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
         <Text style={styles.title}>Selecione os gêneros</Text>
         </View>
         <FlatList 
         
            style={styles.flatList}
            data={generos}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={item =>
               <CardGenero genero={item.item} />
            }
         />
          <View style={styles.buttonContainer}>
            <ButtonGo title={"Avançar"} next={"Ano"}/>
         </View>
      </View>
   )
}