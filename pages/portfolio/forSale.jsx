import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/jobsTemplate'
import P from '../../components/paragraph'
import LayoutMain from '../../components/layouts/main'

const Job = () => (
  <LayoutMain title="Empresa de Transporte">
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
          Executive Transport Website <Badge>2023-</Badge>
        </Title>
        <P>
          Developed as part of a real-world training contract.
          <br />
          <em>
            Note: Project was not deployed due to company liquidation, but
            showcases real-world development and UX design skills.
          </em>
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Web Page</Meta>
            <Link
              href="https://empresa-de-transporte.surge.sh/"
              target="_blank"
            >
              https://empresa-de-transporte.surge.sh/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, CSS, JavaScript and Surge</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.2} my={4}>
          <iframe
            src="https://empresa-de-transporte.surge.sh/"
            title="executive transportation website"
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
