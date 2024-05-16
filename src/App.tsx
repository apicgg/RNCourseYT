import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, TextInput, View} from 'react-native';
import GoalItem from '../components/GoalItem';

export type Goal = {
  id: string;
  text: string;
};

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const handleAddGoal = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInput}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <Button onPress={handleAddGoal} title="Add Goal" />
      </View>
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});

export default App;
