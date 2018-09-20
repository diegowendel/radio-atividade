import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  screenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3 // numColumns, approximate a square
  },
  imageItem: {
    ...StyleSheet.absoluteFillObject,
  },
  itemEmpty: {
    backgroundColor: 'transparent'
  }
});
