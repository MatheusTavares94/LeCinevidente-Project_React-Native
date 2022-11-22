import Lottie from "lottie-react-native"
import React from "react"
import { View } from "react-native"
import { styles } from "./styles"

export const SplashScreen = () => {
   return (
      <View style={styles.container}>
         <Lottie autoPlay source={require("../../assets/leCineSplashScreen.json")} loop={true} />
      </View>
   )
}
