import React from 'react';
import ImageView from 'react-native-image-view';
import { View, Text } from 'react-native';

renderFooter = (title) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: '#fff' }}>
                {title}
            </Text>
        </View>
    )
}

const Image = (props) => {
    return (
        <ImageView
            images={props.images}
            isVisible={props.isVisible}
            onClose={props.onClose}
            animationType='fade'
            renderFooter={(img) => renderFooter(img.title)}
        />
    )
}

export { Image }