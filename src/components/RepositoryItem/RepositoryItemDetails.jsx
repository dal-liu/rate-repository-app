import { View, StyleSheet, Image } from 'react-native';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContainer: {
    flexShrink: 1,
    marginLeft: 6,
    alignItems: 'flex-start',
  },
  text: {
    marginVertical: 3,
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 5,
    marginVertical: 3,
  },
  languageText: {
    color: 'white',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 3,
    marginRight: 6,
  },
});

const RepositoryItemDetails = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: ownerAvatarUrl }} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold" style={styles.text}>
          {fullName}
        </Text>
        <Text color="textSecondary" style={styles.text}>
          {description}
        </Text>
        <View style={styles.languageContainer}>
          <Text style={styles.languageText}>{language}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItemDetails;
