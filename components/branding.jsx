import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Paragraph from './paragraph'

const BrandingBox = styled.span`
  font-weight: bold;
  font-size: 31px;
  display: inline-flex;
  align-items: center;
  height: 23px;
  line-height: 23px;
  padding: 2px;
`

const Branding = () => {
  return (
    <Link href="/" scroll={false}>
      <BrandingBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          De Caldas
        </Text>
      </BrandingBox>
      <Paragraph>[Web Development]</Paragraph>
    </Link>
  )
}

export default Branding
