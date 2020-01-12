import React from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles';

class CardButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.buttonTouchable}
            >
                <Text style={styles.buttonText}>
                    {this.props.children}
                </Text>
            </TouchableOpacity >
        )
    };
};
export { CardButton };