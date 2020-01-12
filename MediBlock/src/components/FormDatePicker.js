import React from 'react';
import { TextInput, DatePickerAndroid } from 'react-native';
import styles from './styles';
import { FormView } from './FormView';
import { currentDate } from './date';

class FormDatePicker extends React.Component {
    static defaultProps = {
        onPress: (value) => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            date: "",
        }
    }

    setDateAndroid = async () => {
        try {
            var { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(currentDate()),
                maxDate: new Date(currentDate())
            });
            day = day > 9 ? day : '0' + day;
            month = month > 8 ? month + 1 : '0' + (month + 1);
            if (action !== DatePickerAndroid.dismissedAction) {
                this.setState({ date: `${year}-${month}-${day}` });
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };

    render() {
        return (
            <FormView {...this.props}>
                <TextInput
                    onTouchStart={date => {
                        this.setDateAndroid().then(() => { this.props.onPress(this.state.date) })
                    }}
                    style={[styles.formBorder, styles.formTextfield]}
                    value={this.state.date}
                    placeholder="Select Date"
                    pointerEvents="none"
                />
            </FormView>
        );
    }
}

export { FormDatePicker };