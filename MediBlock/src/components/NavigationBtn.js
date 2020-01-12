import React from 'react'
import { Text, Button, View, TouchableOpacity } from 'react-native'
import defaultStyle from './defaultStyles';
import { Navigation } from 'react-native-navigation';

class NavigationBtn extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    Navigation.push('AppRoot', {
                        component: {
                            name: this.props.componentName,
                        }
                    });
                }}
                style={styles.buttonTouchable}
            >
                <Text style={styles.buttonText}>
                    {this.props.title}
                </Text>
            </TouchableOpacity >
        )
    };
};

const styles = {
    buttonTouchable: {
        backgroundColor: defaultStyle.BUTTON_BORDER_COLOR_PRIMARY,
        borderRadius: defaultStyle.BUTTON_BORDER_RADIUS_SECONDARY,
        borderWidth: defaultStyle.BUTTON_BORDER_WIDTH_PRIMARY,
        borderColor: defaultStyle.BUTTON_BORDER_COLOR_PRIMARY,
        padding: defaultStyle.BUTTON_PADDING,
        margin: defaultStyle.MARGIN_HORI
    },
    buttonText: {
        alignSelf: 'center',
        color: defaultStyle.BUTTON_BACKGROUND_COLOR_PRIMARY,
        fontSize: defaultStyle.BUTTON_FONT_SIZE_PRIMARY,
        fontWeight: defaultStyle.BUTTON_FONT_WEIGHT_PRIMARY,
        fontFamily: defaultStyle.BUTTON_FONT_FAMILY_PRIMARY,
        textTransform: defaultStyle.BUTTON_TEXT_TRANSFORM,
        letterSpacing: defaultStyle.BUTTON_LETTER_SPACING_PRIMARY,
    },
}

export { NavigationBtn };