import { Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const AppBarLink = ({ text, to }) => {
  return (
    <Link to={to}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarLink;
