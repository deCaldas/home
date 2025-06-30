import {
  ListItem,
  Link,
  List,
  Container,
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue,
  AspectRatio,
  Divider
} from '@chakra-ui/react'
import LayoutMain from '../components/layouts/main'
import { WorkGridItem } from '../components/grid-item'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { Meta } from '../components/jobsTemplate'
import MatrixRain from '../components/MatrixRain'

/* Imgs */
import contactNet_Angeliana from '../public/images/contactNet_Angeliana.png'
import mostlyEntertainment from '../public/images/mostlyEntertainment.png'
import landingsForAutomotiveWorkshops from '../public/images/landingsForAutomotiveWorkshops.png'

const Development = () => (
  <LayoutMain title="portfolio">
    <Container mt="73" mb="23">
      <Section>
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
            {' Hello World! '}
          </Box>
        </Heading>      

        <AspectRatio ratio={7}>
          <MatrixRain />
        </AspectRatio>
      </Section>

      <Divider borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')} marginY={7} />

      <Section>
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
      </Section>

      <Section>
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
      </Section>

      <Divider borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')} marginY={7} />

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
      <Divider borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')} marginY={7} />
    </Container>
  </LayoutMain>
)

export default Development
export { getStaticProps } from '../components/chakra'
