import React from 'react';
import { TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import DocumentPicker from 'react-native-document-picker';
import { FormConfirmationAlert } from './FormConfirmationAlert';

class SingleFilePicker extends React.Component {
    static defaultProps = {
        onChangeText: (value) => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            file: ""
        }
    }

    pick = async (type) => {
        try {
            const res = await DocumentPicker.pick({
                type: [type === 'pdf' ? DocumentPicker.types.pdf : DocumentPicker.types.images]
            });
            //Printing the warn related to the file
            // console.warn('res : ' + JSON.stringify(res));
            // console.warn('URI : ' + res.uri);
            // console.warn('Type : ' + res.type);
            // console.warn('File Name : ' + res.name);
            // console.warn('File Size : ' + res.size);
            //Setting the state to show single file attributes
            // this.setState({ file: res });
            this.props.onAttachComplete(res);

        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                // alert('Canceled from single doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }

    onPress = () => {
        return (
            Alert.alert(
                'Upload',
                'What do you want to upload?',
                [
                    {
                        text: 'Images',
                        onPress: () => this.pick('images'),
                    },
                    {
                        text: 'Pdf',
                        onPress: () => this.pick('pdf')
                    },
                ],
                { cancelable: true },
            )
        )
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.onPress()}>
                {this.props.children}
            </TouchableOpacity>
        )
    };
};


class MultiFilePicker extends React.Component {
    static defaultProps = {
        onChangeText: (value) => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    pickMultiple = async (type) => {
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [type === 'pdf' ? DocumentPicker.types.pdf : DocumentPicker.types.images]
            });
            for (const res of results) {
                //Printing the warn related to the file
                // console.warn('res : ' + JSON.stringify(res));
                // console.warn('URI : ' + res.uri);
                // console.warn('Type : ' + res.type);
                // console.warn('File Name : ' + res.name);
                // console.warn('File Size : ' + res.size);
            }
            //Setting the state to show single file attributes
            // this.setState({ files: results });
            this.props.onAttachComplete(results);
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                // alert('Canceled from single doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }

    onPress = () => {
        return (
            Alert.alert(
                'Upload',
                'What do you want to upload?',
                [
                    {
                        text: 'Images',
                        onPress: () => this.pickMultiple('images'),
                    },
                    {
                        text: 'Pdf',
                        onPress: () => this.pickMultiple('pdf')
                    },
                ],
                { cancelable: true },
            )
        )
    }

    render() {
        return (
            // <TouchableOpacity onPress={() => this.onPress(this.props.type)}>
            <TouchableOpacity onPress={() => {
                return (this.onPress())
            }}>
                {this.props.children}
            </TouchableOpacity>
        )
    };
};


export { SingleFilePicker, MultiFilePicker }