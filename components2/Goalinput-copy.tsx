import React, { FC, useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { CourseGoalItemType } from './GoalItem';

interface GoalInputProps {
  setCourseGoals: React.Dispatch<React.SetStateAction<CourseGoalItemType[]>>;
}

const GoalInput: FC<GoalInputProps> = ({ setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const handleOnChangeText = (text: string) => {
    setEnteredGoal(text);
  };

  const addGoalToList = () => {
    // you can also use the function form of the set function, which is
    // prevState => {do something with prevState; return newState;}
    // setCourseGoals((currentState) => [...currentState, enteredGoal]);
    if (!enteredGoal) return;

    setCourseGoals((currentGoals) => [
      ...currentGoals,
      // FlatList expects to receive data as dict with key property
      { uuid: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course GOAAAAALLL"
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
