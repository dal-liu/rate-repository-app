import { useQuery } from '@apollo/client';

import { REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, loading } = useQuery(REPOSITORY, {
    variables: { id },
  });

  const repository = data ? data.repository : undefined;

  return { repository, loading };
};

export default useRepository;