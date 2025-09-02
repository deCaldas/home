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
  <LayoutMain title="title here">
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
          Web Developer <Badge>2025-</Badge>
        </Title>
        <P>
          <strong>Full Stack Developer with JavaScript</strong> certification from Platzi, a training program covering everything from language fundamentals and client-side development to building robust servers and efficient databases.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>
              Diploma - Platzi
            </Meta>
            <Link href="https://platzi.com/@d-caldasCaridad" target="_blank">
              https://platzi.com/@d-caldasCaridad <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, HTML5 and CSS3</span>
          </ListItem>
        </List>
{/*         <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://platzi.com/@d-caldasCaridad"
            title="Full Stack Developer with JavaScript"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </AspectRatio> */}
      </Box>
    </Container>
  </LayoutMain>
)

export default Job
export { getStaticProps } from '../../components/chakra'
