import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';
import Tester from './testerComponent';
import { HERO } from '../shared/hero';
import { ABOUTINFO } from '../shared/aboutInfo';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

// without state
// function Main() {
//     return (
//         <SafeAreaView
//         forceInset={{top:'always', horizontal:'never'}}>
//             <View>
//                 <Header />
//                 <Home />
//                 <About />
//             </View>
//         </SafeAreaView>
//     )
// }

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: HERO,
            aboutInfo: ABOUTINFO
        }
    }

    render() {
        return (
            <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                <Header />
                <ScrollView>
                    <Home hero={this.state.hero} />
                    <About aboutInfo={this.state.aboutInfo} />
                    <About aboutInfo={this.state.aboutInfo} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}



export default Main;
