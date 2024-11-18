import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type CharacterDetailsStackParamList = {
    CharacterDetailsScreen: {
        character: {
            id: number;
            name: string;
            status: string;
            species: string;
            image: string;
            gender: string;
            origin: { name: string };
        };
    };
};

export type CharacterDetailsStackNavigationProp =
    NativeStackNavigationProp<CharacterDetailsStackParamList>;

export const CharacterDetailsStackRoutes: {
    [route in keyof CharacterDetailsStackParamList]: route;
} = {
    CharacterDetailsScreen: 'CharacterDetailsScreen',
};
