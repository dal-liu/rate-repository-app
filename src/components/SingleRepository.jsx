import { useParams } from 'react-router-native';
import { StyleSheet, View, FlatList } from 'react-native';
import { format } from 'date-fns';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  reviewContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  textContainer: {
    display: 'flex',
    marginLeft: 10,
    flexDirection: 'column',
    flexShrink: 1,
  },
  ratingContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  textUsername: {
    fontWeight: theme.fontWeights.bold,
    marginTop: 3,
  },
  textDate: {
    marginTop: 3,
    color: theme.colors.textSecondary,
  },
  text: {
    marginTop: 3,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <RepositoryItem item={repository} showLink />
      <ItemSeparator />
    </>
  );
};

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating.toString()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textUsername}>{review.user.username}</Text>
        <Text style={styles.textDate}>
          {format(review.createdAt, 'dd.MM.yyyy')}
        </Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);
  const reviews = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  if (!repository) {
    return null;
  }

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default SingleRepository;
