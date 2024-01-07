import { FlatList } from 'react-native';

import ItemSeparator from '../ItemSeparator';
import ReviewItem from './ReviewItem';

const ReviewList = ({ reviews, isUserList = false, ...props }) => {
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <ReviewItem review={item} isUserList={isUserList} />
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={props.children && (() => props.children)}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default ReviewList;
