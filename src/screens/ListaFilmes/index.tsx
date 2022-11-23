import React, { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native"
import { getPopularMovies } from "../../services/api"
import { CardFilme } from "../../components/CardFilme/CardFilme"
import Constants from "expo-constants"
import themes from "../../themes"

export const ListaFilmes = () => {

   return (
      <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, backgroundColor: themes.COLORS.fundo}}>
         <Text style={{color: themes.COLORS.Roxo.escuro}}>Oi, serei uma lista de filmes</Text>
      </View>
   )
}