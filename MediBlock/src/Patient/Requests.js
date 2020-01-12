import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationBtn, Card, FormColoredTextField, FormButton, CardSection, Info, List, navigatePush, navigatePop, topBarStyle } from '../components';
import styles from '../components/styles';
import styles2 from './styles';
import defaultStyles from '../components/defaultStyles';

class Requests extends React.Component {
    static get options() {
        return {
            topBar: topBarStyle("Requests")
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            did: "",
            name: "GG",
            phone: "94622274251",
            pid: "",
            patientDetailVisible: true
        }
    }

    componentDidMount() {
        // Call backend api to fetch data based on did
    }

    onRequest = () => {
        navigatePop();
    }

    render() {
        const { name, phone, did } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
                {this.state.patientDetailVisible ?
                    <Card customStyles={{ margin: 20, justifyContent: 'center', paddingTop: 20, paddingBottom: 20 }}>
                        <CardSection>
                            <Info title="Name" value={name} />
                        </CardSection>
                        <CardSection>
                            <Info title="Mobile No" value={phone} />
                        </CardSection>
                        <CardSection>
                            <FormButton
                                value="Accept Request"
                                onFormSubmit={this.onRequest}
                            />
                        </CardSection>
                    </Card>
                    :
                    <View>
                        <Text>No requests pending</Text>
                    </View>
                }
            </View >
        )
    }
}

export default Requests;