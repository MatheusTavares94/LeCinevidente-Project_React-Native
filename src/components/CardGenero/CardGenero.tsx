import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { genero } from "../../screens/PaginasDeFiltro/Generos"
import { styles } from "./CardGeneroStyles"

export interface CardGeneroProps {
   genero: genero
   selected: string[]
   setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export const CardGenero = ({ genero, selected, setSelected }) => {
   
   
   function addListaGenero() {
      setSelected([...selected, genero.id])
   }

   function retirarListaGenero() {
      const listaSemSelectedGenero = selected.filter(selected => selected !== genero.id)
      setSelected(listaSemSelectedGenero)
   }

   return (
      <TouchableOpacity
         style={selected.includes(genero.id) ? styles.cardContainerSelected : styles.cardContainer}
         onPress={selected.includes(genero.id) ? retirarListaGenero : addListaGenero}>
         <View>
            <Text style={styles.cardText}>{genero.name}</Text>
         </View>
      </TouchableOpacity>
   )
}
