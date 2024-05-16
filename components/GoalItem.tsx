import React from 'react';
import type {ListRenderItemInfo} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Goal} from '../src/App';

type Props = {
  goal: ListRenderItemInfo<Goal>;
};

const GoalItem = ({goal}: Props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
