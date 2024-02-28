const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const tintColorBlue = '#6677dc';

export default {
  light: {
    dark: false,
    colors: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    }
  },
  dark: {
    dark: true,
    colors: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    }
  },
  blue: {
    dark: false,
    colors: {
      primary: 'rgb(0, 10, 100)',
      card: 'rgb(50, 150, 190)',
      border: 'rgb(216, 216, 216)',
      notification: 'rgb(255, 59, 48)',
      text: '#338',
      background: '#c8ccf7',
      tint: tintColorBlue,
      tabIconDefault: '#ccc',
      tabIconSelected: tintColorBlue,
    }
  },
};
