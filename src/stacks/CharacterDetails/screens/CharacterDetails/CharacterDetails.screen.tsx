import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './CharacterDetails.styled';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailedCharacterCard from '../../../../components/DetailedCharacterCard/DetailedCharacterCard';

const CharacterDetailsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { character } = route.params;

    if (!character) {
    return <Text>No character data found!</Text>;
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.backLinkContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backLink}
                >
                    <Text style={styles.backLinkText}>{'<- Go back to Characters List'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <DetailedCharacterCard
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    origin={character.origin.name}
                    gender={character.gender}
                    image={character.image}
                />
            </View>
        </ScrollView>
    );
};

export default CharacterDetailsScreen;
