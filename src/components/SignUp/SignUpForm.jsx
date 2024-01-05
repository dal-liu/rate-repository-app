import { View, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const SignUpForm = ({ onSubmit }) => {
  const buttonStyle = ({ pressed }) => [
    theme.forms.button,
    theme.forms.element,
    pressed && theme.forms.buttonPressed,
  ];

  return (
    <View style={theme.forms.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={theme.forms.element}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={theme.forms.element}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        secureTextEntry
        style={theme.forms.element}
      />
      <Pressable onPress={onSubmit} style={buttonStyle}>
        <Text style={theme.forms.buttonText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;