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
      href={href}
      scroll={false}
      p={9}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
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
      w="100%"
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        marginTop={1}
      >
        <Flex align="center" mr={5}>
            <Branding />
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
        >
          <LinkItem borderRadius="lg" mb={1} p={1} href={'/portfolio'}>
            Portfolio
          </LinkItem>
          <LinkItem
            borderRadius="lg"
            mb={1}
            p={1}
            href={'https://web-developer-blog.vercel.app/'}
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
                  href={'/portfolio'}
                  flex={1}
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  Portfolio
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  href={'https://web-developer-blog.vercel.app/'}
                  flex={1}
                  borderRadius="lg"
                  mb={1}
                  p={1}
                  textAlign="center"
                  bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
                  css={{ backdropFilter: 'blur(10px)' }}
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
