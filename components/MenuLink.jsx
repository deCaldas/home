import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { forwardRef } from 'react'

export const MenuLink = forwardRef(function MenuLink(props, ref) {
  return <Link ref={ref} as={NextLink} {...props} />
})
