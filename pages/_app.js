import { ColorModeScript } from '@chakra-ui/react'
import Chakra from '../components/chakra'
import theme from '../components/layouts/theme'

// Restaurar el scroll manualmente cuando sea aplicable
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

/**
 * Componente principal que representa el sitio web.
 *
 * Este componente envuelve el diseño principal, las fuentes y la animación de entrada/salida.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {React.Component} props.Component - El componente de la página actual.
 * @param {object} props.pageProps - Las propiedades de la página actual.
 * @param {object} props.router - El objeto de router proporcionado por Next.js.
 * @returns {JSX.Element} - El componente del sitio web renderizado.
 */
function Website({ Component, pageProps, router }) {
  // Función para llevar la página al inicio al cambiar de ruta
  const handleExitComplete = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
  }

  return (
    <Chakra cookies={pageProps}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} key={router.route} />
    </Chakra>
  )
}

export default Website
