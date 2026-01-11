import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { HomeScreen } from '../screens/HomeScreen';
import { CategoryScreen } from '../screens/CategoryScreen';
import { GameScreen } from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerText,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => <ThemeSwitcher />,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'FreeGameHub' }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route }: any) => ({
            title: route.params?.slug?.charAt(0).toUpperCase() + route.params?.slug?.slice(1) || 'Category',
          })}
        />
        <Stack.Screen
          name="Game"
          component={GameScreen}
          options={{ title: 'Play Game' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
