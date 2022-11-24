import { StyleSheet } from "react-native";
import Constants from "expo-constants"
import themes from "../../themes";

export const styles = StyleSheet.create({

  containerHome: {
    backgroundColor: themes.COLORS.fundo,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    flex: 1
  },

  Text: {
    display: "flex",
    marginTop: 80,
    textAlign: "center",
    fontSize: 28,
    color: "white",
    padding: 20,
    paddingHorizontal: 20
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