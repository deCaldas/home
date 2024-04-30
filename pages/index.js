import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
/* import { ArrowRightIcon } from '@chakra-ui/icons' */

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Diego Whiskey</Heading>
          <Paragraph>[ Entrepreneurship | Researcher | Artist ]</Paragraph>
          <Heading as="h6" variant="caption">Full Stack web Developer with Specialization in JavaScript and Data Engineering</Heading>
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
          Let me introduce an exceptional professional who is passionate about web development and databases. If you are looking for a valuable asset to any team in web development, you should definitely check him out. Outside of work, he enjoys recording his voice and singing songs when he&apos;s offline.
        </Paragraph>
      </Section>
      <Box display={{ md: 'flex' }}>
        <Heading>
          &#128152;
          <Button
            flex={1}
            align="right"
            borderRadius="lg"
            borderWidth={2}
            borderStyle="solid"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
            css={{ backdropFilter: 'blur(10px)' }}
            onClick={() => window.open("https://aite-artistadelhiphop.blogspot.com/", "_blank")}
          >
            <Link>
              Hip Hop Art &amp; Rap Music
            </Link>
          </Button>
        </Heading>
      </Box>
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
          He completed the Research Seed Program at the CTM SENA Calatrava Itag&uuml;&iacute;.
        </BioSection>
        <BioSection>
          <BioYear>{`${new Date().getFullYear()}`}</BioYear>
          Today debuting in the digital world...
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
