import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Linking, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeperator } from '../components/RowItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,

    },
})

const openUrl = (url) => {
    return (
        Linking.openURL(url).catch(() => {
            Alert.alert('Sorry, something went wrong.', 'Please try again.');
        })
    )
}
export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <RowItem
                rightIcon={<Entypo name='chevron-right' size={20} color={colors.blue} />}
                text="Themes"
                onPress={() => alert('todo!')}
            />

            <RowSeperator />

            <RowItem
                rightIcon={<Entypo name='export' size={20} color={colors.blue} />}
                text="React Native Basics"
                onPress={() => openUrl(
                    'https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter'
                )}
            />

            <RowSeperator />

            <RowItem
                rightIcon={<Entypo name='export' size={20} color={colors.blue} />}
                text="React Native by Example"
                onPress={() => openUrl('httssfps://reactnativebyexample.com')}
            />
        </SafeAreaView>
    );
};