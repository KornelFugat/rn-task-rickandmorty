import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListStack} from '../CharacterList';
import {FavoriteCharactersStack} from '../FavoriteCharacters';
import NavigatorTabBar from '../../components/NavigatorTabBar/NavigatorTabBar'

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator
          tabBar={(props) => <NavigatorTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="ALL CHARACTERS" component={CharacterListStack} />
          <Tab.Screen name="LIKED CHARACTERS" component={FavoriteCharactersStack} />
        </Tab.Navigator>
  );
};
