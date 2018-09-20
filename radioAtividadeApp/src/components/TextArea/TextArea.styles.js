import { StyleSheet } from 'react-native';
import styles from '../EditText/EditText.styles';

export default StyleSheet.create({
  input: {
    ...styles.input,
    height: 180,
    // Android only
    textAlignVertical: 'top'
  },
  inputcontainer: {
    ...styles.inputcontainer
  }
});
