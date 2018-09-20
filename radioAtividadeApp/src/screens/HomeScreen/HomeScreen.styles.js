import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  screenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionHeaderContainer: {
    alignItems: 'center',
    backgroundColor: Colors.grey_300,
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  sectionHeaderText: {
    color: Colors.grey_800,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  sectionItemContainer: {
    backgroundColor: Colors.grey_100,
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10
  },
  sectionItemDivider: {
    backgroundColor: Colors.grey_400,
    height: 0.5,
    margin: 4,
    marginLeft: 10,
    marginRight: 10
  },
  sectionItemText: {
    color: Colors.grey_900,
    fontSize: 16,
    marginLeft: 10
  },
  sectionItemTextBold: {
    color: Colors.grey_900,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  }
});
