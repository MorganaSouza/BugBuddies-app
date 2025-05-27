import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from '../styles/styles';

const API_URL = 'http://192.168.1.64:3000';

export default function InsetoDetalheScreen({ route, navigation }) {
  const { insectId } = route.params;
  const [insect, setInsect] = useState(null);
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');

  const fetchInsect = async () => {
    try {
      const res = await fetch(`${API_URL}/insects/${insectId}`);

      if (!res.ok) {
        // tenta ler o texto da resposta para ajudar no debug
        const text = await res.text();
        throw new Error(`Erro na resposta: ${res.status} - ${text}`);
      }

      const data = await res.json();
      setInsect(data);
      setCommonName(data.commonName);
      setScientificName(data.scientificName);
    } catch (error) {
      Alert.alert('Erro ao buscar inseto', error.message);
      console.error('Erro ao buscar inseto:', error);
    }
  };

  useEffect(() => {
    fetchInsect();
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/insects/${insectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commonName, scientificName }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Erro ao atualizar inseto: ${res.status} - ${text}`);
      }
      Alert.alert('Inseto atualizado com sucesso!');
      fetchInsect();
    } catch (error) {
      Alert.alert('Erro ao atualizar inseto', error.message);
      console.error('Erro ao atualizar inseto:', error);
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Confirmação',
      'Deseja realmente apagar este inseto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: async () => {
            try {
              const res = await fetch(`${API_URL}/insects/${insectId}`, {
                method: 'DELETE',
              });
              if (!res.ok) {
                const text = await res.text();
                throw new Error(`Erro ao apagar inseto: ${res.status} - ${text}`);
              }
              Alert.alert('Inseto apagado!');
              navigation.navigate('BugBuddies');
            } catch (error) {
              Alert.alert('Erro ao apagar inseto', error.message);
              console.error('Erro ao apagar inseto:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  if (!insect) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Paragraph>Carregando...</Paragraph>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        {insect.photo && <Card.Cover source={{ uri: `${API_URL}/${insect.photo}` }} />}
        <Card.Content>
          <Title>Editar Inseto</Title>
          <TextInput
            label="Nome Comum"
            value={commonName}
            onChangeText={setCommonName}
            style={styles.input}
            mode="outlined"
          />
          <TextInput
            label="Nome Científico"
            value={scientificName}
            onChangeText={setScientificName}
            style={styles.input}
            mode="outlined"
          />
          <Button mode="contained" onPress={handleUpdate} style={{ marginVertical: 10 }}>
            Atualizar
          </Button>
          <Button mode="outlined" onPress={handleDelete} color="red">
            Apagar
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
