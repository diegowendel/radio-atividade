import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapConatainer: {
    flex: 1,
    margin: 5
  },
  screenStyle: {
    flex: 1
  },
  textMedium: {
    fontSize: 14,
    marginTop: 10,
    padding: 5,
    textAlign: 'justify'
  },
  textSmall: {
    fontSize: 12,
    padding: 5,
    textAlign: 'justify'
  }
});
