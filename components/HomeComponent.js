import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

function Home(props) {

    renderHeroGraphic = ({ item }) => {
        return (
            <View style={styles.homeContainer}>
                <Image style={styles.homeImage}
                    source={require('./images/header-v6-yellow-overlay.png')} >
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.introText}>{item.intro}</Text>
                </Image>
            </View>
        );
    }
    return (
        <FlatList
            data={props.hero}
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

export default Home;