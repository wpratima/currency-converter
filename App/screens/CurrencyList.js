import React from 'react'
import { StatusBar, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import colors from '../constants/colors'
import currencies from '../data/currencies.json'
import { RowItem, RowSeperator } from '../components/RowItem'


export default ({ navigation }) => {
    const insets = useSafeAreaInsets()

    return (
        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    return <RowItem text={item} onPress={() => { navigation.pop() }} />
                }}
                keyExtractor={(item) => item}
                ItemSeparatorComponent={() => <RowSeperator />}
                ListFooterComponent={() => (
                    <View style={{ paddingBottom: insets.bottom }} />
                )}
            />
        </View>
    );
}