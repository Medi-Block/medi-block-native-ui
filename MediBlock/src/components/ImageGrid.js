import React from 'react';
import { View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';

class ImageGrid extends React.Component {
    static defaultProps = {
        viewStyles: {},
        imageStyles: {},
        imageViewStyles: {},
        data: [],
        numColumns: 3,
        margin: 2
    }

    renderImageGridItem = ({ item, index }) => {
        console.warn(index)
        const numColumns = this.props.numColumns;
        const margin = this.props.margin;
        const size = (Dimensions.get('window').width - (numColumns * 2) * margin) / numColumns;
        return (
            <TouchableOpacity
                style={[{ margin: margin }, this.props.imageViewStyles]}
                onPress={() => this.props.onPress(index)}
            >
                <Image
                    style={[{ height: size, width: size }, this.props.imageStyles]}
                    source={require('./../../../images/student.png')}
                />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={this.props.viewStyles}>
                <FlatList
                    data={this.props.data}
                    extraData={this.props.data}
                    renderItem={this.renderImageGridItem}
                    numColumns={this.props.numColumns}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

export { ImageGrid };