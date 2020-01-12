import ImagePicker from 'react-native-image-picker';

export const captureMedia = (callback) => {
    let optionsImage = {
        title: 'Select an option',
        customButtons: [{ name: 'video', title: 'Take Video...' }],
        noData: true,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    const optionsVideo = {
        noData: true,
        mediaType: 'video',
        storageOptions: {
            skipBackup: true,
            path: 'video',
        },
        quality: 1
    };
    ImagePicker.showImagePicker(optionsImage, (response) => {
        console.warn('Response = ', response);

        if (response.didCancel) {
            console.warn('User cancelled image picker');
        } else if (response.error) {
            console.warn('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            ImagePicker.launchCamera(optionsVideo, (response) => {
                console.warn('Response = ', response);

                if (response.didCancel) {
                    console.warn('User cancelled image picker');
                } else if (response.error) {
                    console.warn('ImagePicker Error: ', response.error);
                } else {
                    const source = { uri: response.uri };
                    callback(source, 'video');
                }
            })
        } else {
            const source = { uri: response.uri };
            callback(source, 'image');
        }
    })
}

export const captureImage = (callback) => {
    let options = {
        noData: true,
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    ImagePicker.showImagePicker(options, (response) => {
        console.warn('Response = ', response);

        if (response.didCancel) {
            console.warn('User cancelled image picker');
        } else if (response.error) {
            console.warn('ImagePicker Error: ', response.error);
        } else {
            const source = { uri: response.uri };
            callback(source);
        }
    })
}

export const captureVideo = (callback) => {
    let options = {
        noData: true,
        mediaType: 'video',
        storageOptions: {
            skipBackup: true,
            path: 'video',
        },
        quality: 1
    };
    ImagePicker.showImagePicker(options, (response) => {
        console.warn('Response = ', response);

        if (response.didCancel) {
            console.warn('User cancelled image picker');
        } else if (response.error) {
            console.warn('ImagePicker Error: ', response.error);
        } else {
            const source = { uri: response.uri };
            callback(source);
        }
    })
}
