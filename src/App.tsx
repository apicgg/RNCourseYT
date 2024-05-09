import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const handleAddGoal = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoalText]);
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
        {courseGoals.map(goal => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
