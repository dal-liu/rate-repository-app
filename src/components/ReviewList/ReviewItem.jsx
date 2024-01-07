import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
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
  textName: {
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

const ReviewItem = ({ review, isUserList }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{review.rating.toString()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>
          {isUserList ? review.repository.fullName : review.user.username}
        </Text>
        <Text style={styles.textDate}>
          {format(review.createdAt, 'dd.MM.yyyy')}
        </Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
