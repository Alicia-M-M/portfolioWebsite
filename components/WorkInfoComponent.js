import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderWorkInfo({example}) {
    if (example) {
        return (
            <Card 
                featuredTitle={example.name}
                image={require('./images/project-1-image.png')}
            >
                <Text style={{margin: 10}}>
                    {example.software}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function WorkInfo(props) {
    return <RenderWorkInfo example={props.example} />;
}

export default WorkInfo;