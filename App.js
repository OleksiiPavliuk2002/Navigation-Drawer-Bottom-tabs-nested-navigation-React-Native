import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import WordsNavigation from "./components/WordsNavigation";
import LearningNavigation from "./components/LearningNavigation";
import Settings from "./screens/Settings";

import { COLORS } from "./constants";
import { StatusBar } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={COLORS.appBackground}
        barStyle="light-content"
      />
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {fontWeight: '800'},
          tabBarActiveTintColor: COLORS.primary900,
          tabBarActiveBackgroundColor: COLORS.appBackground,
          tabBarInactiveBackgroundColor: COLORS.appBackground,
          headerStyle: {
            backgroundColor: COLORS.appBackground
          },
          headerTintColor: COLORS.primary900,
          headerTitleAlign: 'center'
        }}
        >
          <Tab.Screen 
          name="Words"
          component={WordsNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="list-outline" color={color} size={size}/>
            )
          }}
          />
          <Tab.Screen 
          name="Learning"
          component={LearningNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="book-outline" color={color} size={size}/>
            )
          }}
          />
          <Tab.Screen 
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="settings-outline" color={color} size={size}/>
            )
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}