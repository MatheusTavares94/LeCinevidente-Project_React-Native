import React, { useContext, useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { CardFilme } from "../../components/CardFilme/CardFilme"
import { styles } from "./styles"
import { ListaContexto } from "../../context/listaContexto"

export const ListaFilmes = () => {

   const listaDeFilmes = useContext(ListaContexto).listaDeFilmes

   return (

      <View style={styles.container}>

         <View style={styles.titleContainer}>
            <Text style={styles.title}>Tcharam!!!</Text>
         </View>

         <View>
            <FlatList
               data={listaDeFilmes}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => <CardFilme /*onPress={() => handleModal(item.id)}*/ filme={item} />}
            />
         </View>

      </View>

   )
}