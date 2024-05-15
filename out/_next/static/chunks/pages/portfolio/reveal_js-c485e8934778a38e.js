;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [686],
  {
    4501: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/portfolio/reveal_js',
        function () {
          return n(6695)
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
      var r = n(5893),
        i = n(1664),
        s = n.n(i),
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
          return (0, r.jsxs)(a.xu, {
            marginTop: '73px',
            children: [
              (0, r.jsx)(l.r, { as: s(), href: '/portfolio', children: '←' }),
              (0, r.jsxs)('span', { children: [' ', (0, r.jsx)(u, {})] }),
              (0, r.jsx)(o.X, {
                display: 'inline-block',
                as: 'h3',
                fontSize: 20,
                mb: 4,
                children: t
              }),
              (0, r.jsx)(h, {})
            ]
          })
        },
        Meta = e => {
          let { children: t } = e
          return (0, r.jsx)(c.C, { colorScheme: 'green', mr: 2, children: t })
        }
    },
    4786: function (e, t, n) {
      'use strict'
      var r = n(5893),
        i = n(7672),
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
        return (0, r.jsx)(i.E.article, {
          initial: 'hidden',
          animate: 'enter',
          exit: 'exit',
          variants: l,
          transition: { duration: 0.4, type: 'easeInOut' },
          style: { position: 'relative' },
          children: (0, r.jsxs)(r.Fragment, {
            children: [
              n &&
                (0, r.jsxs)(a(), {
                  children: [
                    (0, r.jsx)('title', { children: s }),
                    (0, r.jsx)('meta', { name: 'twitter:title', content: s }),
                    (0, r.jsx)('meta', { property: 'og:title', content: s })
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
      var r = n(2729),
        i = n(6829)
      function _templateObject() {
        let e = (0, r._)([
          '\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n'
        ])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      let s = i.Z.p(_templateObject())
      t.Z = s
    },
    6695: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return m
          }
        })
      var r = n(5893),
        i = n(6979),
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
        (0, r.jsx)(x.Z, {
          title: 'Serautos',
          children: (0, r.jsx)(i.W, {
            mt: 73,
            children: (0, r.jsxs)(s.xu, {
              borderRadius: 'lg',
              borderWidth: 2,
              borderStyle: 'solid',
              mb: 6,
              p: 3,
              textAlign: 'center',
              bg: (0, a.ff)('whiteAlpha.500', 'blackAlpha.500'),
              css: { backdropFilter: 'blur(3px)' },
              children: [
                (0, r.jsxs)(h.Dx, {
                  children: [
                    'Serautos FT ',
                    (0, r.jsx)(l.C, { children: '2023-' })
                  ]
                }),
                (0, r.jsx)(p.Z, {
                  children:
                    'A HTML presentation framework, made with reveal.js and deployed in Surge.'
                }),
                (0, r.jsxs)(o.aV, {
                  ml: 4,
                  my: 4,
                  children: [
                    (0, r.jsxs)(o.HC, {
                      children: [
                        (0, r.jsx)(h.h_, { children: 'Website' }),
                        (0, r.jsxs)(c.r, {
                          href: 'https://serautos.surge.sh/',
                          target: '_blank',
                          children: [
                            'https://serautos.surge.sh/ ',
                            (0, r.jsx)(u.h, { mx: '2px' })
                          ]
                        })
                      ]
                    }),
                    (0, r.jsxs)(o.HC, {
                      children: [
                        (0, r.jsx)(h.h_, { children: 'Stack' }),
                        (0, r.jsx)('span', {
                          children: 'HTML, reveal.js, Surge'
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsx)(d.o, {
                  maxW: '640px',
                  ratio: 1.2,
                  my: 4,
                  children: (0, r.jsx)('iframe', {
                    src: 'https://serautos.surge.sh/',
                    title: 'executive transportation company website Serautos',
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
      var r = n(78),
        i = n(5893),
        s = (0, r.I)({
          displayName: 'ExternalLinkIcon',
          path: (0, i.jsxs)('g', {
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeWidth: '2',
            children: [
              (0, i.jsx)('path', {
                d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
              }),
              (0, i.jsx)('path', { d: 'M15 3h6v6' }),
              (0, i.jsx)('path', { d: 'M10 14L21 3' })
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
      var r = n(5059),
        i = n(5523),
        s = n(3951),
        a = n(5432),
        l = n(7294),
        o = n(5893),
        c = (0, r.G)(function (e, t) {
          let { ratio: n = 4 / 3, children: r, className: c, ...d } = e,
            u = l.Children.only(r),
            h = (0, a.cx)('chakra-aspect-ratio', c)
          return (0,
          o.jsx)(i.m.div, { ref: t, position: 'relative', className: h, _before: { height: 0, content: '""', display: 'block', paddingBottom: (0, s.XQ)(n, e => `${(1 / e) * 100}%`) }, __css: { '& > *:not(style)': { overflow: 'hidden', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }, '& > img, & > video': { objectFit: 'cover' } }, ...d, children: u })
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
      var r = n(5059),
        i = n(1639),
        s = n(3179),
        a = n(5523),
        l = n(5432),
        o = n(5893),
        c = (0, r.G)(function (e, t) {
          let n = (0, i.mq)('Badge', e),
            { className: r, ...c } = (0, s.Lr)(e)
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
      var r = n(6877),
        i = n(5227),
        s = n(2495),
        a = n(5059),
        l = n(1639),
        o = n(3179),
        c = n(5523),
        d = n(5893),
        [u, h] = (0, i.k)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" '
        }),
        p = (0, a.G)(function (e, t) {
          let n = (0, l.jC)('List', e),
            {
              children: r,
              styleType: i = 'none',
              stylePosition: a,
              spacing: h,
              ...p
            } = (0, o.Lr)(e),
            x = (0, s.W)(r)
          return (0,
          d.jsx)(u, { value: n, children: (0, d.jsx)(c.m.ul, { ref: t, listStyleType: i, listStylePosition: a, role: 'list', __css: { ...n.container, ...(h ? { '& > *:not(style) ~ *:not(style)': { mt: h } } : {}) }, ...p, children: x }) })
        })
      ;(p.displayName = 'List'),
        ((0, a.G)((e, t) => {
          let { as: n, ...r } = e
          return (0, d.jsx)(p, {
            ref: t,
            as: 'ol',
            styleType: 'decimal',
            marginStart: '1em',
            ...r
          })
        }).displayName = 'OrderedList'),
        ((0, a.G)(function (e, t) {
          let { as: n, ...r } = e
          return (0,
          d.jsx)(p, { ref: t, as: 'ul', styleType: 'initial', marginStart: '1em', ...r })
        }).displayName = 'UnorderedList')
      var x = (0, a.G)(function (e, t) {
        let n = h()
        return (0, d.jsx)(c.m.li, { ref: t, ...e, __css: n.item })
      })
      ;(x.displayName = 'ListItem'),
        ((0, a.G)(function (e, t) {
          let n = h()
          return (0,
          d.jsx)(r.J, { ref: t, role: 'presentation', ...e, __css: n.icon })
        }).displayName = 'ListIcon')
    }
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 4501))
    }),
      (_N_E = e.O())
  }
])
