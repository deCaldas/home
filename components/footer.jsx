import { Box, Heading } from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'

const Footer = () => {
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
          </a>
          <a
            href="https://twitter.com/d_caldasCaridad"
            target="_blank"
            rel="noreferrer"
          >
            {/* <IoLogoTwitter /> */}
          </a>
        </div>
      </Heading>
      <Logo />
      {/* <div>
        <div style={{ display: 'inline-flex' }}>
          &copy;
          {` • `}
          {`${new Date().getFullYear()}`}
          {` • `}
          Diego Toro C&aacute;rdenas
          {` • `}
          All Rights Reserved
        </div>
      </div> */}
      <div>
        This website is built based on the{' '}
        <a href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
          Takuya Matsuyama&apos;s website
        </a>
      </div>
    </Box>
  )
}

export default Footer
