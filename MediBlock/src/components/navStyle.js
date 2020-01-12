import defaultStyles from './defaultStyles';

export const topBarStyle = (text) => {
    return {
        title: {
            text,
            color: defaultStyles.BUTTON_BACKGROUND_COLOR_PRIMARY,
        },
        background: {
            color: defaultStyles.BUTTON_BORDER_COLOR_PRIMARY,
        },
        backButton: {
            color: 'white'
        },
    }
}