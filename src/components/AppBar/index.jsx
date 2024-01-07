import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-native';

import AppBarLink from './AppBarLink';
import theme from '../../theme';
import { ME } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';
import AppBarButton from './AppBarButton';

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
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const location = useLocation();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    if (location.pathname === '/createreview') {
      navigate('/');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarLink text="Repositories" to="/" />
        {data && data.me ? (
          <>
            <AppBarLink text="Create a review" to="/createreview" />
            <AppBarLink text="My reviews" to="/reviews" />
            <AppBarButton text="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarLink text="Sign in" to="/signin" />
            <AppBarLink text="Sign up" to="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
