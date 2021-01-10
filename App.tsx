import React, { useState, FC } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import GoalInput from './components/Goalinput';
import GoalItem from './components/GoalItem';

export type CourseGoalItemType = {
  uuid: string;
  value: string;
};

const App: FC = () => {
  const [courseGoals, setCourseGoals] = useState<CourseGoalItemType[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalToList = (enteredGoal: string) => {
    if (!enteredGoal.length) return;

    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uuid: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalFromList = (goalId: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter(({ uuid }) => goalId !== uuid)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        addGoalToList={addGoalToList}
        visible={isAddMode}
        setIsAddMode={setIsAddMode}
      />
      <FlatList
        keyExtractor={(item, index) => `${item.uuid}_${index}`}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            uuid={itemData.item.uuid}
            onDelete={removeGoalFromList}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
