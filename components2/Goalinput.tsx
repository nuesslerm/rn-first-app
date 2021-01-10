import React, { FC, useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { CourseGoalItemType } from '../App2';

interface GoalInputProps {
  setCourseGoals: React.Dispatch<React.SetStateAction<CourseGoalItemType[]>>;
}

const GoalInput: FC<GoalInputProps> = ({ setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const handleOnChangeText = (text: string) => {
    setEnteredGoal(text);
  };

  const addGoalToList = () => {
    if (!enteredGoal.trim()) return;
    // we don't even need to have access to courseGoals as props, because
    // we already know the current state of the courseGoals when we use setCourseGoals
    // currentGoals -> currentState === courseGoals as defined in App component
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uuid: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.textInput}
        onChangeText={handleOnChangeText}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={addGoalToList} />
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
