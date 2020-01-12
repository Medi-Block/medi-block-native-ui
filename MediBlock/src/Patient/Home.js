import React from 'react';
import { View, Text } from 'react-native';
import { NavigationBtn } from '../components';

class PatientHome extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Patient's Home"
                },
            }
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <NavigationBtn componentName="PatientLogin" title="Login" />
                <NavigationBtn componentName="PatientSignUp" title="SignUp" />
            </View>
        )
    }
}

export default PatientHome;