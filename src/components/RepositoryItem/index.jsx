import { View, StyleSheet } from 'react-native';

import RepositoryItemDetails from './RepositoryItemDetails';
import RepositoryItemStats from './RepositoryItemStats';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemDetails
        ownerAvatarUrl={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RepositoryItemStats
        forksCount={item.forksCount}
        stargazersCount={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
      />
    </View>
  );
};

export default RepositoryItem;
