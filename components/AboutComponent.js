import React from 'react';
import { View, Text, StyleSheet, FlatList, Card } from 'react-native';
import { Image } from 'react-native-elements';

function About(props) {

    renderHeroGraphic = ({ item }) => {
        return (
            <View style={styles.homeContainer}>
                <Image style={styles.homeImage}
                    source={require('./images/about-image-1.png')} >
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.introText}>{item.imgHeader}</Text>
                    <Text style={styles.introText}>{item.imgtext}</Text>
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
    text: {
        padding: 80,
    },
    background: {
        backgroundColor: '#FCF9ED',
    }
}
)

export default About;