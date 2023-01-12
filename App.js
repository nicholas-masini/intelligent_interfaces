// Importing components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing the necessary screens
import Home from './src/screens/Home.js'
import HomeCrime from './src/screens/HomeCrime.js';
import Login from './src/screens/Login.js'

const Stack = createNativeStackNavigator();

const screen_options = {
  title: 'SmartLibrary',
  headerStyle: { backgroundColor: "#959CD6" },
  headerTitleStyle: { fontSize: "25" },
  headerBackVisible: false,
}

// This is the entry point of the React Native application.
// Here you do not need to touch anything, unless you are adding another screen, in which you would have to add another
// 'Stack.Screen' component inside 'Stack.Navigator', with the appropriate name
// For more information, see: https://reactnative.dev/docs/navigation
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {/* Here I am specifying a screen with the name Login, and the component to be used, which is the Login component imported. */}
          {/* You can ignore the 'options' property, they need to be the same for every screen except the login, as they define the header. */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: '', 
              headerStyle: { backgroundColor: "transparent" },
              headerShown: false
            }}
          />
          {/* Another screen is specified, with the 'Home' component */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={screen_options}
          />
          <Stack.Screen
            name="HomeCrime"
            component={HomeCrime}
            options={screen_options}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
