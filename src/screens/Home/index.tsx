import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import themes from "../../themes";

import Icon from '../../../assets/icon.png'


export const Home = ({ navigation: { navigate } }) => {

  return (
    <View style={styles.containerHome}>

      <View>
        <Text style={styles.Text}>
          bem-vind@!
          {'\n'}
          eu sou o olho que tudo vê.
          {'\n'}       
          diga-me suas preferências e te darei três referências...
        </Text>

        <FontAwesome style={styles.Icon} name="angle-double-down" size={100} color="white" />

        <TouchableOpacity activeOpacity={0.5} onPress={() => navigate("Streams")}>
          <Image source={Icon} style={styles.ImageButton} />
        </TouchableOpacity>
      </View>

    </View>

  )
}
