import React from "react"
import Lottie from "lottie-react-native"
import { View } from "react-native"
import { styles } from "./styles"

export const SplashScreen = ({ navigation: { navigate } }) => {
   return (
      <View style={styles.container}>
         <Lottie
            autoPlay
            source={require("../../assets/leCineSplashScreen.json")}
            onAnimationFinish={() => navigate("HomeScreen")}
            loop={false}
         />
      </View>
   )
}
