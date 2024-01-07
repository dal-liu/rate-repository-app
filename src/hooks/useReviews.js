import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  const reviews = data ? data.me.reviews.edges.map((edge) => edge.node) : [];

  return { reviews, loading };
};

export default useReviews;
