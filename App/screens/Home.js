import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native'
import { format } from 'date-fns'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'

import colors from '../constants/colors'
import ConversionInput from '../components/ConversionInput'
import { Button } from '../components/Button'
import { KeyboardSpacer } from '../components/KeyboardSpacer'
const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center'
    },
    content: {
        paddingTop: screen.height * 0.1
    },
    header: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25
    },
    textHeader: {
        color: colors.white,
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 14,
        textAlign: 'center'
    },
})

export default ({ navigation }) => {
    const baseCurrency = 'USD'
    const quoteCurrency = 'GBP'
    const conversionRate = 0.76
    const date = '2022-03-27'

    const [scrollEnabled, setScrollEnabled] = useState(false);


    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor={colors.blue} />
            <ScrollView scrollEnabled={scrollEnabled}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.push("Options")}>
                        <Entypo name="cog" size={32} color={colors.white} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/images/background.png')}
                            style={styles.logoBackground}
                            resizeMode='contain'
                        />
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>

                    <Text style={styles.textHeader}>Currency Converter</Text>

                    <ConversionInput
                        text="USD"
                        value="123"
                        onButtonPress={() => alert("todo!")}
                        onChangeText={text => console.log("text", text)}
                        keyboardType="numeric"
                    />

                    <ConversionInput
                        text="GBP"
                        value="123"
                        onButtonPress={() => alert("todo!")}
                        editable={false}
                    />

                    <Text style={styles.text}>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date), 'MMM do, yyyy')}`}</Text>

                    <Button
                        text='Reverse Currencies'
                        onPress={() => alert('todo')}
                    />
                    {/* <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} /> */}
                </View>
            </ScrollView>

        </View>
    )
}