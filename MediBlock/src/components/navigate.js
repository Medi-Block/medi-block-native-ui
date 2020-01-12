import { Navigation } from "react-native-navigation";

export const navigatePush = (componentName, props = {}) => {
    Navigation.push('AppRoot', {
        component: {
            name: componentName,
            passProps: {
                ...props
            }
        }
    })
}

export const navigatePop = () => {
    Navigation.pop('AppRoot')
}