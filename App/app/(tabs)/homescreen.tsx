import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Barra de pesquisa */}
      <TextInput style={styles.searchBar} placeholder="Digite para pesquisar um produto" />
      
      {/* Banner */}
      <Image source={{ uri: 'https://via.placeholder.com/300x150' }} style={styles.banner} />
      
      {/* Botões de navegação */}
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Produtos por categoria</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.loginButton]}><Text style={styles.buttonText}>Já é cadastrado? Faça login</Text></TouchableOpacity>
      
      {/* Lista de marcas */}
      <Text style={styles.sectionTitle}>Nossas marcas</Text>
      <View style={styles.grid}>
        {['SÃO BRAZ', 'PIPPOS', 'Novomilho', 'Blend 53', 'GOSTOSIN', 'Nordestino', 'Brazitos', 'Scrusch', 'Torraditos', 'Powerlate', 'Tuffit', 'Gold Flakes'].map((brand, index) => (
          <View key={index} style={styles.brandBox}>
            <Text style={styles.brandText}>{brand}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#7B61FF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  brandBox: {
    width: '30%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  brandText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
