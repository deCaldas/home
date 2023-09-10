import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue,
  Heading
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
/* **
* import { HamburgerIcon } from '@chakra-ui/icons'
* import { IoLogoGithub } from 'react-icons/io5' 
** */

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
  const {} = props 
  /* const { path } = props */
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
          <LinkItem
            href="/"
          >De Caldas
          </LinkItem>
        </Heading>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 1, md: 0 }}
        >
          {/* <IoLogoGithub />
          <LinkItem href="/posts" path={path}>
            Source (LatAm)
          </LinkItem> */}
        </Stack>

{        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            {/* Código para el menú desplegable...
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
                  href="https://github.com/deCaldas"
                  path={path}
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 1 }}
                  pl={2}
                >GitHub
                </MenuItem>
              </MenuList> 
            </Menu> 
            */}
          </Box>
        </Box>
}
      </Container>
    </Box>
  )
}

export default Navbar

