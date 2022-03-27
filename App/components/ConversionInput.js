import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import colors from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    containerDisabled: {
        backgroundColor: colors.offWhite
    },
    button: {
        backgroundColor: colors.white,
        padding: 15,
        borderRightWidth: 1,
        borderRightColor: colors.border,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blue
    },
    input: {
        padding: 10,
        flex: 1,
        color: colors.textLight
    },
})

export default ConversionInput = ({ text, onButtonPress, ...props }) => {
    const containerStyles = [styles.container]
    if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={styles.input} {...props} />
        </View>
    );
};