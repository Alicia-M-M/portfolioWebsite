import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import Work from './WorkComponent';
import { SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

const WorkTab = createBottomTabNavigator(
    {
        HOME: Home,
        WORK: Work,
        CONTACT: Contact,
    },
    {
        tabBarOptions: {
            inactiveTintColor:'#FFFFFF',
            activeTintColor: '#A1CFCD',
            labelStyle: {
                fontSize: 15,
            },
            style: {
                backgroundColor: '#779A98',
                height:70,
                paddingBottom:14,
            },
        },
    }

);

const AppNav = createAppContainer(WorkTab);

class Main extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         hero: HERO,
    //         aboutInfo: ABOUTINFO
    //     }
    // }
    // move constructor with state to relevant components

    render() {
        return (
            <>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Header />
                </SafeAreaView>
                <AppNav />
            </>
        )
    }
}

export default Main;


// with state 
// {/* <ScrollView>
//        <Home hero={this.state.hero} />
//       <About aboutInfo={this.state.aboutInfo} />
//            <Work />
//           </ScrollView>


            // without state and nav
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
