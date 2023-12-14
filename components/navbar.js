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
  IconButton
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import { HamburgerIcon } from '@chakra-ui/icons'

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
        <Heading as="h1" variant="title">
          <LinkItem href="/">
            De Caldas
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
          <LinkItem
            flex ={1} 
            borderRadius="lg"
            mb={1}
            p={1}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
            css={{ backdropFilter: 'blur(10px)' }}
            href={"https://decaldas.github.io/webDeveloperBlog/"}
          >
            Web Developer Blog
          </LinkItem>
          {/* ** Ejemplo para insertar Icono enlazado **
            <LinkItem href="/posts" path={path}>
            <IoLogoGithub />
            Source (LatAm)
            </LinkItem> 
          */}
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
                <MenuItem                >
                  <LinkItem
                    flex ={1} 
                    borderRadius="lg"
                    mb={1}
                    p={1}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.500')}
                    css={{ backdropFilter: 'blur(10px)' }}
                    href={"https://decaldas.github.io/webDeveloperBlog/"}
                    >
                      Web Developer Blog
                  </LinkItem>
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
