import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './AboutScreen.styles';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <SafeAreaView style={styles.screenStyle}>
          <Text style={styles.textMedium}>Quem somos nós:</Text>
          <Text style={styles.textSmall}>Somos o grupo da Radio Atividade, formado por colaboradores professores, alunos e ...</Text>
          <Text style={styles.textMedium}>Onde estamos localizados:</Text>
          <View style={styles.mapConatainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -23.297763,
                longitude: -45.9680011,
                latitudeDelta: 0.0142,
                longitudeDelta: 0.0005,
              }}>
              <Marker
                coordinate={{latitude: -23.297763, longitude: -45.9680011}}
                title={"ETEC Cônego José Bento"}
                description={"Escola Agrícola"}
              />
            </MapView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default AboutScreen;
