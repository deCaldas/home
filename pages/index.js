import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import LayoutMain from '../components/layouts/main'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <LayoutMain>
    <Container marginTop="73px" marginBottom="23px">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" marginLeft="7px" variant="page-title">
            Diego Toro C&aacute;rdenas
          </Heading>
          <Heading as="h6" variant="caption" marginLeft="17px">
            Web Developer
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 3, md: 0 }}
          ml={{ md: 7 }}
          textAlign="center"
        >
          <Box
            margin="3px"
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
          Let me introduce an exceptional web developer. If you are looking for
          a valuable asset to any team in web development, you should check him
          out. Outside of work, he enjoys recording and singing songs of rap
          music.
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
          He completed the Research Seed Program at the CTM SENA Calatrava
          Itag&uuml;&iacute;.
        </BioSection>
        <BioSection>
          <BioYear>{`${new Date().getFullYear()}`}</BioYear>
          Today debuting in the digital world...
        </BioSection>
      </Section>
    </Container>
  </LayoutMain>
)

export default Home
export { getStaticProps } from '../components/chakra'
