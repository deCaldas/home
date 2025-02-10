import Head from 'next/head'
import NavBar from '../navbar'
import { Container } from '@chakra-ui/react'
import Footer from '../footer'

/**
 * Componente principal de la aplicación.
 *
 * Este componente representa la estructura principal de la página de inicio.
 * Incluye el encabezado, el contenido principal y el pie de página.
 *
 * @param {object} props - Las propiedades del componente.
 * @param {ReactNode} props.children - Los elementos secundarios a renderizar dentro del componente.
 * @param {object} props.router - El objeto de router proporcionado por Next.js.
 * @returns {JSX.Element} - El componente principal renderizado.
 */
const Main = ({ children, router }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Diego's Website" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="clone-editor" content="Diego Whiskey" />
        <link
          rel="icon"
          type="url"
          href="https://pbs.twimg.com/media/FlFT-KJWIAADq21?format=webp&name=tiny"
        />
        <meta name="twitter:title" content="Diego Whiskey" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@d_caldasCaridad" />
        <meta name="twitter:creator" content="@d_caldasCaridad" />
        <meta
          name="twitter:image"
          content="https://github.com/deCaldas/home/blob/main/pages/opengraph-imalogo.png?raw=true"
        />
        <meta property="og:site_name" content="Diego Whiskey" />
        <meta name="og:title" content="Diego Whiskey" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/deCaldas/home/blob/main/pages/opengraph-imalogo.png?raw=true"
        />
        <title>Diego&apos;s Homepage</title>
      </Head>
      <NavBar path={router.asPath} />

      <Container>
        <br />
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default Main
