import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>minha lista de tarefa </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    padding: 20,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 20,
  },

});
