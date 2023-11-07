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
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
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
        Hi there!!
      </Box>
     
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Diego Toro Cárdenas
          </Heading>
          <Paragraph>Web Developer</Paragraph>
          <Heading as="h6" variant="caption">
          [Artist | Researcher | Entrepreneurship]
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
          Let me introduce an exceptional professional who is passionate about web development and databases.
          <br />
          This professional is not only a trained web developer but also a data engineer.
          <br />
          If you are looking for a valuable asset to any team in data engineering and or web development, you should definitely check him out.
          <br />
          Outside of work, he enjoys recording his voice and singing songs when he&apos;s offline.
        </Paragraph>
      </Section>
     
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Caldas Antioquia Colombia
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
     
{/* 
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact through social networks
        </Heading>
        <List>
         <ListItem>
            <Link href="https://github.com/deCaldas" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
                >GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/d_caldasCaridad" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >@d_caldasCaridad (LatAm)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/torocardo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
                >LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          &#128152;
        </Heading>
          <Box align="lefht" my={4}>
            <Button
            colorScheme="teal"
            onClick={() => window.open("https://hiphopaite.blogspot.com/", "_blank")}
            >Hip Hop Art &amp; Rap Music (LatAm)
            </Button>
          </Box>        
      </Section>

    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
