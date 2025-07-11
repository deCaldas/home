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
  <LayoutMain title="Mostly Entertainment Home Studio">
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
          Mostly Entertainment Home Studio <Badge>2025-</Badge>
        </Title>
        <P>
          Attractive and responsive user interface (UI) design. Clean, efficient
          and well-documented code implementation. SEO techniques were
          implemented to improve the website's visibility in search engines.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Homepage</Meta>
            <Link
              href="https://decaldas.github.io/mostly-entertainment/"
              target="_blank"
            >
              https://decaldas.github.io/mostly-entertainment/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Front-end web development with HTML, CSS and JavaScript</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://decaldas.github.io/mostly-entertainment/"
            title="Mostly Entertainment Home Studio"
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
