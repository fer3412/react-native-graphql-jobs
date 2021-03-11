import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
//import {List} from '../components/List';

export default class DetailsDescripSreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
    };
  };
  render() {
    const Title = this.props.navigation.getParam('title');
    
    const Company = this.props.navigation.getParam('company');
    const Description = this.props.navigation.getParam('descript');

    return (
      <ScrollView style={styles.containerItem}>
        <View style={styles.box1} >
          <Text style={styles.txTextb}>
            {Title}
          </Text>
          <Text style={styles.txText}>
          {"Company: "}{Company}
          </Text>
        </View>
          <Text style={styles.txText}>
            {"Description: "}
          </Text>
          <Text style={styles.txText}>
            {Description}
          </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerItem: {
    width: '80%',
    marginHorizontal: 40,
    marginVertical: 20,
  },
  // baseText: {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // },
  txTextb: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: '4%'
  },
  txText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: '4%'
  },
  box1: {
    height: 200,
  },
  error: {
    color: '#EC5757',
    fontWeight: 'bold',
  },
});