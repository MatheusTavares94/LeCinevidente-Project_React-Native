import React from "react"
import { TouchableOpacity, Image } from "react-native"
import { Stream } from "../../screens/PaginasDeFiltro/FiltrinStreams/Streams"
import { styles } from "./styles"


export interface CardStreamProps{
   stream: Stream
   selected: number[]
   setSelected: React.Dispatch<React.SetStateAction<number[]>>
}

export const CardStream = ({ stream, selected, setSelected }: CardStreamProps) => {   

   function addListaStream(){
      setSelected([...selected, stream.provider_id])
   }

   function retirarListaStream(){
      const listaSemSelectedStream = selected.filter(selected => selected !== stream.provider_id)
      setSelected(listaSemSelectedStream);
   }

   return (
      <TouchableOpacity activeOpacity={0.8} onPress={selected.includes(stream.provider_id) ? retirarListaStream : addListaStream}>
         <Image
            source={{ uri: "https://www.themoviedb.org/t/p/original" + stream.logo_path }}
            style={selected.includes(stream.provider_id) ? styles.streamIconSelected : styles.streamIcon}
            resizeMode="contain"
         />
      </TouchableOpacity>
   )
}
