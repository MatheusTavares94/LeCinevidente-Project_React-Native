import React from "react"
import {
   useFonts,
   DancingScript_400Regular,
   DancingScript_500Medium,
   DancingScript_600SemiBold,
   DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script"
import {
   JosefinSans_100Thin,
   JosefinSans_200ExtraLight,
   JosefinSans_300Light,
   JosefinSans_400Regular,
   JosefinSans_500Medium,
   JosefinSans_600SemiBold,
   JosefinSans_700Bold,
   JosefinSans_100Thin_Italic,
   JosefinSans_200ExtraLight_Italic,
   JosefinSans_300Light_Italic,
   JosefinSans_400Regular_Italic,
   JosefinSans_500Medium_Italic,
   JosefinSans_600SemiBold_Italic,
   JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans"

export default {
   COLORS: {
      Roxo: {
         maisClaro: "rgba(223,210,254,255)",
         medio: "rgba(172,134,255,255)",
         escuro: "rgba(114,91,162,255)",
      },

      fundo: "#3E3C42",
   },

   FONTS: {
      DancingScript: {
         Regular: "DancingScript_400Regular",
         Medium: "DancingScript_500Medium",
         SemiBold: "DancingScript_600SemiBold",
         Bold: "DancingScript_700Bold",
      },

      JosefinSans: {
         Thin: "JosefinSans_100Thin",
         ExtraLight: "JosefinSans_200ExtraLight",
         Light: "JosefinSans_300Light",
         Regular: "JosefinSans_400Regular",
         Medium: "JosefinSans_500Medium",
         SemiBold: "JosefinSans_600SemiBold",
         Bold: "JosefinSans_700Bold",
      },

      JosefinSans_Italic: {
         Thin: "JosefinSans_100Thin_Italic",
         ExtraLight: "JosefinSans_200ExtraLight_Italic",
         Light: "JosefinSans_300Light_Italic",
         Regular: "JosefinSans_400Regular_Italic",
         Medium: "JosefinSans_500Medium_Italic",
         SemiBold: "JosefinSans_600SemiBold_Italic",
         Bold: "JosefinSans_700Bold_Italic",
      },
   }
}
