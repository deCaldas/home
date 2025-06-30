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
import LayoutMain from '../../components/layouts/main'

const Job = () => (
  <LayoutMain title="Automotive Workshops Blog">
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
        <P>
          Un componente crucial en una <strong>estrategia de SEO</strong>. Al
          generar contenido fresco y relevante, utilizar palabras clave
          apropiadas, aumentar los backlinks y optimizar las etiquetas HTML y
          las imágenes, puedes mejorar significativamente la clasificación del
          sitio web en los resultados de búsqueda y, en última instancia,
          aumentar el tráfico y las conversiones
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Automotive Workshops Blog</Meta>
            <Link
              href="https://landings-for-automotive-workshops.vercel.app/"
              target="_blank"
            >
              https://landings-for-automotive-workshops.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScrit, HTML5 y CSS3</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://landings-for-automotive-workshops.vercel.app/"
            title="Web Components"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Container>
  </LayoutMain>
)

export default Job
export { getStaticProps } from '../../components/chakra'
