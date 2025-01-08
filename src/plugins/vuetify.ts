// Vuetify config
import { createVuetify, type ThemeDefinition } from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#F5F5F7',
    surface: '#F5F5F7',
    primary: '#1A67CC',
    secondary: '#5856D6',
    error: '#FF1300',
    info: '#5856D6',
    success: '#4CD964',
    warning: '#FFCC00',
  },
  variables: {
    'main-container': 'white',
  },
}

const customDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#202123',
    surface: '#000',
    primary: '#9ABDF6',
    secondary: '#5856D6',
    error: '#FF1300',
    info: '#5856D6',
    success: '#4CD964',
    warning: '#FFCC00',
  },
  variables: {
    'main-container': 'black',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: customLightTheme,
      dark: customDarkTheme,
    },
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
  components,
  directives,
})
