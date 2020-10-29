import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
// import { HERO } from '../shared/hero';


// state passed directly to component not through main
// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hero: HERO
//         };
//     }

//     render() {
//         const graphic = this.state.hero.map(info => {
//             return (
//                 <View key={info.id}>
//                     <RenderHeader info={info} />
//                 </View>

//             );
//         });

//         return (
//             <ScrollView>
//                 {graphic}
//             </ScrollView>
//         )
//     }
// }

// function RenderHeader({ info }) {
//     return (
//         <View style={styles.homeContainer}>
//             <Image style={styles.homeImage}
//                 source={require('./images/header-v6-yellow-overlay.png')}
//             >
//                 <Text style={styles.titleText}>{info.title}</Text>
//                 <Text style={styles.introText}>{info.intro}</Text>
//             </Image>
//         </View>
//     )
// }

function tester(props) {

    renderHeroGraphic = ({ item }) => {
        return (
            <View style={styles.homeContainer}>
                <Image style={styles.homeImage}
                    source={require('./images/about-image-1.png')} >
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.introText}>{item.imgHeader}</Text>
                </Image>
            </View>
        );
    }
    return (
        <FlatList
            data={props.aboutInfo}
            renderItem={renderHeroGraphic}
            keyExtractor={item => item.id.toString()}
        />
    )


}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FCF9ED'
    },
    homeImage: {
        flexGrow: 1,
        height: 350,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        textAlign: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        // paddingBottom:50,
    },
    introText: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        width: 100,
    }


})

export default tester;