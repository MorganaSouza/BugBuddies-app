import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, ActivityIndicator } from 'react-native';

const API_URL = 'http://192.168.1.64:3000';


export default function MapScreen() {
  const [insects, setInsects] = useState([]);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/insects`);
      const data = await res.json();
      setInsects(data);

      if (data.length > 0) {
        const avgLat =
          data.reduce((sum, i) => sum + Number(i.latitude), 0) / data.length;
        const avgLng =
          data.reduce((sum, i) => sum + Number(i.longitude), 0) / data.length;

        setRegion({
          latitude: avgLat,
          longitude: avgLng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
      }
    };

    fetchData();
  }, []);

  if (!region) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={region}>
        {insects.map((i) => (
          <Marker
            key={i._id}
            coordinate={{
              latitude: Number(i.latitude),
              longitude: Number(i.longitude),
            }}
            title={i.commonName}
            description={i.scientificName}
            pinColor="purple"
          />
        ))}
      </MapView>
    </View>
  );
}