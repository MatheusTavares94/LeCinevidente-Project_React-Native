import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ButtonGo } from './src/components/ButtonGo';
import { ButtonHome } from './src/components/ButtonHome';
import { ProvedorLista } from './src/context/listaContexto';
import { Routes } from './src/routes';

function App() {

  return (
    <ProvedorLista>
      <StatusBar
        hidden={false}
        translucent={true}
        style={'light'}
      />
      <Routes />
    </ProvedorLista>  
  )
}

export default App
