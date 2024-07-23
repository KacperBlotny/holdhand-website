import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import plTranslation from './locales/pl/translation.json'
import ruTranslation from './locales/ru/translation.json'
import enTranslation from './locales/en/translation.json'
import uaTranslation from './locales/ua/translation.json'

i18n
  .use(LanguageDetector) // Add this line
  .use(initReactI18next)
  .init({
    resources: {
      pl: {
        translation: plTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      en: {
        translation: enTranslation,
      },
      ua: {
        translation: uaTranslation,
      },
    },
    fallbackLng: 'pl',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
