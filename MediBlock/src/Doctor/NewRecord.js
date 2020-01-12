import React from 'react';
import { View, ScrollView } from 'react-native';
import { FormColoredTextField, FormButton, Card, navigatePush, navigatePop } from '../components';

class NewRecord extends React.Component {
    static get options() {
        return {
            topBar: {
                title: {
                    text: "Add Record"
                },
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            did: "",
            pid: "",
            details: "",
        }
    }

    componentDidMount() {
        this.setState({
            did: this.props.did,
            pid: this.props.pid
        })
    }

    onFormSubmit = () => {
        // Call add record function
        navigatePop();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }} />
                <Card customStyles={{ flex: 1, margin: 20, justifyContent: 'center' }}>
                    <ScrollView>
                        <FormColoredTextField
                            placeholder="Enter Details here"
                            title="Description of medical condition"
                            onChangeText={(details) => this.setState({ details })}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <FormButton
                                value="Attach Reports"
                                onFormSubmit={() => { }}
                            />
                            <FormButton
                                value="Add Record"
                                onFormSubmit={this.onFormSubmit}
                            />
                        </View>
                    </ScrollView>
                </Card>
                <View style={{ flex: 1 }} />
            </View>
        )
    }
}

export default NewRecord;