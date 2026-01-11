import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { GameScreen } from '../screens/GameScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff6600',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
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
          component={HomeScreen}
          options={({ route }: any) => ({ 
            title: route.params?.slug || 'Category' 
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
