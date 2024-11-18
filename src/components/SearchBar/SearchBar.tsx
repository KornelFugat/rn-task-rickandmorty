import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './SearchBar.styled';
import SearchBarProps from '../../types'

const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    onClear,
    placeholder = 'Search...',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.outerContainer}>
            <View style={styles.inputBar}>
                <View style={styles.inputContent}>
                    <Icon name="search" size={20} color="#162C1B" style={styles.icon} />
                    <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={isFocused ? '#224229' : '#A9A9A9'}
                    value={value}
                    onChangeText={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    />
                    {value.length > 0 && (
                        <Pressable
                            onPress={onClear}
                            style={({ pressed }) => [
                            styles.clearButton,
                            pressed && styles.clearButtonPressed,
                            ]}
                        >
                            <Icon name="times" size={20} color="#162C1B" />
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

export default SearchBar;
