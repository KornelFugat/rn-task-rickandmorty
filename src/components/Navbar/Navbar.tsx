import React from 'react';
import { View, Image } from 'react-native';
import {styles} from './Navbar.styled';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

export default Navbar;