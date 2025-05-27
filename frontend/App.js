import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import AddInsectScreen from './screens/AddInsectScreen';
import InsetoDetalheScreen from './screens/InsetoDetalheScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="BugBuddies" 
            component={HomeScreen} 
            options={{
              headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 8 }}>
                    BugBuddies
                  </Text>
                  <MaterialCommunityIcons name="ladybug" size={24} color="#d32f2f" />
                </View>
              )
            }}
          />
          <Stack.Screen name="Adicionar Inseto" component={AddInsectScreen} />
          <Stack.Screen name="Mapa" component={MapScreen} />
          <Stack.Screen 
            name="InsetoDetalhe" 
            component={InsetoDetalheScreen} 
            options={{ title: 'Detalhes do Inseto' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
