import React, { useContext, useState } from "react"
import { Text, TextInput, View } from "react-native"
import { ButtonGo } from "../../../components/ButtonGo"
import { ListaContexto } from "../../../context/listaContexto"
import { styles } from "./styles"

export const Ano = () => {
  const [ano, setAno] = useState<number>();

  const setSearchParam = useContext(ListaContexto).setSearchParams
  const searchParam = useContext(ListaContexto).searchParams

  function addYear() {
    setSearchParam({...searchParam, year: ano})
    console.log(ano)
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>
        digite o ano que deseja procurar
      </Text>


      <TextInput style={styles.textInput} keyboardType={"numeric"} maxLength={4}
        onChangeText={(ano) => setAno(parseInt(ano))} />

      <View style={styles.buttonContainer}>
        <ButtonGo title="Avançar" next={"OrderBy"} metodoExtra={addYear} />
      </View>

    </View>
  )

}


