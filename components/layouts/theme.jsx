import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#e5e7e9', '#16181c')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 23,
        textUnderlineOffset: 6,
        textDecorationColor: '#5f666f',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      caption: {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 4
      },
      title: {
        fontSize: 23,
        marginTop: 3,
        marginBottom: 4,
        marginLeft: 3,
        marginRight: 7,
        textDecoration: 'none'
      }
    }
  },

  Link: {
    baseStyle: props => ({
      color: mode('#030e61', '#ffff00')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  //TO DO: cuadrar las fuentes
  branding: 'M PLUS Rounded 1c',
  inNavBar: '',
  inBody: ''
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
