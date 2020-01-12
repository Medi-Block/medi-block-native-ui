import React from 'react'
import { Text, Button } from 'react-native'
import styles from './styles';

class CardButton extends React.Component {
    render() {
        return (
            <Button
                shadowRadius={2}
                shadowOffset={{ width: 0, height: 2 }}
                shadowOpacity={.7}
                shadowColor="black"
                onPress={this.props.onPress}
                style={styles.buttonTouchable}
            >
                <Text pointerEvents="none" style={styles.buttonText}>
                    {this.props.children}
                </Text>
            </Button>
        )
    };
};
export { CardButton };