import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" to="/" />
      <AppBarTab text="Sign in" to="/signin" />
    </View>
  );
};

export default AppBar;
