import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: '#F8F8F8'
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  artist: {
    color: 'rgba(0, 0, 0, 0.72)',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center'
  },
  audio: {
    width: 0,
    height: 0
  }
});