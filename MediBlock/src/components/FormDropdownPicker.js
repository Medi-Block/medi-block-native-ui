import React from 'react';
import { View, Picker } from 'react-native'
import styles from './styles';
import { FormView } from './FormView';

class FormDropdownPicker extends React.Component {
    static defaultProps = {
        onValueChange: (value) => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: "",
        }
    }

    componentDidMount() {
        this.setState({
            selected: this.props.placeholder
        })
    }

    renderPickerStyle = () => {
        if (this.state.selected === this.props.placeholder) {
            return ([
                styles.formBorder,
                { color: 'grey' }
            ])
        }
        return ([styles.formBorder])
    }

    renderPickerItems = (items) => {
        if (items === undefined) return [];
        return items.map(({ label, value }) => {
            return (
                <Picker.Item key={label} label={label} value={value} />
            )
        })
    }

    render() {
        return (
            <FormView {...this.props}>
                <View
                    style={[styles.formDropdownPickerView]}
                >
                    <Picker
                        selectedValue={this.state.selected}
                        style={this.renderPickerStyle()}
                        onValueChange={(selected, index) => {
                            this.setState({ selected });
                            this.props.onValueChange(selected)
                        }}>
                        <Picker.Item label={this.props.placeholder || "Select"} value="" />
                        {this.renderPickerItems(this.props.items)}
                    </Picker>
                </View>
            </FormView>
        );
    }
}

export { FormDropdownPicker };