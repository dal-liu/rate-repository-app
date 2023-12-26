import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  normalBorder: {
    borderColor: 'darkgray',
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error ? styles.errorBorder : styles.normalBorder,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
