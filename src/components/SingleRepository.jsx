import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import useRepository from '../hooks/useRepository';

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <RepositoryItem item={repository} showLink />
      <ItemSeparator />
    </>
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
