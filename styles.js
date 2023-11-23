import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

   
        container: {
          flex: 1,
          backgroundColor: '#f1f1f1',
          alignItems: 'center',
          justifyContent: 'top',
        },
        titulo: {
          fontSize: 50,
          color: '#111',
          fontWeight: 'bold',
          marginTop: 40,
        },
      
      

    card: {
        
        width: 350,
        padding: 10,
        marginTop: 15,
        borderRadius: 8,
        flexDirection: 'row',
        height: 140,
    },
    bar: {
        flexDirection: 'colum',
        height: 120,
        width: 210,
       
    },
    info:{
        height: 85,
        width: 210,
        
    },
    tipoBloco:{
        height: 35,
        width: 210,
    
        flexDirection: 'row',
    },
    tipo1:{
       paddingTop: 2,
       paddingBottom: 2,
       paddingLeft: 10,
       paddingRight: 10, 
        backgroundColor: '#111',
        fontSize: 12,
        color: '#fff',
        borderRadius: 5,
        height: 21,
        marginRight: 5,
    },
    tipo2:{
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10, 
         backgroundColor: '#111',
         fontSize: 12,
         color: '#fff',
         borderRadius: 5,
         height: 21,
    },

    tip:{
        fontSize: 12,
        color: '#fff',
    },
    imgPok: {
        width: 120,
        
        height: 120,
    },
    imagemPokemon:{
        width: 110,
        height: 110,
        alignItems: "center",    

    },
    numero: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f3f3f3',
    },
    nome: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 0,

    },
    bannerTexto: {
        fontSize: 13,
        color: '#333',
        marginLeft: 10,
        marginTop: 20,

    },

});

    export default styles;