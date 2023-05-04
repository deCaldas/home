import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
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
    </Box>
  )
}

export default Main
