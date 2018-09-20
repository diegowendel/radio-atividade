import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    color: '#808080',
    flex: 4,
    fontSize: 18,
    height: 36,
    marginRight: 5,
    padding: 4,
    // The value 'justify' is only supported on iOS and fallbacks to left on Android.
    textAlign: 'justify'
  },
  inputcontainer: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 10
  }
});
