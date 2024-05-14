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
  <Layout title="Serautos">
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
          Serautos FT <Badge>2023-</Badge>
        </Title>
        <P>
          A HTML presentation framework, made with reveal.js and deployed in
          Surge.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://serautos.surge.sh/" target="_blank">
              https://serautos.surge.sh/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, reveal.js, Surge</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" ratio={1.2} my={4}>
          <iframe
            src="https://serautos.surge.sh/"
            title="executive transportation company website Serautos"
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
