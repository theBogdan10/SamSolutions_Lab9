!(function(e) {
  var n = {};
  function t(r) {
    if (n[r])
      return n[r]
        .exports;
    var o = (n[
      r
    ] = {
      i: r,
      l: !1,
      exports: {}
    });
    return (
      e[r].call(
        o.exports,
        o,
        o.exports,
        t
      ),
      (o.l = !0),
      o.exports
    );
  }
  (t.m = e),
    (t.c = n),
    (t.d = function(
      e,
      n,
      r
    ) {
      t.o(e, n) ||
        Object.defineProperty(
          e,
          n,
          {
            enumerable: !0,
            get: r
          }
        );
    }),
    (t.r = function(
      e
    ) {
      'undefined' !=
        typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(
          e,
          Symbol.toStringTag,
          {
            value:
              'Module'
          }
        ),
        Object.defineProperty(
          e,
          '__esModule',
          {
            value: !0
          }
        );
    }),
    (t.t = function(
      e,
      n
    ) {
      if (
        (1 & n &&
          (e = t(
            e
          )),
        8 & n)
      )
        return e;
      if (
        4 & n &&
        'object' ==
          typeof e &&
        e &&
        e.__esModule
      )
        return e;
      var r = Object.create(
        null
      );
      if (
        (t.r(r),
        Object.defineProperty(
          r,
          'default',
          {
            enumerable: !0,
            value: e
          }
        ),
        2 & n &&
          'string' !=
            typeof e)
      )
        for (var o in e)
          t.d(
            r,
            o,
            function(
              n
            ) {
              return e[
                n
              ];
            }.bind(
              null,
              o
            )
          );
      return r;
    }),
    (t.n = function(
      e
    ) {
      var n =
        e &&
        e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return (
        t.d(
          n,
          'a',
          n
        ),
        n
      );
    }),
    (t.o = function(
      e,
      n
    ) {
      return Object.prototype.hasOwnProperty.call(
        e,
        n
      );
    }),
    (t.p = ''),
    t((t.s = 8));
})([
  function(
    e,
    n,
    t
  ) {
    'use strict';
    e.exports = function(
      e
    ) {
      var n = [];
      return (
        (n.toString = function() {
          return this.map(
            function(
              n
            ) {
              var t = (function(
                e,
                n
              ) {
                var t =
                    e[1] ||
                    '',
                  r =
                    e[3];
                if (
                  !r
                )
                  return t;
                if (
                  n &&
                  'function' ==
                    typeof btoa
                ) {
                  var o =
                      ((s = r),
                      (a = btoa(
                        unescape(
                          encodeURIComponent(
                            JSON.stringify(
                              s
                            )
                          )
                        )
                      )),
                      (u = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        a
                      )),
                      '/*# '.concat(
                        u,
                        ' */'
                      )),
                    i = r.sources.map(
                      function(
                        e
                      ) {
                        return '/*# sourceURL='
                          .concat(
                            r.sourceRoot
                          )
                          .concat(
                            e,
                            ' */'
                          );
                      }
                    );
                  return [
                    t
                  ]
                    .concat(
                      i
                    )
                    .concat(
                      [
                        o
                      ]
                    )
                    .join(
                      '\n'
                    );
                }
                var s,
                  a,
                  u;
                return [
                  t
                ].join(
                  '\n'
                );
              })(
                n,
                e
              );
              return n[2]
                ? '@media '
                    .concat(
                      n[2],
                      '{'
                    )
                    .concat(
                      t,
                      '}'
                    )
                : t;
            }
          ).join(
            ''
          );
        }),
        (n.i = function(
          e,
          t
        ) {
          'string' ==
            typeof e &&
            (e = [
              [
                null,
                e,
                ''
              ]
            ]);
          for (
            var r = {},
              o = 0;
            o <
            this
              .length;
            o++
          ) {
            var i = this[
              o
            ][0];
            null !=
              i &&
              (r[
                i
              ] = !0);
          }
          for (
            var s = 0;
            s <
            e.length;
            s++
          ) {
            var a =
              e[s];
            (null !=
              a[0] &&
              r[
                a[0]
              ]) ||
              (t &&
              !a[2]
                ? (a[2] = t)
                : t &&
                  (a[2] = '('
                    .concat(
                      a[2],
                      ') and ('
                    )
                    .concat(
                      t,
                      ')'
                    )),
              n.push(
                a
              ));
          }
        }),
        n
      );
    };
  },
  function(
    e,
    n,
    t
  ) {
    'use strict';
    var r,
      o = {},
      i = function() {
        return (
          void 0 ===
            r &&
            (r = Boolean(
              window &&
                document &&
                document.all &&
                !window.atob
            )),
          r
        );
      },
      s = (function() {
        var e = {};
        return function(
          n
        ) {
          if (
            void 0 ===
            e[n]
          ) {
            var t = document.querySelector(
              n
            );
            if (
              window.HTMLIFrameElement &&
              t instanceof
                window.HTMLIFrameElement
            )
              try {
                t =
                  t
                    .contentDocument
                    .head;
              } catch (e) {
                t = null;
              }
            e[
              n
            ] = t;
          }
          return e[
            n
          ];
        };
      })();
    function a(
      e,
      n
    ) {
      for (
        var t = [],
          r = {},
          o = 0;
        o <
        e.length;
        o++
      ) {
        var i =
            e[o],
          s = n.base
            ? i[0] +
              n.base
            : i[0],
          a = {
            css:
              i[1],
            media:
              i[2],
            sourceMap:
              i[3]
          };
        r[s]
          ? r[
              s
            ].parts.push(
              a
            )
          : t.push(
              (r[
                s
              ] = {
                id: s,
                parts: [
                  a
                ]
              })
            );
      }
      return t;
    }
    function u(
      e,
      n
    ) {
      for (
        var t = 0;
        t <
        e.length;
        t++
      ) {
        var r =
            e[t],
          i =
            o[r.id],
          s = 0;
        if (i) {
          for (
            i.refs++;
            s <
            i.parts
              .length;
            s++
          )
            i.parts[
              s
            ](
              r
                .parts[
                s
              ]
            );
          for (
            ;
            s <
            r.parts
              .length;
            s++
          )
            i.parts.push(
              b(
                r
                  .parts[
                  s
                ],
                n
              )
            );
        } else {
          for (
            var a = [];
            s <
            r.parts
              .length;
            s++
          )
            a.push(
              b(
                r
                  .parts[
                  s
                ],
                n
              )
            );
          o[
            r.id
          ] = {
            id:
              r.id,
            refs: 1,
            parts: a
          };
        }
      }
    }
    function l(e) {
      var n = document.createElement(
        'style'
      );
      if (
        void 0 ===
        e.attributes
          .nonce
      ) {
        var r =
          t.nc;
        r &&
          (e.attributes.nonce = r);
      }
      if (
        (Object.keys(
          e.attributes
        ).forEach(
          function(
            t
          ) {
            n.setAttribute(
              t,
              e
                .attributes[
                t
              ]
            );
          }
        ),
        'function' ==
          typeof e.insert)
      )
        e.insert(n);
      else {
        var o = s(
          e.insert ||
            'head'
        );
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(
          n
        );
      }
      return n;
    }
    var c,
      d =
        ((c = []),
        function(
          e,
          n
        ) {
          return (
            (c[
              e
            ] = n),
            c
              .filter(
                Boolean
              )
              .join(
                '\n'
              )
          );
        });
    function f(
      e,
      n,
      t,
      r
    ) {
      var o = t
        ? ''
        : r.css;
      if (
        e.styleSheet
      )
        e.styleSheet.cssText = d(
          n,
          o
        );
      else {
        var i = document.createTextNode(
            o
          ),
          s =
            e.childNodes;
        s[n] &&
          e.removeChild(
            s[n]
          ),
          s.length
            ? e.insertBefore(
                i,
                s[n]
              )
            : e.appendChild(
                i
              );
      }
    }
    function p(
      e,
      n,
      t
    ) {
      var r = t.css,
        o = t.media,
        i =
          t.sourceMap;
      if (
        (o &&
          e.setAttribute(
            'media',
            o
          ),
        i &&
          btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(
              unescape(
                encodeURIComponent(
                  JSON.stringify(
                    i
                  )
                )
              )
            ),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (
          ;
          e.firstChild;

        )
          e.removeChild(
            e.firstChild
          );
        e.appendChild(
          document.createTextNode(
            r
          )
        );
      }
    }
    var v = null,
      m = 0;
    function b(
      e,
      n
    ) {
      var t, r, o;
      if (
        n.singleton
      ) {
        var i = m++;
        (t =
          v ||
          (v = l(
            n
          ))),
          (r = f.bind(
            null,
            t,
            i,
            !1
          )),
          (o = f.bind(
            null,
            t,
            i,
            !0
          ));
      } else
        (t = l(n)),
          (r = p.bind(
            null,
            t,
            n
          )),
          (o = function() {
            !(function(
              e
            ) {
              if (
                null ===
                e.parentNode
              )
                return !1;
              e.parentNode.removeChild(
                e
              );
            })(t);
          });
      return (
        r(e),
        function(
          n
        ) {
          if (n) {
            if (
              n.css ===
                e.css &&
              n.media ===
                e.media &&
              n.sourceMap ===
                e.sourceMap
            )
              return;
            r(
              (e = n)
            );
          } else
            o();
        }
      );
    }
    e.exports = function(
      e,
      n
    ) {
      ((n =
        n ||
        {}).attributes =
        'object' ==
        typeof n.attributes
          ? n.attributes
          : {}),
        n.singleton ||
          'boolean' ==
            typeof n.singleton ||
          (n.singleton = i());
      var t = a(
        e,
        n
      );
      return (
        u(t, n),
        function(
          e
        ) {
          for (
            var r = [],
              i = 0;
            i <
            t.length;
            i++
          ) {
            var s =
                t[
                  i
                ],
              l =
                o[
                  s
                    .id
                ];
            l &&
              (l.refs--,
              r.push(
                l
              ));
          }
          e &&
            u(
              a(
                e,
                n
              ),
              n
            );
          for (
            var c = 0;
            c <
            r.length;
            c++
          ) {
            var d =
              r[c];
            if (
              0 ===
              d.refs
            ) {
              for (
                var f = 0;
                f <
                d
                  .parts
                  .length;
                f++
              )
                d.parts[
                  f
                ]();
              delete o[
                d.id
              ];
            }
          }
        }
      );
    };
  },
  function(
    e,
    n,
    t
  ) {
    var r = t(3);
    'string' ==
      typeof r &&
      (r = [
        [e.i, r, '']
      ]);
    var o = {
      insert:
        'head',
      singleton: !1
    };
    t(1)(r, o);
    r.locals &&
      (e.exports =
        r.locals);
  },
  function(
    e,
    n,
    t
  ) {
    (e.exports = t(
      0
    )(!1)).push([
      e.i,
      'body{\n    font-size: 14px;\n}\n\ninput {\n    height: 20px;\n    line-height: 20px;\n    padding: 0 5px;\n}\n\n',
      ''
    ]);
  },
  function(
    e,
    n,
    t
  ) {
    var r = t(5);
    'string' ==
      typeof r &&
      (r = [
        [e.i, r, '']
      ]);
    var o = {
      insert:
        'head',
      singleton: !1
    };
    t(1)(r, o);
    r.locals &&
      (e.exports =
        r.locals);
  },
  function(
    e,
    n,
    t
  ) {
    (e.exports = t(
      0
    )(!1)).push([
      e.i,
      '.userInfo-row{\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.userInfo-label{\n    width: 100px;\n}\n',
      ''
    ]);
  },
  function(
    e,
    n,
    t
  ) {
    var r = t(7);
    'string' ==
      typeof r &&
      (r = [
        [e.i, r, '']
      ]);
    var o = {
      insert:
        'head',
      singleton: !1
    };
    t(1)(r, o);
    r.locals &&
      (e.exports =
        r.locals);
  },
  function(
    e,
    n,
    t
  ) {
    (e.exports = t(
      0
    )(!1)).push([
      e.i,
      '.userForm-item{\n    display: flex;\n    margin-bottom: 10px;\n}\n\n.userForm-label{\n    width: 100px;\n}\n',
      ''
    ]);
  },
  function(
    e,
    n,
    t
  ) {
    'use strict';
    t.r(n);
    t(2);
    var r,
      o = [];
    var i = {
        getUser: function() {
          return r;
        },
        setUser: function(
          e
        ) {
          (r = e),
            console.log(
              'Emit updates'
            ),
            o.map(
              function(
                e
              ) {
                return e(
                  r
                );
              }
            );
        },
        addChangeListener: function(
          e
        ) {
          o.push(e);
        }
      },
      s =
        (t(4),
        '\n   <h2>User info</h2>\n    <div class="userInfo-row">\n        <div class="userInfo-label">Name:</div>\n        <div class="userInfo-value" id="userInfoName"></div>\n    </div> \n    <div  class="userInfo-row">\n        <div class="userInfo-label">Age:</div>\n        <div class="userInfo-value" id="userInfoAge"></div>\n    </div> \n    <div  class="userInfo-row">\n        <div class="userInfo-label">City:</div>\n        <div class="userInfo-value" id="userInfoCity"></div>\n    </div> \n    <div  class="userInfo-row">\n        <div class="userInfo-label">Street:</div>\n        <div class="userInfo-value" id="userInfoStreet"></div>\n    </div> \n');
    function a(e) {
      console.log(
        'User info: update'
      ),
        (document.getElementById(
          'userInfoName'
        ).innerText =
          e.name),
        (document.getElementById(
          'userInfoAge'
        ).innerText =
          e.age),
        (document.getElementById(
          'userInfoCity'
        ).innerText =
          (e.address &&
            e
              .address
              .city) ||
          ''),
        (document.getElementById(
          'userInfoStreet'
        ).innerText =
          (e.address &&
            e
              .address
              .street) ||
          '');
    }
    t(6);
    function u(
      e,
      n
    ) {
      var t = Object.keys(
        e
      );
      if (
        Object.getOwnPropertySymbols
      ) {
        var r = Object.getOwnPropertySymbols(
          e
        );
        n &&
          (r = r.filter(
            function(
              n
            ) {
              return Object.getOwnPropertyDescriptor(
                e,
                n
              )
                .enumerable;
            }
          )),
          t.push.apply(
            t,
            r
          );
      }
      return t;
    }
    function l(
      e,
      n,
      t
    ) {
      return (
        n in e
          ? Object.defineProperty(
              e,
              n,
              {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }
            )
          : (e[
              n
            ] = t),
        e
      );
    }
    var c =
      '\n<h2>User form</h2>\n<div class="userForm-item">\n    <label class="userForm-label" for="name">Name:</label>\n    <input type="text" id="name"/>\n</div>\n<div class="userForm-item">\n    <label class="userForm-label" for="age">Age:</label>\n    <input type="text" id="age"/>\n</div>\n<h5>Address</h5>\n<div class="userForm-item">\n    <label class="userForm-label" for="city">City:</label>\n    <input type="text" id="city"/>\n</div>\n<div class="userForm-item">\n    <label class="userForm-label" for="street">Street:</label>\n    <input type="text" id="street"\n    />\n</div>\n<button id="saveButton">Save</button>\n';
    function d() {
      var e = document.getElementById(
          'name'
        ).value,
        n = document.getElementById(
          'age'
        ).value,
        t = document.getElementById(
          'city'
        ).value,
        r = document.getElementById(
          'street'
        ).value,
        o = {
          name: e,
          age: n
        };
      return (
        (t || r) &&
          (o.address = (function(
            e
          ) {
            for (
              var n = 1;
              n <
              arguments.length;
              n++
            ) {
              var t =
                null !=
                arguments[
                  n
                ]
                  ? arguments[
                      n
                    ]
                  : {};
              n % 2
                ? u(
                    t,
                    !0
                  ).forEach(
                    function(
                      n
                    ) {
                      l(
                        e,
                        n,
                        t[
                          n
                        ]
                      );
                    }
                  )
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(
                      t
                    )
                  )
                : u(
                    t
                  ).forEach(
                    function(
                      n
                    ) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(
                          t,
                          n
                        )
                      );
                    }
                  );
            }
            return e;
          })(
            {},
            t && {
              city: t
            },
            {},
            r && {
              street: r
            }
          )),
        o
      );
    }
    document.addEventListener(
      'DOMContentLoaded',
      function() {
        console.log(
          'Init application'
        ),
          (function(
            e
          ) {
            console.log(
              'UserForm: init'
            );
            var n = document.createElement(
              'div'
            );
            (n.innerHTML = c),
              e.append(
                n
              ),
              n
                .querySelector(
                  '#saveButton'
                )
                .addEventListener(
                  'click',
                  function(
                    e
                  ) {
                    console.log(
                      'UserForm: save button click'
                    ),
                      e.preventDefault(),
                      i.setUser(
                        d()
                      );
                  }
                );
          })(
            document.getElementById(
              'userForm'
            )
          ),
          (function(
            e
          ) {
            console.log(
              'User info: init'
            ),
              i.addChangeListener(
                a
              );
            var n = document.createElement(
              'div'
            );
            (n.innerHTML = s),
              e.append(
                n
              );
          })(
            document.getElementById(
              'userInfo'
            )
          );
      }
    );
  }
]);
//# sourceMappingURL=bundle.js.map
