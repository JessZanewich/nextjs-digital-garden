const typeTokens = {
  fontFamily: 'Montserrat, sans-serif'
}

export default {
  light: {
    ...typeTokens,
    background: '#F7F9FB',
    text10: '#31708E',
    text20: '#687864',
    rule: 'rgba(0, 0, 0, 0.1)',
    green10: '#ef233c',
    highlightBackground: '#ABEF70'
  },
  dark: {
    ...typeTokens,
    background: '#1A1A1D',
    text10: '#C3073F',
    text20: '#8D8741',
    rule: 'rgba(255, 255, 255, 0.1)',
    green10: '#79BB40',
    highlightBackground: '#ABEF70'
  }
}
