import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Logo from './logo'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Heading>
        <div style={{ display: 'inline-flex' }}>
          <a href="https://github.com/deCaldas" target="_blank">
            <IoLogoGithub />
          </a>
          <a href="https://twitter.com/d_caldasCaridad" target="_blank">
            <IoLogoTwitter />
          </a>
        </div>
      </Heading>
      <Logo />
      <div>
        <div style={{ display: 'inline-flex' }}>
          <Link href="https://decaldas.github.io/wCsJS/" target='_blank'>
          </Link>
          &copy;
          {` • `}
          {`${new Date().getFullYear()}`}
          {` • `}
          Diego Whiskey
          {` • `}
          All Rights Reserved
        </div>
      </div>
      <div>
        This website is built based on the <a href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama&apos;s website</a>
      </div>
    </Box>
  )
}

export default Footer