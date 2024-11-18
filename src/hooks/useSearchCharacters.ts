import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSearchCharacters = (query: string) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!query) {
            setSearchResults([]); // Clear results if query is empty
        return;
        }

        const fetchCharacters = async () => {
            setIsSearching(true);
            setError(null);
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character/', {
                    params: { name: query },
                });
                setSearchResults(response.data.results);
            } catch (err) {
                setError('No characters found.');
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        };
        const debounceTimeout = setTimeout(fetchCharacters, 500);
        return () => clearTimeout(debounceTimeout);
    }, [query]);

    return { searchResults, isSearching, error };
};
