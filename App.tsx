import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProvedorLista } from './src/context/listaContexto';
import { Routes } from './src/routes';

function App() {

  return (
    <ProvedorLista>
      <Routes />
    </ProvedorLista>  
  )
}

export default App
