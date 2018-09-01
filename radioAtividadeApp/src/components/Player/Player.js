import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Player.styles';

const foo = () => console.log('bar');

const onPressPlayerControl = (isPlaying, setState) => {
  return setState( { isPlaying: !isPlaying });
}

const mock = {
  title: 'Eye of the tiger',
  artist: 'Diegod',
  onMoreUpper: foo
}

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isPlaying: false }
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={mock.onMoreUpper}>
          <Icon name='angle-up' size={26}/>
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} >{mock.title}</Text>
          <Text style={styles.artist} >{mock.artist}</Text>
        </View>
        <TouchableOpacity onPress={() => onPressPlayerControl(this.state.isPlaying, this.setState.bind(this))}>
          <Icon
            name={ this.state.isPlaying ? 'play-circle-o' : 'pause-circle-o' }
            size={36} />
        </TouchableOpacity>
      </View>
    )
  };
}

export default Player;
