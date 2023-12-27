import { Pressable, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme';

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text style={style.text}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
