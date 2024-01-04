import { View, Pressable, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  element: {
    marginVertical: 5,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.primary,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
});

const CreateReviewForm = ({ onSubmit }) => {
  const buttonStyle = ({ pressed }) => [
    styles.button,
    styles.element,
    pressed && styles.buttonPressed,
  ];

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        style={styles.element}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={styles.element}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.element}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={styles.element}
        multiline
      />
      <Pressable onPress={onSubmit} style={buttonStyle}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
