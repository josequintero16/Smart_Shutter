//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import GroupScreen from './pages/GroupScreen';
import AddShutterScreen from './pages/AddShutterScreen';
const HomeStack = createStackNavigator(
    {
        //Defination of Navigaton from home screen
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
        Profile: { screen: ProfileScreen },
        Group: { screen: GroupScreen },
        AddShutter: { screen: AddShutterScreen },
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home',
            //Header title
        },
    }
);
const SettingsStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Settings: { screen: SettingsScreen },
        Details: { screen: DetailsScreen },
        Profile: { screen: ProfileScreen },
    },
    {
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Settings',
            //Header title
        },
    }
);
const App = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: SettingsScreen ,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        },
    }
);
export default createAppContainer(App);