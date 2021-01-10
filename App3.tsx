import React, { useState, FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalInput from './components/Goalinput';
import GoalItem from './components/GoalItem';

export type CourseGoalItemType = {
  uuid: string;
  value: string;
};

const App: FC = () => {
  const [courseGoals, setCourseGoals] = useState<CourseGoalItemType[]>([]);

  const addGoalToList = (enteredGoal: string) => {
    if (!enteredGoal.trim()) return;
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { uuid: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const removeGoalFromList = (goalId: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter(({ uuid }) => goalId !== uuid)
    );
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalToList={addGoalToList} />
      <FlatList
        keyExtractor={(item, index) => `${item.uuid}_${index}`}
        // keyExtractor={(_, index) => index.toString()}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            // onDelete={removeGoalFromList.bind(this, itemData.item.uuid)}
            // onDelete={() => removeGoalFromList(itemData.item.uuid)}
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
