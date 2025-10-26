import { useState, useEffect } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS as COLORS_DARK, COLORS_LIGHT } from "../constants";

function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [colors, setColors] = useState(COLORS_DARK);

  const toggleTheme = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  useEffect(
    () => setColors(isDarkMode ? COLORS_DARK : COLORS_LIGHT),
    [isDarkMode]
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.appBackground }]}>
      <Text style={[styles.caption, { color: colors.fontMain }]}>
        Choose color theme:
      </Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.caption, { color: colors.fontMain }]}>Light</Text>
        <Switch
          trackColor={{ false: colors.grey300, true: colors.primary300 }}
          thumbColor={isDarkMode ? colors.primary900 : colors.grey600}
          ios_backgroundColor={colors.primary200}
          onValueChange={toggleTheme}
          value={isDarkMode}
          style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
        />
        <Text style={[styles.caption, { color: colors.fontMain }]}>Dark</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 100,
  },
  caption: {
    fontSize: 18,
    margin: 30,
  },
});

export default Settings;
