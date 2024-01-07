import { useParams } from 'react-router-native';

import RepositoryItem from './RepositoryItem';
import ReviewList from './ReviewList';
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
    <ReviewList reviews={reviews}>
      <RepositoryInfo repository={repository} />
    </ReviewList>
  );
};

export default SingleRepository;
