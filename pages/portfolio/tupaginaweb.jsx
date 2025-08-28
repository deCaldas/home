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
  <LayoutMain title="Tu Página Web en 7 Días">
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
          Tu Página Web en 7 Días <Badge>2025-</Badge>
        </Title>
        <P>Una página web profesional. Una vitrina virtual para tu negocio.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Landing Page</Meta>
            <Link
              href="https://decaldas.github.io/presentaciondeservicios/"
              target="_blank"
            >
              https://decaldas.github.io/presentaciondeservicios/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, HTML5 y CSS3</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://decaldas.github.io/presentaciondeservicios/"
            title="Title here again"
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
