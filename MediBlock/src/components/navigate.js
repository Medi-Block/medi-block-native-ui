import { Navigation } from "react-native-navigation";

export const navigate = (componentName, props = {}) => {
    Navigation.push('AppRoot', {
        component: {
            name: componentName,
            passProps: {
                ...props
            }
        }
    })
}