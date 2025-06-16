// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#1976D2',     // Material Blue 700
                    secondary: '#424242',   // Material Grey 800
                    white: '#f5f5f5',
                    black: '#000',
                    background: '#f4f5fa',
                    surface: '#F5F5F5',
                    error: '#D32F2F',
                    info: '#0288D1',
                    success: '#388E3C',
                    warning: '#FBC02D',
                    body: '#f4f5fa',
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: '#90CAF9',     // Light Blue 200
                    secondary: '#B0BEC5',   // Blue Grey 200
                    white: '#121212',
                    black: '#f5f5f5',
                    background: '#1b1a25',
                    surface: '#1E1E1E',
                    error: '#EF9A9A',
                    info: '#81D4FA',
                    success: '#A5D6A7',
                    warning: '#FFE082',
                    body: '#11101b',
                },
            },
        }
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
