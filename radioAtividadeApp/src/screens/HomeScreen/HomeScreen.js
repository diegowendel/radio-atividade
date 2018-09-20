import React, { Component } from 'react';
import { SafeAreaView, SectionList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../constants/Colors';
import sectionListData from '../../lib/sectionListData';
import styles from './HomeScreen.styles';

class SectionListItem extends Component {
  render() {
    return (
      <View style={styles.sectionItemContainer}>
        <Text style={styles.sectionItemTextBold}>
          {this.props.item.name}
        </Text>
        <Text style={styles.sectionItemText}>
          {this.props.item.description}
        </Text>
        
        {/* TODO: Arrumar essa gambeta */}
        {this.props.index != 4 && <View style={styles.sectionItemDivider} />}
      </View>
    );
  }
}

class SectionHeader extends Component {
  render() {
    return (
      <View style={styles.sectionHeaderContainer}>
        <Icon name={this.props.section.icon} size={20} color={Colors.grey_800} />
        <Text style={styles.sectionHeaderText}>
          {this.props.section.title}
        </Text>
      </View>
    );
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <SectionList
          renderItem={({ item, index }) => {
            return (<SectionListItem item={item} index={index} />);
          }}
          renderSectionHeader={({ section }) => {
            return (<SectionHeader section={section} />);
          }}
          sections={sectionListData}
          keyExtractor={(item, index) => item.name}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
