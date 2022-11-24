import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
import themes from "../../../themes";

export const styles = StyleSheet.create({

  Container: {
    flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 30,
        width: Dimensions.get("screen").width,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: themes.COLORS.fundo,
  },

  Text: {
    paddingTop: 200,
    paddingHorizontal: 8,
    color: "white",
    fontSize: 25,
    textAlign: "center",
    borderRadius: 20
  },

  textInput: {
    marginTop: 40,
    padding: 10,
    alignSelf: "center",
    borderWidth: 8,
    borderColor: themes.COLORS.Roxo.medio,
    width: 250,
    backgroundColor: themes.COLORS.Roxo.maisClaro,
    borderRadius: 10
  },

  buttonContainer:{
    zIndex:0,
    position: 'absolute',
    right: 30,
    bottom: 30,
    
},


})