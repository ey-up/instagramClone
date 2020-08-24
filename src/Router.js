import * as React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Settings from './Pages/Settings';
import Register from './Pages/Register';
import Search from './Pages/Search';
import { navigationRef } from './RootNavigation';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();
function TabNav({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: 'white',
        activeBackgroundColor: '#dfe4de',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('./image/house.png')}
              style={{
                width: windowWidth / 12,
                height: windowHeight / 21,
                marginTop: windowHeight / 45,
              }}
            />
          ),
        }}
        name="Feed"
        component={Feed}
      />

      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('./image/search.png')}
              style={{
                width: windowWidth / 12,
                height: windowHeight / 21,
                marginTop: windowHeight / 45,
              }}
            />
          ),
        }}
        name="Search"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('./image/plus.png')}
              style={{
                width: windowWidth / 12,
                height: windowHeight / 21,
                marginTop: windowHeight / 45,
              }}
            />
          ),
        }}
        name="Search1"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('./image/heart.png')}
              style={{
                width: windowWidth / 12,
                height: windowHeight / 21,
                marginTop: windowHeight / 45,
              }}
            />
          ),
        }}
        name="Search2"
        component={Search}
      />

      <Tab.Screen
        options={{
          title:'ed',
          tabBarLabel: '',
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('./image/person.png')}
              style={{
                width: windowWidth / 12,
                height: windowHeight / 21,
                marginTop: windowHeight / 45,
              }}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title:'Login' , headerShown: false}}/>
        <Stack.Screen name="TabNav" component={TabNav} options={{ title:'Feed',headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{ title:'Register'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
