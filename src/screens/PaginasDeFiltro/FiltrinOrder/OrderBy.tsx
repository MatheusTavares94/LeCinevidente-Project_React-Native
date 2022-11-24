import React, { useState } from "react"
import { ButtonGo } from "../../../components/ButtonGo"
import { View, Text, FlatList } from "react-native"
import { CardOrderBy } from "../../../components/CardOrderBy/CardOrderBy"
import { styles } from "./styles"

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
      { id: "1", name: "popularidade", value: { asc: "+ pop", desc: "- pop" } },
      { id: "2", name: "nota média", value: { asc: ">", desc: "<" } },
   ])

   return (
      <View style={styles.container}>
         <View style={styles.titleContainer}>
            <Text style={styles.title}>Em que ordem deseja ver seu futuro?</Text>
         </View>

         <FlatList
            data={orderMethod}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardOrderBy orderMethod={item} selected={selectedMethod} setSelected={setSelectedMethod} />}
         />

         <View style={styles.buttonContainer}>
            <ButtonGo title="Descobrir seu futuro" next={"ListaScreen"} />
         </View>
      </View>
   )
}
