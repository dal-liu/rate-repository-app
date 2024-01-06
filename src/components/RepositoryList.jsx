import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import RepositoryItem from './RepositoryItem';
import Text from './Text';
import useRepositories from '../hooks/useRepositories';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  orderButton: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menu: {
    paddingTop: 50,
  },
  searchBar: {
    margin: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, children }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handlePress = (id) => {
    navigate(`/repositories/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable key={item.id} onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={children}
    />
  );
};

const RepositoryList = () => {
  const [orderMessage, setOrderMessage] = useState('Latest repositories');
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 500);
  const { repositories } = useRepositories(
    orderBy,
    orderDirection,
    searchKeyword
  );

  const showMenu = () => setVisible(true);
  const hideMenu = () => setVisible(false);
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <RepositoryListContainer repositories={repositories}>
      <>
        <Searchbar
          placeholder="Search repositories"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
          theme={{ colors: { primary: theme.colors.primary } }}
        />
        <Menu
          visible={visible}
          onDismiss={hideMenu}
          anchor={
            <Pressable onPress={showMenu} style={styles.orderButton}>
              <Text>{orderMessage}</Text>
              {!visible && (
                <MaterialCommunityIcons
                  name="menu-down"
                  size={24}
                  color={theme.colors.textSecondary}
                />
              )}
              {visible && (
                <MaterialCommunityIcons
                  name="menu-up"
                  size={24}
                  color={theme.colors.textSecondary}
                />
              )}
            </Pressable>
          }
          style={styles.menu}
        >
          <Menu.Item
            onPress={() => {
              setOrderMessage('Latest repositories');
              setOrderBy('CREATED_AT');
              setOrderDirection('DESC');
              hideMenu();
            }}
            title="Latest repositories"
          />
          <Menu.Item
            onPress={() => {
              setOrderMessage('Highest rated repositories');
              setOrderBy('RATING_AVERAGE');
              setOrderDirection('DESC');
              hideMenu();
            }}
            title="Highest rated repositories"
          />
          <Menu.Item
            onPress={() => {
              setOrderMessage('Lowest rated repositories');
              setOrderBy('RATING_AVERAGE');
              setOrderDirection('ASC');
              hideMenu();
            }}
            title="Lowest rated repositories"
          />
        </Menu>
      </>
    </RepositoryListContainer>
  );
};

export default RepositoryList;
