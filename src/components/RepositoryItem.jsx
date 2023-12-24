import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    display: 'flex',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailsTextContainer: {
    flexShrink: 1,
    marginLeft: 6,
    alignItems: 'flex-start',
  },
  detailsText: {
    marginVertical: 3,
  },
  detailsLanguageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 5,
    marginVertical: 3,
  },
  detailsLanguage: {
    color: 'white',
  },
  detailsAvatar: {
    width: 40,
    height: 40,
    borderRadius: 3,
    marginRight: 6,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statsCountContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  statsCount: {
    marginVertical: 3,
  },
});

const RepositoryItemDetails = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.detailsContainer}>
      <Image style={styles.detailsAvatar} source={{ uri: ownerAvatarUrl }} />
      <View style={styles.detailsTextContainer}>
        <Text fontWeight="bold" style={styles.detailsText}>
          {fullName}
        </Text>
        <Text color="textSecondary" style={styles.detailsText}>
          {description}
        </Text>
        <View style={styles.detailsLanguageContainer}>
          <Text style={styles.detailsLanguage}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

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
    <View style={styles.statsContainer}>
      <View style={styles.statsCountContainer}>
        <Text fontWeight="bold" style={styles.statsCount}>
          {roundCount(stargazersCount)}
        </Text>
        <Text style={styles.statsCount}>Stars</Text>
      </View>
      <View style={styles.statsCountContainer}>
        <Text fontWeight="bold" style={styles.statsCount}>
          {roundCount(forksCount)}
        </Text>
        <Text style={styles.statsCount}>Forks</Text>
      </View>
      <View style={styles.statsCountContainer}>
        <Text fontWeight="bold" style={styles.statsCount}>
          {roundCount(reviewCount)}
        </Text>
        <Text style={styles.statsCount}>Reviews</Text>
      </View>
      <View style={styles.statsCountContainer}>
        <Text fontWeight="bold" style={styles.statsCount}>
          {roundCount(ratingAverage)}
        </Text>
        <Text style={styles.statsCount}>Rating</Text>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text> */}
      <RepositoryItemDetails
        ownerAvatarUrl={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RepositoryItemStats
        forksCount={item.forksCount}
        stargazersCount={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
      />
    </View>
  );
};

export default RepositoryItem;
