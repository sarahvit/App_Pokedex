import * as React from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import styles from './styles';
import Card from './Card';
import {POKEMON} from './Bancodedados';


export default function Pokedex() { 
    return(
            <ScrollView>
                    <View style={styles.container}>
                            <Text style={styles.titulo}>POKEAGENDA</Text>
                            <Text style={styles.bannerTexto}>A Pokédex palavra comum no vocabulário dos amantes de Pokémon é uma enciclopédia virtual que detém todas as espécies de pokémon.</Text>
                            {POKEMON.map(item =>
                                <TouchableOpacity key={item.numero}>
                                    <Card props={item}/>
                                </TouchableOpacity>
                            )}
                        </View>
            </ScrollView>
    );

}
