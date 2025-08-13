import { useRouter } from 'next/router'

const useLocales = () => {
  const router = useRouter()

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; path=/`
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return { onToggleLanguageClick }
}

export default useLocales
