import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { EXAMPLES } from '../shared/examples';

function RenderWorkInfo({ example }) {
    if (example) {
        return (
            <Card
                featuredTitle={example.name}
                image={require('./images/project-1-image.png')}
            >
                <Text style={{ margin: 10 }}>
                    {example.software}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class WorkInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            examples: EXAMPLES
        };
    }

    static navigationOptions = {
        title: 'Work Examples'
    }

    render() {
        const exampleId = this.props.navigation.getParam('exampleId');
        const example = this.state.examples.filter(example => example.id === exampleId)[0];
        return <RenderWorkInfo example={example} />;
    }
}

export default WorkInfo;