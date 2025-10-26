import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Statistics from "../screens/Learning/Statistics";
import Play from "../screens/Learning/Play";
import { COLORS } from "../constants";

const Drawer = createDrawerNavigator();

function LearningNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: COLORS.primary100,
        drawerInactiveTintColor: COLORS.fontMain,
        drawerActiveBackgroundColor: COLORS.primary300,
        drawerInactiveBackgroundColor: COLORS.appBackground,
        drawerStyle: { backgroundColor: COLORS.primary200, width: 140, height: 130 },
        headerStyle: { backgroundColor: COLORS.appBackground },
        headerTintColor: COLORS.primary900,
        headerTitleAlign: "center",
        headerTitleStyle: {fontWeight: '800'},
        contentStyle: {backgroundColor: COLORS.appBackground}
      }}
    >
      <Drawer.Screen
        name="Statistics"
        component={Statistics}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Play"
        component={Play}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="play" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default LearningNavigation;