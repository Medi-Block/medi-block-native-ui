import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { FormView } from './FormView';

class FormColoredTextField extends React.Component {
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

    renderTextInputStyle = () => {
        if (this.props.multiline === true) {
            return [styles.formTextfield, styles.formBorder, { height: styles.formBorder.height * 3, textAlignVertical: 'top' }];
        } else {
            return [styles.formTextfield, styles.formBorder];
        }
    }

    render() {
        return (
            <FormView {...this.props}>
                <TextInput
                    style={this.renderTextInputStyle()}
                    onChangeText={value => {
                        this.setState({ value });
                        this.props.onChangeText(this.state.value)
                    }}
                    value={this.state.value}
                    placeholder={this.props.placeholder || "Enter Text..."}
                    multiline={this.props.multiline || false}
                    secureTextEntry={this.props.secureTextEntry}
                />
            </FormView>
        )
    };
};

export { FormColoredTextField }