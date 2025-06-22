import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  const [goalsText, setGoalText] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);

  function getInputHandler(enteredText: string) {
    setGoalText(enteredText)
  }

  const addGoalHandler = () => {
    if (goalsText !== "") {
      setGoals(currentGoals => [...currentGoals, goalsText]);
      setGoalText("")
    } else {
      return;
    }
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add goal'
          style={styles.textInput}
          value={goalsText}
          onChangeText={getInputHandler}
        />
        <Button
          title='Add GOAL'
          onPress={addGoalHandler}
        />
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeader}>List of goals</Text>

        <ScrollView style={styles.goalsListContainer}>
          {goals.map(goal => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingInline: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    // flex: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8
  },
  goalsHeader: {
    color: "#2391cf",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 8,
    marginBottom: 16
  },
  goalsContainer: {
    // flex: 80
  },
  goalsListContainer: {
    flexDirection: 'column'
  },
  goalItem: {
    borderRadius: 8,
    backgroundColor: "#615ed5",
    padding: 16,
    marginBottom: 16,
  },
  goalText: {
    color: "white",
    fontSize: 20,
    fontWeight: 500
  }
});
