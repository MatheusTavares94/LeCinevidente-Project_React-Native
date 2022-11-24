import React from "react"
import { TouchableOpacity, Image } from "react-native"
import { Stream } from "../../screens/PaginasDeFiltro/FiltrinStreams/Streams"
import { styles } from "./styles"


export interface CardStreamProps{
   stream: Stream
   selected: string[]
   setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export const CardStream = ({ stream, selected, setSelected }: CardStreamProps) => {   

   function addListaStream(){
      setSelected([...selected, stream.provider_id.toString()])
   }

   function retirarListaStream(){
      const listaSemSelectedStream = selected.filter(selected => selected !== stream.provider_id.toString())
      setSelected(listaSemSelectedStream);
   }

   return (
      <TouchableOpacity activeOpacity={0.8} onPress={selected.includes(stream.provider_id.toString()) ? retirarListaStream : addListaStream}>
         <Image
            source={{ uri: "https://www.themoviedb.org/t/p/original" + stream.logo_path }}
            style={selected.includes(stream.provider_id.toString()) ? styles.streamIconSelected : styles.streamIcon}
            resizeMode="contain"
         />
      </TouchableOpacity>
   )
}
