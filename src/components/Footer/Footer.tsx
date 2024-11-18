import React from 'react';
import { View, Image } from 'react-native';
import {styles} from './Footer.styled';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};


export default Footer;