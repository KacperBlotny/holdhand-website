import { useTranslation } from 'react-i18next'

const useTranslationHook = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return {
    t,
    changeLanguage,
  }
}

export default useTranslationHook
