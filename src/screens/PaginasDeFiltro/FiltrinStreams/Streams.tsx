import React, { useContext, useEffect, useState } from "react"
import { ButtonGo } from "../../../components/ButtonGo"
import { View, Text, FlatList } from "react-native"
import { getStreams } from "../../../services/api"
import { CardStream } from "../../../components/CardStreams/CardStream"
import { styles } from "./styles"
import { ListaContexto } from "../../../context/listaContexto"

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
   const [listaStreams, setListaStreams] = useState<Stream[]>([])
   const [streamSelected, setStreamSelected] = useState<string[]>([])
   const setSearchParam = useContext(ListaContexto).setSearchParams
   const searchParam = useContext(ListaContexto).searchParams

   function obterStreams() {
      getStreams()
         .then(res => {
            setListaStreams(res.data.results)
         })
         .catch(err => {
            console.log(err)
         })
   }

   function addStream(){
      setSearchParam({...searchParam, with_watch_providers: streamSelected.toString()})
   }

   useEffect(() => {
      obterStreams()      
   }, [])

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>selecione seus streams favoritos</Text>
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
            <ButtonGo title="Avançar" next={"Generos"} metodoExtra={addStream}/>
         </View>
      </View>
   )
}
