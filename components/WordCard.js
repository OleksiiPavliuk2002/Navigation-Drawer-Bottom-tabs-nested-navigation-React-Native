import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { playSound } from "../services/soundHandler";
import { COLORS } from "../constants";

function WordCard({ wordInfo, setNext }) {
  const [showFullInfo, setShowFullInfo] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wordContainer}
        onPress={() => setShowFullInfo(true)}
      >
        <Text style={styles.word}>{wordInfo.word}</Text>
        {showFullInfo && (
          <>
            <Text style={styles.phonetics}>{wordInfo.phonetics}</Text>
            <Pressable
              style={styles.playPressable}
              onPress={() => playSound(wordInfo.audio)}
            >
              <Ionicons
                name="volume-medium-outline"
                size={28}
                color={COLORS.primary900}
              />
            </Pressable>
            <Text style={styles.meaning}>{wordInfo.meaning}</Text>
          </>
        )}
      </Pressable>
      {showFullInfo && (
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => {
              setNext();
              setShowFullInfo(false);
            }}
            style={({ pressed }) => [
              styles.remember,
              {
                backgroundColor: COLORS.secondary800,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Text style={styles.rememberText}>Didn't know it</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowFullInfo(false);
            }}
            style={({ pressed }) => [
              styles.remember,
              {
                backgroundColor: COLORS.primary900,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <Text style={styles.rememberText}>Knew it</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wordContainer: {
    flex: 4,
    borderColor: COLORS.primary200,
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    paddingVertical: 140,
    justifyContent: "space-around",
  },
  word: {
    fontSize: 28,
    color: COLORS.fontMain,
    fontWeight: "800",
  },
  phonetics: {
    fontSize: 18,
    color: COLORS.fontMain,
  },
  meaning: {
    fontSize: 18,
    color: COLORS.fontMain,
  },
  remember: {
    flex: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  rememberText: {
    fontSize: 20,
    color: COLORS.fontInverse,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10,
  },
});


export default WordCard;
