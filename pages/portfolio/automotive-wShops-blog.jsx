import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/jobsTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Job = () => (
  <Layout title="Automotive Workshops Blog">
    <Container mt={73}>
      <Box
        borderRadius="lg"
        borderWidth={2}
        borderStyle="solid"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        css={{ backdropFilter: 'blur(3px)' }}
      >
        <Title>
        Automotive Workshops Blog <Badge>2025-</Badge>
        </Title>
        <P>Un blog es un componente crucial en una <strong>estrategia de SEO</strong>. Al generar contenido fresco y relevante, utilizar palabras clave apropiadas, aumentar los backlinks y optimizar las etiquetas HTML y las imágenes, puedes mejorar significativamente la clasificación de tu sitio web en los resultados de búsqueda y, en última instancia, aumentar el tráfico y las conversiones</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Automotive Workshops Blog</Meta>
            <Link href="here_URL_of_automotive-workshops-Blog" target="_blank">
              here_URL_of_automotive-workshops-Blog <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScrit, HTML5 y CSS3</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="here_URL_of_automotive-workshops-Blog"
            title="Web Components"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Container>
  </Layout>
)

export default Job
export { getStaticProps } from '../../components/chakra'
