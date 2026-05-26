import Head from 'next/head'
import NavBar from '../navbar'
import { Container } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
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
const LayoutMain = ({ children }) => {
  const { onOpen } = useDisclosure()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of Armando Toro Cárdenas, web developer with solid knowledge of the JavaScript ecosystem." />
        <link
          rel="icon"
          type="url"
          href="https://pbs.twimg.com/media/FlFT-KJWIAADq21?format=webp&name=tiny"
        />
        <meta name="twitter:title" content="Armando Toro Cárdenas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@d_caldasCaridad" />
        <meta name="twitter:creator" content="@d_caldasCaridad" />
        <meta
          name="twitter:image"
          content="https://github.com/deCaldas/home/blob/main/pages/opengraph-imalogo.png?raw=true"
        />
        <meta property="og:site_name" content="Armando Toro Cárdenas" />
        <meta name="og:title" content="Armando Toro Cárdenas" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://github.com/deCaldas/home/blob/main/pages/opengraph-imalogo.png?raw=true"
        />
        <title>Armando&apos;s Homepage</title>
      </Head>
      <NavBar />
      <Container>
        <br />
        {children}
      </Container>
      <Footer onOpen={onOpen} />
    </>
  )
}

export default LayoutMain
