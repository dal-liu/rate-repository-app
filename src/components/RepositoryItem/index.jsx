import { View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import RepositoryItemDetails from './RepositoryItemDetails';
import RepositoryItemStats from './RepositoryItemStats';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
  buttonPressed: {
    opacity: 0.85,
  },
});

const RepositoryItem = ({ item, showLink }) => {
  const buttonStyle = ({ pressed }) => [
    styles.button,
    pressed && styles.buttonPressed,
  ];

  const openLink = () => {
    Linking.openURL(item.url);
  };

  return (
    <View style={styles.container} testID="repositoryItem">
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
      {showLink && (
        <Pressable onPress={openLink} style={buttonStyle}>
          <Text style={styles.text}>Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
