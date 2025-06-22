import GoalInput from '@/components/GoalInput';
import GoalItem from '@/components/GoalItem';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Igoal {
  text: string;
  id: string;
}

export default function HomeScreen() {
  const [goals, setGoals] = useState<Igoal[]>([]);

  const addGoalHandler = (goalsText: string) => {
    setGoals(currentGoals => [...currentGoals, { text: goalsText, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View>
        <Text style={styles.goalsHeader}>List of goals</Text>

        <FlatList
          data={goals}
          style={styles.goalsListContainer}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => <GoalItem text={itemData.item.text} />}
        />
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
  goalsHeader: {
    color: "#2391cf",
    fontSize: 24,
    fontWeight: 700,
    marginTop: 8,
    marginBottom: 16
  },
  goalsListContainer: {
    flexDirection: 'column'
  },

});
