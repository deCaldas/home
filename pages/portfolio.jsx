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
import wCsJS from '../public/images/jobs/wCsJS-branding.png'
import f101bs from '../public/images/jobs/f101bs-branding.png'
import contactNet_Angeliana from '../public/images/jobs/contactNet_Angeliana.png'
import webPageForSale from '../public/images/jobs/webPageForSale.png'
import webDeveloperBlog from '../public/images/jobs/web-developer-blog.png'
import mostlyEntertainment from '../public/images/jobs/mostlyEntertainment.png'

const Development = () => (
  <Layout title="portfolio">
    <Container mt="73" mb="23">
      <Heading mt="7" as="h3" fontSize={20} mb={4}>
        <Box borderRadius="lg"
          borderWidth={2}
          borderStyle="solid"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}>
            {' Hola Mundo!! '}
        </Box> 
      </Heading>

      <Divider my={6} />

      <Heading as="h3" variant="section-title">
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="forSale" title="To Job Company Project" thumbnail={webPageForSale}
          >
            This website is for sale and is aimed at the passenger
            transportation niche.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Divider my={6} />

      <Heading as="h3" variant="section-title">
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="mostlyEntertainment" title="Mostly Entertainment Home Studio" thumbnail={mostlyEntertainment}>
            Artistic project.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="webDeveloperBlog" title="Web Developer Blog" thumbnail={webDeveloperBlog}
          >
            A personal blog about web development.
          </WorkGridItem>
        </Section>
{/*         <Section>
          <WorkGridItem id="wCsJS" title="Web Components" thumbnail={wCsJS}>
                A website built with Web Component technology and in the Latin American language.
            </WorkGridItem>
        </Section>
        <Section>
            <WorkGridItem id="f101bs" title="Finanzas 101 Bots" thumbnail={f101bs}>
                The website of an algorithmic trader. This site implements a chatbot specialized in financial matters.
            </WorkGridItem>
        </Section> */}
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
            Web pages to my friends. This page is made possible by Next.js and
            Chakra UI.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Development
export { getStaticProps } from '../components/chakra'
