import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialIcons } from "@expo/vector-icons"

import { Home } from "../screens/Home"
import { ListaFilmes } from "../screens/ListaFilmes"
import { FilmesPopulares } from "../screens/FilmesPopulares"
import { SplashScreen } from "../screens/SplashScreen/SplashScreen"

const Tab = createBottomTabNavigator<RootTabParamList>()
const Stack = createNativeStackNavigator<RootStackParamList>()

export type RootTabParamList = {
   Home: undefined
   Lista: undefined
   Populares: undefined;
}

export type RootStackParamList = {
   SplashScreen: undefined
   HomeScreen: undefined
}

const TabNavigator = () => {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "rgba(223,210,254,255)", //cor do ícone selecionado
            tabBarInactiveTintColor: "rgba(172,134,255,255)", //cor do ícone não selecionado
            tabBarInactiveBackgroundColor: "#000",
            tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 },
         }}>
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons resizeMode="contain" name="home" color={color} width={30} />
               },
            }}
         />

         <Tab.Screen
            name="Lista"
            component={ListaFilmes}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons name="list" color={color} />
               },
            }}
         />

         <Tab.Screen
            name="Populares"
            component={FilmesPopulares}
            options={{
               tabBarIcon: ({ color }) => {
                  return <MaterialIcons name="elderly" color={color} />
               },
            }}
         />
      </Tab.Navigator>
   )
}

const StackNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         {/* <Stack.Screen name='SplashScreen' component={SplashScreen}  /> */}
         <Stack.Screen name="HomeScreen" component={TabNavigator} />
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
