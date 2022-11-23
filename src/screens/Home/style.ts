import { StyleSheet } from "react-native";
import Constants from "expo-constants"

export const styles = StyleSheet.create({

  iconBack: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    marginLeft: 300
  },

  Text: {
    display: "flex",
    marginTop: 10,
    textAlign: "center",
    fontSize: 28,
    color: "white",
    padding: 20
  },

  Icon: {
    alignSelf: "center",
  },

  ImageButton: {
   resizeMode: "contain",
   width: 400,
   alignSelf: "center",
   marginTop: -50
  }
  
})