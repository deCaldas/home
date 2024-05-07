;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [394],
  {
    3186: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/portfolio/webPage',
        function () {
          return n(7339)
        }
      ])
    },
    6709: function (e, t, n) {
      'use strict'
      n.d(t, {
        h_: function () {
          return Meta
        },
        Dx: function () {
          return Title
        }
      })
      var i = n(5893),
        r = n(1664),
        s = n.n(r),
        a = n(3100),
        l = n(3838),
        o = n(4418),
        c = n(1689),
        d = n(78),
        u = (0, d.I)({
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
          displayName: 'ChevronLeftIcon'
        }),
        h = (0, d.I)({
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
          displayName: 'ChevronRightIcon'
        })
      let Title = e => {
          let { children: t } = e
          return (0, i.jsxs)(a.xu, {
            marginTop: '73px',
            children: [
              (0, i.jsx)(l.r, { as: s(), href: '/portfolio', children: '←' }),
              (0, i.jsxs)('span', { children: [' ', (0, i.jsx)(u, {})] }),
              (0, i.jsx)(o.X, {
                display: 'inline-block',
                as: 'h3',
                fontSize: 20,
                mb: 4,
                children: t
              }),
              (0, i.jsx)(h, {})
            ]
          })
        },
        Meta = e => {
          let { children: t } = e
          return (0, i.jsx)(c.C, { colorScheme: 'green', mr: 2, children: t })
        }
    },
    4786: function (e, t, n) {
      'use strict'
      var i = n(5893),
        r = n(7672),
        s = n(9008),
        a = n.n(s)
      let l = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
      }
      t.Z = e => {
        let { children: t, title: n } = e,
          s = ''.concat(n, ' - De Caldas')
        return (0, i.jsx)(r.E.article, {
          initial: 'hidden',
          animate: 'enter',
          exit: 'exit',
          variants: l,
          transition: { duration: 0.4, type: 'easeInOut' },
          style: { position: 'relative' },
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              n &&
                (0, i.jsxs)(a(), {
                  children: [
                    (0, i.jsx)('title', { children: s }),
                    (0, i.jsx)('meta', { name: 'twitter:title', content: s }),
                    (0, i.jsx)('meta', { property: 'og:title', content: s })
                  ]
                }),
              t
            ]
          })
        })
      }
    },
    5477: function (e, t, n) {
      'use strict'
      var i = n(2729),
        r = n(6829)
      function _templateObject() {
        let e = (0, i._)([
          '\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      let s = r.Z.p(_templateObject())
      t.Z = s
    },
    7339: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return m
          }
        })
      var i = n(5893),
        r = n(6979),
        s = n(3100),
        a = n(2498),
        l = n(1689),
        o = n(5197),
        c = n(3838),
        d = n(6393),
        u = n(5555),
        h = n(6709),
        p = n(5477),
        x = n(4786),
        m = !0
      t.default = () =>
        (0, i.jsx)(x.Z, {
          title: 'Homepage',
          children: (0, i.jsx)(r.W, {
            mt: 73,
            children: (0, i.jsxs)(s.xu, {
              borderRadius: 'lg',
              borderWidth: 2,
              borderStyle: 'solid',
              mb: 6,
              p: 3,
              textAlign: 'center',
              bg: (0, a.ff)('whiteAlpha.500', 'blackAlpha.500'),
              css: { backdropFilter: 'blur(3px)' },
              children: [
                (0, i.jsxs)(h.Dx, {
                  children: [
                    'Homepage ',
                    (0, i.jsx)(l.C, { children: '2023-' })
                  ]
                }),
                (0, i.jsx)(p.Z, { children: 'Like mine.' }),
                (0, i.jsxs)(o.aV, {
                  ml: 4,
                  my: 4,
                  children: [
                    (0, i.jsxs)(o.HC, {
                      children: [
                        (0, i.jsx)(h.h_, { children: 'Home' }),
                        (0, i.jsxs)(c.r, {
                          href: 'https://decaldas.github.io/angeliana-alvarez/',
                          target: '_blank',
                          children: [
                            'https://decaldas.github.io/angeliana-alvarez/',
                            ' ',
                            (0, i.jsx)(u.h, { mx: '2px' })
                          ]
                        })
                      ]
                    }),
                    (0, i.jsxs)(o.HC, {
                      children: [
                        (0, i.jsx)(h.h_, { children: 'Stack' }),
                        (0, i.jsx)('span', {
                          children: 'Next.js and GitHub Pages'
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(d.o, {
                  maxW: '640px',
                  ratio: 1.7,
                  my: 4,
                  children: (0, i.jsx)('iframe', {
                    src: 'https://decaldas.github.io/angeliana-alvarez/',
                    title: 'A homepage to my friend',
                    frameBorder: '0',
                    allowFullScreen: !0
                  })
                })
              ]
            })
          })
        })
    },
    5555: function (e, t, n) {
      'use strict'
      n.d(t, {
        h: function () {
          return s
        }
      })
      var i = n(78),
        r = n(5893),
        s = (0, i.I)({
          displayName: 'ExternalLinkIcon',
          path: (0, r.jsxs)('g', {
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeWidth: '2',
            children: [
              (0, r.jsx)('path', {
                d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
              }),
              (0, r.jsx)('path', { d: 'M15 3h6v6' }),
              (0, r.jsx)('path', { d: 'M10 14L21 3' })
            ]
          })
        })
    },
    6393: function (e, t, n) {
      'use strict'
      n.d(t, {
        o: function () {
          return c
        }
      })
      var i = n(5059),
        r = n(5523),
        s = n(3951),
        a = n(5432),
        l = n(7294),
        o = n(5893),
        c = (0, i.G)(function (e, t) {
          let { ratio: n = 4 / 3, children: i, className: c, ...d } = e,
            u = l.Children.only(i),
            h = (0, a.cx)('chakra-aspect-ratio', c)
          return (0,
          o.jsx)(r.m.div, { ref: t, position: 'relative', className: h, _before: { height: 0, content: '""', display: 'block', paddingBottom: (0, s.XQ)(n, e => `${(1 / e) * 100}%`) }, __css: { '& > *:not(style)': { overflow: 'hidden', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }, '& > img, & > video': { objectFit: 'cover' } }, ...d, children: u })
        })
      c.displayName = 'AspectRatio'
    },
    1689: function (e, t, n) {
      'use strict'
      n.d(t, {
        C: function () {
          return c
        }
      })
      var i = n(5059),
        r = n(1639),
        s = n(3179),
        a = n(5523),
        l = n(5432),
        o = n(5893),
        c = (0, i.G)(function (e, t) {
          let n = (0, r.mq)('Badge', e),
            { className: i, ...c } = (0, s.Lr)(e)
          return (0,
          o.jsx)(a.m.span, { ref: t, className: (0, l.cx)('chakra-badge', e.className), ...c, __css: { display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'middle', ...n } })
        })
      c.displayName = 'Badge'
    },
    5197: function (e, t, n) {
      'use strict'
      n.d(t, {
        HC: function () {
          return x
        },
        aV: function () {
          return p
        }
      })
      var i = n(6877),
        r = n(5227),
        s = n(2495),
        a = n(5059),
        l = n(1639),
        o = n(3179),
        c = n(5523),
        d = n(5893),
        [u, h] = (0, r.k)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" '
        }),
        p = (0, a.G)(function (e, t) {
          let n = (0, l.jC)('List', e),
            {
              children: i,
              styleType: r = 'none',
              stylePosition: a,
              spacing: h,
              ...p
            } = (0, o.Lr)(e),
            x = (0, s.W)(i)
          return (0,
          d.jsx)(u, { value: n, children: (0, d.jsx)(c.m.ul, { ref: t, listStyleType: r, listStylePosition: a, role: 'list', __css: { ...n.container, ...(h ? { '& > *:not(style) ~ *:not(style)': { mt: h } } : {}) }, ...p, children: x }) })
        })
      ;(p.displayName = 'List'),
        ((0, a.G)((e, t) => {
          let { as: n, ...i } = e
          return (0, d.jsx)(p, {
            ref: t,
            as: 'ol',
            styleType: 'decimal',
            marginStart: '1em',
            ...i
          })
        }).displayName = 'OrderedList'),
        ((0, a.G)(function (e, t) {
          let { as: n, ...i } = e
          return (0,
          d.jsx)(p, { ref: t, as: 'ul', styleType: 'initial', marginStart: '1em', ...i })
        }).displayName = 'UnorderedList')
      var x = (0, a.G)(function (e, t) {
        let n = h()
        return (0, d.jsx)(c.m.li, { ref: t, ...e, __css: n.item })
      })
      ;(x.displayName = 'ListItem'),
        ((0, a.G)(function (e, t) {
          let n = h()
          return (0,
          d.jsx)(i.J, { ref: t, role: 'presentation', ...e, __css: n.icon })
        }).displayName = 'ListIcon')
    }
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 3186))
    }),
      (_N_E = e.O())
  }
])
