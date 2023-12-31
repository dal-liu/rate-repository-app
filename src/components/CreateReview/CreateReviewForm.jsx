import { View, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const CreateReviewForm = ({ onSubmit }) => {
  const buttonStyle = ({ pressed }) => [
    theme.forms.button,
    theme.forms.element,
    pressed && theme.forms.buttonPressed,
  ];

  return (
    <View style={theme.forms.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository owner name"
        style={theme.forms.element}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository name"
        style={theme.forms.element}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={theme.forms.element}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={theme.forms.element}
        multiline
      />
      <Pressable onPress={onSubmit} style={buttonStyle}>
        <Text style={theme.forms.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default CreateReviewForm;
