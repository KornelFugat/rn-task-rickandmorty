import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {CharacterListStackRoutes} from './CharacterList.routes';
import {CharacterListScreen} from './screens';
import {CharacterDetailsStack} from '../CharacterDetails';

const Stack = createNativeStackNavigator();

export const CharacterListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterListScreen}
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CharacterListStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
