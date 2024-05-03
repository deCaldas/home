import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import wCsJS from '../public/images/jobs/wCsJS-branding.png'
import f101bs from '../public/images/jobs/f101bs-branding.png'
import reveal_js from '../public/images/jobs/reveal_js-serautosFT.png'
import blogs from '../public/images/jobs/deCaldas-blogsProject.png'
import webPage from '../public/images/jobs/network-contact.png'

const Development = () => (
  <Layout title="portfolio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Jobs
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="reveal_js"
            title="Serautos FT"
            thumbnail={reveal_js}
          >
            The website of a passenger transport company. This site was made
            with the technology of reveal.js.
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
      <Heading as="h3" fontSize={20} mb={4}>
        Networking
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
