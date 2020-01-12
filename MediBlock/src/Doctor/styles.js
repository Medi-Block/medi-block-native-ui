import defaultStyle from './../components/defaultStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: defaultStyle.FONT_SIZE_TITLE,
        fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
        fontWeight: defaultStyle.FONT_WEIGHT_BOLD,
        color: defaultStyle.FONT_COLOR_PRIMARY,
    },
    cardTime: {
        fontSize: defaultStyle.FONT_SIZE_SECONDARY,
        fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
        fontWeight: defaultStyle.FONT_WEIGHT_SEMI_BOLD,
        color: defaultStyle.FONT_COLOR_PRIMARY,
    },
    cardDesc: {
        fontSize: defaultStyle.FONT_SIZE_NORMAL,
        fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
        fontWeight: defaultStyle.FONT_WEIGHT_NORMAL,
        color: defaultStyle.FONT_COLOR_PRIMARY,
    }
})