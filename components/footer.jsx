import { Box, Heading, Link } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = ({ onOpen}) => {
  return (
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

      {/* <div>
        This website is built based on the{' '}
        <Link onClick={onOpen} color="blue.400" cursor="pointer">
          Takuya Matsuyama&apos;s website
        </Link>
      </div> */}
    </Box>
  )
}

export default Footer
