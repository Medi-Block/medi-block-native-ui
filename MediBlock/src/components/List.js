import React from 'react'
import { FlatList, Text, View, ScrollView } from 'react-native';

const renderItem = (item, index) => {
    return (
        <Text>{index}</Text>
    )
}

const keyExtractor = (item, index) => {
    return index.toString();
}


const renderListHeaderComponent = () => {
    return (
        <View></View>
    )
}

const renderListFooterComponent = () => {
    return (
        <View></View>
    )
}

const renderListEmptyComponent = () => {
    return (
        <View></View>
    )
}

const renderOnEndReached = () => {
    return (
        <View></View>
    )
}

class List extends React.Component {
    static defaultProps = {
        renderItem: renderItem,
        keyExtractor: keyExtractor,
        ListHeaderComponent: renderListHeaderComponent(),
        ListFooterComponent: renderListFooterComponent(),
        ListEmptyComponent: renderListEmptyComponent(),
        onEndReached: renderOnEndReached,
    }

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.props.data}
                initialNumToRender={this.props.initialNumToRender || (this.props.data && this.props.data.length) || 6}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={this.props.onEndReachedThreshold || 0.1}
                renderItem={({ item, index }) => this.props.renderItem(item, index)}
                keyExtractor={(item, index) => this.props.keyExtractor(item, index)}
                ListHeaderComponent={this.props.ListHeaderComponent}
                ListFooterComponent={this.props.ListFooterComponent}
                ListEmptyComponent={this.props.ListEmptyComponent}
            />
        );
    }
}

export { List };