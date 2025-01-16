import {
  ListItem,
  Link,
  List,
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  AspectRatio
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { Meta } from '../components/jobsTemplate'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import MatrixRain from '../components/MatrixRain'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container marginTop="73px" marginBottom="23px">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Diego Whiskey
          </Heading>

          <Heading as="h6" variant="caption">
            Full Stack web Developer and Data Engineering
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 3, md: 0 }}
          ml={{ md: 7 }}
          textAlign="center"
        >
          <Box
            marginTop="23px"
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

      <AspectRatio ratio={1.7} my={4}>
        <MatrixRain />
      </AspectRatio>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Let me introduce an exceptional professional who is passionate about
          web development and databases. If you are looking for a valuable asset
          to any team in web development, you should definitely check him out.
          Outside of work, he enjoys recording his voice and singing songs when
          he&apos;s offline.
        </Paragraph>
      </Section>
      <Box
        display={{ md: 'flex' }}
        align="right"
        borderColor={useColorModeValue('blackAlpha.900', 'whiteAlpha.900')}
        borderRadius="lg"
        borderWidth={2}
        borderStyle="solid"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        css={{ backdropFilter: 'blur(7px)' }}
      >
        <Heading>&#128152;</Heading>
        <Heading as="h5" variant="caption">
          Hip Hop Art &amp; Rap Music
        </Heading>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link
              href="https://aite-artistadelhiphop.blogspot.com/2024/04/cantante-de-rap-profesional-tech.html"
              target="_blank"
            >
              De Las Calles Al Data Center <br />
              Una Odisea Desde El Hip Hop Hasta La Ingeniería De Datos{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
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
          He completed the Research Seed Program at the CTM SENA Calatrava
          Itag&uuml;&iacute;.
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
