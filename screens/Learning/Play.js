import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import MyWords from '../../tests/testData';
import WordCard from '../../components/WordCard';

export default function Play({ words }) {
  const [wordsToStudy, setWordsToStudy] = useState(() =>
    (words ? words : MyWords).filter((el) => el.status < 2));

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  return (
    <View style={styles.container}>
      {wordsToStudy.length === 0 ? (
        <>
          <Text style={[styles.text, { alignSelf: 'center' }]}>Congrats!</Text>
          <Text style={styles.text}>For now you have learnt all the words</Text>
        </>
      ) : (
        <WordCard
          wordInfo={wordsToStudy[currentWordIndex]}
          setNext={() =>
            setCurrentWordIndex((currentWordIndex) =>
              (currentWordIndex + 1) % wordsToStudy.filter((el) => el.status < 2).length)
          }
          changeWordStatus={() => 
            setWordsToStudy((prevWords) => {
              newState = [...prevWords];
              ++newState[currentWordIndex].status;
              return newState.filter((el) => el.status < 2);
            })
          }
        />
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  text: {
    color: COLORS.fontMain,
    fontSize: 22,
    margin: 10,
    marginTop: 25,
  },
});
