import React from 'react';
import { View, ScrollView } from 'react-native';
import { FormColoredTextField, FormButton, Card } from '../components';

class PatientSignUp extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Login"
                },
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            pid: "",
            password: ""
        }
    }

    onFormSubmit = () => {
        return [];
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }} />
                <Card customStyles={{ flex: 2, margin: 20, justifyContent: 'center' }}>
                    <ScrollView>
                        <FormColoredTextField
                            placeholder="Enter Your Patient ID here"
                            title="Patient ID"
                            onChangeText={(pid) => this.setState({ pid })}
                        />
                        <FormColoredTextField
                            placeholder="Enter Your Password here"
                            title="Password"
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                        />
                        <FormButton
                            value="Login"
                            onFormSubmit={this.onFormSubmit}
                        />
                    </ScrollView>
                </Card>
                <View style={{ flex: 1 }} />
            </View>
        )
    }
}

export default PatientSignUp;