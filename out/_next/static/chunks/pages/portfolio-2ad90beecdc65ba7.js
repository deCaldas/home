;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [371],
  {
    1826: function (t, e, i) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/portfolio',
        function () {
          return i(6730)
        }
      ])
    },
    4786: function (t, e, i) {
      'use strict'
      var r = i(5893),
        n = i(7672),
        a = i(9008),
        o = i.n(a)
      let s = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
      }
      e.Z = t => {
        let { children: e, title: i } = t,
          a = ''.concat(i, ' - De Caldas')
        return (0, r.jsx)(n.E.article, {
          initial: 'hidden',
          animate: 'enter',
          exit: 'exit',
          variants: s,
          transition: { duration: 0.4, type: 'easeInOut' },
          style: { position: 'relative' },
          children: (0, r.jsxs)(r.Fragment, {
            children: [
              i &&
                (0, r.jsxs)(o(), {
                  children: [
                    (0, r.jsx)('title', { children: a }),
                    (0, r.jsx)('meta', { name: 'twitter:title', content: a }),
                    (0, r.jsx)('meta', { property: 'og:title', content: a })
                  ]
                }),
              e
            ]
          })
        })
      }
    },
    1105: function (t, e, i) {
      'use strict'
      var r = i(5893),
        n = i(7672),
        a = i(5523),
        o = i(3216)
      let s = (0, a.m)(n.E.div, {
        shouldForwardProp: t => (0, o.x)(t) || 'transition' === t
      })
      e.Z = t => {
        let { children: e, delay: i = 0 } = t
        return (0, r.jsx)(s, {
          initial: { y: 10, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.8, delay: i },
          mb: 6,
          children: e
        })
      }
    },
    6730: function (t, e, i) {
      'use strict'
      i.r(e),
        i.d(e, {
          __N_SSG: function () {
            return G
          },
          default: function () {
            return portfolio
          }
        })
      var r = i(5893),
        n = i(6979),
        a = i(4418),
        o = i(5059),
        s = i(5523),
        l = (0, o.G)(function (t, e) {
          let {
            templateAreas: i,
            gap: n,
            rowGap: a,
            columnGap: o,
            column: l,
            row: A,
            autoFlow: c,
            autoRows: d,
            templateRows: u,
            autoColumns: h,
            templateColumns: p,
            ...m
          } = t
          return (0,
          r.jsx)(s.m.div, { ref: e, __css: { display: 'grid', gridTemplateAreas: i, gridGap: n, gridRowGap: a, gridColumnGap: o, gridAutoColumns: h, gridColumn: l, gridRow: A, gridAutoFlow: c, gridAutoRows: d, gridTemplateRows: u, gridTemplateColumns: p }, ...m })
        })
      l.displayName = 'Grid'
      var A = i(7323),
        c = i(4629),
        d = i(3951),
        u = (0, o.G)(function (t, e) {
          let {
              columns: i,
              spacingX: n,
              spacingY: a,
              spacing: o,
              minChildWidth: s,
              ...u
            } = t,
            h = (0, A.F)(),
            p = s
              ? (0, d.XQ)(s, t => {
                  let e = (0, c.LP)(
                    'sizes',
                    t,
                    'number' == typeof t ? `${t}px` : t
                  )(h)
                  return null === t
                    ? null
                    : `repeat(auto-fit, minmax(${e}, 1fr))`
                })
              : (0, d.XQ)(i, t =>
                  null === t ? null : `repeat(${t}, minmax(0, 1fr))`
                )
          return (0,
          r.jsx)(l, { ref: e, gap: o, columnGap: n, rowGap: a, templateColumns: p, ...u })
        })
      u.displayName = 'SimpleGrid'
      var h = i(4786),
        p = i(1105),
        m = i(1664),
        x = i.n(m),
        g = i(5675),
        f = i.n(g),
        b = i(3100),
        w = i(5432),
        j = (0, o.G)(function (t, e) {
          let { isExternal: i, target: n, rel: a, className: o, ...l } = t
          return (0,
          r.jsx)(s.m.a, { ...l, ref: e, className: (0, w.cx)('chakra-linkbox__overlay', o), rel: i ? 'noopener noreferrer' : a, target: i ? '_blank' : n, __css: { position: 'static', '&::before': { content: "''", cursor: 'inherit', display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 0, width: '100%', height: '100%' } } })
        }),
        _ = (0, o.G)(function (t, e) {
          let { className: i, ...n } = t
          return (0,
          r.jsx)(s.m.div, { ref: e, position: 'relative', ...n, className: (0, w.cx)('chakra-linkbox', i), __css: { 'a[href]:not(.chakra-linkbox__overlay), abbr[title]': { position: 'relative', zIndex: 1 } } })
        }),
        y = i(3205)
      let WorkGridItem = t => {
        let {
          children: e,
          category: i = 'portfolio',
          id: n,
          title: a,
          thumbnail: o
        } = t
        return (0, r.jsx)(b.xu, {
          w: '100%',
          textAlign: 'center',
          children: (0, r.jsxs)(_, {
            as: x(),
            href: '/'.concat(i, '/').concat(n),
            scroll: !1,
            cursor: 'pointer',
            children: [
              (0, r.jsx)(f(), {
                src: o,
                alt: a,
                className: 'grid-item-thumbnail',
                placeholder: 'blur'
              }),
              (0, r.jsx)(j, {
                as: 'div',
                href: '/'.concat(i, '/').concat(n),
                children: (0, r.jsx)(y.x, { mt: 3, fontSize: 23, children: a })
              }),
              (0, r.jsx)(y.x, { fontSize: 14, children: e })
            ]
          })
        })
      }
      var E = {
          src: '/_next/static/media/reveal_js-serautosFT.9dacbc17.png',
          height: 400,
          width: 720,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEUiMnwCAwoNEzAWIVQaHzorNGM5Qm5drzeZAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAB9JREFUeJw1wcEBAAAEA7G6lv1H9iGRnt0zbQtIANVZBFMAP2dCum4AAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 4
        },
        C = {
          src: '/_next/static/media/network-contact.29e046af.png',
          height: 400,
          width: 720,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEWFLzV/HSSDJSyRP0QLOoOMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAB5JREFUeJxjYGJiAAEmBkZGZmYQCUIMDEwwBgMjIwACWQAdAaWiNAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 4
        },
        G = !0,
        portfolio = () =>
          (0, r.jsx)(h.Z, {
            title: 'portfolio',
            children: (0, r.jsxs)(n.W, {
              mt: '73',
              mb: '23',
              children: [
                (0, r.jsx)(a.X, {
                  as: 'h3',
                  fontSize: 20,
                  mb: 4,
                  children: 'Jobs'
                }),
                (0, r.jsx)(u, {
                  columns: [1, 1, 2],
                  gap: 6,
                  children: (0, r.jsx)(p.Z, {
                    delay: 0.1,
                    children: (0, r.jsx)(WorkGridItem, {
                      id: 'reveal_js',
                      title: 'Serautos FT',
                      thumbnail: E,
                      children:
                        'The website of a passenger transport company. This site was made with the technology of reveal.js.'
                    })
                  })
                }),
                (0, r.jsxs)(a.X, {
                  mt: '7',
                  as: 'h3',
                  fontSize: 20,
                  mb: 4,
                  children: [' ', 'Networking']
                }),
                (0, r.jsx)(u, {
                  columns: [1, 1, 2],
                  gap: 6,
                  children: (0, r.jsx)(p.Z, {
                    delay: 0.1,
                    children: (0, r.jsx)(WorkGridItem, {
                      id: 'webPage',
                      title: 'Network Contacts',
                      thumbnail: C,
                      children:
                        'Web pages to my friends. This page is made possible by Next.js and Chakra UI.'
                    })
                  })
                })
              ]
            })
          })
    }
  },
  function (t) {
    t.O(0, [675, 774, 888, 179], function () {
      return t((t.s = 1826))
    }),
      (_N_E = t.O())
  }
])
