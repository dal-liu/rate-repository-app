import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    mainBackground: '#e1e4e8',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  forms: {
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
      backgroundColor: '#0366d6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0366d6',
    },
    buttonPressed: {
      opacity: 0.85,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
    },
  },
};

export default theme;
