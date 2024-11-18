import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './FilterButton.styled';
import FilterButtonProps from '../../types'

const FilterButton: React.FC<FilterButtonProps> = ({ isOpen, onPress }) => {
    return (
        <TouchableOpacity style={styles.filterButton} onPress={onPress}>
            <View style={styles.buttonContent}>
                <Text style={styles.filterButtonText}>FILTER</Text>
                <Icon
                    name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={14}
                    color="#FFFFFF"
                />
            </View>
        </TouchableOpacity>
    );
};

export default FilterButton;