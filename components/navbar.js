import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
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
  const { path } = props
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
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Heading as="h1" variant="title">
            De Caldas
          </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href="https://gist.github.com/deCaldas/0bb8ef5ba499340f457338783aba481a"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 1 }}
            pl={2}
          ><IoLogoGithub />
           Source
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://info-tech-by-diego.blogspot.com/"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 1 }}
            pl={2}
          >Blog
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://gist.github.com/deCaldas/3caee4ae28a47cae84bd9eb582e3c038"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 1 }}
            pl={2}
          >Gist (LatAm)
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
                  target="_blank"
                  as={Link}
                  href="https://gist.github.com/deCaldas/0bb8ef5ba499340f457338783aba481a"
                >Source
                </MenuItem>
                <MenuItem
                target="_blank"
                as={Link}
                href="https://info-tech-by-diego.blogspot.com/"
                >Blog
                </MenuItem>
                <MenuItem
                  target="_blank"
                  href="https://gist.github.com/deCaldas/3caee4ae28a47cae84bd9eb582e3c038"
                  path={path}
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 1 }}
                  pl={2}
                >Gist (LatAm)
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
