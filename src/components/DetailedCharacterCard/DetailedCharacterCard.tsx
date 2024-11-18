import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './DetailedCharacterCard.styled';
import DetailedCharacterCardProps from '../../types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAtom } from 'jotai';
import { likedCharactersAtom } from '../../state/likedCharactersAtom';

const DetailedCharacterCard: React.FC<DetailedCharacterCardProps> = ({
    id,
    name,
    status,
    species,
    image,
    gender,
    origin,
    onLikePress,
}) => {
    const [likedCharacters, setLikedCharacters] = useAtom(likedCharactersAtom);
    const isLiked = likedCharacters.includes(id);
    const toggleLike = () => {
        if (isLiked) {
            setLikedCharacters(likedCharacters.filter((charId) => charId !== id));
        } else {
            setLikedCharacters([...likedCharacters, id]);
        }
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.labelSmall}>NAME</Text>
                    <Text style={styles.heading}>{name}</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.detailItem}>
                        <Text style={styles.label}>STATUS</Text>
                        <Text style={styles.value}>{status}</Text>
                    </View>
                    <View style={[styles.detailItem, origin.length > 15 ? styles.longDetailItem : null]}>
                        <Text style={styles.label}>ORIGIN</Text>
                        <Text style={[styles.value, origin.length > 19 ? styles.longValue : null]}>{origin}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.label}>SPECIES</Text>
                        <Text style={styles.value}>{species}</Text>
                    </View>
                    <View style={styles.detailItem}>
                        <Text style={styles.label}>GENDER</Text>
                        <Text style={styles.value}>{gender}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[styles.likeButton, isLiked ? styles.likedButton : null]} onPress={toggleLike}>
                <Icon name={isLiked ? 'star' : 'star-o'} size={16} color={isLiked ? '#FFD700' : '#fff'} />
                <Text style={styles.likeButtonText}>
                    {isLiked ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailedCharacterCard;