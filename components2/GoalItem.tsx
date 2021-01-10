import React, { FC } from 'react';
import { View, Text, ListRenderItemInfo, StyleSheet } from 'react-native';

interface GoalItemProps {
  title: string;
}

const GoalItem: FC<GoalItemProps> = ({ title }) => {
  return (
    <View style={styles.listItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
