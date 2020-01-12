import React from 'react';
import { View, ScrollView } from 'react-native';
import { FormColoredTextField, FormButton, Card, navigatePush } from '../components';

class DoctorSignUp extends React.Component {
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
            did: "",
            name: "",
            phone: "",
            password: ""
        }
    }

    onFormSubmit = () => {
        // Call api to push sign up doctor
        navigatePush('DoctorDashboard')
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

export default DoctorSignUp;