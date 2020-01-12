import React from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from './styles';
import { CardButton } from './CardButton';

class FormButton extends React.Component {
    static defaultProps = {
        onChangeText: (value) => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ""
        })
    }

    render() {
        return (
            <View style={styles.formButtonView}>
                <CardButton
                    style={[styles.formBorder, styles.formButtonTextField]}
                    onPress={() => {
                        this.props.onFormSubmit()
                    }}
                >
                    {this.state.value}
                </CardButton>
            </View >
        )
    };
};

export { FormButton }