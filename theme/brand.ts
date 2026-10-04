/**
 * Central branding for the app. Change the name, tagline, and colors here
 * and they apply across every screen.
 *
 * Note: the native app name, bundle identifier, and icons are configured
 * separately in app.json, android/, and ios/ (see README "Rebranding").
 */

export const brand = {
  name: 'Kanikonriio Notes',
  tagline: 'good mind',
  colors: {
    // Accent used for buttons, active tab indicator, and your chat bubbles
    primary: '#2a6773',
    // Assistant chat bubbles
    secondary: '#7d17b0',
    // Recording / destructive actions
    danger: '#c20a10',
    // Screen and header backgrounds
    background: '#1c1c1c',
    // Cards, inputs, and menus
    surface: '#2c2c2c',
    text: '#fff',
    textMuted: '#999',
  },
};

export const colors = brand.colors;
