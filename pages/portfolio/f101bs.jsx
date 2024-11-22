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
  <Layout title="Web de Finanzas Personales">
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
          Web de Finanzas Personales <Badge>2023-</Badge>
        </Title>
        <P>Like mine.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Home</Meta>
            <Link
              href="https://decaldas.github.io/finanzas-101-bots/"
              target="_blank"
            >
              https://decaldas.github.io/finanzas-101-bots/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScrit, HTML5 y CSS3</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://decaldas.github.io/finanzas-101-bots/"
            title="Web de Finanzas Personales"
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
