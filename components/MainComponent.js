import React, { Component } from 'react';
import Work from './WorkComponent';
import WorkInfo from './WorkInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const WorkNavigator = createStackNavigator(
    {
        Work: { screen: Work },
        WorkInfo: { screen:  WorkInfo }
    }, 
    {
        initialRouteName: 'Work',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#A1CFCD'
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                color: '#FFFFFF'
            }
        }
    }
);

const AppNavigator = createAppContainer(WorkNavigator);


class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;
