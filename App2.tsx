import React, { useState, FC } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalInput from './components2/Goalinput';
import GoalItem from './components2/GoalItem';

export type CourseGoalItemType = {
  uuid: string | null;
  value: string;
};

const App: FC = () => {
  const [courseGoals, setCourseGoals] = useState<CourseGoalItemType[]>([]);

  return (
    <View style={styles.screen}>
      <GoalInput setCourseGoals={setCourseGoals} />
      <FlatList
        keyExtractor={(item, index) => `${item.uuid}_${index}`}
        // keyExtractor={(_, index) => index.toString()}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
