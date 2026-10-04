/**
 * Central branding for the app. Change the name, tagline, and colors here
 * and they apply across every screen.
 *
 * Note: the native app name, bundle identifier, and icons are configured
 * separately in app.json, android/, and ios/ (see README "Rebranding").
 */

// Kanikonriio brand palette
export const palette = {
  purple: '#8041FF',
  cream: '#FFFEF0',
  yellow: '#ECD54D',
  pink: '#F88FCE',
  peach: '#F9BA8F',
  blue: '#92B3F6',
};

export const brand = {
  name: 'Kanikonriio Notes',
  tagline: 'good mind',
  colors: {
    // Buttons, header bar, and your chat bubbles
    primary: palette.purple,
    // Header bar background
    header: palette.purple,
    // Active tab indicator and small highlights
    highlight: palette.yellow,
    // Assistant chat bubbles
    secondary: '#3A2470',
    // Recording / destructive actions
    danger: '#C7368C',
    // Links in AI responses
    link: palette.blue,
    // Screen backgrounds (deep brand-tinted violet)
    background: '#170D30',
    // Input bars and bottom panels
    backgroundDeep: '#0E0720',
    // Cards, inputs, and menus
    surface: '#271A4A',
    border: '#3A2A63',
    text: palette.cream,
    textSoft: '#D9D2EC',
    textMuted: '#B3A8D1',
    textFaint: '#7D6FA3',
  },
};

export const colors = brand.colors;
