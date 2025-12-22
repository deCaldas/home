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
  <LayoutMain title="Caridad UI - Design Systems from Web Components">
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
          Caridad UI<Badge>2025-</Badge>
        </Title>
        <P>Design Systems from Web Components.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Home Page</Meta>
            <Link href="https://caridad-ui.js.org/" target="_blank">
              https://caridad-ui.js.org/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Custom Elements, Shadow DOM, HTML Templates, ES Modules</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://caridad-ui.js.org/"
            title="Caridad UI"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Box>
    </Container>
  </LayoutMain>
)

export default Job
export { getStaticProps } from '../../components/chakra'
