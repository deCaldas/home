import { Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Text,
  Stack,
  Box,
  Heading } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box align="center" opacity={0.4} fontSize="sm">
        <Heading>
          <div style={{ display: 'inline-flex' }}>
            <a
              href="https://github.com/deCaldas"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
              <Heading variant="caption">De Caldas</Heading>
            </a>
          </div>
        </Heading>

        <Box aling="center">
          <div>
          This website is built based on the {' '}
          <Link onClick={onOpen} color="blue.400" cursor="pointer" size="sm">
            Takuya Matsuyama&apos;s site
          </Link>
          </div>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg" motionPreset="scale">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>About this site</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Text>
                  This website began as a clone of Takuya Matsuyama&apos;s portfolio — a decision I made consciously and with purpose.
                </Text>
                <Text>
                  Back then, I was just beginning to learn HTML, CSS, and JavaScript. I was eager to create something real and visible.
                  Cloning was not about copying — it was my first hands-on project, my lab, my training ground.
                </Text>
                <Text>
                  Since then, I&apos;ve expanded and transformed the site to reflect my own voice, projects, and identity as a developer.
                  From mastering Git and GitHub to learning Next.js, Chakra UI, React, and web components — this website has been my best teacher.
                </Text>
                <Text>
                  I proudly keep the acknowledgment to Matsuyama in the footer, and I will continue to evolve this platform while staying true to my origin.
                </Text>
                <Text>
                  Thanks to this project, I stepped into the world of web development — and I&apos;ve never looked back.
                </Text>
                <Link href="https://www.craftz.dog/" isExternal color="blue.500">
                  Visit Takuya Matsuyama&apos;s work ↗
                </Link>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  )
}

export default Footer
