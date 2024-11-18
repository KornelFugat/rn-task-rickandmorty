import React, { useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { styles } from './CharacterList.styled';
import { useNavigation } from '@react-navigation/native';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import { useCharacters } from '../../../../hooks/useCharacters';
import { useSearchCharacters } from '../../../../hooks/useSearchCharacters';
import { useFilteredCharacters } from '../../../../hooks/useFilteredCharacters'
import { CharacterListStackNavigationProp } from '../../CharacterList.routes';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import CharactersFilter from '../../../../components/CharactersFilter/CharactersFilter';
import FilterButton from '../../../../components/FilterButton/FilterButton';


const CharacterListScreen = () => {
    const { navigate } = useNavigation<CharacterListStackNavigationProp>();
    const [searchQuery, setSearchQuery] = useState('');
    const { searchResults, isSearching, error: searchError } = useSearchCharacters(searchQuery);
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useCharacters();
    const [isCharactersFilterVisible, setCharactersFilterVisible] = useState(false);
    const [filters, setFilters] = useState({ status: '', species: '' });
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

    const characters =
        searchResults.length > 0 ? searchResults : data?.pages?.flatMap((page) => page.results) || [];
    const filteredCharacters = useFilteredCharacters(characters, filters);

    const handleClearSearch = () => setSearchQuery('');
    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
        setCharactersFilterVisible(false);
    };

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
            {isSearching ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                </View>
            ) : searchError ? (
                <Text style={{ textAlign: 'center', margin: 20 }}>{searchError}</Text>
            ) : (
                <FlatList
                    style={styles.list}
                    data={filteredCharacters}
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
                    onEndReached={() => {
                        if (hasNextPage) fetchNextPage();
                    }}
                    ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
                    showsVerticalScrollIndicator={false}
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

export default CharacterListScreen;
