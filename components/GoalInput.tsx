import React, {useState} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';

type Props = {
  onAddGoal: (enteredGoalText: string) => void;
};

const GoalInput = ({onAddGoal}: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const handleGoalInput = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const handleAddGoal = () => {
    if (enteredGoalText !== '') {
      onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    } else {
      Alert.alert('Put some text to have a goal in your life!');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalInput}
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoalText}
      />
      <Button onPress={handleAddGoal} title="Add Goal" />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
