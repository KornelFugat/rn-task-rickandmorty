import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/characterApi';

export const useCharacters = () => {
    return useInfiniteQuery({
        queryKey: ['characters'],
        queryFn: ({ pageParam = 1 }) => fetchCharacters(pageParam),
        getNextPageParam: (lastPage) => {
            return lastPage.info.next ? lastPage.info.next.split('=')[1] : undefined;
        },
    });
};