;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(4278)
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
        a = n.n(r),
        l = n(3100),
        s = n(3838),
        o = n(4418),
        c = n(1689),
        d = n(78),
        h = (0, d.I)({
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
          displayName: 'ChevronLeftIcon'
        }),
        u = (0, d.I)({
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
          displayName: 'ChevronRightIcon'
        })
      let Title = e => {
          let { children: t } = e
          return (0, i.jsxs)(l.xu, {
            marginTop: '73px',
            children: [
              (0, i.jsx)(s.r, { as: a(), href: '/portfolio', children: '←' }),
              (0, i.jsxs)('span', { children: [' ', (0, i.jsx)(h, {})] }),
              (0, i.jsx)(o.X, {
                display: 'inline-block',
                as: 'h3',
                fontSize: 20,
                mb: 4,
                children: t
              }),
              (0, i.jsx)(u, {})
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
        a = n(9008),
        l = n.n(a)
      let s = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
      }
      t.Z = e => {
        let { children: t, title: n } = e,
          a = ''.concat(n, ' - De Caldas')
        return (0, i.jsx)(r.E.article, {
          initial: 'hidden',
          animate: 'enter',
          exit: 'exit',
          variants: s,
          transition: { duration: 0.4, type: 'easeInOut' },
          style: { position: 'relative' },
          children: (0, i.jsxs)(i.Fragment, {
            children: [
              n &&
                (0, i.jsxs)(l(), {
                  children: [
                    (0, i.jsx)('title', { children: a }),
                    (0, i.jsx)('meta', { name: 'twitter:title', content: a }),
                    (0, i.jsx)('meta', { property: 'og:title', content: a })
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
      let a = r.Z.p(_templateObject())
      t.Z = a
    },
    1105: function (e, t, n) {
      'use strict'
      var i = n(5893),
        r = n(7672),
        a = n(5523),
        l = n(3216)
      let s = (0, a.m)(r.E.div, {
        shouldForwardProp: e => (0, l.x)(e) || 'transition' === e
      })
      t.Z = e => {
        let { children: t, delay: n = 0 } = e
        return (0, i.jsx)(s, {
          initial: { y: 10, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.8, delay: n },
          mb: 6,
          children: t
        })
      }
    },
    4278: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return C
          },
          default: function () {
            return pages
          }
        })
      var i = n(5893),
        r = n(5523),
        a = n(6979),
        l = n(2498),
        s = n(6393),
        o = n(3100),
        c = n(4418),
        d = n(5197),
        h = n(3838),
        u = n(5477),
        p = n(2729),
        x = n(6829)
      function _templateObject() {
        let e = (0, p._)(['\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n'])
        return (
          (_templateObject = function () {
            return e
          }),
          e
        )
      }
      function _templateObject1() {
        let e = (0, p._)(['\n  font-weight: bold;\n  margin-right: 1em;\n'])
        return (
          (_templateObject1 = function () {
            return e
          }),
          e
        )
      }
      let m = (0, x.Z)(o.xu)(_templateObject()),
        f = x.Z.span(_templateObject1())
      var j = n(4786),
        g = n(1105),
        y = n(5675),
        b = n.n(y),
        _ = n(6709),
        v = n(5555),
        w = n(7294),
        components_MatrixRain = () => (
          (0, w.useEffect)(() => {
            let e = document.querySelector('#my-canvas'),
              t = e.getContext('2d'),
              n =
                '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑'.split(
                  ''
                )
            ;(() => {
              let { width: i, height: r } = e,
                a = i / 16,
                l = []
              for (let e = 0; e < a; e++) l[e] = 1
              let draw = () => {
                ;(t.fillStyle = 'rgba(0, 0, 0, 0.04)'),
                  t.fillRect(0, 0, i, r),
                  (t.fillStyle = '#0F0'),
                  (t.font = ''.concat(16, 'px arial'))
                for (let e = 0; e < l.length; e++) {
                  let i = n[Math.floor(Math.random() * n.length)]
                  t.fillText(i, 16 * e, 16 * l[e]),
                    16 * l[e] > r && Math.random() > 0.975 && (l[e] = 0),
                    l[e]++
                }
              }
              return {
                run: () => {
                  setInterval(draw, 33)
                }
              }
            })({ canvas: e }).run()
          }, []),
          (0, i.jsx)('canvas', { id: 'my-canvas', width: '700', height: '500' })
        )
      let k = (0, r.m)(b(), {
        shouldForwardProp: e => ['width', 'height', 'src', 'alt'].includes(e)
      })
      var C = !0,
        pages = () =>
          (0, i.jsx)(j.Z, {
            children: (0, i.jsxs)(a.W, {
              marginTop: '73px',
              marginBottom: '23px',
              borderColor: (0, l.ff)('blackAlpha.900', 'whiteAlpha.900'),
              borderRadius: 'lg',
              borderWidth: 2,
              borderStyle: 'solid',
              bg: (0, l.ff)('whiteAlpha.500', 'blackAlpha.500'),
              css: { backdropFilter: 'blur(3px)' },
              children: [
                (0, i.jsx)(s.o, {
                  ratio: 1.7,
                  my: 4,
                  children: (0, i.jsx)(components_MatrixRain, {})
                }),
                (0, i.jsxs)(o.xu, {
                  display: { md: 'flex' },
                  children: [
                    (0, i.jsxs)(o.xu, {
                      flexGrow: 1,
                      children: [
                        (0, i.jsx)(c.X, {
                          as: 'h2',
                          variant: 'page-title',
                          children: 'Diego Whiskey'
                        }),
                        (0, i.jsx)(u.Z, {
                          children: '[ Entrepreneurship | Researcher | Artist ]'
                        }),
                        (0, i.jsx)(c.X, {
                          as: 'h6',
                          variant: 'caption',
                          children:
                            'Full Stack web Developer with Specialization in JavaScript and Data Engineering'
                        })
                      ]
                    }),
                    (0, i.jsx)(o.xu, {
                      flexShrink: 0,
                      mt: { base: 3, md: 0 },
                      ml: { md: 7 },
                      textAlign: 'center',
                      children: (0, i.jsx)(o.xu, {
                        marginTop: '23px',
                        borderColor: (0, l.ff)(
                          'blackAlpha.900',
                          'whiteAlpha.900'
                        ),
                        borderWidth: 2,
                        borderStyle: 'solid',
                        w: 'auto',
                        h: 'auto',
                        display: 'inline-block',
                        borderRadius: 'full',
                        overflow: 'hidden',
                        children: (0, i.jsx)(k, {
                          src: 'https://pbs.twimg.com/profile_images/1652848752455999488/NOwlzFAI_400x400.jpg',
                          alt: 'Profile image',
                          borderRadius: 'full',
                          width: '100',
                          height: '100'
                        })
                      })
                    })
                  ]
                }),
                (0, i.jsxs)(g.Z, {
                  delay: 0.1,
                  children: [
                    (0, i.jsx)(c.X, {
                      as: 'h3',
                      variant: 'section-title',
                      children: 'Work'
                    }),
                    (0, i.jsx)(u.Z, {
                      children:
                        "Let me introduce an exceptional professional who is passionate about web development and databases. If you are looking for a valuable asset to any team in web development, you should definitely check him out. Outside of work, he enjoys recording his voice and singing songs when he's offline."
                    })
                  ]
                }),
                (0, i.jsxs)(o.xu, {
                  display: { md: 'flex' },
                  align: 'right',
                  borderColor: (0, l.ff)('blackAlpha.900', 'whiteAlpha.900'),
                  borderRadius: 'lg',
                  borderWidth: 2,
                  borderStyle: 'solid',
                  mb: 6,
                  p: 3,
                  textAlign: 'center',
                  bg: (0, l.ff)('whiteAlpha.500', 'blackAlpha.500'),
                  css: { backdropFilter: 'blur(7px)' },
                  children: [
                    (0, i.jsx)(c.X, { children: '\uD83D\uDC98' }),
                    (0, i.jsx)(c.X, {
                      as: 'h5',
                      variant: 'caption',
                      children: 'Hip Hop Art & Rap Music'
                    }),
                    (0, i.jsx)(d.aV, {
                      ml: 4,
                      my: 4,
                      children: (0, i.jsxs)(d.HC, {
                        children: [
                          (0, i.jsx)(_.h_, { children: 'Blogpost' }),
                          (0, i.jsxs)(h.r, {
                            href: 'https://aite-artistadelhiphop.blogspot.com/2024/04/cantante-de-rap-profesional-tech.html',
                            target: '_blank',
                            children: [
                              'De Las Calles Al Data Center ',
                              (0, i.jsx)('br', {}),
                              'Una Odisea Desde El Hip Hop Hasta La Ingenier\xeda De Datos',
                              ' ',
                              (0, i.jsx)(v.h, { mx: '2px' })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                }),
                (0, i.jsxs)(g.Z, {
                  delay: 0.2,
                  children: [
                    (0, i.jsx)(c.X, {
                      as: 'h3',
                      variant: 'section-title',
                      children: 'Bio'
                    }),
                    (0, i.jsxs)(m, {
                      children: [
                        (0, i.jsx)(f, { children: '1984' }),
                        'Born in Caldas Antioquia Colombia'
                      ]
                    }),
                    (0, i.jsxs)(m, {
                      children: [
                        (0, i.jsx)(f, { children: '2011' }),
                        'He completed the Research Seed Program at the CTM SENA Calatrava Itag\xfc\xed.'
                      ]
                    }),
                    (0, i.jsxs)(m, {
                      children: [
                        (0, i.jsx)(f, {
                          children: ''.concat(new Date().getFullYear())
                        }),
                        'Today debuting in the digital world...'
                      ]
                    })
                  ]
                })
              ]
            })
          })
    },
    5555: function (e, t, n) {
      'use strict'
      n.d(t, {
        h: function () {
          return a
        }
      })
      var i = n(78),
        r = n(5893),
        a = (0, i.I)({
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
        a = n(3951),
        l = n(5432),
        s = n(7294),
        o = n(5893),
        c = (0, i.G)(function (e, t) {
          let { ratio: n = 4 / 3, children: i, className: c, ...d } = e,
            h = s.Children.only(i),
            u = (0, l.cx)('chakra-aspect-ratio', c)
          return (0,
          o.jsx)(r.m.div, { ref: t, position: 'relative', className: u, _before: { height: 0, content: '""', display: 'block', paddingBottom: (0, a.XQ)(n, e => `${(1 / e) * 100}%`) }, __css: { '& > *:not(style)': { overflow: 'hidden', position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }, '& > img, & > video': { objectFit: 'cover' } }, ...d, children: h })
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
        a = n(3179),
        l = n(5523),
        s = n(5432),
        o = n(5893),
        c = (0, i.G)(function (e, t) {
          let n = (0, r.mq)('Badge', e),
            { className: i, ...c } = (0, a.Lr)(e)
          return (0,
          o.jsx)(l.m.span, { ref: t, className: (0, s.cx)('chakra-badge', e.className), ...c, __css: { display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'middle', ...n } })
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
        a = n(2495),
        l = n(5059),
        s = n(1639),
        o = n(3179),
        c = n(5523),
        d = n(5893),
        [h, u] = (0, r.k)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" '
        }),
        p = (0, l.G)(function (e, t) {
          let n = (0, s.jC)('List', e),
            {
              children: i,
              styleType: r = 'none',
              stylePosition: l,
              spacing: u,
              ...p
            } = (0, o.Lr)(e),
            x = (0, a.W)(i)
          return (0,
          d.jsx)(h, { value: n, children: (0, d.jsx)(c.m.ul, { ref: t, listStyleType: r, listStylePosition: l, role: 'list', __css: { ...n.container, ...(u ? { '& > *:not(style) ~ *:not(style)': { mt: u } } : {}) }, ...p, children: x }) })
        })
      ;(p.displayName = 'List'),
        ((0, l.G)((e, t) => {
          let { as: n, ...i } = e
          return (0, d.jsx)(p, {
            ref: t,
            as: 'ol',
            styleType: 'decimal',
            marginStart: '1em',
            ...i
          })
        }).displayName = 'OrderedList'),
        ((0, l.G)(function (e, t) {
          let { as: n, ...i } = e
          return (0,
          d.jsx)(p, { ref: t, as: 'ul', styleType: 'initial', marginStart: '1em', ...i })
        }).displayName = 'UnorderedList')
      var x = (0, l.G)(function (e, t) {
        let n = u()
        return (0, d.jsx)(c.m.li, { ref: t, ...e, __css: n.item })
      })
      ;(x.displayName = 'ListItem'),
        ((0, l.G)(function (e, t) {
          let n = u()
          return (0,
          d.jsx)(i.J, { ref: t, role: 'presentation', ...e, __css: n.icon })
        }).displayName = 'ListIcon')
    }
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 5557))
    }),
      (_N_E = e.O())
  }
])
