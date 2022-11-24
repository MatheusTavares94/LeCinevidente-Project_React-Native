import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { OrderBy } from "../../screens/PaginasDeFiltro/FiltrinOrder/OrderBy"
import { styles } from "./styles"

export interface CardOrderByProps {
    orderMethod: OrderBy,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const CardOrderBy = ({ orderMethod, selected, setSelected }: CardOrderByProps) => {
    return (

        <View>
            <Text style={styles.textin}>{orderMethod.name}</Text>

            <TouchableOpacity style={styles.botaozinOrder}>
                <Text style={styles.textinOrder}>{orderMethod.value.asc}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaozinOrder}>
                <Text style={styles.textinOrder}>{orderMethod.value.desc}</Text>
            </TouchableOpacity>
        </View>
    )
}