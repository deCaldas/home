;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    394: function (e, r, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/404',
        function () {
          return n(1985)
        }
      ])
    },
    1985: function (e, r, n) {
      'use strict'
      n.r(r),
        n.d(r, {
          default: function () {
            return _404
          }
        })
      var i = n(5893),
        t = n(1664),
        o = n.n(t),
        a = n(6979),
        c = n(4418),
        h = n(3205),
        s = n(5059),
        d = n(1639),
        u = n(3179),
        l = n(5523),
        _ = n(5432),
        f = (0, s.G)(function (e, r) {
          let {
              borderLeftWidth: n,
              borderBottomWidth: t,
              borderTopWidth: o,
              borderRightWidth: a,
              borderWidth: c,
              borderStyle: h,
              borderColor: s,
              ...f
            } = (0, d.mq)('Divider', e),
            {
              className: x,
              orientation: m = 'horizontal',
              __css: p,
              ...w
            } = (0, u.Lr)(e)
          return (0,
          i.jsx)(l.m.hr, { ref: r, 'aria-orientation': m, ...w, __css: { ...f, border: '0', borderColor: s, borderStyle: h, ...{ vertical: { borderLeftWidth: n || a || c || '1px', height: '100%' }, horizontal: { borderBottomWidth: t || o || c || '1px', width: '100%' } }[m], ...p }, className: (0, _.cx)('chakra-divider', x) })
        })
      f.displayName = 'Divider'
      var x = n(3100),
        m = n(5450),
        _404 = () =>
          (0, i.jsxs)(a.W, {
            children: [
              (0, i.jsx)(c.X, { as: 'h1', children: 'Not found' }),
              (0, i.jsx)(h.x, {
                children: "The page you're looking for was not found."
              }),
              (0, i.jsx)(f, { my: 6 }),
              (0, i.jsx)(x.xu, {
                my: 6,
                align: 'center',
                children: (0, i.jsx)(m.z, {
                  as: o(),
                  href: '/',
                  colorScheme: 'teal',
                  children: 'Return to homepage'
                })
              })
            ]
          })
    }
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 394))
    }),
      (_N_E = e.O())
  }
])
