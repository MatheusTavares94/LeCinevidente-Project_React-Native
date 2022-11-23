import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./style";

import Icon from '../../../assets/icon.png'


export const Home = () => {

  return (
    <View>

      <View>
        <AntDesign style={styles.iconBack} name="stepbackward" size={40} color="white" />
      </View>

      <View>
        <Text style={styles.Text}>
          Vamos encontrar um filme para ver???
        </Text>

        <FontAwesome style={styles.Icon} name="angle-double-down" size={100} color="white"/>

        <TouchableOpacity activeOpacity={0.5}>
          <Image source={Icon} style={styles.ImageButton}/>
        </TouchableOpacity>
        
      </View>
    </View>

  )
}
