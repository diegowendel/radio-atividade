import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import styles from './EditText.styles';

class EditText extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    return (
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input}
          autoFocus={false}
          placeholder={this.props.placeholder}
          multiline={false}
          onChangeText={(text) => this.setState({text})} />
      </View>
    );
  }
}

export default EditText;
