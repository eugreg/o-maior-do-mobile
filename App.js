import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks=[
    {fruta: "maça", caloria: 120},
    {fruta: "pera", caloria: 110},
    {fruta: "uva", caloria: 100},
    {fruta: "laranja", caloria: 130},
  ]
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={ tasks} renderItem={({ item }) => <Text>{item.fruta}-{item.caloria}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});