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
  <LayoutMain title="AiTe TALK">
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
          AiTe TALK – Interactive English Tutor with Voice and GPT-3.5
           <Badge>2025-</Badge>
        </Title>
        <P>Innovative SaaS platform that combines voice recognition, speech synthesis, and advanced language models (GPT-3.5-turbo) to create a conversational English tutor. Users can practice pronunciation, grammar, and conversation in real-time, with modes tailored to their level (A1–B2).</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>
              Platform
            </Meta>
            <Link href="https://ai-te-talk.vercel.app/" target="_blank">
              https://ai-te-talk.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>APIs in production environments, Complex SaaS system (auth, DB, payment), Web Speech API.</span>
          </ListItem>
        </List>
        <AspectRatio maxW="640px" height={854} ratio={1.7} my={4}>
          <iframe
            src="https://ai-te-talk.vercel.app/"
            title="Title here again"
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
