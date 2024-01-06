import { View, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const SignInForm = ({ onSubmit }) => {
  const buttonStyle = [theme.forms.button, theme.forms.element];

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
      <Pressable onPress={onSubmit} style={buttonStyle}>
        <Text style={theme.forms.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
