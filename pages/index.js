import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hi there!! Over here exist a web developer living in Colombia.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Diego Toro Cárdenas
          </Heading>
          <Paragraph>Entrepreneurship</Paragraph>
          <Heading as="h6" variant="caption">
          [Artist | Researcher | Developer]
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
            borderWidth={2}
            borderStyle="solid"
            w="auto"
            h="auto"
            display="inline-block"
                borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="https://pbs.twimg.com/profile_images/1652848752455999488/NOwlzFAI_400x400.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Today I want to introduce you to someone very special, someone who is passionate about web development and programming codes. He is an EcmaScript web developer and although he is still a newcomer to the world of programming, he has shown a great effort to learn and apply his knowledge.
          <br />
          In addition to his love for computer science, this person is also passionate about industrial research, digital marketing, and databases. And while he may seem like an odd combination, his ability to work in different areas allows you to have a broader perspective and a competitive advantage in his work.
          <br />
          But what impresses the most about this person is his dedication and commitment to what he does. He is always willing to learn something new, investigate and improve his skills, which makes him an excellent collaborator and a valuable asset to any work team.
          <br />
          It is certain that this person will continue to grow and develop in the world of programming and industrial research. If you are looking for someone who is passionate and committed in these areas, you should definitely meet them.
          <br />
          When he&apos;s not online, he loves to record your voice into the microphone singing songs.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Antioquia. Colombia.
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          He completed the Research Seed Program at the Furniture Technology Center. SENA Calatrava Itag&uuml;&iacute; Antioquia Colombia.          
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Today debuting in the digital world...
        </BioSection>        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          &#128152;
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://hiphopaite.blogspot.com/" target="_blank">
          Hip Hop Art &amp; Rap Music (LatAm)
          </Link>          
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Follow me on Twitter
        </Heading>
        <List>
          
          <ListItem>
            <Link href="https://twitter.com/d_caldasCaridad" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @d_caldasCaridad (LatAm)
              </Button>
            </Link>
          </ListItem>          
        </List>
          <Heading as="h3" variant="section-title">
            Contact me
          </Heading>
          <Box align="lefht" my={4}>
            <Button
            rightIcon={<IoLogoLinkedin />}
            colorScheme="teal"
            onClick={() => window.open("https://www.linkedin.com/in/torocardo", "_blank")}
            >
              LinkedIn
            </Button>
          </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
