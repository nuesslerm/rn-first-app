import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Course Goal" />
        <Button title="ADD" />
      </View>
      <View />
    </View>
  );
}
