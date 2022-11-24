import React, { useState } from "react"
import { Text, TextInput, View } from "react-native"
import { ButtonGo } from "../../../components/ButtonGo"
import { styles } from "./styles"

export const Ano = () => {
  const [ano, setAno] = useState<number>();

  function enviaAno() {
    
    console.log(ano)
  }

  return (
      <View style={styles.Container}>
          <Text style={styles.Text}>
            Digite o ano que deseja procurar
          </Text>

        
          <TextInput style={styles.textInput} keyboardType={"numeric"} maxLength={4}
          onChangeText={(ano) => setAno(parseInt(ano))}/>

          <View style={styles.buttonContainer}>
            <ButtonGo title="Avançar" next={"OrderBy"} />
         </View>
      
      </View>
  )

}


