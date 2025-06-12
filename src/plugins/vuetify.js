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
        light: {
            dark: false,
            colors: {
                primary: '#1976D2',     // Material Blue 700
                secondary: '#424242',   // Material Grey 800
                white: '#FFFFFF',
                background: '#FFFFFF',
                surface: '#F5F5F5',
                error: '#D32F2F',
                info: '#0288D1',
                success: '#388E3C',
                warning: '#FBC02D',
            },
        },
        dark: {
            dark: true,
            colors: {
                primary: '#90CAF9',     // Light Blue 200
                secondary: '#B0BEC5',   // Blue Grey 200
                white: '#121212',
                background: '#121212',
                surface: '#1E1E1E',
                error: '#EF9A9A',
                info: '#81D4FA',
                success: '#A5D6A7',
                warning: '#FFE082',
            },
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
