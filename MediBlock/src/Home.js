import React from 'react';
import { View, StyleSheet, TouchableOpacity, } from 'react-native';
import { NavigationBtn } from './components/index.js';

const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <NavigationBtn componentName="DoctorHome" title="Doctor" />
        <NavigationBtn componentName="PatientHome" title="Patient" />
    </View>
);

export default App;