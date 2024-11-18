import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Pressable, Easing } from 'react-native';
import { styles } from './CharacterCard.styled';
import CharacterCardProps from '../../types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAtom } from 'jotai';
import { likedCharactersAtom } from '../../state/likedCharactersAtom';

const CharacterCard: React.FC<CharacterCardProps> = ({
    id,
    name,
    status,
    species,
    image,
    gender,
    origin,
    onPress,
}) => {
    const [likedCharacters, setLikedCharacters] = useAtom(likedCharactersAtom);
    const isLiked = likedCharacters.includes(id);

    const toggleLike = () => {
        if (isLiked) {
            const newLikedCharacters = likedCharacters.filter((charId) => charId !== id);
            setLikedCharacters(newLikedCharacters);
        } else {
            const newLikedCharacters = [...likedCharacters, id];
            setLikedCharacters(newLikedCharacters);
        }
    };

    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.timing(scaleValue, {
            toValue: 0.95,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
        }).start();
    };

    return (
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={({ pressed }) => [
            styles.card,
            pressed && styles.cardPressed,
            ]}
            >
                <View style={styles.info}>
                    <View style={styles.label}>
                        <Text style={styles.labelSmall}>NAME</Text>
                        <Text style={styles.value}>{name}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.labelSmall}>STATUS</Text>
                        <Text style={styles.value}>{status}</Text>
                    </View>
                    <View style={styles.label}>
                        <Text style={styles.labelSmall}>SPECIES</Text>
                        <Text style={styles.value}>{species}</Text>
                    </View>
                </View>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </Pressable>
            <TouchableOpacity
                style={[styles.likeButton, isLiked && styles.likedButton]}
                onPress={toggleLike}
            >
                <Icon
                name={isLiked ? 'star' : 'star-o'}
                size={16}
                color={isLiked ? '#FFD700' : '#224229'}
                />
                <Text style={styles.likeButtonText}>LIKE</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default CharacterCard;
