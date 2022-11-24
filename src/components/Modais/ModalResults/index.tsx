import { View, Modal, Image, ModalProps, TouchableOpacity, ScrollView, Text } from "react-native"
import { styles } from "./styles"

import CloseIcon from "../../../assets/icons/closeIcon.png"
import themes from "../../../themes"
import { getMovieById } from "../../../services/api"
import { useState } from "react"

interface ModalResultsProps extends ModalProps {
   modal: boolean
   setModal: React.Dispatch<React.SetStateAction<boolean>>
   filmeId: number
}

interface FilmeDetalhadado {
   id: number
   adult: boolean
   backdrop_path: string
   belongs_to_collection: null
   budget: number
   status: string
   tagline: string
   title: string
   video: boolean
   vote_average: number
   vote_count: number
   homepage: string
   imdb_id: string
   original_language: string
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   revenue: number
   runtime: number
   genres: [
      {
         id: number
         name: string
      },
      {
         id: number
         name: string
      },
      {
         id: number
         name: string
      }
   ]
   production_companies: [
      {
         id: number
         logo_path: string
         name: string
         origin_country: string
      },
      {
         id: number
         logo_path: string
         name: string
         origin_country: string
      },
      {
         id: number
         logo_path: string
         name: string
         origin_country: string
      }
   ]
   production_countries: [
      {
         iso_3166_1: string
         name: string
      }
   ]
   spoken_languages: [
      {
         english_name: string
         iso_639_1: string
         name: string
      }
   ]
}

export const ModalResults = ({ modal, setModal, filmeId, ...rest }: ModalResultsProps) => {
   const [filmeFilme, setFilmeFilme] = useState<FilmeDetalhadado>()

   getMovieById(filmeId)
      .then(res => {
         setFilmeFilme(res.data)
         console.log(filmeFilme)
      })
      .catch(err => {
         console.log(err)
      })

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={modal}
         onRequestClose={() => {
            setModal(!modal)
         }}
         {...rest}>
            
         <TouchableOpacity style={styles.modal}>
            <View style={styles.modalContainer}>
               <View style={styles.IconContainer}>
                  <TouchableOpacity
                     style={{ padding: 3, backgroundColor: themes.COLORS.Roxo.escuro, borderRadius: 50 }}
                     onPress={() => setModal(!modal)}>
                     <Image style={styles.closeIcon} source={CloseIcon} />
                  </TouchableOpacity>
               </View>

               <View style={styles.headerContainer}>
                  <Image
                     style={styles.filmeImagem}
                     source={{ uri: "https://www.themoviedb.org/t/p/original" + filmeFilme.poster_path }}
                     resizeMode="cover"
                  />
                  <View style={styles.headerRight}>
                     <Text style={styles.text}> {filmeFilme.title} </Text>
                     <View>
                        {filmeFilme.genres.map(genre => {
                           return <Text style={styles.generos}>{genre.name}</Text>
                        })}
                     </View>
                  </View>
               </View>
               <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
            </View>
         </TouchableOpacity>
      </Modal>
   )
}
