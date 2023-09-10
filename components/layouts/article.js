import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

/**
 * Componente de diseño general para páginas.
 *
 * Este componente envuelve el contenido de la página con transiciones de animación
 * y permite configurar un título dinámico para la página.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {string} [props.title] - El título de la página.
 * @param {ReactNode} props.children - Los elementos secundarios a renderizar dentro del componente.
 * @returns {JSX.Element} - El componente de diseño de la página.
 */
const Layout = ({ children, title }) => {
  const pageTitle = title ? `${title} - Diego Toro` : 'Diego Toro';

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {title && (
        <Head>
          <title>{pageTitle}</title>
          <meta name="twitter:title" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
        </Head>
      )}
      {children}
    </motion.article>
  )
}

export default Layout
