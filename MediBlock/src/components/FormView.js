import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class FormView extends React.Component {
    static defaultProps = {
        customStyles: {}
    }

    render() {
        return (
            <View style={[styles.formView, this.props.customStyles]}>
                {
                    this.props.title !== undefined &&
                    <Text style={styles.formTitle}>{this.props.title}</Text>
                }
                {this.props.children}
            </View>
        )
    };
};

export { FormView };