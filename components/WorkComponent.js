import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Work(props) {

    const renderWorkItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.software}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/project-1-image.png')}}
            />
        );
    };

    return (
        <FlatList
            data={props.examples}
            renderItem={renderWorkItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Work;