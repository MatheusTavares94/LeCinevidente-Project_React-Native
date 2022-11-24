import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialIcons } from "@expo/vector-icons"

import { SplashScreen } from "../screens/SplashScreen/SplashScreen"
import { Home } from "../screens/Home"
import { ListaFilmes } from "../screens/ListaFilmes"
import { FilmesPopulares } from "../screens/FilmesPopulares"
import { Streams } from "../screens/PaginasDeFiltro/FiltrinStreams/Streams"
import { Generos } from "../screens/PaginasDeFiltro/Generos"

const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootTabParamList = {
   Home: undefined
   Lista: undefined
   Populares: undefined
}

export type RootStackParamList = {
   SplashScreen: undefined
   HomeScreen: undefined
   Genero: undefined
   Streams: undefined
   Generos: undefined
   Decada: undefined
   Pais: undefined
   OrderBy: undefined
}

const TabNavigator = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "rgba(172,134,255,255)", //cor do ícone selecionado
            tabBarInactiveTintColor: "rgba(223,210,254,255)", //cor do ícone não selecionado
            tabBarInactiveBackgroundColor: "#000",
            tabBarStyle: { backgroundColor: "#000", paddingBottom: 7, paddingTop: 5, height: 60 },
         }}>
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons resizeMode="contain" name="home" color={color} size={30} />
               },
            }}
         />

         <Tab.Screen
            name="Lista"
            component={ListaFilmes}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons resizeMode="contain" name="list" color={color} size={30} />
               },
            }}
         />

         <Tab.Screen
            name="Populares"
            component={FilmesPopulares}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons resizeMode="contain" name="star" color={color} size={30} />
               },
            }}
         />
      </Tab.Navigator>
   )
}

const StackNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
         <Stack.Screen name="SplashScreen" component={SplashScreen} />
         <Stack.Screen name="HomeScreen" component={TabNavigator} />
         <Stack.Screen name="Streams" component={Streams}/>
         <Stack.Screen name="Generos" component={Generos}/>
         {/*<Stack.Screen name="Decada" component={}/>
         <Stack.Screen name="Pais" component={}/>
         <Stack.Screen name="OrderBy" component={}/> */}
      </Stack.Navigator>
   )
}

export function Routes() {
   return (
      <NavigationContainer>
         <StackNavigator />
      </NavigationContainer>
   )
}
