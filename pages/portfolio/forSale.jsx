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
  <Layout title="Empresa de Transporte">
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
          Página Web A La Venta <Badge>2023-</Badge>
        </Title>
        <P>
          This site was made with HTML, CSS, JavaScript and diployed in Surge
          technology.
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
            title="executive transportation company website"
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
