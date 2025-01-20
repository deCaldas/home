import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Branding from './branding'
import { MenuLink } from './MenuLink'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      href={href}
      scroll={false}
      target={target}
      p={9}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const {} = props
  return (
    <Box
      position="fixed"
      as="nav"
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      css={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      zIndex={2}
      {...props}
    >
      <Container
        align="center"
        display="flex"
        justify="space-between"
        marginTop={1}
        maxW="container.md"
        wrap="wrap"
      >
        <Flex align="center" mr={5}>
          <Branding />
        </Flex>
        <Stack
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
          width={{ base: 'full', md: 'auto' }}
        >
          <LinkItem
            bg={useColorModeValue('white', 'black')}
            borderRadius="lg"
            href={'/portfolio'}
            mb={1}
            p={1}
          >
            Portfolio
          </LinkItem>
          <LinkItem
            bg={useColorModeValue('white', 'black')}
            borderRadius="lg"
            href={'https://web-developer-blog.vercel.app/'}
            mb={1}
            p={1}
            target="_blank"
          >
            Blog
            <ExternalLinkIcon mx="2px" />
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem
                  as={MenuLink}
                  bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
                  borderRadius="lg"
                  css={{ backdropFilter: 'blur(10px)' }}
                  flex={1}
                  href={'/portfolio'}
                  mb={1}
                  p={1}
                  textAlign="center"
                >
                  Portfolio
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
                  borderRadius="lg"
                  css={{ backdropFilter: 'blur(10px)' }}
                  flex={1}
                  href={'https://web-developer-blog.vercel.app/'}
                  target="_blank"
                  mb={1}
                  p={1}
                  textAlign="center"
                >
                  Blog
                  <ExternalLinkIcon mx="2px" />
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
