import React, { createContext, useState } from 'react';
import { listaFilmes } from '../../services/api';

//import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProvedorListaProps {
    children: React.ReactNode
}

interface ListaContextoProps {
    listaDeFilmes: listaFilmes[];
    salvaListaDeFilmes: (listaFilmes: listaFilmes[]) => void;
    removeFilmeDaLista: (index: string) => void;
}

export const ListaContexto = createContext<ListaContextoProps>({
    listaDeFilmes: [{
        index: "",
        name: "",
        url: "",
    }],
    salvaListaDeFilmes: (listaFilmes: listaFilmes[]) => { },
    removeFilmeDaLista: (index: string) => { },
});

export const ProvedorLista = ({children}: ProvedorListaProps ) => {
    const [listaDeFilmes, setListaDeFilmes] = useState<listaFilmes[]>([]);

    function salvaListaDeFilmes(listaFilmes: listaFilmes[]) {
        setListaDeFilmes(listaFilmes)
    }

    function removeFilmeDaLista(index: string) {
        let novaListaDeFilmes = listaDeFilmes.filter((filme) => {
            return filme.index !== index
        })

        setListaDeFilmes(novaListaDeFilmes);
    }

    return (
        <ListaContexto.Provider
            value={{ listaDeFilmes, salvaListaDeFilmes, removeFilmeDaLista }}
        >
            {children}
        </ListaContexto.Provider>
    )
}