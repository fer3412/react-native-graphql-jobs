import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {List} from '../components/List';

export default class DetailsSreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    };
  };
  render() {
    const jobs = this.props.navigation.getParam('jobs');
    const {navigate} = this.props.navigation;

    return (
      <ScrollView style={styles.containerItem}>
        {jobs &&
          jobs.map(launch => {
            return (
              <List
                key={launch.name}
                onPress={() => {
                  navigate('DetailsD', {title: launch.title, descript: launch.description, company: launch.company.name});
                }}
                title={launch.title}
                some={launch.company.name}
              />
            );
          })}
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
  error: {
    color: '#EC5757',
    fontWeight: 'bold',
  },
});