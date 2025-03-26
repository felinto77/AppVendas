import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-Vindo ao SB Solutions</Text>
      <Link href="/(tabs)/homescreen" style={styles.button}>
        Ir para Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    padding: 20,
    color: '#fff',

  },
  button: {
    fontSize: 25,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red", 
    color: '#fff', 
  },
});
