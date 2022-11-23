import { StyleSheet } from "react-native"
import themes from "../../themes"

export const styles = StyleSheet.create({
   button: {
      alignContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 40,
      borderRadius: 100,
      borderColor: "white",
      borderWidth: 3,
      backgroundColor: themes.COLORS.Roxo.escuro,

      elevation: 8,
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowColor: "#000",
      shadowOpacity: 0.7,
      shadowRadius: 4.65,
   },

   buttonText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: themes.COLORS.Roxo.maisClaro,
   },
})
