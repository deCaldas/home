import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/jobsTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Job = () => (
  <Layout title="Serautos">
    <Container>
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
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://serautos.surge.sh/"
          title="executive transportation company website Serautos"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Job
export { getStaticProps } from '../../components/chakra'
