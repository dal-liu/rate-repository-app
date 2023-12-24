import { Pressable, Text, StyleSheet } from 'react-native';

import theme from '../theme';

const style = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontWeight: theme.fontWeights.bold,
  },
  flexItem: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={style.flexItem} onPress={() => console.log(text)}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
