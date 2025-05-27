import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { FAB, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const API_URL = 'http://192.168.1.64:3000';


export default function HomeScreen() {
  const [insects, setInsects] = useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/insects`);
      const data = await res.json();
      setInsects(data);
    } catch (err) {
      console.error('Erro ao buscar insetos:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    // Recarrega a lista quando voltar da tela de detalhe
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);


  return (
    <View style={styles.container}>
      <FlatList
        data={insects}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card 
            style={styles.card}
            onPress={() => navigation.navigate('InsetoDetalhe', { insectId: item._id })}
          >
            <Card.Content>
              <Title>{item.commonName}</Title>
              <Paragraph>{item.scientificName}</Paragraph>
            </Card.Content>
            {item.photo && (
              <Card.Cover source={{ uri: `${API_URL}/${item.photo}` }} style={styles.image} />
            )}
          </Card>
        )}
      />
      <FAB icon="plus" style={styles.fab} onPress={() => navigation.navigate('Adicionar Inseto')} />
      <FAB icon="map" style={styles.mapButton} onPress={() => navigation.navigate('Mapa')} />
    </View>
  );
}