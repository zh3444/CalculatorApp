import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default App;
