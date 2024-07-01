import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import plTranslation from './locales/pl/translation.json'
import frTranslation from './locales/ru/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: plTranslation,
    },
    ru: {
      translation: frTranslation,
    },
  },
  lng: 'pl', // default language
  fallbackLng: 'pl',
  debug: true,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
