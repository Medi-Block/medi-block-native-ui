import defaultStyle from './defaultStyles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cardView: {
        backgroundColor: defaultStyle.BACKGROUND_COLOR_PRIMARY,
        shadowColor: defaultStyle.SHADOW_COLOR,
        shadowOffset: defaultStyle.SHADOW_OFFSET,
        shadowOpacity: defaultStyle.SHADOW_OPACITY,
        shadowRadius: defaultStyle.SHADOW_RADIUS,
        elevation: defaultStyle.ELEVATION_SECONDARY,
        marginBottom: defaultStyle.MARGIN_VERT,
        paddingBottom: defaultStyle.PADDING_VERT,
    },
    cardSectionView: {
        paddingLeft: defaultStyle.PADDING_HORI,
        paddingRight: defaultStyle.PADDING_HORI,
        paddingTop: defaultStyle.PADDING_VERT,
        backgroundColor: defaultStyle.BACKGROUND_COLOR_PRIMARY,
        flexDirection: 'row',
        position: 'relative',
    },
    cardHeaderView: {
        backgroundColor: defaultStyle.BACKGROUND_COLOR_PRIMARY,
        shadowColor: defaultStyle.SHADOW_COLOR,
        shadowOffset: defaultStyle.SHADOW_OFFSET,
        shadowOpacity: defaultStyle.SHADOW_OPACITY,
        shadowRadius: defaultStyle.SHADOW_RADIUS,
        elevation: defaultStyle.ELEVATION_SECONDARY,
        marginTop: defaultStyle.MARGIN_VERT,
        marginBottom: defaultStyle.MARGIN_VERT,
    },
    cardHeaderText: {
        padding: defaultStyle.PADDING_VERT,
        paddingLeft: defaultStyle.PADDING_HORI,
        paddingRight: defaultStyle.PADDING_HORI,
        fontSize: defaultStyle.FONT_SIZE_HEADING,
        fontWeight: defaultStyle.FONT_WEIGHT_BOLD,
        color: defaultStyle.FONT_COLOR_PRIMARY,
    },
    customCalendar: {
        borderTopWidth: 2,
        borderBottomWidth: 1,
        borderTopColor: '#ccc',
        borderBottomColor: '#777',
        margin: 30,
    },
    customCalendarSelectedDate: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: defaultStyle.BUTTON_BORDER_COLOR_PRIMARY,
        color: "#000"
    },
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
        fontSize: defaultStyle.FONT_SIZE_NORMAL,
        fontWeight: defaultStyle.BUTTON_FONT_WEIGHT_PRIMARY,
        fontFamily: defaultStyle.BUTTON_FONT_FAMILY_PRIMARY,
        textTransform: defaultStyle.BUTTON_TEXT_TRANSFORM,
        letterSpacing: defaultStyle.BUTTON_LETTER_SPACING_PRIMARY,
    },
    formView: {
        flex: 1,
        padding: 20,
        paddingBottom: 0,
        paddingLeft: 0
    },
    formTitle: {
        color: defaultStyle.FONT_COLOR_PRIMARY,
        fontSize: defaultStyle.FONT_SIZE_TITLE,
        marginLeft: defaultStyle.PADDING_HORI,
        marginBottom: 1.5 * defaultStyle.MARGIN_VERT,
        fontFamily: defaultStyle.FONT_FAMILY_NORMAL,
    },
    formTextfield: {
        color: defaultStyle.FONT_COLOR_PRIMARY,
        fontSize:defaultStyle.FONT_SIZE_NORMAL,
        marginLeft: defaultStyle.MARGIN_HORI,
        paddingLeft: defaultStyle.PADDING_HORI
    },
    formBorder: {
        height: 40,  // have to do it on iOS
        borderColor: defaultStyle.BUTTON_BORDER_COLOR_PRIMARY,
        borderWidth: 1,
        borderRadius: 5
    },
    formDropdownPickerView: {
        height: 40,  // have to do it on iOS
        borderColor: defaultStyle.BUTTON_BORDER_COLOR_PRIMARY,
        borderWidth: 1,
        borderRadius: 5,
        color: defaultStyle.FONT_COLOR_PRIMARY,
        fontSize: defaultStyle.FONT_SIZE_NORMAL,
        marginLeft: defaultStyle.MARGIN_HORI,
        paddingLeft: 5
    },
    formButtonView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingTop: 20
    },
    formButtonTextField: {
        textAlign: 'center',
        borderRadius: defaultStyle.BUTTON_BORDER_RADIUS_SECONDARY,
        paddingLeft: defaultStyle.PADDING_HORI,
        paddingRight: defaultStyle.PADDING_HORI
    }
});
