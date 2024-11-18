import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './FavoriteCharacters.styled';
import { useLikedCharacters } from '../../../../hooks/useLikedCharacters';
import { useNavigation } from '@react-navigation/native';
import { FavoriteCharactersStackNavigationProp } from '../../FavoriteCharacters.routes';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import { useCharacters } from '../../../../hooks/useCharacters';
import { useFilteredCharacters } from '../../../../hooks/useFilteredCharacters'
import SearchBar from '../../../../components/SearchBar/SearchBar';
import CharactersFilter from '../../../../components/CharactersFilter/CharactersFilter';
import FilterButton from '../../../../components/FilterButton/FilterButton';


const FavoriteCharactersScreen = () => {
    const { navigate } = useNavigation<FavoriteListStackNavigationProp>();
    const { data } = useCharacters();
    const allCharacters = data?.pages?.flatMap((page) => page.results) || [];
    const likedCharacters = useLikedCharacters(allCharacters);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ status: '', species: '' });
    const [isCharactersFilterVisible, setCharactersFilterVisible] = useState(false);

    const handleNavigateToDetails = (item: {
        id: number;
        name: string;
        status: string;
        species: string;
        image: string;
        gender: string;
        origin: { name: string };
        }) => {
            navigate('CharacterDetailsStack', {
                screen: 'CharacterDetailsScreen',
                params: { character: item },
            });
        };

    const handleClearSearch = () => setSearchQuery('');
    const handleApplyFilters = (newFilters: { status: string; species: string }) => {
        setFilters(newFilters);
        setCharactersFilterVisible(false);
    };

    const filteredLikedCharacters = useFilteredCharacters(
        likedCharacters.filter((character) =>
            character.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
        filters
    );


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.header}>Characters</Text>
                <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={handleClearSearch}
                placeholder="Search the characters"
                />
                <FilterButton
                isOpen={isCharactersFilterVisible}
                onPress={() => setCharactersFilterVisible(!isCharactersFilterVisible)}
                />
            </View>
            {filteredLikedCharacters.length === 0 ? (
                <Text style={{ textAlign: 'center', margin: 20 }}>No characters found.</Text>
            ) : (
                <FlatList
                    data={filteredLikedCharacters}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <CharacterCard
                        id={item.id}
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        image={item.image}
                        onPress={() => handleNavigateToDetails(item)}
                        />
                    )}
                />
            )}
            <CharactersFilter
            visible={isCharactersFilterVisible}
            onClose={() => setCharactersFilterVisible(false)}
            onApply={handleApplyFilters}
            />
        </View>
    );
};

export default FavoriteCharactersScreen;
