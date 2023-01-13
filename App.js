// Importing components
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing the necessary screens
import Home from './src/screens/Home.js'
import HomeCrime from './src/screens/HomeCrime.js';
import Login from './src/screens/Login.js'
import Recommended from './src/screens/Recommended.js';
import BookPage from './src/screens/BookPage.js';
import RatingScreen from './src/screens/RatingPage.js';
import Abstract from './src/screens/Abstract.js';
import Statistics from './src/screens/Statistics.js';
import Account from './src/screens/Account.js';
import BookPageCrime from './src/screens/BookPageCrime.js';
import RatingScreenCrime from './src/screens/RatingCrime.js';
import AbstractCrime from './src/screens/AbstractCrime.js';
import StatisticsCrime from './src/screens/StatisticsCrime.js';
import AccountCrime from './src/screens/AccountCrime.js';
import RecommendedCrime from './src/screens/RecommendationsCrime.js';

const Stack = createNativeStackNavigator();

const home_page = {
  title: 'SmartLibrary',
  headerStyle: { backgroundColor: "#959CD6" },
  headerTitleStyle: { fontSize: "25" },
  headerBackVisible: false,
}

const screen_options = {
  title: 'SmartLibrary',
  headerStyle: { backgroundColor: "#959CD6" },
  headerTitleStyle: { fontSize: "25" },
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
            options={home_page}
          />
          <Stack.Screen
            name="HomeCrime"
            component={HomeCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="Recommended"
            component={Recommended}
            options={screen_options}
          />
          <Stack.Screen
            name="Book"
            component={BookPage}
            options={screen_options}
          />
          <Stack.Screen
            name="Rating"
            component={RatingScreen}
            options={screen_options}
          />
          <Stack.Screen
            name="Abstract"
            component={Abstract}
            options={screen_options}
          />
          <Stack.Screen
            name="Statistics"
            component={Statistics}
            options={screen_options}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={screen_options}
          />
          <Stack.Screen
            name="BookCrime"
            component={BookPageCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="RatingCrime"
            component={RatingScreenCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="AbstractCrime"
            component={AbstractCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="StatisticsCrime"
            component={StatisticsCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="AccountCrime"
            component={AccountCrime}
            options={screen_options}
          />
          <Stack.Screen
            name="RecommendedCrime"
            component={RecommendedCrime}
            options={screen_options}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
