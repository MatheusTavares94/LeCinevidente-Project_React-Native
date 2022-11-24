import React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { OrderBy } from "../../screens/PaginasDeFiltro/FiltrinOrder/OrderBy"
import { styles } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"

export interface CardOrderByProps {
    orderMethod: OrderBy,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const CardOrderBy = ({ orderMethod, selected, setSelected }: CardOrderByProps) => {

    function selecionarOrderAsc() {
        setSelected(orderMethod.value.asc)
    }

    function selecionarOrderDesc() {
        setSelected(orderMethod.value.desc)
    }

    return (

        <View>
            {/* <Text style={styles.textoOpcao}>{orderMethod.name}</Text> */}

            <TouchableOpacity onPress={selecionarOrderAsc} style={styles.botaoOrder}>
                <Text style={styles.textoOrder}>{orderMethod.name}</Text>
                <MaterialIcons resizeMode="contain" name="arrow-upward" color={"black"} size={20} />
            </TouchableOpacity>

            <TouchableOpacity onPress={selecionarOrderDesc} style={styles.botaoOrder}>
                <Text style={styles.textoOrder}>{orderMethod.name}</Text>
                <MaterialIcons resizeMode="contain" name="arrow-downward" color={"black"} size={20} />
            </TouchableOpacity>
        </View>
    )
}