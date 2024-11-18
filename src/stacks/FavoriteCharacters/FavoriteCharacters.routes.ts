import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type FavoriteCharactersStackParamList = {
    FavoriteCharactersScreen: undefined;
    CharacterDetailsStack: NavigatorScreenParams<CharacterDetailsStackParamList>;
};

export type FavoriteCharactersStackNavigationProp =
  NativeStackNavigationProp<FavoriteCharactersStackParamList>;

export const FavoriteCharactersStackRoutes: {
  [route in keyof FavoriteCharactersStackParamList]: route;
} = {
  FavoriteCharactersScreen: 'FavoriteCharactersScreen',
  CharacterDetailsStack: 'CharacterDetailsStack',
};
