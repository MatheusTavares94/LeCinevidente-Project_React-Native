import React, { useContext, useState } from "react"
import { ButtonGo } from "../../../components/ButtonGo"
import { View, Text, FlatList } from "react-native"
import { CardOrderBy } from "../../../components/CardOrderBy/CardOrderBy"
import { styles } from "./styles"
import { ListaContexto } from "../../../context/listaContexto"

export interface OrderBy {
   id: string
   name: string
   value: {
      asc: string
      desc: string
   }
}

export const OrderBy = () => {
   const [selectedMethod, setSelectedMethod] = useState<string>()
   const [orderMethod, setOrderMethod] = useState<OrderBy[]>([
      { id: "1", name: "Popularidade", value: { asc: "popularity.asc", desc: "popularity.desc" } },
      { id: "2", name: "Nota Média", value: { asc: "vote_average.asc", desc: "vote_average.desc" } },
   ])
   const setSearchParam = useContext(ListaContexto).setSearchParams
   const searchParam = useContext(ListaContexto).searchParams

   function addOrderBy() {
      setSearchParam({ ...searchParam, sort_by: selectedMethod })
   }

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>em que ordem deseja ver seu futuro?</Text>
         </View>

         <FlatList
            data={orderMethod}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardOrderBy orderMethod={item} selected={selectedMethod} setSelected={setSelectedMethod} />}
         />

         <View style={styles.buttonContainer}>
            <ButtonGo title="Descobrir seu futuro" next={"ListaScreen"} metodoExtra={addOrderBy} />
         </View>
      </View>
   )
}
function setSearchParam(arg0: any) {
   throw new Error("Function not implemented.")
}