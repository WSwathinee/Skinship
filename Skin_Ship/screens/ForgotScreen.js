import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ForgotScreen = () => {
    return (
      <View style={styles.container}>
        <Text>CardListScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ForgotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});