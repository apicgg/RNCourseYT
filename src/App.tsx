import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  console.log('test');
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Icon name="rocket" size={30} color={'green'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
