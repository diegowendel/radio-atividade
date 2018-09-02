import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Player.styles';
import Video from 'react-native-video'
import tracks from '../../lib/getTracks'

class Player extends React.Component {
  constructor() {
    super()
    this.state = {
      // Parâmetros para o componente que executa as músicas
      currentTrackNumber: 0,
      lastTrackNumber: tracks && tracks.length,
      track: tracks && tracks[0],
      isChanging: false,
      isPlaying: false,
      // Parâmetros para o front
      title: 'conectando...',
      artist: ''
    }
  }

  // Loga o estado atual do componente ao clicar no carret-up
  log = () => console.log(this.state);

  onPressPlayerControl = () => this.setState({ isPlaying: !this.state.isPlaying })

  setMusicParams = () => {
    const title = this.state.track.title
    const artist = this.state.track.artist
    return this.setState({ title, artist })
  }

  setNextTrack = async () => {
    // Ativa a flag isChanging para setar o componente de audio como null
    await this.setState({ isChanging: true })
    const lastTrackNumber = this.state.lastTrackNumber
    // define o currentTrack como o próximo na lista circular de tracks
    const currentTrackNumber = (this.state.currentTrackNumber + 1) % lastTrackNumber
    await this.setState({
      currentTrackNumber,
      track: tracks[currentTrackNumber]})
    // Termina o processo de troca de track
    return this.setState({ isChanging: false })
  }

  // Define uma mensagem de erro padrão no title do player em caso de erro
  // no carregamento da música
  onError = () => this.setState({ title: 'Erro: verifique sua conexão', artist: '' })

  render () {

    // Componente utilizado para executar a track atual. Se estiver trocando de
    // música o componente é setado como null
    const audio = this.state.isChanging ? null : (
      <Video source={{uri: this.state.track.audioUrl}}
             paused={!this.state.isPlaying}
             onLoad={this.setMusicParams.bind(this)}
             onEnd={this.setNextTrack.bind(this)}
             onError={this.onError.bind(this)}
             style={styles.audio}
      />
    );

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.log}>
          <Icon name='angle-up' size={26}/>
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} >{this.state.title}</Text>
          <Text style={styles.artist} >{this.state.artist}</Text>
        </View>
        <TouchableOpacity onPress={this.onPressPlayerControl.bind(this)}>
          <Icon
            name={ this.state.isPlaying ? 'pause-circle-o' : 'play-circle-o' }
            size={36} />
        </TouchableOpacity>
        { audio }
      </View>
    )
  };
}

export default Player;
