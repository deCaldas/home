import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'

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
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
