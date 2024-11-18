import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Checkbox.styled';
import CheckboxProps from '../../types'

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.box, isChecked && styles.checkedBox]}>
                {isChecked && (
                    <Icon
                    name="check"
                    size={14}
                    color="#FFFFFF"
                    />
                )}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

export default Checkbox;