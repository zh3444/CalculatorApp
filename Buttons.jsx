import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Styles } from './Styles';

function Buttons({ onPress, title }) {
    return (
        <TouchableOpacity onPress={onPress} style={Styles.button}>
            <Text style={Styles.text}> {title} </Text>
        </TouchableOpacity>
    );
};

export default Buttons;