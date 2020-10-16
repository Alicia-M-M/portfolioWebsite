import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { EXAMPLES } from '../shared/examples';

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            examples: EXAMPLES
        };
    }

    static navigationOptions = {
        title: 'Work'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderWorkItem = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.software}
                    onPress={() => navigate('WorkInfo', { exampleId: item.id })}
                    leftAvatar={{ source: require('./images/project-1-image.png') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.examples}
                renderItem={renderWorkItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Work;