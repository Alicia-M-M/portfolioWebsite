import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Button, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { ABOUTINFO } from '../shared/aboutInfo';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutInfo: ABOUTINFO,
            modalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderAboutGraphic = ({ item }) => {
        return (
            <Card style={styles.background}
            >
                <ImageBackground
                    style={styles.backgroundimage}
                    source={item.img} style={styles.aboutImage}>
                    <Text style={styles.aboutTitle}>{item.title}</Text>
                </ImageBackground>
                <View style={styles.textBox}>
                    <Text style={styles.textMainheader}>{item.imgheader}</Text>
                    <Text>{item.imgtext}</Text>
                </View>
            </Card>
        );
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.aboutIntroText}>
                    <Text>ABOUT ME</Text>
                    <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</Text>
                </View>
                <FlatList
                    data={this.state.aboutInfo}
                    renderItem={this.renderAboutGraphic}
                    keyExtractor={item => item.id.toString()}
                />
                <View style={styles.button}>
                    <Button
                        title='DOWNLOAD MY RESUME'
                        color='#A1CFCD' />
                </View>
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
        height: 300,
    },

    aboutIntroText: {
        backgroundColor: '#FCF9ED',
        width: 400,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    button: {
        paddingTop: 30,
        paddingBottom: 35,
    },
    aboutTitle: {
        textAlign: 'center',
        fontSize: 20,
    },
    textBox: {
        alignItems: 'center'
    },
    textMainheader: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 5
    },
    backgroundimage: {
    },
}
)


// as a function not a class
// function About(props) {

//     renderAboutGraphic = ({item}) => {
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