import { FlatList, View, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import Text from './Text';
import useReviews from '../hooks/useReviews';
import useDeleteReview from '../hooks/useDeleteReview';
import theme from '../theme';

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  viewButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    borderColor: theme.colors.error,
  },
});

const UserReviewItem = ({ review, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();

  const viewButtonStyle = [
    theme.forms.button,
    theme.forms.element,
    styles.viewButton,
  ];
  const deleteButtonStyle = viewButtonStyle.concat(styles.deleteButton);

  const createAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            await deleteReview(review.id);
            refetch();
          },
        },
      ]
    );
  };

  return (
    <>
      <ReviewItem review={review} isUserView />
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigate(`/repositories/${review.repository.id}`)}
          style={viewButtonStyle}
        >
          <Text style={theme.forms.buttonText}>View repository</Text>
        </Pressable>
        <Pressable onPress={createAlert} style={deleteButtonStyle}>
          <Text style={theme.forms.buttonText}>Delete review</Text>
        </Pressable>
      </View>
    </>
  );
};

const ReviewsViewContainer = ({ reviews, refetch }) => {
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => (
        <UserReviewItem review={item} refetch={refetch} />
      )}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

const ReviewsView = () => {
  const { reviews, refetch } = useReviews();

  if (!reviews) {
    return null;
  }

  return <ReviewsViewContainer reviews={reviews} refetch={refetch} />;
};

export default ReviewsView;
