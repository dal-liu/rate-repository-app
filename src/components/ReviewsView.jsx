import ReviewList from './ReviewList';
import useReviews from '../hooks/useReviews';

const ReviewsViewContainer = ({ reviews }) => {
  return <ReviewList reviews={reviews} isUserList />;
};

const ReviewsView = () => {
  const { reviews } = useReviews();

  if (!reviews) {
    return null;
  }

  return <ReviewsViewContainer reviews={reviews} />;
};

export default ReviewsView;
