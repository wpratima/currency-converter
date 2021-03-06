import React, { useContext } from 'react'
import { StatusBar, FlatList, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'

import colors from '../constants/colors'
import currencies from '../data/currencies.json'
import { RowItem, RowSeperator } from '../components/RowItem'
import { ConversionContext } from '../utils/ConversionContext'

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: colors.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default ({ navigation, route = {} }) => {
    const insets = useSafeAreaInsets();
    const params = route.params || {};
    const {
        setBaseCurrency,
        setQuoteCurrency,
        baseCurrency,
        quoteCurrency
    } = useContext(ConversionContext)

    return (
        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                renderItem={({ item }) => {
                    let selected = false;
                    if (params.isBaseCurrency && item === baseCurrency) {
                        selected = true
                    } else if (!params.isBaseCurrency && item === quoteCurrency) {
                        selected = true
                    }

                    return <RowItem
                        text={item}
                        onPress={() => {
                            if (params.isBaseCurrency) {
                                setBaseCurrency(item)
                            } else {
                                setQuoteCurrency(item)
                            }
                            navigation.pop()
                        }}
                        rightIcon={
                            selected && (
                                <View style={styles.icon}>
                                    <Entypo name='check' size={20} color={colors.white} />
                                </View>
                            )}
                    />
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