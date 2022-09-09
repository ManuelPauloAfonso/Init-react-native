import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Meucomponente from './Meucomponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu app</Text>

      <ScrollView>
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
        <Meucomponente />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,

  },
  title: {
    color: '#fff',
    fontSize: 24,
    
  }
});
