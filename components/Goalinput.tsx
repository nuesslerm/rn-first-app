import React, { FC, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

interface GoalInputProps {
  addGoalToList: (enteredGoal: string) => void;
  visible: boolean;
  setIsAddMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoalInput: FC<GoalInputProps> = ({
  addGoalToList,
  visible,
  setIsAddMode,
}) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const handleOnChangeText = (text: string) => {
    setEnteredGoal(text);
  };

  const handleOnPressAdd = () => {
    addGoalToList(enteredGoal);
    setEnteredGoal('');
  };

  const handleOnPressCancel = () => {
    setIsAddMode(false);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={handleOnChangeText}
          value={enteredGoal}
        />
        <Button title="CANCEL" color="red" onPress={handleOnPressCancel} />
        <Button title="ADD" onPress={handleOnPressAdd} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default GoalInput;
