import { Navigation } from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('Initializing', () => require('./Initializing').default);
    Navigation.registerComponent('DoctorHome', () => require('./Doctor/Home').default);
    Navigation.registerComponent('DoctorLogin', () => require('./Doctor/Login').default);
    Navigation.registerComponent('DoctorSignUp', () => require('./Doctor/SignUp').default);
    Navigation.registerComponent('DoctorDashboard', () => require('./Doctor/Dashboard').default);
    Navigation.registerComponent('DoctorNewRecord', () => require('./Doctor/NewRecord').default);
    Navigation.registerComponent('PatientHome', () => require('./Patient/Home').default);
    Navigation.registerComponent('PatientLogin', () => require('./Patient/Login').default);
    Navigation.registerComponent('PatientSignUp', () => require('./Patient/SignUp').default);
}