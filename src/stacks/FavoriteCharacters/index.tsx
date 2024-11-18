import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FavoriteCharactersStackRoutes} from './FavoriteCharacters.routes';
import {FavoriteCharactersScreen} from './screens';
import {CharacterDetailsStack} from '../CharacterDetails';

const Stack = createNativeStackNavigator();

export const FavoriteCharactersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.FavoriteCharactersScreen}
        component={FavoriteCharactersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={FavoriteCharactersStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};
