import React, { useEffect, useState } from "react"
import { ButtonGo } from "../../../components/ButtonGo"
import { View, Text, FlatList } from "react-native"
import { getStreams } from "../../../services/api"
import { CardStream } from "../../../components/CardStreams/CardStream"
import { styles } from "./styles"

interface ResponseGetStream {
   results: Stream[]
}

export interface Stream {
   display_priority: number
   logo_path: string
   provider_name: string
   provider_id: number
}

export const Streams = () => {
   const [streamSelected, setStreamSelected] = useState<number[]>([])
   const [listaStreams, setListaStreams] = useState<Stream[]>([])

   function obterStreams() {
      getStreams()
         .then(res => {
            setListaStreams(res.data.results)
         })
         .catch(err => {
            console.log(err)
         })
   }

   useEffect(() => {
      obterStreams()
   }, [])

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Escolha os seus Streams favoritos</Text>
         </View>

         <FlatList
            style={styles.flatList}
            data={listaStreams}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.provider_id.toString()}
            renderItem={({ item }) => (
               <CardStream stream={item} selected={streamSelected} setSelected={setStreamSelected} />
            )}
         />
         <View style={styles.buttonContainer}>
            <ButtonGo title="Avançar" next={"Generos"} />
         </View>
      </View>
   )
}
