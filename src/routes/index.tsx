import React from 'react';
import { Home } from '../screens/Home';
import { ListaFilmes } from '../screens/ListaFilmes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList = {
    Home: undefined;
    Lista: undefined;
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "rgba(223,210,254,255)", //cor do ícone selecionado
                tabBarInactiveTintColor: "rgba(172,134,255,255)", //cor do ícone não selecionado
                tabBarInactiveBackgroundColor: "#000",
                tabBarStyle: { backgroundColor: "#000", paddingBottom: 2 }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialIcons
                                resizeMode="contain"
                                name="home"
                                color={color}
                                width={30}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Lista"
                component={ListaFilmes}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <MaterialIcons
                                name="list"
                                color={color}
                            />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export function Routes() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}