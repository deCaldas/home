import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
  const router = useRouter()
  const currentPath = router.pathname

  const switchTo = currentPath.includes('/es-CO') ? '/en-US' : '/es-CO'

  return (
    <button onClick={() => router.push(switchTo)}>
      Cambiar idioma / Switch language
    </button>
  )
}
