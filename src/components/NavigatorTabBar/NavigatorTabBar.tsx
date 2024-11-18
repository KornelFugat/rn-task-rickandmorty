import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavigatorTabBar = ({ state, descriptors, navigation }) => {
    const currentTabRoute = state.routes[state.index];
    const currentTabKey = currentTabRoute.key;
    const descriptor = descriptors[currentTabKey];
    const nestedState = currentTabRoute.state;
    let nestedRouteName = '';

    if (nestedState && nestedState.routes && nestedState.index != null) {
    nestedRouteName = nestedState.routes[nestedState.index].name;
    }

    if (nestedRouteName === 'CharacterDetailsStack') {
    return null;
    }

    return (
        <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#162C1B' }}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                let iconName;
                if (route.name === 'ALL CHARACTERS') {
                    iconName = 'person';
                } else if (route.name === 'LIKED CHARACTERS') {
                    iconName = 'star';
                }
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomWidth: 1,
                            borderBottomColor: isFocused ? '#fff' : '#162C1B',
                        }}
                    >
                        <Icon
                            name={iconName}
                            size={24}
                            color={isFocused ? '#fff' : '#DAE4DC'}
                            style={{ gap: 4 }}
                        />
                        <Text
                        style={{
                            fontSize: 14,
                            fontFamily: 'DMMono-Regular',
                            fontWeight: '400',
                            lineHeight: 18.23,
                            color: isFocused ? '#fff' : '#DAE4DC',
                        }}
                        >
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default NavigatorTabBar;
