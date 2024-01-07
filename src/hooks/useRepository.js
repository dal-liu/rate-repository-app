import { useQuery } from '@apollo/client';

import { REPOSITORY } from '../graphql/queries';

const useRepository = (variables) => {
  const { data, loading, fetchMore } = useQuery(REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    loading,
  };
};

export default useRepository;
