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
  <LayoutMain title="Web Components">
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
          Web Components Design Systems<Badge>2023-</Badge>
        </Title>
        <P>Like mine.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Home Page</Meta>
            <Link href="https://decaldas.github.io/caridad-ui/" target="_blank">
              https://decaldas.github.io/caridad-ui/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Web Components of JavaScript</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://decaldas.github.io/caridad-ui/"
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
