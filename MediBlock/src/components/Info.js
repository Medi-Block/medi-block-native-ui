import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import defaultStyle from './defaultStyles';

const Info = (props) => {
    return (
        <View style={[styles.cardSectionView, { flex: 1 }]}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    fontSize: defaultStyle.FONT_SIZE_NORMAL,
                    fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
                    fontWeight: defaultStyle.FONT_WEIGHT_NORMAL,
                    color: defaultStyle.FONT_COLOR_PRIMARY,
                }}>
                    {props.title}:
                </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{
                    fontSize: defaultStyle.FONT_SIZE_NORMAL,
                    fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
                    fontWeight: defaultStyle.FONT_WEIGHT_NORMAL,
                    color: defaultStyle.FONT_COLOR_PRIMARY,
                }}>
                    {props.value}
                </Text>
            </View>
        </View>
    );
};

export { Info };
