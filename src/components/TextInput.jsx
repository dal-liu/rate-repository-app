import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'darkgray',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
