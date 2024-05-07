import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box marginTop="73px">
    <Link as={NextLink} href="/portfolio">
      &larr;
    </Link>
    <span>
      {' '}
      <ChevronLeftIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
    <ChevronRightIcon />
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
