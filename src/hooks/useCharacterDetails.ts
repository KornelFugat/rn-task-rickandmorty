import { useQuery } from '@tanstack/react-query';
import { fetchCharacterDetails } from '../api/characterApi';

export const useCharacterDetails = (id: number) => {
    return useQuery({
        queryKey: ['characterDetails', id],
        queryFn: () => fetchCharacterDetails(id),
    });
};