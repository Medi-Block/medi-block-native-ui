import React from 'react';
import { View, Text } from 'react-native';
import { NavigationBtn } from '../components';

class DoctorHome extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Doctor's Home"
                },
            }
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <NavigationBtn componentName="DoctorLogin" title="Login" />
                <NavigationBtn componentName="DoctorSignUp" title="SignUp" />
            </View>
        )
    }
}

export default DoctorHome;