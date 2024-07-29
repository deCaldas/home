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
/* Imgs Projects */
import wCsJS from '../public/images/jobs/wCsJS-branding.png'
import f101bs from '../public/images/jobs/f101bs-branding.png'
import blogs from '../public/images/jobs/deCaldas-blogsProject.png'
/* Imgs Jobs */
import webPage from '../public/images/jobs/network-contact.png'
import webPageForSale from '../public/images/jobs/webPageForSale.png'

const Development = () => (
  <Layout title="portfolio">
    <Container mt="73" mb="23">
      <Heading as="h3" fontSize={20} mb={4}>
        {/*         <Box borderRadius="lg"
          borderWidth={2}
          borderStyle="solid"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}>
 */}
        Jobs
        {/*         </Box> */}
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="forSale"
            title="Web Page for Sale"
            thumbnail={webPageForSale}
          >
            This website is for sale and is aimed at the passenger
            transportation niche.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      {/*             <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="wCsJS" title="Web Components" thumbnail={wCsJS}>
                        A website built with Web Component technology and in the Latin American language.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="f101bs" title="Finanzas 101 Bots" thumbnail={f101bs}>
                        The website of an algorithmic trader. This site implements a chatbot specialized in financial matters.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="blogs" title="Blogs" thumbnail={blogs}>
                        A website that integrates 3 blogs. This site is loaded dynamically from basic HTML, CSS and JavaScript technologies by manipulating the DOM.
                    </WorkGridItem>
                </Section>
            </SimpleGrid> */}

      <Heading mt="7" as="h3" fontSize={20} mb={4}>
        {/*         <Box borderRadius="lg"
          borderWidth={2}
          borderStyle="solid"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}>
 */}{' '}
        Networking
        {/*         </Box> */}
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="webPage"
            title="Network Contacts"
            thumbnail={webPage}
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
