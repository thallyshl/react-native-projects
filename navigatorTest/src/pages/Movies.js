
import React from "react";
import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Cartaz from "./components/Cartaz";
import IndicatorLoading from "./components/IndicatorLoading";

const Main = styled.SafeAreaView `
    flex: 1;
    margin-top: 1px;
    background-color: #333;
    align-items: center;
    justify-content: center;    
`;
const ShowList = styled.FlatList `
    flex: 1;
    padding: 20px 0px 20px 20px;
`;
const Title = styled.Text `
    text-align: center;
    color: white;
    font-weight: bold;
    margin-top: 10px;
    font-size: 20px;
`;

export default () => {
    useEffect (
        () => { { loadingMoviesScreen () }},
        []
    )
    const [loading, setLoading] = useState (true);
    const [ movies, setMovies ] = useState ('');
    
    const loadingMoviesScreen = async () => {
        const req = await fetch ('https://api.b7web.com.br/cinema/');
        const json = await req.json();
        if(json) {
            setMovies(json);
            setLoading(false);
        }
    }


    return (

        <Main>
            {loading &&
                <IndicatorLoading />
            }

            {!loading &&
                <>
                    <Title>
                        Listagem de {movies.length} filmes.
                    </Title>
                    <ShowList
                        data={movies}
                        renderItem = {({item}) =>
                            <View>
                                <Text style = {styles.Text}>{item.titulo}/</Text>
                                <Cartaz data = {item} />    
                            </View> 
                            }
                        keyExtractor = {item => item.titulo}    
                    />
                </>
            }
        </Main>
    ); 
}

const styles = StyleSheet.create (
    {
        Text: {
            fontSize: 18,
            paddingBottom: 5,
            color: 'white',
            fontWeight: 'bold',
        }
    }
)

