import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useReviews = () => {
  const { data, loading, refetch } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  const reviews = data ? data.me.reviews.edges.map((edge) => edge.node) : [];

  return { reviews, loading, refetch };
};

export default useReviews;
