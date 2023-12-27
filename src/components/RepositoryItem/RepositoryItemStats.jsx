import { View, StyleSheet } from 'react-native';

import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginVertical: 3,
  },
});

const RepositoryItemStats = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const roundCount = (count) => {
    if (count < 1000) {
      return count;
    }
    return `${Math.round((count / 1000) * 10) / 10}k`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {roundCount(stargazersCount)}
        </Text>
        <Text style={styles.text}>Stars</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {roundCount(forksCount)}
        </Text>
        <Text style={styles.text}>Forks</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {roundCount(reviewCount)}
        </Text>
        <Text style={styles.text}>Reviews</Text>
      </View>
      <View style={styles.statContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {roundCount(ratingAverage)}
        </Text>
        <Text style={styles.text}>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryItemStats;
