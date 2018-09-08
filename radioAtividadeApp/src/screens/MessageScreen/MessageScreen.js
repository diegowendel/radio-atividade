import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './MessageScreen.styles';
import Header from '../../components/Header';
import Player from '../../components/Player/Player';
import EditText from '../../components/EditText/EditText';
import TextArea from '../../components/TextArea/TextArea';

class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Header headerText={'Contato'}/>
        <SafeAreaView style={styles.screenStyle}>
          <Text style={styles.textMedium}>Dúvidas, críticas, sugestões? Fale conosco:</Text>
          <Text style={styles.textSmall}>Preencha os campos abaixo</Text>
          <EditText placeholder={'Nome'} />
          <EditText placeholder={'Email'} />
          <EditText placeholder={'Telefone'} />
          <TextArea placeholder={'Mensagem'} />
        </SafeAreaView>
        <Player />
      </View>
    );
  }
}

export default MessageScreen;
