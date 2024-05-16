import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

export type Goal = {
  id: string;
  text: string;
};

const App = () => {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const handleAddGoal = (enteredGoalText: string) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => <GoalItem goal={itemData} />}
          keyExtractor={(item, _index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
