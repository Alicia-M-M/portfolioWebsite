import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList} from 'react-native';
import { Image } from 'react-native-elements';
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
    render() {
        renderWorkGraphics = ({ item }) => {
            return (
                <View style={styles.background}>
                    <Image style={styles.workImage}
                        source={item.image}>
                        <Text>{item.name}</Text>
                        <Text>{item.description}</Text>
                    </Image>
                </View>
            );
        }
        return (
            <ScrollView>
                <FlatList
                    data={this.state.examples}
                    renderItem={renderWorkGraphics}
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
    },
    background: {
        backgroundColor: '#FCF9ED',
    },
    workImage: {
        paddingTop: 500,
    }
}
)

export default Work; 