import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View>
                <Text style={styles.footerText}>FOOTER</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    footerContainer: {
        padding: 26,
        backgroundColor: '#A1CFCD',
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
)

export default Footer;