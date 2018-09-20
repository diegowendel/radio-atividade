import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: Colors.primaryColor
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center'
  },
  artist: {
    color: Colors.white,
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  },
  audio: {
    width: 0,
    height: 0
  }
});