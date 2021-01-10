import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface GoalItemProps {
  title: string;
  uuid: string;
  onDelete: (uuid: string) => void;
}

const GoalItem: FC<GoalItemProps> = ({ title, uuid, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, uuid)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
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
