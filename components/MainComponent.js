import React, { Component } from 'react';
import Work from './WorkComponent';
import WorkInfo from './WorkInfoComponent';
import { View } from 'react-native';
import { EXAMPLES } from '../shared/examples';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            examples: EXAMPLES,
            selectedExample: null

        };
    }

    onExampleSelect(exampleId) {
        this.setState({ selectedExample: exampleId });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Work
                    examples={this.state.examples}
                    onPress={exampleId => this.onExampleSelect(exampleId)}
                />
                <WorkInfo
                    example={this.state.examples.filter(
                        example => example.id === this.state.selectedExample)[0]}
                />
            </View>
        );
    }
}

export default Main;
