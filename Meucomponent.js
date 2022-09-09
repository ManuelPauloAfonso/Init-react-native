import React from "react"
import { StyleSheet, Text, View } from 'react-native';



export default function Meucomponente(){
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}> React Native </Text>
            <Text style={styles.cardSubtitle}>Criando Aplicações para adroind ios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 3,
      marginVertical: 7,
        
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold'
  
    },
    cardSubtitle: {
      fontSize: '#999',
      fontSize: 14,
  
    }
  });
  