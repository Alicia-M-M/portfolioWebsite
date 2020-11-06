import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { EXAMPLES } from '../shared/examples';
import Footer from './FooterComponent';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: EXAMPLES
        }
    }

    renderWorkGraphics = ({ item }) => {
        return (
            <Card style={styles.background}
            >
                <ImageBackground
                    source={item.image} style={styles.workImage}>
                    <Text>{item.name}</Text>
                    <Text>{item.software}</Text>
                </ImageBackground>
            </Card>
        );
    }

    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.examples}
                    renderItem={this.renderWorkGraphics}
                    keyExtractor={item => item.id.toString()}
                />
                <Footer />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        padding: 80,
      
        top: 0,
    },
    background: {
        backgroundColor: '#FCF9ED',
    },
    workImage: {
       height:300,
    }
}
)

export default Work; 