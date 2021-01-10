import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

interface GoalItemProps {
  title: string;
  uuid: string;
  onDelete: (uuid: string) => void;
}

const GoalItem: FC<GoalItemProps> = ({ title, uuid, onDelete }) => {
  return (
    // <TouchableOpacity onPress={() => onDelete(uuid)}>
    <TouchableOpacity onPress={onDelete.bind(this, uuid)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  /* <TouchableWithoutFeedback>
   * <TouchableNativeFeedback> -> only available on Android
   * <TouchableHighlight
   *   underlayColor={'#b42424f'}
   *   activeOpacity={0.8}
   *   onPress={onDelete}
   * >
   * <TouchableOpacity activeOpacity={0.6} onPress={onDelete}>
   */
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
