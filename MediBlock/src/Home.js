import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationBtn, Card } from './components/index.js';
import defaultStyles from './components/defaultStyles';

class Home extends React.Component {
    static get options() {
        return {
            topBar: {
                visible: false, height: 0
            }
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{
                        color: defaultStyles.FONT_COLOR_PRIMARY,
                        fontSize: defaultStyles.FONT_SIZE_HEADING,
                        textAlign: 'center'
                    }}>
                        Welcome to MediBlock
                        </Text>
                    <Text style={{
                        color: defaultStyles.FONT_COLOR_PRIMARY,
                        fontSize: defaultStyles.FONT_SIZE_NORMAL,
                        textAlign: 'center'
                    }}>
                        Your Personalized Medical App :)
            </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <NavigationBtn componentName="DoctorHome" title="Doctor" />
                    <NavigationBtn componentName="PatientHome" title="Patient" />
                </View>
            </View>
        )
    }
}

export default Home;