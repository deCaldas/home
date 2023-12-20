import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Heading>
        <div style={{display: 'inline-flex'}}>
          <a href="https://github.com/deCaldas" target="_blank">
            <IoLogoGithub />
          </a>
          <a href="https://twitter.com/d_caldasCaridad" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://www.linkedin.com/in/diegowhiskey" target="_blank">
            <IoLogoLinkedin />              
          </a>
        </div>
      </Heading>
      <div>
        <div style={{display: 'inline-flex'}}>
          <Link href="https://decaldas.github.io/wCsJS/" target='_blank'>
            {" De Caldas "}
          </Link>
          {` • `}
          &copy;
          {` • `}
          {`${new Date().getFullYear()}`}
          {` • `}
        </div>
        <Link href="/">
          Home
        </Link>
      </div>
    </Box>
  )
}

export default Footer