import React from 'react';
import { View, ScrollView } from 'react-native';
import { FormColoredTextField, FormButton, Card, navigatePush } from '../components';

class PatientSignUp extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Sign Up"
                },
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            pid: "",
            name: "",
            phone: "",
            age: "",
            password: ""
        }
    }

    onFormSubmit = () => {
        navigatePush('PatientDashboard', {
            pid: this.state.pid
        })
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }} />
                <Card customStyles={{ flex: 5, margin: 20, justifyContent: 'center' }}>
                    <ScrollView>
                        <FormColoredTextField
                            placeholder="Enter Name here"
                            title="Name"
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <FormColoredTextField
                            placeholder="Enter Mobile Number here"
                            title="Mobile No."
                            onChangeText={(phone) => this.setState({ phone })}
                        />
                        <FormColoredTextField
                            placeholder="Enter Age here"
                            title="Age"
                            onChangeText={(age) => this.setState({ age })}
                        />
                        <FormColoredTextField
                            placeholder="Enter Your Password here"
                            title="Password"
                            onChangeText={(password) => this.setState({ password })}
                            secureTextEntry={true}
                        />
                        <FormButton
                            value="Sign Up"
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