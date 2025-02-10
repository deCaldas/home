import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
/* Imgs */
import contactNet_Angeliana from '../public/images/contactNet_Angeliana.png'
import mostlyEntertainment from '../public/images/mostlyEntertainment.png'
import landingsForAutomotiveWorkshops from '../public/images/landingsForAutomotiveWorkshops'

const Development = () => (
  <Layout title="portfolio">
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
            This&apos;s self-employment, landing page with three funnels aimed at automotive workshops
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
    </Container>
  </Layout>
)

export default Development
export { getStaticProps } from '../components/chakra'
