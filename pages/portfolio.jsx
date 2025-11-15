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
import landingsForAutomotiveWorkshops from '../public/images/landingsForAutomotiveWorkshops.webp'
import contactNet_Angeliana from '../public/images/contactNet_Angeliana.webp'
import webPageForSale from '../public/images/webPageForSale.webp'
import caridad_ui_npm from '../public/images/caridad_ui_npm.webp'
import screenshot_80smusicgallery from '../public/images/screenshot_80smusicgallery.webp'
import aitetalk from '../public/images/aitetalk.webp'
import lawyerslanding from '../public/images/lawyerslanding.webp'
import tupaginawebscreenshot from '../public/images/tupaginawebscreenshot.webp'


const Development = () => (
  <LayoutMain title="portfolio">
    <Container mt="73" mb="23">
      <Section>
        <Heading mt="7" as="h2" fontSize={27} mb={4}>
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

      <Divider
        borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        marginY={7}
      />

      <Section>
        <Heading as="h5" variant="section-title">
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={2}>
          <Section delay={0.1}>
            <WorkGridItem
              id="legalwebsite"
              title="Webs para Firmas Legales"
              thumbnail={lawyerslanding}
            >
              Landing page for selling web plans to lawyers and law firms.
            </WorkGridItem>
          </Section>

          <Divider
            borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
            marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem
              id="tupaginaweb"
              title="Tu Página Web en 7 Días"
              thumbnail={tupaginawebscreenshot}
            >
              Landing page for selling web services.
            </WorkGridItem>
          </Section>

          <Divider
          borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
          marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem id="aitetalk" title="AiTe TALK" thumbnail={aitetalk}>
              AI-powered conversational tutor for learning English, built with
              React and OpenAI API. Ideal project for english learners looking
              to practice realistic conversations without pressure.
            </WorkGridItem>
          </Section>

          <Divider
            borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
            marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem
              id="landingsFor-automotive-workshops"
              title="Landings for Automotive Workshop"
              thumbnail={landingsForAutomotiveWorkshops}
            >
              This&apos;s self-employment, landing page funnel aimed at
              automotive workshops
            </WorkGridItem>
          </Section>

          <Divider
            borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
            marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem
              id="musicgallery"
              title="80's Music Gallery"
              thumbnail={screenshot_80smusicgallery}
            >
              A dynamic web gallery that allows you to interactively browse,
              search, and filter songs using JavaScript.
            </WorkGridItem>
          </Section>

          <Divider
            borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
            marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem
              id="forSale"
              title="Executive Transport Website"
              thumbnail={webPageForSale}
            >
              A full responsive multi-section website for a luxury transport
              company. Includes modal-based service details, client
              testimonials, a dynamic carousel, booking calendar, and WhatsApp
              integration.
            </WorkGridItem>
          </Section>

          <Divider
            borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
            marginY={7}
          />

          <Section delay={0.1}>
            <WorkGridItem
              id="js.wCs"
              title="Web Components Design Systems"
              thumbnail={caridad_ui_npm}
            >
              Built with native Web Components, focused on reusability,
              accessibility, and performance.
              {/* An open-source design system built with native Web Components, focused on reusability, accessibility, and performance. Created to contribute to the JavaScript community and promote modern, framework-agnostic UI development. */}
            </WorkGridItem>
          </Section>

          </SimpleGrid>
        </Section> 

      <Section>
        <Heading as="h5" variant="section-title">
          Networking
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={2}>
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

      <Divider
        borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        marginY={7}
      />

      <Heading as="h5" variant="section-title">
        Passions
      </Heading>

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
        <Heading as="h2" variant="caption">
          <span role="img" aria-label="heart-emoji" style={{ fontSize: '200%' }}>&#128152;</span> 
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
      <Divider
        borderColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
        marginY={7}
      />
    </Container>
  </LayoutMain>
)

export default Development
export { getStaticProps } from '../components/chakra'
