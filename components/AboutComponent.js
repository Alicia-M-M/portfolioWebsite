import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native-elements';
import { ABOUTINFO } from '../shared/aboutInfo';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutInfo: ABOUTINFO
        }
    }

    render() {
        renderAboutGraphic = ({ item }) => {
            return (
                <View style={styles.background}>
                    <Image style={styles.aboutImage}
                        source={item.img}>
                        <Text>{item.title}</Text>
                        <Text>{item.imgHeader}</Text>
                        <Text>{item.imgtext}</Text>
                    </Image>
                </View>
            );
        }
        return (
            <View style={styles.background}>
                <View style={styles.aboutIntroText}>
                    <Text>ABOUT ME</Text>
                    <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Text>
                </View>
                <FlatList
                    data={this.state.aboutInfo}
                    renderItem={renderAboutGraphic}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding: 80,
    },
    background: {
        backgroundColor: '#FCF9ED',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    aboutImage: {
        paddingTop: 500,
    },
    aboutIntroText: {
        backgroundColor: '#FCF9ED',
        width: 400,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:50,
    }
}
)


// as a function not a class
// function About(props) {

//     renderAboutGraphic = ({ item }) => {
//         return (
//             <View style={styles.homeContainer}>
//                 <Image style={styles.homeImage}
//                     source={require('./images/about-image-1.png')} >
//                     <Text style={styles.titleText}>{item.title}</Text>
//                     <Text style={styles.introText}>{item.imgHeader}</Text>
//                     <Text style={styles.introText}>{item.imgtext}</Text>
//                 </Image>
//             </View>
//         );
//     }
//     return (
//         <FlatList
//             data={props.aboutInfo}
//             renderItem={renderAboutGraphic}
//             keyExtractor={item => item.id.toString()}
//         />
//     )
// }

// const styles = StyleSheet.create({
//     text: {
//         padding: 80,
//     },
//     background: {
//         backgroundColor: '#FCF9ED',
//     }
// }
// )

export default About;