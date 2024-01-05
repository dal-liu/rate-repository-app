import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  pressed: {
    opacity: 0.85,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, children }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const pressableStyle = ({ pressed }) => pressed && styles.pressed;

  const handlePress = (id) => {
    navigate(`/repositories/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable
          key={item.id}
          onPress={() => handlePress(item.id)}
          style={pressableStyle}
        >
          <RepositoryItem item={item} />
        </Pressable>
      )}
      ListHeaderComponent={children}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('CREATED_AT DESC');
  const { repositories } = useRepositories(order);

  return (
    <RepositoryListContainer repositories={repositories}>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
        <Picker.Item
          label="Highest rated repositories"
          value="RATING_AVERAGE DESC"
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="RATING_AVERAGE ASC"
        />
      </Picker>
    </RepositoryListContainer>
  );
};

export default RepositoryList;
