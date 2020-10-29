import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {
    return (

        <View style={styles.header}>
            <View>
                <Text style={styles.text}>ALICIA MORLEY</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        padding: 26,
        backgroundColor: '#A1CFCD',
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,

    },
    text: {
        backgroundColor: 'linear-gradient(to bottom,  #A1CFCD 50%,  rgba(252,249,237, 0.3) 50%)',
        // add react-native-linear-gradient at a later date & font packages
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
);


export default Header;