import React, { FC, useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

interface GoalInputProps {
  addGoalToList: (enteredGoal: string) => void;
}

const GoalInput: FC<GoalInputProps> = ({ addGoalToList }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const handleOnChangeText = (text: string) => {
    setEnteredGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={handleOnChangeText}
        value={enteredGoal}
      />
      {/* <Button
        title="ADD"
        onPress={() => {
          addGoalToList(enteredGoal);
          setEnteredGoal('');
        }}
      /> */}
      <Button title="ADD" onPress={addGoalToList.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
