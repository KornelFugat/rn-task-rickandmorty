import { useAtom } from 'jotai';
import { likedCharactersAtom } from '../state/likedCharactersAtom';

export const useLikedCharacters = (allCharacters: any[]) => {
    const [likedCharacterIds] = useAtom(likedCharactersAtom);
    const likedCharacters = allCharacters.filter((character) =>
        likedCharacterIds.includes(character.id)
    );
    return likedCharacters;
};