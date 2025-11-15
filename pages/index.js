import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import LayoutMain from '../components/layouts/main'
import Section from '../components/section'
import Image from 'next/image'
import { ExternalLinkIcon } from '@chakra-ui/icons'

/* Imgs */
import certificate_ctm_sena from '../public/images/certificate_ctm_sena.webp'
import full_stack from '../public/images/full_stack.webp'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <LayoutMain>
      <Container marginTop="73px" marginBottom="23px">
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" marginLeft="7px" variant="page-title">
              Armando Toro C&aacute;rdenas
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
            out. {''}
            <Link href="https://decaldas.github.io/mostly-entertainment/" target="_blank">
              Outside of work, he enjoys recording and singing songs of rap music.
            <ExternalLinkIcon mx="2px" />
            </Link>
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
            He completed the {''}  
            
              <Link 
                onClick={onOpen} 
                cursor="pointer" 
                color="blue.500"
              >
                Research Seed Program at the CTM SENA Calatrava, Itag&uuml;&iacute;.
              </Link>
            
            <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size="lg"
            motionPreset="scale"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Ejecución de Proyectos Investigativos</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack>
                    <Box 
                      position="relative" 
                      width="100%" 
                      height="300px" 
                      mb={4}
                      borderRadius="md"
                      overflow="hidden"
                      border="1px solid"
                      borderColor={useColorModeValue('gray.200', 'gray.600')}
                      boxShadow="md"
                    >
                      <Image
                        src={certificate_ctm_sena}
                        alt="Certificado Ejecución de Proyectos Investigativos - CTM SENA Calatrava"
                        layout="fill"
                        objectFit="contain"
                        quality={85}
                        placeholder="blur"
                      />
                    </Box>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </BioSection>

          <BioSection>
            <BioYear>2023</BioYear>
            Also certificated as {''}
            <Link 
                onClick={onOpen} 
                cursor="pointer" 
                color="blue.500"
              >
                Full Stack Developer with JavaScript
              </Link>
              {''} by Platzi (online education platform).
            <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size="lg"
            motionPreset="scale"
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Full Stack Developer with JavaScript</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack>
                    <Box 
                      position="relative" 
                      width="100%" 
                      height="300px" 
                      mb={4}
                      borderRadius="md"
                      overflow="hidden"
                      border="1px solid"
                      borderColor={useColorModeValue('gray.200', 'gray.600')}
                      boxShadow="md"
                    >
                      <Image
                        src={full_stack}
                        alt="Certificado Full Stack Developer with JavaScript - Platzi"
                        layout="fill"
                        objectFit="contain"
                        quality={85}
                        placeholder="blur"
                      />
                    </Box>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </BioSection>

          <BioSection>
            <BioYear>{`${new Date().getFullYear()}`}</BioYear>
            Today debuting in the digital world...
          </BioSection>
        </Section>
      </Container>
    </LayoutMain>
  )
}

export default Home
export { getStaticProps } from '../components/chakra'