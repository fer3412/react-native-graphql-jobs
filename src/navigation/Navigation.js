import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from '../screen/Home';
import DetailsScreen from '../screen/Details';
import DetailsDescripSreen from '../screen/DetailsD';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Cities',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
  DetailsD: {
    screen: DetailsDescripSreen,
    navigationOptions: {
      headerTintColor: '#FFFFFF',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
});

export default createAppContainer(AppNavigator);