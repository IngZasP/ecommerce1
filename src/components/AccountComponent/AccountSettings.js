import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function AccountSettings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});