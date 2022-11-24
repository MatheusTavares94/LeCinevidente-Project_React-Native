import React from "react"
import { Text } from "react-native"
import { OrderBy } from "../../screens/PaginasDeFiltro/FiltrinOrder/OrderBy"

interface CardOrderByProps{
    orderMethod: OrderBy,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}
 
 export const CardOrderBy = ({orderMethod, selected, setSelected}: CardOrderByProps) => { 
    return(
        <Text>{orderMethod.name}</Text>
    )
}