import React from 'react';
import Head from 'next/head';
import NavBar from '../navbar';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';

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
        <meta name="description" content="Diego's homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="clone-editor" content="Diego Toro" />
        <link rel="icon" type="url" href="https://pbs.twimg.com/media/FlFT-KJWIAADq21?format=webp&name=tiny" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@d_caldasCaridad" />
        <meta name="twitter:creator" content="@d_caldasCaridad" />
        <meta property="og:site_name" content="Diego Toro" />
        <meta name="og:title" content="Diego Toro" />
        <meta property="og:type" content="website" />
        <title>Diego Toro - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <br />

        {children}

        <Footer />
      </Container>
    </div>
  );
};

export default Main;
