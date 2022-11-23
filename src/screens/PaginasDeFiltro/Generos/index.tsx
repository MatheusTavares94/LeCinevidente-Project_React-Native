import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getGeneros } from "../../../services/api"
import Constants from "expo-constants"
import { CardGenero } from "../../../components/CardGenero/CardGenero"
import { styles } from "./styles"

export  interface generos {
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

  

   return (
      <View style={styles.Container}>
        <Text>Selecione os gêneros</Text>
         <FlatList         
            data={generos}
            keyExtractor={(item) => item.id}
            renderItem={item => 
            <CardGenero genero={item.item} />
            }            
         />
      </View>
   )
}