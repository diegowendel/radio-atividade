import { StyleSheet } from 'react-native';

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
    alignItems: "center",
    flexBasis: 0,
    flexGrow: 1,
    margin: 5
  },
  imageItem: {
    width: 128,
    height: 128
  },
  itemEmpty: {
    backgroundColor: "transparent"
  }
});
