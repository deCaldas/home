import {
  ListItem,
  Link,
  List,
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue,
  AspectRatio
} from '@chakra-ui/react'
import LayoutMain from '../components/layouts/main'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
/* Imgs */
import contactNet_Angeliana from '../public/images/contactNet_Angeliana.png'
import mostlyEntertainment from '../public/images/mostlyEntertainment.png'
import landingsForAutomotiveWorkshops from '../public/images/landingsForAutomotiveWorkshops.png'
import MatrixRain from '../components/MatrixRain'
import { Meta } from '../components/jobsTemplate'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Development = () => (
  <LayoutMain title="portfolio">
    <Container mt="73" mb="23">
      
      <Heading mt="7" as="h3" fontSize={20} mb={4}>
        <Box
          borderRadius="lg"
          borderWidth={2}
          borderStyle="solid"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
        >
          {' Hola Mundo!! '}
        </Box>
      </Heading>

      <Divider my={6} />
      
      <AspectRatio ratio={1.7} my={4}>
        <MatrixRain />
      </AspectRatio>

      <Divider my={6} />

      <Heading as="h3" variant="section-title">
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="landingsFor-automotive-workshops"
            title="Landings for Automotive Workshop"
            thumbnail={landingsForAutomotiveWorkshops}
          >
            This&apos;s self-employment, landing page funnel aimed at automotive
            workshops
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="mostlyEntertainment"
            title="Mostly Entertainment Home Studio"
            thumbnail={mostlyEntertainment}
          >
            Artistic project. The website design is based on the principles of
            simplicity, elegance and ease of use. And multimedia content
            integration to enhance user experience
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />

      <Heading as="h3" variant="section-title">
        Networking
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="contactNet_Angeliana"
            title="Angeliana Alvarez Homepage"
            thumbnail={contactNet_Angeliana}
          >
            Web page to my friend. This page is made possible by Next.js and
            Chakra UI.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />

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
          <Heading as="h5" variant="caption">
            <Heading>&#128152;</Heading>
            Hip Hop Art &amp; Rap Music
          </Heading>
          <br />
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Blogpost</Meta>
              <Link
                href="https://aite-artistadelhiphop.blogspot.com/2024/04/cantante-de-rap-profesional-tech.html"
                target="_blank"
              >
                De Las Calles Al Data Center <br />
                Una Odisea Desde El Hip Hop Hasta La Ingenier&iacute;a De Datos{' '}
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
        </Box>
    </Container>
  </LayoutMain>
)

export default Development
export { getStaticProps } from '../components/chakra'
