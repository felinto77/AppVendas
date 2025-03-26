import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

// Dados completos das marcas e produtos
const brands = [
  
  {
    id: 1,
    name: "SÃO BRAZ",
    products: [
      { id: 1, name: "Café São Braz Tradicional 500g", price: 12.90 },
      { id: 2, name: "Café São Braz Extra Forte 500g", price: 14.50 },
      { id: 3, name: "Café São Braz Descafeinado 250g", price: 16.90 },
      { id: 4, name: "Café São Braz Gourmet 250g", price: 18.90 },
      { id: 5, name: "Café São Braz Orgânico 500g", price: 20.50 }
    ]
  },
  {
    id: 2,
    name: "PIPPOS",
    products: [
      { id: 6, name: "Pippos Queijo 200g", price: 3.90 },
      { id: 7, name: "Pippos Churrasco 200g", price: 4.50 },
      { id: 8, name: "Pippos Bacon 200g", price: 4.20 },
      { id: 9, name: "Pippos Pizza 200g", price: 5.10 },
      { id: 10, name: "Pippos Cheddar 200g", price: 3.80 }
    ]
  },
  {
    id: 3,
    name: "Novomilho",
    products: [
      { id: 11, name: "Fubá Novomilho Pacote 1kg", price: 5.90 },
      { id: 12, name: "Canjica Novomilho 500g", price: 6.50 },
      { id: 13, name: "Farinha de Milho Amarela 1kg", price: 7.20 },
      { id: 14, name: "Polenta Instantânea 500g", price: 8.10 },
      { id: 15, name: "Creme de Milho 200g", price: 4.80 }
    ]
  },
  {
    id: 4,
    name: "Blend 53",
    products: [
      { id: 16, name: "Café Blend 53 Tradicional 250g", price: 15.90 },
      { id: 17, name: "Café Blend 53 Extra Forte 500g", price: 28.50 },
      { id: 18, name: "Café Blend 53 Gourmet 250g", price: 22.90 },
      { id: 19, name: "Café Blend 53 Descafeinado 250g", price: 24.90 },
      { id: 20, name: "Café Blend 53 Orgânico 500g", price: 32.50 }
    ]
  },
  {
    id: 5,
    name: "GOSTOSIN",
    products: [
      { id: 21, name: "GOSTOSIN Chocolate 150g", price: 4.90 },
      { id: 22, name: "GOSTOSIN Morango 150g", price: 4.90 },
      { id: 23, name: "GOSTOSIN Baunilha 150g", price: 4.50 },
      { id: 24, name: "GOSTOSIN Limão 150g", price: 4.50 },
      { id: 25, name: "GOSTOSIN Integral 200g", price: 5.80 }
    ]
  },
  {
    id: 6,
    name: "Nordestino",
    products: [
      { id: 26, name: "Sei lá Nordestino 250g", price: 7.90 },
      { id: 27, name: "Não sei Nordestino 400g", price: 18.50 },
      { id: 28, name: "novo nordestino 200ml", price: 22.90 },
      { id: 29, name: "Nordestino velho 300g", price: 14.90 },
      { id: 30, name: "Farofa Nordestina 500g", price: 12.50 }
    ]
  },
  {
    id: 7,
    name: "Brazitos",
    products: [
      { id: 31, name: "Salgadinho Brazitos Queijo 100g", price: 3.90 },
      { id: 32, name: "Salgadinho Brazitos Bacon 100g", price: 3.90 },
      { id: 33, name: "Salgadinho Brazitos Churrasco 100g", price: 3.90 },
      { id: 34, name: "Salgadinho Brazitos Cebola 100g", price: 3.90 },
      { id: 35, name: "Salgadinho Brazitos Pimenta 100g", price: 3.90 }
    ]
  },
  {
    id: 8,
    name: "Scrusch",
    products: [
      { id: 36, name: "Batata Scrusch Tradicional 180g", price: 6.90 },
      { id: 37, name: "Batata Scrusch Churrasco 180g", price: 6.90 },
      { id: 38, name: "Batata Scrusch Cebola e salsa 180g", price: 6.90 },
      { id: 39, name: "Batata Scrusch Pimenta 180g", price: 6.90 },
      { id: 40, name: "Batata Scrusch Edição de colecionador limitada 180g", price: 6.90 }
    ]
  },
  {
    id: 9,
    name: "Torraditos",
    products: [
      { id: 41, name: "Torrada Torraditos Tradicional 200g", price: 5.90 },
      { id: 42, name: "Torrada Torraditos Integral 200g", price: 6.50 },
      { id: 43, name: "Torrada Torraditos Gergelim 200g", price: 7.20 },
      { id: 44, name: "Torrada Torraditos Alho 200g", price: 6.80 },
      { id: 45, name: "Torrada Torraditos Torrado 200g", price: 7.50 }
    ]
  },
  {
    id: 10,
    name: "Powerlate",
    products: [
      { id: 46, name: "Achocolatado Powerlate 400g", price: 9.90 },
      { id: 47, name: "Achocolatado Powerlate Zero 400g", price: 12.50 },
    ]
  },
  {
    id: 11,
    name: "Tuffit",
    products: [
      { id: 48, name: "Biscoito Tuffit Chocolate 150g", price: 5.90 },
      { id: 49, name: "Biscoito Tuffit Chocolate branco 150g", price: 5.90 },
    ]
  },
  {
    id: 12,
    name: "Gold Flakes",
    products: [
      { id: 50, name: "Cereal Gold Flakes Chocolate 300g", price: 14.90 },
      { id: 51, name: "Cereal Gold Flakes Integral 300g", price: 15.50 },
    ]
  }

];

const HomeScreen = () => {
  const [currentScreen, setCurrentScreen] = useState<"home" | "explore">("home");
  const [selectedBrand, setSelectedBrand] = useState<any>(null);

  const handleBrandPress = (brand: any) => {
    setSelectedBrand(brand);
    setCurrentScreen("explore");
  };

  if (currentScreen === "explore" && selectedBrand) {
    return <ExploreScreen brand={selectedBrand} onBack={() => setCurrentScreen("home")} />;
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput 
        style={styles.searchBar} 
        placeholder="Digite para pesquisar um produto" 
        placeholderTextColor="#999"
      />
      
      <Image 
        source={{ uri: 'https://via.placeholder.com/300x150' }} 
        style={styles.banner} 
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Produtos por categoria</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Já é cadastrado? Faça login</Text>
      </TouchableOpacity>
      
      <Text style={styles.sectionTitle}>Nossas marcas</Text>
      <View style={styles.grid}>
        {brands.map((brand) => (
          <TouchableOpacity
            key={brand.id}
            style={styles.brandBox}
            onPress={() => handleBrandPress(brand)}
          >
            <Text style={styles.brandText}>{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

//ExploreScreen incorporado
const ExploreScreen = ({ brand, onBack }: { brand: any; onBack: () => void }) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Voltar para marcas</Text>
      </TouchableOpacity>

      <Text style={styles.brandTitle}>{brand.name}</Text>

      {brand.products.map((product: any) => (
        <TouchableOpacity key={product.id} style={styles.productItem}>
          <View style={{ flex: 1 }}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
          <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
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
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#7B61FF',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  brandBox: {
    width: '48%',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  brandText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    textAlign: 'center',
  },
  backButton: {
    paddingVertical: 10,
    marginBottom: 15,
  },
  backButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  productName: {
    fontSize: 16,
    color: '#555',
    flexShrink: 1,
    marginRight: 10,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
});

export default HomeScreen;