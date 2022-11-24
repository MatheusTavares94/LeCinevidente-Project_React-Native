import React, { createContext, useEffect, useState } from 'react';
import { filmeSearchParam, FilmesDiscover, discoverMovies } from '../../services/api';

//import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProvedorListaProps {
    children: React.ReactNode
}

interface ListaContextoProps {
    listaDeFilmes: FilmesDiscover[];
    searchParams: filmeSearchParam;
    setSearchParams: React.Dispatch<React.SetStateAction<filmeSearchParam>>;
    setListaDeFilmes: React.Dispatch<React.SetStateAction<FilmesDiscover[]>>;
}

export const ListaContexto = createContext<ListaContextoProps>({
    listaDeFilmes: [{
        adult: null,
        backdrop_path: "",
        genre_ids: [],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: null,
        vote_average: 0,
        vote_count: 0,
    }],
    searchParams:{},
    setSearchParams: () => {},
    setListaDeFilmes: () => {}

});

export const ProvedorLista = ({children}: ProvedorListaProps ) => {
    const [searchParams, setSearchParams] = useState<filmeSearchParam>();
    const [listaDeFilmes, setListaDeFilmes] = useState<FilmesDiscover[]>([]);

    useEffect(()=>{
        discoverMovies(searchParams).then(res=>{
            console.log(res.data);
            setListaDeFilmes(res ? res.data.results : [])
        }).catch(err=>{
            console.log(err);
        })
    },[searchParams])   

    return (
        <ListaContexto.Provider
            value={{ searchParams, setSearchParams, listaDeFilmes, setListaDeFilmes}}>
            {children}
        </ListaContexto.Provider>
    )
};