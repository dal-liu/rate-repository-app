import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  element: {
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.element}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.element}
      />
      <Pressable onPress={onSubmit} style={[styles.element, styles.button]}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
