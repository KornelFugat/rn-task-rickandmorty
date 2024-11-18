import { useMemo } from 'react';

export const useFilteredCharacters = (characters, filters) => {
    const filteredCharacters = useMemo(() => {
        return characters.filter((character) => {
            const matchesStatus =
            !filters.status || character.status.toLowerCase() === filters.status.toLowerCase();
            const matchesSpecies =
            !filters.species || character.species.toLowerCase() === filters.species.toLowerCase();
            return matchesStatus && matchesSpecies;
        });
    }, [characters, filters]);
    return filteredCharacters;
};
