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
  <Layout title="Homepage">
    <Container>
      <Title>
        Homepage <Badge>2023-</Badge>
      </Title>
      <P>Like mine.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Home</Meta>
          <Link
            href="https://decaldas.github.io/angeliana-alvarez/"
            target="_blank"
          >
            https://decaldas.github.io/angeliana-alvarez/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js and GitHub Pages</span>
        </ListItem>
      </List>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://decaldas.github.io/angeliana-alvarez/"
          title="A homepage to my friend"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Job
export { getStaticProps } from '../../components/chakra'
