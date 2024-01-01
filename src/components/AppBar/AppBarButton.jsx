import { Pressable, Text, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.85,
    backgroundColor: 'black',
  },
});

const AppBarButton = ({ text, onPress }) => {
  const style = ({ pressed }) => pressed && styles.pressed;

  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarButton;
