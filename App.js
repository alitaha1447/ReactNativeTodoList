import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import AddScreen from './screens/AddScreen';
import HomeScreen from './screens/HomeScreen';
import DisplayScreen from './screens/DisplayScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="HomeStackHome" // Renamed to ensure uniqueness
      component={HomeScreen}
      options={{
        title: 'Todo Application',
        drawerLabel: 'Home',
        headerShown: true,
        headerStyle: {
          backgroundColor: '#77B0AA',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <HomeStack.Screen name="Add Task" component={AddScreen} />
    <HomeStack.Screen name="Display Screen" component={DisplayScreen} />
  </HomeStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar backgroundColor="teal" barStyle="dark-content" />
        <Drawer.Navigator initialRouteName="HomeStackHome">
          <Drawer.Screen
            name="HomeDrawer" // Renamed to ensure uniqueness
            component={HomeStackScreen}
            options={{ title: 'Todo Application', drawerLabel: 'Home', headerShown: false }}
          />
          <Drawer.Screen name="AddScreen" component={AddScreen} options={{ title: 'Todo Application', drawerLabel: 'AddScreen' }} />
          {/* <Drawer.Screen name="Display Screen"component={DisplayScreen}/> */}
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
