import * as React from 'react';
import { View, Text, Image, props} from 'react-native';
import styles from './styles';

function fundoCorPrimaria(tipo){
    if(tipo=='Planta')
        return '#16a085';
    else if (tipo=='Venenoso')
        return '#574b90';
    else if (tipo=='Fogo')
        return '#ee5253';
    else if (tipo=='Voador')
        return '#3dc1d3';
    else if (tipo=='Água')
        return '#2980b9';
    else if (tipo=='Inseto')
        return '#78e08f';
    else if (tipo=='Psíquico')
        return '#7f8c8d';
    else if (tipo=='Normal')
        return '#878072';
    else if (tipo=='Elétrico')
        return '#f5cd79';
    else if (tipo=='Dragão')
        return '#f39c12';
    else if (tipo=='Gelo')
        return '#3dc1d3';
    else if (tipo=='Terra')
        return '#6c5d3e';
    else if (tipo=='Lutador')
        return '#7f8c8d';
    else if (tipo=='Pedra')
        return '#705a2b';
    else if (tipo=='Fantasma')
        return '#2f3640';
    else if (tipo=='Sombrio')
        return '#2c3e50';
    else if (tipo=='Fada')
        return '#f78fb3';
    else if (tipo=='Ferro')
        return '#ecf0f1';
    else
        return '3c6382'; 

}
function fundoCorSecundaria(tipo){
    if(tipo=='Planta')
        return '#1abc9c';
    else if (tipo=='Venenoso')
        return '#786fa6';
    else if (tipo=='Fogo')
        return '#ff6b6b';
    else if (tipo=='Voador')
        return '#63cdda';
    else if (tipo=='Água')
        return '#3498db';
    else if (tipo=='Inseto')
        return '#b8e994';
    else if (tipo=='Psíquico')
        return '#95a5a6';
    else if (tipo=='Normal')
        return '#b7ad98';
    else if (tipo=='Elétrico')
        return '#f7d794';
    else if (tipo=='Dragão')
        return '#f1c40f';
    else if (tipo=='Gelo')
        return '#63cdda';
    else if (tipo=='Terra')
        return '#a39068';
    else if (tipo=='Lutador')
        return '#95a5a6';
    else if (tipo=='Pedra')
        return '#b3934f';
    else if (tipo=='Fantasma')
        return '#34495e';
    else if (tipo=='Sombrio')
        return '#353b48';
    else if (tipo=='Fada')
        return '#f8a5c2';
    else if (tipo=='Ferro')
        return '#ecf0f1';
    else
        return 'ecf0f1';

}



export default function Card({props}) {
    return (

        <View style={[styles.card, {backgroundColor: fundoCorPrimaria(props.tipo1)}]}>
            <View style={styles.bar}>
                <View style={styles.info}>
                    <Text style={styles.numero}>#{props.numero}</Text>
                    <Text style={styles.nome}>{props.nome}</Text>
                </View>
                <View style={styles.tipoBloco}>
                    <View style={[styles.tipo1, {backgroundColor: fundoCorSecundaria(props.tipo1)}]}> 
                    <Text style={styles.tip}>{props.tipo1}</Text>
                    </View>
                    {props.tipo2 ?<View style={[styles.tipo2, {backgroundColor: fundoCorSecundaria(props.tipo2)}]}> 
                    <Text style={styles.tip}>{props.tipo2}</Text>
                    </View>:null}
                </View>

            </View>
            <View style={styles.imgPok}>
                <Image source={props.url} style={styles.imagemPokemon}/>
            </View>

        </View>

    );


}
