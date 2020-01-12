import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

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
                <TextInput
                    style={[styles.formBorder, styles.formButtonTextField]}
                    onTouchStart={value => {
                        this.props.onFormSubmit()
                    }}
                    value={this.state.value}
                    pointerEvents="none"
                />
            </View>
        )
    };
};

export { FormButton }