function ic(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var ac = { exports: {} },
  Eo = {},
  sc = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ul = Symbol.for('react.element'),
  qd = Symbol.for('react.portal'),
  bd = Symbol.for('react.fragment'),
  ep = Symbol.for('react.strict_mode'),
  tp = Symbol.for('react.profiler'),
  np = Symbol.for('react.provider'),
  rp = Symbol.for('react.context'),
  lp = Symbol.for('react.forward_ref'),
  op = Symbol.for('react.suspense'),
  ip = Symbol.for('react.memo'),
  up = Symbol.for('react.lazy'),
  La = Symbol.iterator;
function ap(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (La && e[La]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var cc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fc = Object.assign,
  dc = {};
function ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dc),
    (this.updater = n || cc);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function pc() {}
pc.prototype = ur.prototype;
function mu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dc),
    (this.updater = n || cc);
}
var vu = (mu.prototype = new pc());
vu.constructor = mu;
fc(vu, ur.prototype);
vu.isPureReactComponent = !0;
var Na = Array.isArray,
  hc = Object.prototype.hasOwnProperty,
  yu = { current: null },
  mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      hc.call(t, r) && !mc.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ul,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: yu.current,
  };
}
function sp(e, t) {
  return {
    $$typeof: ul,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ul;
}
function cp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ta = /\/+/g;
function Vo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? cp('' + e.key)
    : t.toString(36);
}
function Fl(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ul:
          case qd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Vo(i, 0) : r),
      Na(l)
        ? ((n = ''),
          e != null && (n = e.replace(Ta, '$&/') + '/'),
          Fl(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (gu(l) &&
            (l = sp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Ta, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Na(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + Vo(o, u);
      i += Fl(o, t, n, a, l);
    }
  else if (((a = ap(e)), typeof a == 'function'))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Vo(o, u++)), (i += Fl(o, t, n, a, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fl(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function fp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Il = { transition: null },
  dp = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: yu,
  };
function yc() {
  throw Error('act(...) is not supported in production builds of React.');
}
Q.Children = {
  map: gl,
  forEach: function (e, t, n) {
    gl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      gl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Q.Component = ur;
Q.Fragment = bd;
Q.Profiler = tp;
Q.PureComponent = mu;
Q.StrictMode = ep;
Q.Suspense = op;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
Q.act = yc;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = fc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = yu.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      hc.call(t, a) &&
        !mc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: ul, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: rp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: np, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = vc;
Q.createFactory = function (e) {
  var t = vc.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: lp, render: e };
};
Q.isValidElement = gu;
Q.lazy = function (e) {
  return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: fp };
};
Q.memo = function (e, t) {
  return { $$typeof: ip, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
Q.unstable_act = yc;
Q.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Oe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
Q.useId = function () {
  return Oe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Oe.current.useRef(e);
};
Q.useState = function (e) {
  return Oe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Oe.current.useTransition();
};
Q.version = '18.3.1';
sc.exports = Q;
var _ = sc.exports;
const gc = uc(_),
  pp = ic({ __proto__: null, default: gc }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp = _,
  mp = Symbol.for('react.element'),
  vp = Symbol.for('react.fragment'),
  yp = Object.prototype.hasOwnProperty,
  gp = hp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wp = { key: !0, ref: !0, __self: !0, __source: !0 };
function wc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) yp.call(t, r) && !wp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: mp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: gp.current,
  };
}
Eo.Fragment = vp;
Eo.jsx = wc;
Eo.jsxs = wc;
ac.exports = Eo;
var X = ac.exports,
  gi = {},
  Sc = { exports: {} },
  Ge = {},
  Ec = { exports: {} },
  kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, U) {
    var $ = R.length;
    R.push(U);
    e: for (; 0 < $; ) {
      var Z = ($ - 1) >>> 1,
        q = R[Z];
      if (0 < l(q, U)) (R[Z] = U), (R[$] = q), ($ = Z);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var U = R[0],
      $ = R.pop();
    if ($ !== U) {
      R[0] = $;
      e: for (var Z = 0, q = R.length, at = q >>> 1; Z < at; ) {
        var Ve = 2 * (Z + 1) - 1,
          He = R[Ve],
          De = Ve + 1,
          Ze = R[De];
        if (0 > l(He, $))
          De < q && 0 > l(Ze, He)
            ? ((R[Z] = Ze), (R[De] = $), (Z = De))
            : ((R[Z] = He), (R[Ve] = $), (Z = Ve));
        else if (De < q && 0 > l(Ze, $)) (R[Z] = Ze), (R[De] = $), (Z = De);
        else break e;
      }
    }
    return U;
  }
  function l(R, U) {
    var $ = R.sortIndex - U.sortIndex;
    return $ !== 0 ? $ : R.id - U.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    c = 1,
    d = null,
    p = 3,
    S = !1,
    E = !1,
    w = !1,
    T = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var U = n(s); U !== null; ) {
      if (U.callback === null) r(s);
      else if (U.startTime <= R)
        r(s), (U.sortIndex = U.expirationTime), t(a, U);
      else break;
      U = n(s);
    }
  }
  function x(R) {
    if (((w = !1), m(R), !E))
      if (n(a) !== null) (E = !0), jt(L);
      else {
        var U = n(s);
        U !== null && Ot(x, U.startTime - R);
      }
  }
  function L(R, U) {
    (E = !1), w && ((w = !1), h(N), (N = -1)), (S = !0);
    var $ = p;
    try {
      for (
        m(U), d = n(a);
        d !== null && (!(d.expirationTime > U) || (R && !K()));

      ) {
        var Z = d.callback;
        if (typeof Z == 'function') {
          (d.callback = null), (p = d.priorityLevel);
          var q = Z(d.expirationTime <= U);
          (U = e.unstable_now()),
            typeof q == 'function' ? (d.callback = q) : d === n(a) && r(a),
            m(U);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var at = !0;
      else {
        var Ve = n(s);
        Ve !== null && Ot(x, Ve.startTime - U), (at = !1);
      }
      return at;
    } finally {
      (d = null), (p = $), (S = !1);
    }
  }
  var D = !1,
    v = null,
    N = -1,
    F = 5,
    j = -1;
  function K() {
    return !(e.unstable_now() - j < F);
  }
  function fe() {
    if (v !== null) {
      var R = e.unstable_now();
      j = R;
      var U = !0;
      try {
        U = v(!0, R);
      } finally {
        U ? oe() : ((D = !1), (v = null));
      }
    } else D = !1;
  }
  var oe;
  if (typeof f == 'function')
    oe = function () {
      f(fe);
    };
  else if (typeof MessageChannel < 'u') {
    var Se = new MessageChannel(),
      ut = Se.port2;
    (Se.port1.onmessage = fe),
      (oe = function () {
        ut.postMessage(null);
      });
  } else
    oe = function () {
      T(fe, 0);
    };
  function jt(R) {
    (v = R), D || ((D = !0), oe());
  }
  function Ot(R, U) {
    N = T(function () {
      R(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || S || ((E = !0), jt(L));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (F = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = p;
      }
      var $ = p;
      p = U;
      try {
        return R();
      } finally {
        p = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, U) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var $ = p;
      p = R;
      try {
        return U();
      } finally {
        p = $;
      }
    }),
    (e.unstable_scheduleCallback = function (R, U, $) {
      var Z = e.unstable_now();
      switch (
        (typeof $ == 'object' && $ !== null
          ? (($ = $.delay), ($ = typeof $ == 'number' && 0 < $ ? Z + $ : Z))
          : ($ = Z),
        R)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = $ + q),
        (R = {
          id: c++,
          callback: U,
          priorityLevel: R,
          startTime: $,
          expirationTime: q,
          sortIndex: -1,
        }),
        $ > Z
          ? ((R.sortIndex = $),
            t(s, R),
            n(a) === null &&
              R === n(s) &&
              (w ? (h(N), (N = -1)) : (w = !0), Ot(x, $ - Z)))
          : ((R.sortIndex = q), t(a, R), E || S || ((E = !0), jt(L))),
        R
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (R) {
      var U = p;
      return function () {
        var $ = p;
        p = U;
        try {
          return R.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(kc);
Ec.exports = kc;
var Sp = Ec.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep = _,
  Xe = Sp;
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var xc = new Set(),
  Vr = {};
function _n(e, t) {
  bn(e, t), bn(e + 'Capture', t);
}
function bn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) xc.add(t[e]);
}
var Nt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  wi = Object.prototype.hasOwnProperty,
  kp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Da = {},
  za = {};
function xp(e) {
  return wi.call(za, e)
    ? !0
    : wi.call(Da, e)
    ? !1
    : kp.test(e)
    ? (za[e] = !0)
    : ((Da[e] = !0), !1);
}
function _p(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Cp(e, t, n, r) {
  if (t === null || typeof t > 'u' || _p(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Pe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Pe[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Pe[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Pe[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Pe[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wu = /[\-:]([a-z])/g;
function Su(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(wu, Su);
    Pe[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(wu, Su);
    Pe[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(wu, Su);
  Pe[t] = new Fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Eu(e, t, n, r) {
  var l = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Cp(t, n, l, r) && (n = null),
    r || l === null
      ? xp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Mt = Ep.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wl = Symbol.for('react.element'),
  jn = Symbol.for('react.portal'),
  On = Symbol.for('react.fragment'),
  ku = Symbol.for('react.strict_mode'),
  Si = Symbol.for('react.profiler'),
  _c = Symbol.for('react.provider'),
  Cc = Symbol.for('react.context'),
  xu = Symbol.for('react.forward_ref'),
  Ei = Symbol.for('react.suspense'),
  ki = Symbol.for('react.suspense_list'),
  _u = Symbol.for('react.memo'),
  Bt = Symbol.for('react.lazy'),
  Pc = Symbol.for('react.offscreen'),
  Ma = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ma && e[Ma]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var se = Object.assign,
  Ho;
function Lr(e) {
  if (Ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ho = (t && t[1]) || '';
    }
  return (
    `
` +
    Ho +
    e
  );
}
var Wo = !1;
function Qo(e, t) {
  if (!e || Wo) return '';
  Wo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Lr(e) : '';
}
function Pp(e) {
  switch (e.tag) {
    case 5:
      return Lr(e.type);
    case 16:
      return Lr('Lazy');
    case 13:
      return Lr('Suspense');
    case 19:
      return Lr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Qo(e.type, !1)), e;
    case 11:
      return (e = Qo(e.type.render, !1)), e;
    case 1:
      return (e = Qo(e.type, !0)), e;
    default:
      return '';
  }
}
function xi(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case On:
      return 'Fragment';
    case jn:
      return 'Portal';
    case Si:
      return 'Profiler';
    case ku:
      return 'StrictMode';
    case Ei:
      return 'Suspense';
    case ki:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Cc:
        return (e.displayName || 'Context') + '.Consumer';
      case _c:
        return (e._context.displayName || 'Context') + '.Provider';
      case xu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case _u:
        return (
          (t = e.displayName || null), t !== null ? t : xi(e.type) || 'Memo'
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return xi(e(t));
        } catch {}
    }
  return null;
}
function Rp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return xi(t);
    case 8:
      return t === ku ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function tn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Rc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Lp(e) {
  var t = Rc(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sl(e) {
  e._valueTracker || (e._valueTracker = Lp(e));
}
function Lc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Rc(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xl(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _i(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ja(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Nc(e, t) {
  (t = t.checked), t != null && Eu(e, 'checked', t, !1);
}
function Ci(e, t) {
  Nc(e, t);
  var n = tn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Pi(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Pi(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oa(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Pi(e, t, n) {
  (t !== 'number' || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Nr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + tn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ri(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: tn(n) };
}
function Tc(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ia(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Dc(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Li(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Dc(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var El,
  zc = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        El = El || document.createElement('div'),
          El.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = El.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Np = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(zr).forEach(function (e) {
  Np.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zr[t] = zr[e]);
  });
});
function Mc(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (zr.hasOwnProperty(e) && zr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function jc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Mc(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Tp = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ni(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62));
  }
}
function Ti(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Di = null;
function Cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  Xn = null,
  Gn = null;
function Ua(e) {
  if ((e = cl(e))) {
    if (typeof zi != 'function') throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Po(t)), zi(e.stateNode, e.type, t));
  }
}
function Oc(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function Fc() {
  if (Xn) {
    var e = Xn,
      t = Gn;
    if (((Gn = Xn = null), Ua(e), t)) for (e = 0; e < t.length; e++) Ua(t[e]);
  }
}
function Ic(e, t) {
  return e(t);
}
function Uc() {}
var Ko = !1;
function Ac(e, t, n) {
  if (Ko) return e(t, n);
  Ko = !0;
  try {
    return Ic(e, t, n);
  } finally {
    (Ko = !1), (Xn !== null || Gn !== null) && (Uc(), Fc());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Po(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n));
  return n;
}
var Mi = !1;
if (Nt)
  try {
    var gr = {};
    Object.defineProperty(gr, 'passive', {
      get: function () {
        Mi = !0;
      },
    }),
      window.addEventListener('test', gr, gr),
      window.removeEventListener('test', gr, gr);
  } catch {
    Mi = !1;
  }
function Dp(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Mr = !1,
  Gl = null,
  Jl = !1,
  ji = null,
  zp = {
    onError: function (e) {
      (Mr = !0), (Gl = e);
    },
  };
function Mp(e, t, n, r, l, o, i, u, a) {
  (Mr = !1), (Gl = null), Dp.apply(zp, arguments);
}
function jp(e, t, n, r, l, o, i, u, a) {
  if ((Mp.apply(this, arguments), Mr)) {
    if (Mr) {
      var s = Gl;
      (Mr = !1), (Gl = null);
    } else throw Error(C(198));
    Jl || ((Jl = !0), (ji = s));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $c(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Aa(e) {
  if (Cn(e) !== e) throw Error(C(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Aa(l), e;
        if (o === r) return Aa(l), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Bc(e) {
  return (e = Op(e)), e !== null ? Vc(e) : null;
}
function Vc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Hc = Xe.unstable_scheduleCallback,
  $a = Xe.unstable_cancelCallback,
  Fp = Xe.unstable_shouldYield,
  Ip = Xe.unstable_requestPaint,
  de = Xe.unstable_now,
  Up = Xe.unstable_getCurrentPriorityLevel,
  Pu = Xe.unstable_ImmediatePriority,
  Wc = Xe.unstable_UserBlockingPriority,
  Zl = Xe.unstable_NormalPriority,
  Ap = Xe.unstable_LowPriority,
  Qc = Xe.unstable_IdlePriority,
  ko = null,
  Et = null;
function $p(e) {
  if (Et && typeof Et.onCommitFiberRoot == 'function')
    try {
      Et.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ht = Math.clz32 ? Math.clz32 : Hp,
  Bp = Math.log,
  Vp = Math.LN2;
function Hp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bp(e) / Vp) | 0)) | 0;
}
var kl = 64,
  xl = 4194304;
function Tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Tr(u)) : ((o &= i), o !== 0 && (r = Tr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Tr(i)) : o !== 0 && (r = Tr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ht(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ht(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = Wp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Oi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Kc() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function al(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ht(t)),
    (e[t] = n);
}
function Kp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ht(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ru(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var J = 0;
function Yc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xc,
  Lu,
  Gc,
  Jc,
  Zc,
  Fi = !1,
  _l = [],
  Yt = null,
  Xt = null,
  Gt = null,
  Qr = new Map(),
  Kr = new Map(),
  Ht = [],
  Yp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ba(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Yt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Xt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Gt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Qr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Kr.delete(t.pointerId);
  }
}
function wr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cl(t)), t !== null && Lu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Xp(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (Yt = wr(Yt, e, t, n, r, l)), !0;
    case 'dragenter':
      return (Xt = wr(Xt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (Gt = wr(Gt, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return Qr.set(o, wr(Qr.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), Kr.set(o, wr(Kr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function qc(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $c(n)), t !== null)) {
          (e.blockedOn = t),
            Zc(e.priority, function () {
              Gc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Di = r), n.target.dispatchEvent(r), (Di = null);
    } else return (t = cl(n)), t !== null && Lu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Va(e, t, n) {
  Ul(e) && n.delete(t);
}
function Gp() {
  (Fi = !1),
    Yt !== null && Ul(Yt) && (Yt = null),
    Xt !== null && Ul(Xt) && (Xt = null),
    Gt !== null && Ul(Gt) && (Gt = null),
    Qr.forEach(Va),
    Kr.forEach(Va);
}
function Sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Gp)));
}
function Yr(e) {
  function t(l) {
    return Sr(l, e);
  }
  if (0 < _l.length) {
    Sr(_l[0], e);
    for (var n = 1; n < _l.length; n++) {
      var r = _l[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && Sr(Yt, e),
      Xt !== null && Sr(Xt, e),
      Gt !== null && Sr(Gt, e),
      Qr.forEach(t),
      Kr.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    qc(n), n.blockedOn === null && Ht.shift();
}
var Jn = Mt.ReactCurrentBatchConfig,
  bl = !0;
function Jp(e, t, n, r) {
  var l = J,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (J = 1), Nu(e, t, n, r);
  } finally {
    (J = l), (Jn.transition = o);
  }
}
function Zp(e, t, n, r) {
  var l = J,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (J = 4), Nu(e, t, n, r);
  } finally {
    (J = l), (Jn.transition = o);
  }
}
function Nu(e, t, n, r) {
  if (bl) {
    var l = Ii(e, t, n, r);
    if (l === null) ri(e, t, r, eo, n), Ba(e, r);
    else if (Xp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ba(e, r), t & 4 && -1 < Yp.indexOf(e))) {
      for (; l !== null; ) {
        var o = cl(l);
        if (
          (o !== null && Xc(o),
          (o = Ii(e, t, n, r)),
          o === null && ri(e, t, r, eo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ri(e, t, r, null, n);
  }
}
var eo = null;
function Ii(e, t, n, r) {
  if (((eo = null), (e = Cu(r)), (e = fn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $c(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function bc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Up()) {
        case Pu:
          return 1;
        case Wc:
          return 4;
        case Zl:
        case Ap:
          return 16;
        case Qc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  Tu = null,
  Al = null;
function ef() {
  if (Al) return Al;
  var e,
    t = Tu,
    n = t.length,
    r,
    l = 'value' in Qt ? Qt.value : Qt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Al = l.slice(e, 1 < r ? 1 - r : void 0));
}
function $l(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cl() {
  return !0;
}
function Ha() {
  return !1;
}
function Je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cl
        : Ha),
      (this.isPropagationStopped = Ha),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Cl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cl));
      },
      persist: function () {},
      isPersistent: Cl,
    }),
    t
  );
}
var ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Du = Je(ar),
  sl = se({}, ar, { view: 0, detail: 0 }),
  qp = Je(sl),
  Xo,
  Go,
  Er,
  xo = se({}, sl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Er &&
            (Er && e.type === 'mousemove'
              ? ((Xo = e.screenX - Er.screenX), (Go = e.screenY - Er.screenY))
              : (Go = Xo = 0),
            (Er = e)),
          Xo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Go;
    },
  }),
  Wa = Je(xo),
  bp = se({}, xo, { dataTransfer: 0 }),
  eh = Je(bp),
  th = se({}, sl, { relatedTarget: 0 }),
  Jo = Je(th),
  nh = se({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rh = Je(nh),
  lh = se({}, ar, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  oh = Je(lh),
  ih = se({}, ar, { data: 0 }),
  Qa = Je(ih),
  uh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  ah = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  sh = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ch(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sh[e]) ? !!t[e] : !1;
}
function zu() {
  return ch;
}
var fh = se({}, sl, {
    key: function (e) {
      if (e.key) {
        var t = uh[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = $l(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ah[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zu,
    charCode: function (e) {
      return e.type === 'keypress' ? $l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? $l(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  dh = Je(fh),
  ph = se({}, xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ka = Je(ph),
  hh = se({}, sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zu,
  }),
  mh = Je(hh),
  vh = se({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yh = Je(vh),
  gh = se({}, xo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wh = Je(gh),
  Sh = [9, 13, 27, 32],
  Mu = Nt && 'CompositionEvent' in window,
  jr = null;
Nt && 'documentMode' in document && (jr = document.documentMode);
var Eh = Nt && 'TextEvent' in window && !jr,
  tf = Nt && (!Mu || (jr && 8 < jr && 11 >= jr)),
  Ya = ' ',
  Xa = !1;
function nf(e, t) {
  switch (e) {
    case 'keyup':
      return Sh.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function rf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Fn = !1;
function kh(e, t) {
  switch (e) {
    case 'compositionend':
      return rf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Xa = !0), Ya);
    case 'textInput':
      return (e = t.data), e === Ya && Xa ? null : e;
    default:
      return null;
  }
}
function xh(e, t) {
  if (Fn)
    return e === 'compositionend' || (!Mu && nf(e, t))
      ? ((e = ef()), (Al = Tu = Qt = null), (Fn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return tf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _h = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_h[e.type] : t === 'textarea';
}
function lf(e, t, n, r) {
  Oc(r),
    (t = to(t, 'onChange')),
    0 < t.length &&
      ((n = new Du('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Or = null,
  Xr = null;
function Ch(e) {
  vf(e, 0);
}
function _o(e) {
  var t = An(e);
  if (Lc(t)) return e;
}
function Ph(e, t) {
  if (e === 'change') return t;
}
var of = !1;
if (Nt) {
  var Zo;
  if (Nt) {
    var qo = 'oninput' in document;
    if (!qo) {
      var Ja = document.createElement('div');
      Ja.setAttribute('oninput', 'return;'),
        (qo = typeof Ja.oninput == 'function');
    }
    Zo = qo;
  } else Zo = !1;
  of = Zo && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  Or && (Or.detachEvent('onpropertychange', uf), (Xr = Or = null));
}
function uf(e) {
  if (e.propertyName === 'value' && _o(Xr)) {
    var t = [];
    lf(t, Xr, e, Cu(e)), Ac(Ch, t);
  }
}
function Rh(e, t, n) {
  e === 'focusin'
    ? (Za(), (Or = t), (Xr = n), Or.attachEvent('onpropertychange', uf))
    : e === 'focusout' && Za();
}
function Lh(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return _o(Xr);
}
function Nh(e, t) {
  if (e === 'click') return _o(t);
}
function Th(e, t) {
  if (e === 'input' || e === 'change') return _o(t);
}
function Dh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == 'function' ? Object.is : Dh;
function Gr(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wi.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ba(e, t) {
  var n = qa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qa(n);
  }
}
function af(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? af(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sf() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function zh(e) {
  var t = sf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    af(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ju(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ba(n, o));
        var i = ba(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mh = Nt && 'documentMode' in document && 11 >= document.documentMode,
  In = null,
  Ui = null,
  Fr = null,
  Ai = !1;
function es(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai ||
    In == null ||
    In !== Xl(r) ||
    ((r = In),
    'selectionStart' in r && ju(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Gr(Fr, r)) ||
      ((Fr = r),
      (r = to(Ui, 'onSelect')),
      0 < r.length &&
        ((t = new Du('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
}
function Pl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Un = {
    animationend: Pl('Animation', 'AnimationEnd'),
    animationiteration: Pl('Animation', 'AnimationIteration'),
    animationstart: Pl('Animation', 'AnimationStart'),
    transitionend: Pl('Transition', 'TransitionEnd'),
  },
  bo = {},
  cf = {};
Nt &&
  ((cf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  'TransitionEvent' in window || delete Un.transitionend.transition);
function Co(e) {
  if (bo[e]) return bo[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cf) return (bo[e] = t[n]);
  return e;
}
var ff = Co('animationend'),
  df = Co('animationiteration'),
  pf = Co('animationstart'),
  hf = Co('transitionend'),
  mf = new Map(),
  ts =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function rn(e, t) {
  mf.set(e, t), _n(t, [e]);
}
for (var ei = 0; ei < ts.length; ei++) {
  var ti = ts[ei],
    jh = ti.toLowerCase(),
    Oh = ti[0].toUpperCase() + ti.slice(1);
  rn(jh, 'on' + Oh);
}
rn(ff, 'onAnimationEnd');
rn(df, 'onAnimationIteration');
rn(pf, 'onAnimationStart');
rn('dblclick', 'onDoubleClick');
rn('focusin', 'onFocus');
rn('focusout', 'onBlur');
rn(hf, 'onTransitionEnd');
bn('onMouseEnter', ['mouseout', 'mouseover']);
bn('onMouseLeave', ['mouseout', 'mouseover']);
bn('onPointerEnter', ['pointerout', 'pointerover']);
bn('onPointerLeave', ['pointerout', 'pointerover']);
_n(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
_n(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
_n('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
_n(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
_n(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
_n(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Dr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Fh = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dr));
function ns(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), jp(r, t, void 0, e), (e.currentTarget = null);
}
function vf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          ns(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          ns(l, u, s), (o = a);
        }
    }
  }
  if (Jl) throw ((e = ji), (Jl = !1), (ji = null), e);
}
function ee(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = new Set());
  var r = e + '__bubble';
  n.has(r) || (yf(t, e, 2, !1), n.add(r));
}
function ni(e, t, n) {
  var r = 0;
  t && (r |= 4), yf(n, e, r, t);
}
var Rl = '_reactListening' + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Rl]) {
    (e[Rl] = !0),
      xc.forEach(function (n) {
        n !== 'selectionchange' && (Fh.has(n) || ni(n, !1, e), ni(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rl] || ((t[Rl] = !0), ni('selectionchange', !1, t));
  }
}
function yf(e, t, n, r) {
  switch (bc(t)) {
    case 1:
      var l = Jp;
      break;
    case 4:
      l = Zp;
      break;
    default:
      l = Nu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ri(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = fn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ac(function () {
    var s = o,
      c = Cu(n),
      d = [];
    e: {
      var p = mf.get(e);
      if (p !== void 0) {
        var S = Du,
          E = e;
        switch (e) {
          case 'keypress':
            if ($l(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = dh;
            break;
          case 'focusin':
            (E = 'focus'), (S = Jo);
            break;
          case 'focusout':
            (E = 'blur'), (S = Jo);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = Jo;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = Wa;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = eh;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = mh;
            break;
          case ff:
          case df:
          case pf:
            S = rh;
            break;
          case hf:
            S = yh;
            break;
          case 'scroll':
            S = qp;
            break;
          case 'wheel':
            S = wh;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = oh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Ka;
        }
        var w = (t & 4) !== 0,
          T = !w && e === 'scroll',
          h = w ? (p !== null ? p + 'Capture' : null) : p;
        w = [];
        for (var f = s, m; f !== null; ) {
          m = f;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              h !== null && ((x = Wr(f, h)), x != null && w.push(Zr(f, x, m)))),
            T)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((p = new S(p, E, null, n, c)), d.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== Di &&
            (E = n.relatedTarget || n.fromElement) &&
            (fn(E) || E[Tt]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((E = n.relatedTarget || n.toElement),
              (S = s),
              (E = E ? fn(E) : null),
              E !== null &&
                ((T = Cn(E)), E !== T || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((S = null), (E = s)),
          S !== E)
        ) {
          if (
            ((w = Wa),
            (x = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Ka),
              (x = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (f = 'pointer')),
            (T = S == null ? p : An(S)),
            (m = E == null ? p : An(E)),
            (p = new w(x, f + 'leave', S, n, c)),
            (p.target = T),
            (p.relatedTarget = m),
            (x = null),
            fn(c) === s &&
              ((w = new w(h, f + 'enter', E, n, c)),
              (w.target = m),
              (w.relatedTarget = T),
              (x = w)),
            (T = x),
            S && E)
          )
            t: {
              for (w = S, h = E, f = 0, m = w; m; m = Dn(m)) f++;
              for (m = 0, x = h; x; x = Dn(x)) m++;
              for (; 0 < f - m; ) (w = Dn(w)), f--;
              for (; 0 < m - f; ) (h = Dn(h)), m--;
              for (; f--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = Dn(w)), (h = Dn(h));
              }
              w = null;
            }
          else w = null;
          S !== null && rs(d, p, S, w, !1),
            E !== null && T !== null && rs(d, T, E, w, !0);
        }
      }
      e: {
        if (
          ((p = s ? An(s) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && p.type === 'file'))
        )
          var L = Ph;
        else if (Ga(p))
          if (of) L = Th;
          else {
            L = Lh;
            var D = Rh;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (L = Nh);
        if (L && (L = L(e, s))) {
          lf(d, L, n, c);
          break e;
        }
        D && D(e, p, s),
          e === 'focusout' &&
            (D = p._wrapperState) &&
            D.controlled &&
            p.type === 'number' &&
            Pi(p, 'number', p.value);
      }
      switch (((D = s ? An(s) : window), e)) {
        case 'focusin':
          (Ga(D) || D.contentEditable === 'true') &&
            ((In = D), (Ui = s), (Fr = null));
          break;
        case 'focusout':
          Fr = Ui = In = null;
          break;
        case 'mousedown':
          Ai = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ai = !1), es(d, n, c);
          break;
        case 'selectionchange':
          if (Mh) break;
        case 'keydown':
        case 'keyup':
          es(d, n, c);
      }
      var v;
      if (Mu)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        Fn
          ? nf(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (tf &&
          n.locale !== 'ko' &&
          (Fn || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && Fn && (v = ef())
            : ((Qt = c),
              (Tu = 'value' in Qt ? Qt.value : Qt.textContent),
              (Fn = !0))),
        (D = to(s, N)),
        0 < D.length &&
          ((N = new Qa(N, e, null, n, c)),
          d.push({ event: N, listeners: D }),
          v ? (N.data = v) : ((v = rf(n)), v !== null && (N.data = v)))),
        (v = Eh ? kh(e, n) : xh(e, n)) &&
          ((s = to(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Qa('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: s }),
            (c.data = v)));
    }
    vf(d, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Wr(e, n)),
      o != null && r.unshift(Zr(e, o, l)),
      (o = Wr(e, t)),
      o != null && r.push(Zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Wr(n, o)), a != null && i.unshift(Zr(n, a, u)))
        : l || ((a = Wr(n, o)), a != null && i.push(Zr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ih = /\r\n?/g,
  Uh = /\u0000|\uFFFD/g;
function ls(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Ih,
      `
`
    )
    .replace(Uh, '');
}
function Ll(e, t, n) {
  if (((t = ls(t)), ls(e) !== t && n)) throw Error(C(425));
}
function no() {}
var $i = null,
  Bi = null;
function Vi(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hi = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ah = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  os = typeof Promise == 'function' ? Promise : void 0,
  $h =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof os < 'u'
      ? function (e) {
          return os.resolve(null).then(e).catch(Bh);
        }
      : Hi;
function Bh(e) {
  setTimeout(function () {
    throw e;
  });
}
function li(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), Yr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  Yr(t);
}
function Jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function is(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2),
  St = '__reactFiber$' + sr,
  qr = '__reactProps$' + sr,
  Tt = '__reactContainer$' + sr,
  Wi = '__reactEvents$' + sr,
  Vh = '__reactListeners$' + sr,
  Hh = '__reactHandles$' + sr;
function fn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = is(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = is(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[St] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Po(e) {
  return e[qr] || null;
}
var Qi = [],
  $n = -1;
function ln(e) {
  return { current: e };
}
function te(e) {
  0 > $n || ((e.current = Qi[$n]), (Qi[$n] = null), $n--);
}
function b(e, t) {
  $n++, (Qi[$n] = e.current), (e.current = t);
}
var nn = {},
  Te = ln(nn),
  Ae = ln(!1),
  gn = nn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  te(Ae), te(Te);
}
function us(e, t, n) {
  if (Te.current !== nn) throw Error(C(168));
  b(Te, t), b(Ae, n);
}
function gf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, Rp(e) || 'Unknown', l));
  return se({}, n, r);
}
function lo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (gn = Te.current),
    b(Te, e),
    b(Ae, Ae.current),
    !0
  );
}
function as(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = gf(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(Te),
      b(Te, e))
    : te(Ae),
    b(Ae, n);
}
var _t = null,
  Ro = !1,
  oi = !1;
function wf(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Wh(e) {
  (Ro = !0), wf(e);
}
function on() {
  if (!oi && _t !== null) {
    oi = !0;
    var e = 0,
      t = J;
    try {
      var n = _t;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (Ro = !1);
    } catch (l) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Hc(Pu, on), l);
    } finally {
      (J = t), (oi = !1);
    }
  }
  return null;
}
var Bn = [],
  Vn = 0,
  oo = null,
  io = 0,
  et = [],
  tt = 0,
  wn = null,
  Ct = 1,
  Pt = '';
function sn(e, t) {
  (Bn[Vn++] = io), (Bn[Vn++] = oo), (oo = e), (io = t);
}
function Sf(e, t, n) {
  (et[tt++] = Ct), (et[tt++] = Pt), (et[tt++] = wn), (wn = e);
  var r = Ct;
  e = Pt;
  var l = 32 - ht(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ht(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ct = (1 << (32 - ht(t) + l)) | (n << l) | r),
      (Pt = o + e);
  } else (Ct = (1 << o) | (n << l) | r), (Pt = e);
}
function Ou(e) {
  e.return !== null && (sn(e, 1), Sf(e, 1, 0));
}
function Fu(e) {
  for (; e === oo; )
    (oo = Bn[--Vn]), (Bn[Vn] = null), (io = Bn[--Vn]), (Bn[Vn] = null);
  for (; e === wn; )
    (wn = et[--tt]),
      (et[tt] = null),
      (Pt = et[--tt]),
      (et[tt] = null),
      (Ct = et[--tt]),
      (et[tt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  pt = null;
function Ef(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ss(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: Ct, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yi(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ss(e, t)) {
        if (Ki(e)) throw Error(C(418));
        t = Jt(n.nextSibling);
        var r = Ye;
        t && ss(e, t)
          ? Ef(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Ki(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function cs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Nl(e) {
  if (e !== Ye) return !1;
  if (!le) return cs(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Vi(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Ki(e)) throw (kf(), Error(C(418)));
    for (; t; ) Ef(e, t), (t = Jt(t.nextSibling));
  }
  if ((cs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ke = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function kf() {
  for (var e = Ke; e; ) e = Jt(e.nextSibling);
}
function tr() {
  (Ke = Ye = null), (le = !1);
}
function Iu(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var Qh = Mt.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Tl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function fs(e) {
  var t = e._init;
  return t(e._payload);
}
function xf(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = en(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, f, m, x) {
    return f === null || f.tag !== 6
      ? ((f = di(m, h.mode, x)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function a(h, f, m, x) {
    var L = m.type;
    return L === On
      ? c(h, f, m.props.children, x, m.key)
      : f !== null &&
        (f.elementType === L ||
          (typeof L == 'object' &&
            L !== null &&
            L.$$typeof === Bt &&
            fs(L) === f.type))
      ? ((x = l(f, m.props)), (x.ref = kr(h, f, m)), (x.return = h), x)
      : ((x = Yl(m.type, m.key, m.props, null, h.mode, x)),
        (x.ref = kr(h, f, m)),
        (x.return = h),
        x);
  }
  function s(h, f, m, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = pi(m, h.mode, x)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f);
  }
  function c(h, f, m, x, L) {
    return f === null || f.tag !== 7
      ? ((f = yn(m, h.mode, x, L)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function d(h, f, m) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = di('' + f, h.mode, m)), (f.return = h), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case wl:
          return (
            (m = Yl(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = kr(h, null, f)),
            (m.return = h),
            m
          );
        case jn:
          return (f = pi(f, h.mode, m)), (f.return = h), f;
        case Bt:
          var x = f._init;
          return d(h, x(f._payload), m);
      }
      if (Nr(f) || yr(f))
        return (f = yn(f, h.mode, m, null)), (f.return = h), f;
      Tl(h, f);
    }
    return null;
  }
  function p(h, f, m, x) {
    var L = f !== null ? f.key : null;
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return L !== null ? null : u(h, f, '' + m, x);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case wl:
          return m.key === L ? a(h, f, m, x) : null;
        case jn:
          return m.key === L ? s(h, f, m, x) : null;
        case Bt:
          return (L = m._init), p(h, f, L(m._payload), x);
      }
      if (Nr(m) || yr(m)) return L !== null ? null : c(h, f, m, x, null);
      Tl(h, m);
    }
    return null;
  }
  function S(h, f, m, x, L) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (h = h.get(m) || null), u(f, h, '' + x, L);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case wl:
          return (h = h.get(x.key === null ? m : x.key) || null), a(f, h, x, L);
        case jn:
          return (h = h.get(x.key === null ? m : x.key) || null), s(f, h, x, L);
        case Bt:
          var D = x._init;
          return S(h, f, m, D(x._payload), L);
      }
      if (Nr(x) || yr(x)) return (h = h.get(m) || null), c(f, h, x, L, null);
      Tl(f, x);
    }
    return null;
  }
  function E(h, f, m, x) {
    for (
      var L = null, D = null, v = f, N = (f = 0), F = null;
      v !== null && N < m.length;
      N++
    ) {
      v.index > N ? ((F = v), (v = null)) : (F = v.sibling);
      var j = p(h, v, m[N], x);
      if (j === null) {
        v === null && (v = F);
        break;
      }
      e && v && j.alternate === null && t(h, v),
        (f = o(j, f, N)),
        D === null ? (L = j) : (D.sibling = j),
        (D = j),
        (v = F);
    }
    if (N === m.length) return n(h, v), le && sn(h, N), L;
    if (v === null) {
      for (; N < m.length; N++)
        (v = d(h, m[N], x)),
          v !== null &&
            ((f = o(v, f, N)), D === null ? (L = v) : (D.sibling = v), (D = v));
      return le && sn(h, N), L;
    }
    for (v = r(h, v); N < m.length; N++)
      (F = S(v, h, N, m[N], x)),
        F !== null &&
          (e && F.alternate !== null && v.delete(F.key === null ? N : F.key),
          (f = o(F, f, N)),
          D === null ? (L = F) : (D.sibling = F),
          (D = F));
    return (
      e &&
        v.forEach(function (K) {
          return t(h, K);
        }),
      le && sn(h, N),
      L
    );
  }
  function w(h, f, m, x) {
    var L = yr(m);
    if (typeof L != 'function') throw Error(C(150));
    if (((m = L.call(m)), m == null)) throw Error(C(151));
    for (
      var D = (L = null), v = f, N = (f = 0), F = null, j = m.next();
      v !== null && !j.done;
      N++, j = m.next()
    ) {
      v.index > N ? ((F = v), (v = null)) : (F = v.sibling);
      var K = p(h, v, j.value, x);
      if (K === null) {
        v === null && (v = F);
        break;
      }
      e && v && K.alternate === null && t(h, v),
        (f = o(K, f, N)),
        D === null ? (L = K) : (D.sibling = K),
        (D = K),
        (v = F);
    }
    if (j.done) return n(h, v), le && sn(h, N), L;
    if (v === null) {
      for (; !j.done; N++, j = m.next())
        (j = d(h, j.value, x)),
          j !== null &&
            ((f = o(j, f, N)), D === null ? (L = j) : (D.sibling = j), (D = j));
      return le && sn(h, N), L;
    }
    for (v = r(h, v); !j.done; N++, j = m.next())
      (j = S(v, h, N, j.value, x)),
        j !== null &&
          (e && j.alternate !== null && v.delete(j.key === null ? N : j.key),
          (f = o(j, f, N)),
          D === null ? (L = j) : (D.sibling = j),
          (D = j));
    return (
      e &&
        v.forEach(function (fe) {
          return t(h, fe);
        }),
      le && sn(h, N),
      L
    );
  }
  function T(h, f, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === On &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case wl:
          e: {
            for (var L = m.key, D = f; D !== null; ) {
              if (D.key === L) {
                if (((L = m.type), L === On)) {
                  if (D.tag === 7) {
                    n(h, D.sibling),
                      (f = l(D, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  D.elementType === L ||
                  (typeof L == 'object' &&
                    L !== null &&
                    L.$$typeof === Bt &&
                    fs(L) === D.type)
                ) {
                  n(h, D.sibling),
                    (f = l(D, m.props)),
                    (f.ref = kr(h, D, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, D);
                break;
              } else t(h, D);
              D = D.sibling;
            }
            m.type === On
              ? ((f = yn(m.props.children, h.mode, x, m.key)),
                (f.return = h),
                (h = f))
              : ((x = Yl(m.type, m.key, m.props, null, h.mode, x)),
                (x.ref = kr(h, f, m)),
                (x.return = h),
                (h = x));
          }
          return i(h);
        case jn:
          e: {
            for (D = m.key; f !== null; ) {
              if (f.key === D)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = pi(m, h.mode, x)), (f.return = h), (h = f);
          }
          return i(h);
        case Bt:
          return (D = m._init), T(h, f, D(m._payload), x);
      }
      if (Nr(m)) return E(h, f, m, x);
      if (yr(m)) return w(h, f, m, x);
      Tl(h, m);
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = di(m, h.mode, x)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return T;
}
var nr = xf(!0),
  _f = xf(!1),
  uo = ln(null),
  ao = null,
  Hn = null,
  Uu = null;
function Au() {
  Uu = Hn = ao = null;
}
function $u(e) {
  var t = uo.current;
  te(uo), (e._currentValue = t);
}
function Xi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (ao = e),
    (Uu = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ot(e) {
  var t = e._currentValue;
  if (Uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (ao === null) throw Error(C(308));
      (Hn = e), (ao.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var dn = null;
function Bu(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Cf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Bu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Vu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Pf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Bu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
  }
}
function ds(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function so(e, t, n, r) {
  var l = e.updateQueue;
  Vt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== i &&
        (u === null ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = l.baseState;
    (i = 0), (c = s = a = null), (u = o);
    do {
      var p = u.lane,
        S = u.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var E = e,
            w = u;
          switch (((p = t), (S = n), w.tag)) {
            case 1:
              if (((E = w.payload), typeof E == 'function')) {
                d = E.call(S, d, p);
                break e;
              }
              d = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = w.payload),
                (p = typeof E == 'function' ? E.call(S, d, p) : E),
                p == null)
              )
                break e;
              d = se({}, d, p);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((s = c = S), (a = d)) : (c = c.next = S),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (En |= i), (e.lanes = i), (e.memoizedState = d);
  }
}
function ps(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var fl = {},
  kt = ln(fl),
  br = ln(fl),
  el = ln(fl);
function pn(e) {
  if (e === fl) throw Error(C(174));
  return e;
}
function Hu(e, t) {
  switch ((b(el, t), b(br, e), b(kt, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  te(kt), b(kt, t);
}
function rr() {
  te(kt), te(br), te(el);
}
function Rf(e) {
  pn(el.current);
  var t = pn(kt.current),
    n = Li(t, e.type);
  t !== n && (b(br, e), b(kt, n));
}
function Wu(e) {
  br.current === e && (te(kt), te(br));
}
var ue = ln(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ii = [];
function Qu() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Vl = Mt.ReactCurrentDispatcher,
  ui = Mt.ReactCurrentBatchConfig,
  Sn = 0,
  ae = null,
  me = null,
  ge = null,
  fo = !1,
  Ir = !1,
  tl = 0,
  Kh = 0;
function Re() {
  throw Error(C(321));
}
function Ku(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function Yu(e, t, n, r, l, o) {
  if (
    ((Sn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vl.current = e === null || e.memoizedState === null ? Jh : Zh),
    (e = n(r, l)),
    Ir)
  ) {
    o = 0;
    do {
      if (((Ir = !1), (tl = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (ge = me = null),
        (t.updateQueue = null),
        (Vl.current = qh),
        (e = n(r, l));
    } while (Ir);
  }
  if (
    ((Vl.current = po),
    (t = me !== null && me.next !== null),
    (Sn = 0),
    (ge = me = ae = null),
    (fo = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Xu() {
  var e = tl !== 0;
  return (tl = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ge === null ? (ae.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function it() {
  if (me === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ge === null ? ae.memoizedState : ge.next;
  if (t !== null) (ge = t), (me = e);
  else {
    if (e === null) throw Error(C(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ge === null ? (ae.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function nl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function ai(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var c = s.lane;
      if ((Sn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = d), (i = r)) : (a = a.next = d),
          (ae.lanes |= c),
          (En |= c);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (En |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    vt(o, t.memoizedState) || (Ue = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Lf() {}
function Nf(e, t) {
  var n = ae,
    r = it(),
    l = t(),
    o = !vt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    Gu(zf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, Df.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(C(349));
    Sn & 30 || Tf(n, t, l);
  }
  return l;
}
function Tf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Df(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Mf(t) && jf(e);
}
function zf(e, t, n) {
  return n(function () {
    Mf(t) && jf(e);
  });
}
function Mf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function jf(e) {
  var t = Dt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function hs(e) {
  var t = wt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Gh.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Of() {
  return it().memoizedState;
}
function Hl(e, t, n, r) {
  var l = wt();
  (ae.flags |= e),
    (l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Lo(e, t, n, r) {
  var l = it();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (me !== null) {
    var i = me.memoizedState;
    if (((o = i.destroy), r !== null && Ku(r, i.deps))) {
      l.memoizedState = rl(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = rl(1 | t, n, o, r));
}
function ms(e, t) {
  return Hl(8390656, 8, e, t);
}
function Gu(e, t) {
  return Lo(2048, 8, e, t);
}
function Ff(e, t) {
  return Lo(4, 2, e, t);
}
function If(e, t) {
  return Lo(4, 4, e, t);
}
function Uf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Af(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lo(4, 4, Uf.bind(null, t, e), n)
  );
}
function Ju() {}
function $f(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Bf(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ku(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vf(e, t, n) {
  return Sn & 21
    ? (vt(n, t) || ((n = Kc()), (ae.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function Yh(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ui.transition;
  ui.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (ui.transition = r);
  }
}
function Hf() {
  return it().memoizedState;
}
function Xh(e, t, n) {
  var r = bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wf(e))
  )
    Qf(t, n);
  else if (((n = Cf(e, t, n, r)), n !== null)) {
    var l = je();
    mt(n, e, r, l), Kf(n, t, r);
  }
}
function Gh(e, t, n) {
  var r = bt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wf(e)) Qf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), vt(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Bu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cf(e, t, l, r)),
      n !== null && ((l = je()), mt(n, e, r, l), Kf(n, t, r));
  }
}
function Wf(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Qf(e, t) {
  Ir = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Kf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ru(e, n);
  }
}
var po = {
    readContext: ot,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Jh = {
    readContext: ot,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ot,
    useEffect: ms,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hl(4194308, 4, Uf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xh.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hs,
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = hs(!1),
        t = e[0];
      return (e = Yh.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = wt();
      if (le) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(C(349));
        Sn & 30 || Tf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ms(zf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rl(9, Df.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix;
      if (le) {
        var n = Pt,
          r = Ct;
        (n = (r & ~(1 << (32 - ht(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = tl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Kh++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: ot,
    useCallback: $f,
    useContext: ot,
    useEffect: Gu,
    useImperativeHandle: Af,
    useInsertionEffect: Ff,
    useLayoutEffect: If,
    useMemo: Bf,
    useReducer: ai,
    useRef: Of,
    useState: function () {
      return ai(nl);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = it();
      return Vf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(nl)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Lf,
    useSyncExternalStore: Nf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  },
  qh = {
    readContext: ot,
    useCallback: $f,
    useContext: ot,
    useEffect: Gu,
    useImperativeHandle: Af,
    useInsertionEffect: Ff,
    useLayoutEffect: If,
    useMemo: Bf,
    useReducer: si,
    useRef: Of,
    useState: function () {
      return si(nl);
    },
    useDebugValue: Ju,
    useDeferredValue: function (e) {
      var t = it();
      return me === null ? (t.memoizedState = e) : Vf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = si(nl)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Lf,
    useSyncExternalStore: Nf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var No = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = bt(e),
      o = Rt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (mt(t, e, l, r), Bl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = bt(e),
      o = Rt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Zt(e, o, l)),
      t !== null && (mt(t, e, l, r), Bl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = bt(e),
      l = Rt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Zt(e, l, r)),
      t !== null && (mt(t, e, r, n), Bl(t, e, r));
  },
};
function vs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gr(n, r) || !Gr(l, o)
      : !0
  );
}
function Yf(e, t, n) {
  var r = !1,
    l = nn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = ot(o))
      : ((l = $e(t) ? gn : Te.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? er(e, l) : nn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = No),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ys(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && No.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Vu(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = ot(o))
    : ((o = $e(t) ? gn : Te.current), (l.context = er(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Gi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && No.enqueueReplaceState(l, l.state, null),
      so(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function lr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Pp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bh = typeof WeakMap == 'function' ? WeakMap : Map;
function Xf(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (uu = r)), Zi(e, t);
    }),
    n
  );
}
function Gf(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Zi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Zi(e, t),
          typeof r != 'function' &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = pm.bind(null, e, t, n)), t.then(e, e));
}
function ws(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ss(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Zt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var em = Mt.ReactCurrentOwner,
  Ue = !1;
function Me(e, t, n, r) {
  t.child = e === null ? _f(t, null, n, r) : nr(t, e.child, n, r);
}
function Es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zn(t, l),
    (r = Yu(e, t, n, r, o, l)),
    (n = Xu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && n && Ou(t), (t.flags |= 1), Me(e, t, r, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !la(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Jf(e, t, o, r, l))
      : ((e = Yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gr), n(i, r) && e.ref === t.ref)
    )
      return zt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = en(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Gr(o, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), zt(e, t, l);
  }
  return qi(e, t, n, r, l);
}
function Zf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Qn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Qn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b(Qn, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Qn, Qe),
      (Qe |= r);
  return Me(e, t, l, n), t.child;
}
function qf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qi(e, t, n, r, l) {
  var o = $e(n) ? gn : Te.current;
  return (
    (o = er(t, o)),
    Zn(t, l),
    (n = Yu(e, t, n, r, o, l)),
    (r = Xu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        zt(e, t, l))
      : (le && r && Ou(t), (t.flags |= 1), Me(e, t, n, l), t.child)
  );
}
function xs(e, t, n, r, l) {
  if ($e(n)) {
    var o = !0;
    lo(t);
  } else o = !1;
  if ((Zn(t, l), t.stateNode === null))
    Wl(e, t), Yf(t, n, r), Ji(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = ot(s))
      : ((s = $e(n) ? gn : Te.current), (s = er(t, s)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || a !== s) && ys(t, i, r, s)),
      (Vt = !1);
    var p = t.memoizedState;
    (i.state = p),
      so(t, r, i, l),
      (a = t.memoizedState),
      u !== r || p !== a || Ae.current || Vt
        ? (typeof c == 'function' && (Gi(t, n, c, r), (a = t.memoizedState)),
          (u = Vt || vs(t, n, u, r, p, a, s))
            ? (d ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Pf(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : ct(t.type, u)),
      (i.props = s),
      (d = t.pendingProps),
      (p = i.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = ot(a))
        : ((a = $e(n) ? gn : Te.current), (a = er(t, a)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== d || p !== a) && ys(t, i, r, a)),
      (Vt = !1),
      (p = t.memoizedState),
      (i.state = p),
      so(t, r, i, l);
    var E = t.memoizedState;
    u !== d || p !== E || Ae.current || Vt
      ? (typeof S == 'function' && (Gi(t, n, S, r), (E = t.memoizedState)),
        (s = Vt || vs(t, n, s, r, p, E, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, E, a),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, E, a)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (i.props = r),
        (i.state = E),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bi(e, t, n, r, o, l);
}
function bi(e, t, n, r, l, o) {
  qf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && as(t, n, !1), zt(e, t, o);
  (r = t.stateNode), (em.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nr(t, e.child, null, o)), (t.child = nr(t, null, u, o)))
      : Me(e, t, u, o),
    (t.memoizedState = r.state),
    l && as(t, n, !0),
    t.child
  );
}
function bf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? us(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && us(e, t.context, !1),
    Hu(e, t.containerInfo);
}
function _s(e, t, n, r, l) {
  return tr(), Iu(l), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ed(e, t, n) {
  var r = t.pendingProps,
    l = ue.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ue, l & 1),
    e === null)
  )
    return (
      Yi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = zo(i, r, 0, null)),
              (e = yn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = tu(n)),
              (t.memoizedState = eu),
              e)
            : Zu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return tm(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = en(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = en(u, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? tu(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = eu),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = en(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Zu(e, t) {
  return (
    (t = zo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && Iu(r),
    nr(t, e.child, null, n),
    (e = Zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function tm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ci(Error(C(422)))), Dl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = zo({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = yn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, i),
        (t.child.memoizedState = tu(i)),
        (t.memoizedState = eu),
        o);
  if (!(t.mode & 1)) return Dl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(C(419))), (r = ci(o, r, void 0)), Dl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ue || u)) {
    if (((r = we), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Dt(e, l), mt(r, e, l, -1));
    }
    return ra(), (r = ci(Error(C(421)))), Dl(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ke = Jt(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (pt = null),
      e !== null &&
        ((et[tt++] = Ct),
        (et[tt++] = Pt),
        (et[tt++] = wn),
        (Ct = e.id),
        (Pt = e.overflow),
        (wn = t)),
      (t = Zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xi(e.return, t, n);
}
function fi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function td(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Me(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
        else if (e.tag === 19) Cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fi(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && co(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fi(t, !0, n, null, o);
        break;
      case 'together':
        fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = en(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function nm(e, t, n) {
  switch (t.tag) {
    case 3:
      bf(t), tr();
      break;
    case 5:
      Rf(t);
      break;
    case 1:
      $e(t.type) && lo(t);
      break;
    case 4:
      Hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(uo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ed(e, t, n)
          : (b(ue, ue.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      b(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return td(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Zf(e, t, n);
  }
  return zt(e, t, n);
}
var nd, nu, rd, ld;
nd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nu = function () {};
rd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), pn(kt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = _i(e, l)), (r = _i(e, r)), (o = []);
        break;
      case 'select':
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = Ri(e, l)), (r = Ri(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = no);
    }
    Ni(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (Vr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(s, '' + a)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (Vr.hasOwnProperty(s)
                ? (a != null && s === 'onScroll' && ee('scroll', e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
ld = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function rm(e, t, n) {
  var r = t.pendingProps;
  switch ((Fu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return $e(t.type) && ro(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        te(Ae),
        te(Te),
        Qu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (cu(pt), (pt = null)))),
        nu(e, t),
        Le(t),
        null
      );
    case 5:
      Wu(t);
      var l = pn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Le(t), null;
        }
        if (((e = pn(kt.current)), Nl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[St] = t), (r[qr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ee('cancel', r), ee('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ee('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Dr.length; l++) ee(Dr[l], r);
              break;
            case 'source':
              ee('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ee('error', r), ee('load', r);
              break;
            case 'details':
              ee('toggle', r);
              break;
            case 'input':
              ja(r, o), ee('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ee('invalid', r);
              break;
            case 'textarea':
              Fa(r, o), ee('invalid', r);
          }
          Ni(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ll(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ll(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Vr.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  ee('scroll', r);
            }
          switch (n) {
            case 'input':
              Sl(r), Oa(r, o, !0);
              break;
            case 'textarea':
              Sl(r), Ia(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = no);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Dc(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[St] = t),
            (e[qr] = r),
            nd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ti(n, r)), n)) {
              case 'dialog':
                ee('cancel', e), ee('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ee('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Dr.length; l++) ee(Dr[l], e);
                l = r;
                break;
              case 'source':
                ee('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ee('error', e), ee('load', e), (l = r);
                break;
              case 'details':
                ee('toggle', e), (l = r);
                break;
              case 'input':
                ja(e, r), (l = _i(e, r)), ee('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ee('invalid', e);
                break;
              case 'textarea':
                Fa(e, r), (l = Ri(e, r)), ee('invalid', e);
                break;
              default:
                l = r;
            }
            Ni(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === 'style'
                  ? jc(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && zc(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Hr(e, a)
                    : typeof a == 'number' && Hr(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Vr.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && ee('scroll', e)
                      : a != null && Eu(e, o, a, i));
              }
            switch (n) {
              case 'input':
                Sl(e), Oa(e, r, !1);
                break;
              case 'textarea':
                Sl(e), Ia(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + tn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = no);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) ld(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166));
        if (((n = pn(el.current)), pn(kt.current), Nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (te(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          kf(), tr(), (t.flags |= 98560), (o = !1);
        else if (((o = Nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[St] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else pt !== null && (cu(pt), (pt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? ve === 0 && (ve = 3) : ra())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        rr(), nu(e, t), e === null && Jr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return $u(t.type._context), Le(t), null;
    case 17:
      return $e(t.type) && ro(), Le(t), null;
    case 19:
      if ((te(ue), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) xr(o, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = co(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    xr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            de() > or &&
            ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * de() - o.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = ue.current),
          b(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function lm(e, t) {
  switch ((Fu(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        te(Ae),
        te(Te),
        Qu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wu(t), null;
    case 13:
      if (
        (te(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ue), null;
    case 4:
      return rr(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zl = !1,
  Ne = !1,
  om = typeof WeakSet == 'function' ? WeakSet : Set,
  z = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ru(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ps = !1;
function im(e, t) {
  if ((($i = bl), (e = sf()), ju(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            c = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (l !== 0 && d.nodeType !== 3) || (u = i + l),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = i + r),
                d.nodeType === 3 && (i += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (p = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if (
                (p === n && ++s === l && (u = i),
                p === o && ++c === r && (a = i),
                (S = d.nextSibling) !== null)
              )
                break;
              (d = p), (p = d.parentNode);
            }
            d = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bi = { focusedElem: e, selectionRange: n }, bl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var w = E.memoizedProps,
                    T = E.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ct(t.type, w),
                      T
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          ce(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (E = Ps), (Ps = !1), E;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ru(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function To(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function od(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), od(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[qr], delete t[Wi], delete t[Vh], delete t[Hh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function id(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || id(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
var _e = null,
  ft = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling);
}
function ud(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == 'function')
    try {
      Et.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Wn(n, t);
    case 6:
      var r = _e,
        l = ft;
      (_e = null),
        At(e, t, n),
        (_e = r),
        (ft = l),
        _e !== null &&
          (ft
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (ft
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? li(e.parentNode, n)
              : e.nodeType === 1 && li(e, n),
            Yr(e))
          : li(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (l = ft),
        (_e = n.stateNode.containerInfo),
        (ft = !0),
        At(e, t, n),
        (_e = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ru(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ce(n, t, u);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), At(e, t, n), (Ne = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function Ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new om()),
      t.forEach(function (r) {
        var l = mm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (_e = u.stateNode), (ft = !1);
              break e;
            case 3:
              (_e = u.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (_e = u.stateNode.containerInfo), (ft = !0);
              break e;
          }
          u = u.return;
        }
        if (_e === null) throw Error(C(160));
        ud(o, i, l), (_e = null), (ft = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ad(t, e), (t = t.sibling);
}
function ad(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), gt(e), r & 4)) {
        try {
          Ur(3, e, e.return), To(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      st(t, e), gt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        gt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Hr(l, '');
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Nc(l, o),
              Ti(u, i);
            var s = Ti(u, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                d = a[i + 1];
              c === 'style'
                ? jc(l, d)
                : c === 'dangerouslySetInnerHTML'
                ? zc(l, d)
                : c === 'children'
                ? Hr(l, d)
                : Eu(l, c, d, s);
            }
            switch (u) {
              case 'input':
                Ci(l, o);
                break;
              case 'textarea':
                Tc(l, o);
                break;
              case 'select':
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Yn(l, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yn(l, !!o.multiple, o.defaultValue, !0)
                      : Yn(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[qr] = o;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((st(t, e), gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yr(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      st(t, e), gt(e);
      break;
    case 13:
      st(t, e),
        gt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ea = de())),
        r & 4 && Ls(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (s = Ne) || c), st(t, e), (Ne = s)) : st(t, e),
        gt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((p = z), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var E = p.stateNode;
                  if (typeof E.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ts(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (z = S)) : Ts(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (l = d.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = d.stateNode),
                      (a = d.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (u.style.display = Mc('display', i)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = s ? '' : d.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      st(t, e), gt(e), r & 4 && Ls(e);
      break;
    case 21:
      break;
    default:
      st(t, e), gt(e);
  }
}
function gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (id(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hr(l, ''), (r.flags &= -33));
          var o = Rs(e);
          iu(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Rs(e);
          ou(e, u, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function um(e, t, n) {
  (z = e), sd(e);
}
function sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Ne;
        u = zl;
        var s = Ne;
        if (((zl = i), (Ne = a) && !s))
          for (z = l; z !== null; )
            (i = z),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ds(l)
                : a !== null
                ? ((a.return = i), (z = a))
                : Ds(l);
        for (; o !== null; ) (z = o), sd(o), (o = o.sibling);
        (z = l), (zl = u), (Ne = s);
      }
      Ns(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ns(e);
  }
}
function Ns(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ps(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ps(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus();
                    break;
                  case 'img':
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Yr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        Ne || (t.flags & 512 && lu(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ts(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (a) {
            ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ce(t, l, a);
            }
          }
          var o = t.return;
          try {
            lu(t);
          } catch (a) {
            ce(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            lu(t);
          } catch (a) {
            ce(t, i, a);
          }
      }
    } catch (a) {
      ce(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var am = Math.ceil,
  ho = Mt.ReactCurrentDispatcher,
  qu = Mt.ReactCurrentOwner,
  lt = Mt.ReactCurrentBatchConfig,
  G = 0,
  we = null,
  he = null,
  Ce = 0,
  Qe = 0,
  Qn = ln(0),
  ve = 0,
  ll = null,
  En = 0,
  Do = 0,
  bu = 0,
  Ar = null,
  Ie = null,
  ea = 0,
  or = 1 / 0,
  xt = null,
  mo = !1,
  uu = null,
  qt = null,
  Ml = !1,
  Kt = null,
  vo = 0,
  $r = 0,
  au = null,
  Ql = -1,
  Kl = 0;
function je() {
  return G & 6 ? de() : Ql !== -1 ? Ql : (Ql = de());
}
function bt(e) {
  return e.mode & 1
    ? G & 2 && Ce !== 0
      ? Ce & -Ce
      : Qh.transition !== null
      ? (Kl === 0 && (Kl = Kc()), Kl)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bc(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (au = null), Error(C(185)));
  al(e, n, r),
    (!(G & 2) || e !== we) &&
      (e === we && (!(G & 2) && (Do |= n), ve === 4 && Wt(e, Ce)),
      Be(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((or = de() + 500), Ro && on()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Qp(e, t);
  var r = ql(e, e === we ? Ce : 0);
  if (r === 0)
    n !== null && $a(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $a(n), t === 1))
      e.tag === 0 ? Wh(zs.bind(null, e)) : wf(zs.bind(null, e)),
        $h(function () {
          !(G & 6) && on();
        }),
        (n = null);
    else {
      switch (Yc(r)) {
        case 1:
          n = Pu;
          break;
        case 4:
          n = Wc;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Qc;
          break;
        default:
          n = Zl;
      }
      n = yd(n, cd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cd(e, t) {
  if (((Ql = -1), (Kl = 0), G & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ql(e, e === we ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var l = G;
    G |= 2;
    var o = dd();
    (we !== e || Ce !== t) && ((xt = null), (or = de() + 500), vn(e, t));
    do
      try {
        fm();
        break;
      } catch (u) {
        fd(e, u);
      }
    while (!0);
    Au(),
      (ho.current = o),
      (G = l),
      he !== null ? (t = 0) : ((we = null), (Ce = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oi(e)), l !== 0 && ((r = l), (t = su(e, l)))), t === 1)
    )
      throw ((n = ll), vn(e, 0), Wt(e, r), Be(e, de()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sm(l) &&
          ((t = yo(e, r)),
          t === 2 && ((o = Oi(e)), o !== 0 && ((r = o), (t = su(e, o)))),
          t === 1))
      )
        throw ((n = ll), vn(e, 0), Wt(e, r), Be(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          cn(e, Ie, xt);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = ea + 500 - de()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Hi(cn.bind(null, e, Ie, xt), t);
            break;
          }
          cn(e, Ie, xt);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ht(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * am(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hi(cn.bind(null, e, Ie, xt), r);
            break;
          }
          cn(e, Ie, xt);
          break;
        case 5:
          cn(e, Ie, xt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Be(e, de()), e.callbackNode === n ? cd.bind(null, e) : null;
}
function su(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && cu(t)),
    e
  );
}
function cu(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e);
}
function sm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Wt(e, t) {
  for (
    t &= ~bu,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function zs(e) {
  if (G & 6) throw Error(C(327));
  qn();
  var t = ql(e, 0);
  if (!(t & 1)) return Be(e, de()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oi(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = ll), vn(e, 0), Wt(e, t), Be(e, de()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Ie, xt),
    Be(e, de()),
    null
  );
}
function ta(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((or = de() + 500), Ro && on());
  }
}
function kn(e) {
  Kt !== null && Kt.tag === 0 && !(G & 6) && qn();
  var t = G;
  G |= 1;
  var n = lt.transition,
    r = J;
  try {
    if (((lt.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (lt.transition = n), (G = t), !(G & 6) && on();
  }
}
function na() {
  (Qe = Qn.current), te(Qn);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ah(n)), he !== null))
    for (n = he.return; n !== null; ) {
      var r = n;
      switch ((Fu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          rr(), te(Ae), te(Te), Qu();
          break;
        case 5:
          Wu(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          te(ue);
          break;
        case 19:
          te(ue);
          break;
        case 10:
          $u(r.type._context);
          break;
        case 22:
        case 23:
          na();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (he = e = en(e.current, null)),
    (Ce = Qe = t),
    (ve = 0),
    (ll = null),
    (bu = Do = En = 0),
    (Ie = Ar = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function fd(e, t) {
  do {
    var n = he;
    try {
      if ((Au(), (Vl.current = po), fo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((Sn = 0),
        (ge = me = ae = null),
        (Ir = !1),
        (tl = 0),
        (qu.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (ll = t), (he = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = Ce),
          (u.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var s = a,
            c = u,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = ws(i);
          if (S !== null) {
            (S.flags &= -257),
              Ss(S, i, u, o, t),
              S.mode & 1 && gs(o, s, t),
              (t = S),
              (a = s);
            var E = t.updateQueue;
            if (E === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else E.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              gs(o, s, t), ra();
              break e;
            }
            a = Error(C(426));
          }
        } else if (le && u.mode & 1) {
          var T = ws(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Ss(T, i, u, o, t),
              Iu(lr(a, u));
            break e;
          }
        }
        (o = a = lr(a, u)),
          ve !== 4 && (ve = 2),
          Ar === null ? (Ar = [o]) : Ar.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Xf(o, a, t);
              ds(o, h);
              break e;
            case 1:
              u = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (qt === null || !qt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Gf(o, u, t);
                ds(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hd(n);
    } catch (L) {
      (t = L), he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dd() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function ra() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(En & 268435455) && !(Do & 268435455)) || Wt(we, Ce);
}
function yo(e, t) {
  var n = G;
  G |= 2;
  var r = dd();
  (we !== e || Ce !== t) && ((xt = null), vn(e, t));
  do
    try {
      cm();
      break;
    } catch (l) {
      fd(e, l);
    }
  while (!0);
  if ((Au(), (G = n), (ho.current = r), he !== null)) throw Error(C(261));
  return (we = null), (Ce = 0), ve;
}
function cm() {
  for (; he !== null; ) pd(he);
}
function fm() {
  for (; he !== null && !Fp(); ) pd(he);
}
function pd(e) {
  var t = vd(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? hd(e) : (he = t),
    (qu.current = null);
}
function hd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = lm(n, t)), n !== null)) {
        (n.flags &= 32767), (he = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (he = null);
        return;
      }
    } else if (((n = rm(n, t, Qe)), n !== null)) {
      he = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function cn(e, t, n) {
  var r = J,
    l = lt.transition;
  try {
    (lt.transition = null), (J = 1), dm(e, t, n, r);
  } finally {
    (lt.transition = l), (J = r);
  }
  return null;
}
function dm(e, t, n, r) {
  do qn();
  while (Kt !== null);
  if (G & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kp(e, o),
    e === we && ((he = we = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      yd(Zl, function () {
        return qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = lt.transition), (lt.transition = null);
    var i = J;
    J = 1;
    var u = G;
    (G |= 4),
      (qu.current = null),
      im(e, n),
      ad(n, e),
      zh(Bi),
      (bl = !!$i),
      (Bi = $i = null),
      (e.current = n),
      um(n),
      Ip(),
      (G = u),
      (J = i),
      (lt.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Kt = e), (vo = l)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    $p(n.stateNode),
    Be(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (mo) throw ((mo = !1), (e = uu), (uu = null), e);
  return (
    vo & 1 && e.tag !== 0 && qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === au ? $r++ : (($r = 0), (au = e))) : ($r = 0),
    on(),
    null
  );
}
function qn() {
  if (Kt !== null) {
    var e = Yc(vo),
      t = lt.transition,
      n = J;
    try {
      if (((lt.transition = null), (J = 16 > e ? 16 : e), Kt === null))
        var r = !1;
      else {
        if (((e = Kt), (Kt = null), (vo = 0), G & 6)) throw Error(C(331));
        var l = G;
        for (G |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (z = s; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var p = c.sibling,
                        S = c.return;
                      if ((od(c), c === s)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (z = p);
                        break;
                      }
                      z = S;
                    }
                }
              }
              var E = o.alternate;
              if (E !== null) {
                var w = E.child;
                if (w !== null) {
                  E.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (z = h);
                break e;
              }
              z = o.return;
            }
        }
        var f = e.current;
        for (z = f; z !== null; ) {
          i = z;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (z = m);
          else
            e: for (i = f; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, u);
                  }
                } catch (L) {
                  ce(u, u.return, L);
                }
              if (u === i) {
                z = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (z = x);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((G = l), on(), Et && typeof Et.onPostCommitFiberRoot == 'function')
        )
          try {
            Et.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (lt.transition = t);
    }
  }
  return !1;
}
function Ms(e, t, n) {
  (t = lr(n, t)),
    (t = Xf(e, t, 1)),
    (e = Zt(e, t, 1)),
    (t = je()),
    e !== null && (al(e, 1, t), Be(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Ms(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ms(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (qt === null || !qt.has(r)))
        ) {
          (e = lr(n, e)),
            (e = Gf(t, e, 1)),
            (t = Zt(t, e, 1)),
            (e = je()),
            t !== null && (al(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ce & n) === n &&
      (ve === 4 || (ve === 3 && (Ce & 130023424) === Ce && 500 > de() - ea)
        ? vn(e, 0)
        : (bu |= n)),
    Be(e, t);
}
function md(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xl), (xl <<= 1), !(xl & 130023424) && (xl = 4194304))
      : (t = 1));
  var n = je();
  (e = Dt(e, t)), e !== null && (al(e, t, n), Be(e, n));
}
function hm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), md(e, n);
}
function mm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), md(e, n);
}
var vd;
vd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), nm(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && Sf(t, io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var l = er(t, Te.current);
      Zn(t, n), (l = Yu(null, t, r, e, l, n));
      var o = Xu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), lo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Vu(t),
            (l.updater = No),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ji(t, r, e, n),
            (t = bi(null, t, r, !0, o, n)))
          : ((t.tag = 0), le && o && Ou(t), Me(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ym(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = qi(null, t, r, e, n);
            break e;
          case 1:
            t = xs(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = ks(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        qi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        xs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((bf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Pf(e, t),
          so(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = lr(Error(C(423)), t)), (t = _s(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(C(424)), t)), (t = _s(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Jt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                pt = null,
                n = _f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = zt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rf(t),
        e === null && Yi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Vi(r, l) ? (i = null) : o !== null && Vi(r, o) && (t.flags |= 32),
        qf(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Yi(t), null;
    case 13:
      return ed(e, t, n);
    case 4:
      return (
        Hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Es(e, t, r, l, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          b(uo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (vt(o.value, i)) {
            if (o.children === l.children && !Ae.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Rt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Xi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Xi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Me(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (l = ot(l)),
        (r = r(l)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        ks(e, t, r, l, n)
      );
    case 15:
      return Jf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Wl(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), lo(t)) : (e = !1),
        Zn(t, n),
        Yf(t, r, l),
        Ji(t, r, l, n),
        bi(null, t, r, !0, e, n)
      );
    case 19:
      return td(e, t, n);
    case 22:
      return Zf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function yd(e, t) {
  return Hc(e, t);
}
function vm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new vm(e, t, n, r);
}
function la(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ym(e) {
  if (typeof e == 'function') return la(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xu)) return 11;
    if (e === _u) return 14;
  }
  return 2;
}
function en(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) la(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case On:
        return yn(n.children, l, o, t);
      case ku:
        (i = 8), (l |= 8);
        break;
      case Si:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = Si), (e.lanes = o), e
        );
      case Ei:
        return (e = rt(13, n, t, l)), (e.elementType = Ei), (e.lanes = o), e;
      case ki:
        return (e = rt(19, n, t, l)), (e.elementType = ki), (e.lanes = o), e;
      case Pc:
        return zo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case _c:
              i = 10;
              break e;
            case Cc:
              i = 9;
              break e;
            case xu:
              i = 11;
              break e;
            case _u:
              i = 14;
              break e;
            case Bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = rt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function yn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function zo(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = Pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function di(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function pi(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function oa(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new gm(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = rt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Vu(o),
    e
  );
}
function wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gd(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return gf(e, n, t);
  }
  return t;
}
function wd(e, t, n, r, l, o, i, u, a) {
  return (
    (e = oa(n, r, !0, e, l, o, i, u, a)),
    (e.context = gd(null)),
    (n = e.current),
    (r = je()),
    (l = bt(n)),
    (o = Rt(r, l)),
    (o.callback = t ?? null),
    Zt(n, o, l),
    (e.current.lanes = l),
    al(e, l, r),
    Be(e, r),
    e
  );
}
function Mo(e, t, n, r) {
  var l = t.current,
    o = je(),
    i = bt(l);
  return (
    (n = gd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Zt(l, t, i)),
    e !== null && (mt(e, l, i, o), Bl(e, l, i)),
    i
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function js(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ia(e, t) {
  js(e, t), (e = e.alternate) && js(e, t);
}
function Sm() {
  return null;
}
var Sd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
jo.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Mo(e, t, null, null);
};
jo.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function () {
      Mo(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    Ht.splice(n, 0, e), n === 0 && qc(e);
  }
};
function aa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Os() {}
function Em(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = go(i);
        o.call(s);
      };
    }
    var i = wd(t, r, e, 0, null, !1, !1, '', Os);
    return (
      (e._reactRootContainer = i),
      (e[Tt] = i.current),
      Jr(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var s = go(a);
      u.call(s);
    };
  }
  var a = oa(e, 0, !1, null, null, !1, !1, '', Os);
  return (
    (e._reactRootContainer = a),
    (e[Tt] = a.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      Mo(t, a, n, r);
    }),
    a
  );
}
function Fo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var a = go(i);
        u.call(a);
      };
    }
    Mo(t, i, e, l);
  } else i = Em(n, t, e, l, r);
  return go(i);
}
Xc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 &&
          (Ru(t, n | 1), Be(t, de()), !(G & 6) && ((or = de() + 500), on()));
      }
      break;
    case 13:
      kn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var l = je();
          mt(r, e, 1, l);
        }
      }),
        ia(e, 1);
  }
};
Lu = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = je();
      mt(t, e, 134217728, n);
    }
    ia(e, 134217728);
  }
};
Gc = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = je();
      mt(n, e, t, r);
    }
    ia(e, t);
  }
};
Jc = function () {
  return J;
};
Zc = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ci(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Po(r);
            if (!l) throw Error(C(90));
            Lc(r), Ci(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Tc(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
Ic = ta;
Uc = kn;
var km = { usingClientEntryPoint: !1, Events: [cl, An, Po, Oc, Fc, ta] },
  _r = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  xm = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || Sm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber)
    try {
      (ko = jl.inject(xm)), (Et = jl);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!aa(t)) throw Error(C(200));
  return wm(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!aa(e)) throw Error(C(299));
  var n = !1,
    r = '',
    l = Sd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = oa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Tt] = t.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)));
  return (e = Bc(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return kn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Oo(t)) throw Error(C(200));
  return Fo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!aa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Sd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = wd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Tt] = t.current),
    Jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new jo(t);
};
Ge.render = function (e, t, n) {
  if (!Oo(t)) throw Error(C(200));
  return Fo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Oo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (kn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = ta;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Fo(e, t, n, !1, r);
};
Ge.version = '18.3.1-next-f1338f8080-20240426';
function Ed() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed);
    } catch (e) {
      console.error(e);
    }
}
Ed(), (Sc.exports = Ge);
var sa = Sc.exports;
const _m = uc(sa),
  Cm = ic({ __proto__: null, default: _m }, [sa]);
var Fs = sa;
(gi.createRoot = Fs.createRoot), (gi.hydrateRoot = Fs.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(pe || (pe = {}));
const Is = 'popstate';
function Pm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ol(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : xn(l);
  }
  return Lm(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function ir(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Rm() {
  return Math.random().toString(36).substr(2, 8);
}
function Us(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ol(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? un(t) : t,
      { state: n, key: (t && t.key) || r || Rm() }
    )
  );
}
function xn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Lm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = pe.Pop,
    a = null,
    s = c();
  s == null && ((s = 0), i.replaceState(ie({}, i.state, { idx: s }), ''));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function d() {
    u = pe.Pop;
    let T = c(),
      h = T == null ? null : T - s;
    (s = T), a && a({ action: u, location: w.location, delta: h });
  }
  function p(T, h) {
    u = pe.Push;
    let f = ol(w.location, T, h);
    s = c() + 1;
    let m = Us(f, s),
      x = w.createHref(f);
    try {
      i.pushState(m, '', x);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      l.location.assign(x);
    }
    o && a && a({ action: u, location: w.location, delta: 1 });
  }
  function S(T, h) {
    u = pe.Replace;
    let f = ol(w.location, T, h);
    s = c();
    let m = Us(f, s),
      x = w.createHref(f);
    i.replaceState(m, '', x),
      o && a && a({ action: u, location: w.location, delta: 0 });
  }
  function E(T) {
    let h = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      f = typeof T == 'string' ? T : xn(T);
    return (
      (f = f.replace(/ $/, '%20')),
      W(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          f
      ),
      new URL(f, h)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(T) {
      if (a) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Is, d),
        (a = T),
        () => {
          l.removeEventListener(Is, d), (a = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: E,
    encodeLocation(T) {
      let h = E(T);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: S,
    go(T) {
      return i.go(T);
    },
  };
  return w;
}
var re;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(re || (re = {}));
const Nm = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'children',
]);
function Tm(e) {
  return e.index === !0;
}
function fu(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        u = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (W(
          l.index !== !0 || !l.children,
          'Cannot specify children on an index route'
        ),
        W(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Tm(l))
      ) {
        let a = ie({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ie({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = fu(l.children, t, i, r)), a
        );
      }
    })
  );
}
function Kn(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? un(t) : t,
    l = cr(r.pathname || '/', n);
  if (l == null) return null;
  let o = kd(e);
  zm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) {
    let a = Wm(l);
    i = Bm(o[u], a);
  }
  return i;
}
function Dm(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function kd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let a = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    a.relativePath.startsWith('/') &&
      (W(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Lt([r, a.relativePath]),
      c = n.concat(a);
    o.children &&
      o.children.length > 0 &&
      (W(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + s + '".')
      ),
      kd(o.children, t, c, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Am(s, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let a of xd(o.path)) l(o, i, a);
    }),
    t
  );
}
function xd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = xd(r.join('/')),
    u = [];
  return (
    u.push(...i.map((a) => (a === '' ? o : [o, a].join('/')))),
    l && u.push(...i),
    u.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
  );
}
function zm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $m(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Mm = /^:[\w-]+$/,
  jm = 3,
  Om = 2,
  Fm = 1,
  Im = 10,
  Um = -2,
  As = (e) => e === '*';
function Am(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(As) && (r += Um),
    t && (r += Om),
    n
      .filter((l) => !As(l))
      .reduce((l, o) => l + (Mm.test(o) ? jm : o === '' ? Fm : Im), r)
  );
}
function $m(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Bm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === '/' ? t : t.slice(l.length) || '/',
      c = Vm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = u.route;
    o.push({
      params: r,
      pathname: Lt([l, c.pathname]),
      pathnameBase: Ym(Lt([l, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== '/' && (l = Lt([l, c.pathnameBase]));
  }
  return o;
}
function Vm(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Hm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((s, c, d) => {
      let { paramName: p, isOptional: S } = c;
      if (p === '*') {
        let w = u[d] || '';
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const E = u[d];
      return (
        S && !E ? (s[p] = void 0) : (s[p] = (E || '').replace(/%2F/g, '/')), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Hm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ir(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, a) => (
            r.push({ paramName: u, isOptional: a != null }),
            a ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Wm(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      ir(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function cr(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Qm(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? un(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Km(n, t)) : t,
    search: Xm(r),
    hash: Gm(l),
  };
}
function Km(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function hi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function _d(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ca(e, t) {
  let n = _d(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function fa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = un(e))
    : ((l = ie({}, e)),
      W(
        !l.pathname || !l.pathname.includes('?'),
        hi('?', 'pathname', 'search', l)
      ),
      W(
        !l.pathname || !l.pathname.includes('#'),
        hi('#', 'pathname', 'hash', l)
      ),
      W(!l.search || !l.search.includes('#'), hi('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let d = t.length - 1;
    if (!r && i.startsWith('..')) {
      let p = i.split('/');
      for (; p[0] === '..'; ) p.shift(), (d -= 1);
      l.pathname = p.join('/');
    }
    u = d >= 0 ? t[d] : '/';
  }
  let a = Qm(l, u),
    s = i && i !== '/' && i.endsWith('/'),
    c = (o || i === '.') && n.endsWith('/');
  return !a.pathname.endsWith('/') && (s || c) && (a.pathname += '/'), a;
}
const Lt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Ym = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Xm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Gm = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class da {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function pa(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Cd = ['post', 'put', 'patch', 'delete'],
  Jm = new Set(Cd),
  Zm = ['get', ...Cd],
  qm = new Set(Zm),
  bm = new Set([301, 302, 303, 307, 308]),
  ev = new Set([307, 308]),
  mi = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  tv = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Cr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  ha = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  nv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Pd = 'remix-router-transitions';
function rv(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n =
      typeof t < 'u' &&
      typeof t.document < 'u' &&
      typeof t.document.createElement < 'u',
    r = !n;
  W(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (g) => ({ hasErrorBoundary: y(g) });
  } else l = nv;
  let o = {},
    i = fu(e.routes, l, void 0, o),
    u,
    a = e.basename || '/',
    s = e.unstable_dataStrategy || uv,
    c = ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    p = new Set(),
    S = null,
    E = null,
    w = null,
    T = e.hydrationData != null,
    h = Kn(i, e.history.location, a),
    f = null;
  if (h == null) {
    let y = be(404, { pathname: e.history.location.pathname }),
      { matches: g, route: k } = Gs(i);
    (h = g), (f = { [k.id]: y });
  }
  let m,
    x = h.some((y) => y.route.lazy),
    L = h.some((y) => y.route.loader);
  if (x) m = !1;
  else if (!L) m = !0;
  else if (c.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      g = e.hydrationData ? e.hydrationData.errors : null,
      k = (P) =>
        P.route.loader
          ? typeof P.route.loader == 'function' && P.route.loader.hydrate === !0
            ? !1
            : (y && y[P.route.id] !== void 0) || (g && g[P.route.id] !== void 0)
          : !0;
    if (g) {
      let P = h.findIndex((M) => g[M.route.id] !== void 0);
      m = h.slice(0, P + 1).every(k);
    } else m = h.every(k);
  } else m = e.hydrationData != null;
  let D,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: m,
      navigation: mi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    N = pe.Pop,
    F = !1,
    j,
    K = !1,
    fe = new Map(),
    oe = null,
    Se = !1,
    ut = !1,
    jt = [],
    Ot = [],
    R = new Map(),
    U = 0,
    $ = -1,
    Z = new Map(),
    q = new Set(),
    at = new Map(),
    Ve = new Map(),
    He = new Set(),
    De = new Map(),
    Ze = new Map(),
    Ao = !1;
  function Id() {
    if (
      ((d = e.history.listen((y) => {
        let { action: g, location: k, delta: P } = y;
        if (Ao) {
          Ao = !1;
          return;
        }
        ir(
          Ze.size === 0 || P != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let M = _a({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: g,
        });
        if (M && P != null) {
          (Ao = !0),
            e.history.go(P * -1),
            hl(M, {
              state: 'blocked',
              location: k,
              proceed() {
                hl(M, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(P);
              },
              reset() {
                let V = new Map(v.blockers);
                V.set(M, Cr), We({ blockers: V });
              },
            });
          return;
        }
        return an(g, k);
      })),
      n)
    ) {
      wv(t, fe);
      let y = () => Sv(t, fe);
      t.addEventListener('pagehide', y),
        (oe = () => t.removeEventListener('pagehide', y));
    }
    return v.initialized || an(pe.Pop, v.location, { initialHydration: !0 }), D;
  }
  function Ud() {
    d && d(),
      oe && oe(),
      p.clear(),
      j && j.abort(),
      v.fetchers.forEach((y, g) => pl(g)),
      v.blockers.forEach((y, g) => xa(g));
  }
  function Ad(y) {
    return p.add(y), () => p.delete(y);
  }
  function We(y, g) {
    g === void 0 && (g = {}), (v = ie({}, v, y));
    let k = [],
      P = [];
    c.v7_fetcherPersist &&
      v.fetchers.forEach((M, V) => {
        M.state === 'idle' && (He.has(V) ? P.push(V) : k.push(V));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: P,
          unstable_viewTransitionOpts: g.viewTransitionOpts,
          unstable_flushSync: g.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (k.forEach((M) => v.fetchers.delete(M)), P.forEach((M) => pl(M)));
  }
  function fr(y, g, k) {
    var P, M;
    let { flushSync: V } = k === void 0 ? {} : k,
      I =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        v.navigation.state === 'loading' &&
        ((P = y.state) == null ? void 0 : P._isRedirect) !== !0,
      O;
    g.actionData
      ? Object.keys(g.actionData).length > 0
        ? (O = g.actionData)
        : (O = null)
      : I
      ? (O = v.actionData)
      : (O = null);
    let H = g.loaderData
        ? Ys(v.loaderData, g.loaderData, g.matches || [], g.errors)
        : v.loaderData,
      B = v.blockers;
    B.size > 0 && ((B = new Map(B)), B.forEach((A, ne) => B.set(ne, Cr)));
    let Ee =
      F === !0 ||
      (v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    u && ((i = u), (u = void 0)),
      Se ||
        N === pe.Pop ||
        (N === pe.Push
          ? e.history.push(y, y.state)
          : N === pe.Replace && e.history.replace(y, y.state));
    let ke;
    if (N === pe.Pop) {
      let A = fe.get(v.location.pathname);
      A && A.has(y.pathname)
        ? (ke = { currentLocation: v.location, nextLocation: y })
        : fe.has(y.pathname) &&
          (ke = { currentLocation: y, nextLocation: v.location });
    } else if (K) {
      let A = fe.get(v.location.pathname);
      A
        ? A.add(y.pathname)
        : ((A = new Set([y.pathname])), fe.set(v.location.pathname, A)),
        (ke = { currentLocation: v.location, nextLocation: y });
    }
    We(
      ie({}, g, {
        actionData: O,
        loaderData: H,
        historyAction: N,
        location: y,
        initialized: !0,
        navigation: mi,
        revalidation: 'idle',
        restoreScrollPosition: Pa(y, g.matches || v.matches),
        preventScrollReset: Ee,
        blockers: B,
      }),
      { viewTransitionOpts: ke, flushSync: V === !0 }
    ),
      (N = pe.Pop),
      (F = !1),
      (K = !1),
      (Se = !1),
      (ut = !1),
      (jt = []),
      (Ot = []);
  }
  async function ya(y, g) {
    if (typeof y == 'number') {
      e.history.go(y);
      return;
    }
    let k = du(
        v.location,
        v.matches,
        a,
        c.v7_prependBasename,
        y,
        c.v7_relativeSplatPath,
        g == null ? void 0 : g.fromRouteId,
        g == null ? void 0 : g.relative
      ),
      {
        path: P,
        submission: M,
        error: V,
      } = $s(c.v7_normalizeFormMethod, !1, k, g),
      I = v.location,
      O = ol(v.location, P, g && g.state);
    O = ie({}, O, e.history.encodeLocation(O));
    let H = g && g.replace != null ? g.replace : void 0,
      B = pe.Push;
    H === !0
      ? (B = pe.Replace)
      : H === !1 ||
        (M != null &&
          dt(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (B = pe.Replace));
    let Ee =
        g && 'preventScrollReset' in g ? g.preventScrollReset === !0 : void 0,
      ke = (g && g.unstable_flushSync) === !0,
      A = _a({ currentLocation: I, nextLocation: O, historyAction: B });
    if (A) {
      hl(A, {
        state: 'blocked',
        location: O,
        proceed() {
          hl(A, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: O,
          }),
            ya(y, g);
        },
        reset() {
          let ne = new Map(v.blockers);
          ne.set(A, Cr), We({ blockers: ne });
        },
      });
      return;
    }
    return await an(B, O, {
      submission: M,
      pendingError: V,
      preventScrollReset: Ee,
      replace: g && g.replace,
      enableViewTransition: g && g.unstable_viewTransition,
      flushSync: ke,
    });
  }
  function $d() {
    if (
      ($o(),
      We({ revalidation: 'loading' }),
      v.navigation.state !== 'submitting')
    ) {
      if (v.navigation.state === 'idle') {
        an(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      an(N || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function an(y, g, k) {
    j && j.abort(),
      (j = null),
      (N = y),
      (Se = (k && k.startUninterruptedRevalidation) === !0),
      Gd(v.location, v.matches),
      (F = (k && k.preventScrollReset) === !0),
      (K = (k && k.enableViewTransition) === !0);
    let P = u || i,
      M = k && k.overrideNavigation,
      V = Kn(P, g, a),
      I = (k && k.flushSync) === !0;
    if (!V) {
      let A = be(404, { pathname: g.pathname }),
        { matches: ne, route: ye } = Gs(P);
      Bo(),
        fr(
          g,
          { matches: ne, loaderData: {}, errors: { [ye.id]: A } },
          { flushSync: I }
        );
      return;
    }
    if (
      v.initialized &&
      !ut &&
      pv(v.location, g) &&
      !(k && k.submission && dt(k.submission.formMethod))
    ) {
      fr(g, { matches: V }, { flushSync: I });
      return;
    }
    j = new AbortController();
    let O = zn(e.history, g, j.signal, k && k.submission),
      H;
    if (k && k.pendingError)
      H = [Br(V).route.id, { type: re.error, error: k.pendingError }];
    else if (k && k.submission && dt(k.submission.formMethod)) {
      let A = await Bd(O, g, k.submission, V, {
        replace: k.replace,
        flushSync: I,
      });
      if (A.shortCircuited) return;
      (H = A.pendingActionResult),
        (M = vi(g, k.submission)),
        (I = !1),
        (O = zn(e.history, O.url, O.signal));
    }
    let {
      shortCircuited: B,
      loaderData: Ee,
      errors: ke,
    } = await Vd(
      O,
      g,
      V,
      M,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      I,
      H
    );
    B ||
      ((j = null),
      fr(g, ie({ matches: V }, Xs(H), { loaderData: Ee, errors: ke })));
  }
  async function Bd(y, g, k, P, M) {
    M === void 0 && (M = {}), $o();
    let V = yv(g, k);
    We({ navigation: V }, { flushSync: M.flushSync === !0 });
    let I,
      O = hu(P, g);
    if (!O.route.action && !O.route.lazy)
      I = {
        type: re.error,
        error: be(405, {
          method: y.method,
          pathname: g.pathname,
          routeId: O.route.id,
        }),
      };
    else if (((I = (await pr('action', y, [O], P))[0]), y.signal.aborted))
      return { shortCircuited: !0 };
    if (mn(I)) {
      let H;
      return (
        M && M.replace != null
          ? (H = M.replace)
          : (H =
              Ws(I.response.headers.get('Location'), new URL(y.url), a) ===
              v.location.pathname + v.location.search),
        await dr(y, I, { submission: k, replace: H }),
        { shortCircuited: !0 }
      );
    }
    if (hn(I)) throw be(400, { type: 'defer-action' });
    if (nt(I)) {
      let H = Br(P, O.route.id);
      return (
        (M && M.replace) !== !0 && (N = pe.Push),
        { pendingActionResult: [H.route.id, I] }
      );
    }
    return { pendingActionResult: [O.route.id, I] };
  }
  async function Vd(y, g, k, P, M, V, I, O, H, B) {
    let Ee = P || vi(g, M),
      ke = M || V || qs(Ee),
      A = u || i,
      [ne, ye] = Bs(
        e.history,
        v,
        k,
        ke,
        g,
        c.v7_partialHydration && O === !0,
        c.unstable_skipActionErrorRevalidation,
        ut,
        jt,
        Ot,
        He,
        at,
        q,
        A,
        a,
        B
      );
    if (
      (Bo(
        (Y) =>
          !(k && k.some((ze) => ze.route.id === Y)) ||
          (ne && ne.some((ze) => ze.route.id === Y))
      ),
      ($ = ++U),
      ne.length === 0 && ye.length === 0)
    ) {
      let Y = Ea();
      return (
        fr(
          g,
          ie(
            {
              matches: k,
              loaderData: {},
              errors: B && nt(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            Xs(B),
            Y ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: H }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!Se && (!c.v7_partialHydration || !O)) {
      ye.forEach((ze) => {
        let qe = v.fetchers.get(ze.key),
          xe = Pr(void 0, qe ? qe.data : void 0);
        v.fetchers.set(ze.key, xe);
      });
      let Y;
      B && !nt(B[1])
        ? (Y = { [B[0]]: B[1].data })
        : v.actionData &&
          (Object.keys(v.actionData).length === 0
            ? (Y = null)
            : (Y = v.actionData)),
        We(
          ie(
            { navigation: Ee },
            Y !== void 0 ? { actionData: Y } : {},
            ye.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: H }
        );
    }
    ye.forEach((Y) => {
      R.has(Y.key) && It(Y.key), Y.controller && R.set(Y.key, Y.controller);
    });
    let mr = () => ye.forEach((Y) => It(Y.key));
    j && j.signal.addEventListener('abort', mr);
    let { loaderResults: Ut, fetcherResults: Ln } = await ga(
      v.matches,
      k,
      ne,
      ye,
      y
    );
    if (y.signal.aborted) return { shortCircuited: !0 };
    j && j.signal.removeEventListener('abort', mr),
      ye.forEach((Y) => R.delete(Y.key));
    let Nn = Js([...Ut, ...Ln]);
    if (Nn) {
      if (Nn.idx >= ne.length) {
        let Y = ye[Nn.idx - ne.length].key;
        q.add(Y);
      }
      return await dr(y, Nn.result, { replace: I }), { shortCircuited: !0 };
    }
    let { loaderData: Tn, errors: yt } = Ks(v, k, ne, Ut, B, ye, Ln, De);
    De.forEach((Y, ze) => {
      Y.subscribe((qe) => {
        (qe || Y.done) && De.delete(ze);
      });
    }),
      c.v7_partialHydration &&
        O &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Y) => {
            let [ze] = Y;
            return !ne.some((qe) => qe.route.id === ze);
          })
          .forEach((Y) => {
            let [ze, qe] = Y;
            yt = Object.assign(yt || {}, { [ze]: qe });
          });
    let ml = Ea(),
      vl = ka($),
      yl = ml || vl || ye.length > 0;
    return ie(
      { loaderData: Tn, errors: yt },
      yl ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Hd(y, g, k, P) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    R.has(y) && It(y);
    let M = (P && P.unstable_flushSync) === !0,
      V = u || i,
      I = du(
        v.location,
        v.matches,
        a,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        g,
        P == null ? void 0 : P.relative
      ),
      O = Kn(V, I, a);
    if (!O) {
      hr(y, g, be(404, { pathname: I }), { flushSync: M });
      return;
    }
    let {
      path: H,
      submission: B,
      error: Ee,
    } = $s(c.v7_normalizeFormMethod, !0, I, P);
    if (Ee) {
      hr(y, g, Ee, { flushSync: M });
      return;
    }
    let ke = hu(O, H);
    if (((F = (P && P.preventScrollReset) === !0), B && dt(B.formMethod))) {
      Wd(y, g, H, ke, O, M, B);
      return;
    }
    at.set(y, { routeId: g, path: H }), Qd(y, g, H, ke, O, M, B);
  }
  async function Wd(y, g, k, P, M, V, I) {
    if (($o(), at.delete(y), !P.route.action && !P.route.lazy)) {
      let xe = be(405, { method: I.formMethod, pathname: k, routeId: g });
      hr(y, g, xe, { flushSync: V });
      return;
    }
    let O = v.fetchers.get(y);
    Ft(y, gv(I, O), { flushSync: V });
    let H = new AbortController(),
      B = zn(e.history, k, H.signal, I);
    R.set(y, H);
    let Ee = U,
      A = (await pr('action', B, [P], M))[0];
    if (B.signal.aborted) {
      R.get(y) === H && R.delete(y);
      return;
    }
    if (c.v7_fetcherPersist && He.has(y)) {
      if (mn(A) || nt(A)) {
        Ft(y, $t(void 0));
        return;
      }
    } else {
      if (mn(A))
        if ((R.delete(y), $ > Ee)) {
          Ft(y, $t(void 0));
          return;
        } else
          return q.add(y), Ft(y, Pr(I)), dr(B, A, { fetcherSubmission: I });
      if (nt(A)) {
        hr(y, g, A.error);
        return;
      }
    }
    if (hn(A)) throw be(400, { type: 'defer-action' });
    let ne = v.navigation.location || v.location,
      ye = zn(e.history, ne, H.signal),
      mr = u || i,
      Ut =
        v.navigation.state !== 'idle'
          ? Kn(mr, v.navigation.location, a)
          : v.matches;
    W(Ut, "Didn't find any matches after fetcher action");
    let Ln = ++U;
    Z.set(y, Ln);
    let Nn = Pr(I, A.data);
    v.fetchers.set(y, Nn);
    let [Tn, yt] = Bs(
      e.history,
      v,
      Ut,
      I,
      ne,
      !1,
      c.unstable_skipActionErrorRevalidation,
      ut,
      jt,
      Ot,
      He,
      at,
      q,
      mr,
      a,
      [P.route.id, A]
    );
    yt
      .filter((xe) => xe.key !== y)
      .forEach((xe) => {
        let vr = xe.key,
          Ra = v.fetchers.get(vr),
          Zd = Pr(void 0, Ra ? Ra.data : void 0);
        v.fetchers.set(vr, Zd),
          R.has(vr) && It(vr),
          xe.controller && R.set(vr, xe.controller);
      }),
      We({ fetchers: new Map(v.fetchers) });
    let ml = () => yt.forEach((xe) => It(xe.key));
    H.signal.addEventListener('abort', ml);
    let { loaderResults: vl, fetcherResults: yl } = await ga(
      v.matches,
      Ut,
      Tn,
      yt,
      ye
    );
    if (H.signal.aborted) return;
    H.signal.removeEventListener('abort', ml),
      Z.delete(y),
      R.delete(y),
      yt.forEach((xe) => R.delete(xe.key));
    let Y = Js([...vl, ...yl]);
    if (Y) {
      if (Y.idx >= Tn.length) {
        let xe = yt[Y.idx - Tn.length].key;
        q.add(xe);
      }
      return dr(ye, Y.result);
    }
    let { loaderData: ze, errors: qe } = Ks(
      v,
      v.matches,
      Tn,
      vl,
      void 0,
      yt,
      yl,
      De
    );
    if (v.fetchers.has(y)) {
      let xe = $t(A.data);
      v.fetchers.set(y, xe);
    }
    ka(Ln),
      v.navigation.state === 'loading' && Ln > $
        ? (W(N, 'Expected pending action'),
          j && j.abort(),
          fr(v.navigation.location, {
            matches: Ut,
            loaderData: ze,
            errors: qe,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: Ys(v.loaderData, ze, Ut, qe),
            fetchers: new Map(v.fetchers),
          }),
          (ut = !1));
  }
  async function Qd(y, g, k, P, M, V, I) {
    let O = v.fetchers.get(y);
    Ft(y, Pr(I, O ? O.data : void 0), { flushSync: V });
    let H = new AbortController(),
      B = zn(e.history, k, H.signal);
    R.set(y, H);
    let Ee = U,
      A = (await pr('loader', B, [P], M))[0];
    if (
      (hn(A) && (A = (await Td(A, B.signal, !0)) || A),
      R.get(y) === H && R.delete(y),
      !B.signal.aborted)
    ) {
      if (He.has(y)) {
        Ft(y, $t(void 0));
        return;
      }
      if (mn(A))
        if ($ > Ee) {
          Ft(y, $t(void 0));
          return;
        } else {
          q.add(y), await dr(B, A);
          return;
        }
      if (nt(A)) {
        hr(y, g, A.error);
        return;
      }
      W(!hn(A), 'Unhandled fetcher deferred data'), Ft(y, $t(A.data));
    }
  }
  async function dr(y, g, k) {
    let {
      submission: P,
      fetcherSubmission: M,
      replace: V,
    } = k === void 0 ? {} : k;
    g.response.headers.has('X-Remix-Revalidate') && (ut = !0);
    let I = g.response.headers.get('Location');
    W(I, 'Expected a Location header on the redirect Response'),
      (I = Ws(I, new URL(y.url), a));
    let O = ol(v.location, I, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (g.response.headers.has('X-Remix-Reload-Document')) ne = !0;
      else if (ha.test(I)) {
        const ye = e.history.createURL(I);
        ne = ye.origin !== t.location.origin || cr(ye.pathname, a) == null;
      }
      if (ne) {
        V ? t.location.replace(I) : t.location.assign(I);
        return;
      }
    }
    j = null;
    let H = V === !0 ? pe.Replace : pe.Push,
      { formMethod: B, formAction: Ee, formEncType: ke } = v.navigation;
    !P && !M && B && Ee && ke && (P = qs(v.navigation));
    let A = P || M;
    if (ev.has(g.response.status) && A && dt(A.formMethod))
      await an(H, O, {
        submission: ie({}, A, { formAction: I }),
        preventScrollReset: F,
      });
    else {
      let ne = vi(O, P);
      await an(H, O, {
        overrideNavigation: ne,
        fetcherSubmission: M,
        preventScrollReset: F,
      });
    }
  }
  async function pr(y, g, k, P) {
    try {
      let M = await av(s, y, g, k, P, o, l);
      return await Promise.all(
        M.map((V, I) => {
          if (hv(V)) {
            let O = V.result;
            return {
              type: re.redirect,
              response: fv(O, g, k[I].route.id, P, a, c.v7_relativeSplatPath),
            };
          }
          return cv(V);
        })
      );
    } catch (M) {
      return k.map(() => ({ type: re.error, error: M }));
    }
  }
  async function ga(y, g, k, P, M) {
    let [V, ...I] = await Promise.all([
      k.length ? pr('loader', M, k, g) : [],
      ...P.map((O) => {
        if (O.matches && O.match && O.controller) {
          let H = zn(e.history, O.path, O.controller.signal);
          return pr('loader', H, [O.match], O.matches).then((B) => B[0]);
        } else
          return Promise.resolve({
            type: re.error,
            error: be(404, { pathname: O.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Zs(
          y,
          k,
          V,
          V.map(() => M.signal),
          !1,
          v.loaderData
        ),
        Zs(
          y,
          P.map((O) => O.match),
          I,
          P.map((O) => (O.controller ? O.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: V, fetcherResults: I }
    );
  }
  function $o() {
    (ut = !0),
      jt.push(...Bo()),
      at.forEach((y, g) => {
        R.has(g) && (Ot.push(g), It(g));
      });
  }
  function Ft(y, g, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(y, g),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function hr(y, g, k, P) {
    P === void 0 && (P = {});
    let M = Br(v.matches, g);
    pl(y),
      We(
        { errors: { [M.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (P && P.flushSync) === !0 }
      );
  }
  function wa(y) {
    return (
      c.v7_fetcherPersist &&
        (Ve.set(y, (Ve.get(y) || 0) + 1), He.has(y) && He.delete(y)),
      v.fetchers.get(y) || tv
    );
  }
  function pl(y) {
    let g = v.fetchers.get(y);
    R.has(y) && !(g && g.state === 'loading' && Z.has(y)) && It(y),
      at.delete(y),
      Z.delete(y),
      q.delete(y),
      He.delete(y),
      v.fetchers.delete(y);
  }
  function Kd(y) {
    if (c.v7_fetcherPersist) {
      let g = (Ve.get(y) || 0) - 1;
      g <= 0 ? (Ve.delete(y), He.add(y)) : Ve.set(y, g);
    } else pl(y);
    We({ fetchers: new Map(v.fetchers) });
  }
  function It(y) {
    let g = R.get(y);
    W(g, 'Expected fetch controller: ' + y), g.abort(), R.delete(y);
  }
  function Sa(y) {
    for (let g of y) {
      let k = wa(g),
        P = $t(k.data);
      v.fetchers.set(g, P);
    }
  }
  function Ea() {
    let y = [],
      g = !1;
    for (let k of q) {
      let P = v.fetchers.get(k);
      W(P, 'Expected fetcher: ' + k),
        P.state === 'loading' && (q.delete(k), y.push(k), (g = !0));
    }
    return Sa(y), g;
  }
  function ka(y) {
    let g = [];
    for (let [k, P] of Z)
      if (P < y) {
        let M = v.fetchers.get(k);
        W(M, 'Expected fetcher: ' + k),
          M.state === 'loading' && (It(k), Z.delete(k), g.push(k));
      }
    return Sa(g), g.length > 0;
  }
  function Yd(y, g) {
    let k = v.blockers.get(y) || Cr;
    return Ze.get(y) !== g && Ze.set(y, g), k;
  }
  function xa(y) {
    v.blockers.delete(y), Ze.delete(y);
  }
  function hl(y, g) {
    let k = v.blockers.get(y) || Cr;
    W(
      (k.state === 'unblocked' && g.state === 'blocked') ||
        (k.state === 'blocked' && g.state === 'blocked') ||
        (k.state === 'blocked' && g.state === 'proceeding') ||
        (k.state === 'blocked' && g.state === 'unblocked') ||
        (k.state === 'proceeding' && g.state === 'unblocked'),
      'Invalid blocker state transition: ' + k.state + ' -> ' + g.state
    );
    let P = new Map(v.blockers);
    P.set(y, g), We({ blockers: P });
  }
  function _a(y) {
    let { currentLocation: g, nextLocation: k, historyAction: P } = y;
    if (Ze.size === 0) return;
    Ze.size > 1 && ir(!1, 'A router only supports one blocker at a time');
    let M = Array.from(Ze.entries()),
      [V, I] = M[M.length - 1],
      O = v.blockers.get(V);
    if (
      !(O && O.state === 'proceeding') &&
      I({ currentLocation: g, nextLocation: k, historyAction: P })
    )
      return V;
  }
  function Bo(y) {
    let g = [];
    return (
      De.forEach((k, P) => {
        (!y || y(P)) && (k.cancel(), g.push(P), De.delete(P));
      }),
      g
    );
  }
  function Xd(y, g, k) {
    if (((S = y), (w = g), (E = k || null), !T && v.navigation === mi)) {
      T = !0;
      let P = Pa(v.location, v.matches);
      P != null && We({ restoreScrollPosition: P });
    }
    return () => {
      (S = null), (w = null), (E = null);
    };
  }
  function Ca(y, g) {
    return (
      (E &&
        E(
          y,
          g.map((P) => Dm(P, v.loaderData))
        )) ||
      y.key
    );
  }
  function Gd(y, g) {
    if (S && w) {
      let k = Ca(y, g);
      S[k] = w();
    }
  }
  function Pa(y, g) {
    if (S) {
      let k = Ca(y, g),
        P = S[k];
      if (typeof P == 'number') return P;
    }
    return null;
  }
  function Jd(y) {
    (o = {}), (u = fu(y, l, void 0, o));
  }
  return (
    (D = {
      get basename() {
        return a;
      },
      get future() {
        return c;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Id,
      subscribe: Ad,
      enableScrollRestoration: Xd,
      navigate: ya,
      fetch: Hd,
      revalidate: $d,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: wa,
      deleteFetcher: Kd,
      dispose: Ud,
      getBlocker: Yd,
      deleteBlocker: xa,
      _internalFetchControllers: R,
      _internalActiveDeferreds: De,
      _internalSetRoutes: Jd,
    }),
    D
  );
}
function lv(e) {
  return (
    e != null &&
    (('formData' in e && e.formData != null) ||
      ('body' in e && e.body !== void 0))
  );
}
function du(e, t, n, r, l, o, i, u) {
  let a, s;
  if (i) {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === i)) {
        s = d;
        break;
      }
  } else (a = t), (s = t[t.length - 1]);
  let c = fa(l || '.', ca(a, o), cr(e.pathname, n) || e.pathname, u === 'path');
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === '' || l === '.') &&
      s &&
      s.route.index &&
      !ma(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
    r &&
      n !== '/' &&
      (c.pathname = c.pathname === '/' ? n : Lt([n, c.pathname])),
    xn(c)
  );
}
function $s(e, t, n, r) {
  if (!r || !lv(r)) return { path: n };
  if (r.formMethod && !vv(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: 'invalid-body' }) }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    u = Ld(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!dt(i)) return l();
      let p =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, E) => {
              let [w, T] = E;
              return (
                '' +
                S +
                w +
                '=' +
                T +
                `
`
              );
            }, '')
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!dt(i)) return l();
      try {
        let p = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  W(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let a, s;
  if (r.formData) (a = pu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = pu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Qs(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Qs(a));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: u,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (dt(c.formMethod)) return { path: n, submission: c };
  let d = un(n);
  return (
    t && d.search && ma(d.search) && a.append('index', ''),
    (d.search = '?' + a),
    { path: xn(d), submission: c }
  );
}
function ov(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Bs(e, t, n, r, l, o, i, u, a, s, c, d, p, S, E, w) {
  let T = w ? (nt(w[1]) ? w[1].error : w[1].data) : void 0,
    h = e.createURL(t.location),
    f = e.createURL(l),
    m = w && nt(w[1]) ? w[0] : void 0,
    x = m ? ov(n, m) : n,
    L = w ? w[1].statusCode : void 0,
    D = i && L && L >= 400,
    v = x.filter((F, j) => {
      let { route: K } = F;
      if (K.lazy) return !0;
      if (K.loader == null) return !1;
      if (o)
        return typeof K.loader != 'function' || K.loader.hydrate
          ? !0
          : t.loaderData[K.id] === void 0 &&
              (!t.errors || t.errors[K.id] === void 0);
      if (
        iv(t.loaderData, t.matches[j], F) ||
        a.some((Se) => Se === F.route.id)
      )
        return !0;
      let fe = t.matches[j],
        oe = F;
      return Vs(
        F,
        ie(
          {
            currentUrl: h,
            currentParams: fe.params,
            nextUrl: f,
            nextParams: oe.params,
          },
          r,
          {
            actionResult: T,
            unstable_actionStatus: L,
            defaultShouldRevalidate: D
              ? !1
              : u ||
                h.pathname + h.search === f.pathname + f.search ||
                h.search !== f.search ||
                Rd(fe, oe),
          }
        )
      );
    }),
    N = [];
  return (
    d.forEach((F, j) => {
      if (o || !n.some((ut) => ut.route.id === F.routeId) || c.has(j)) return;
      let K = Kn(S, F.path, E);
      if (!K) {
        N.push({
          key: j,
          routeId: F.routeId,
          path: F.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let fe = t.fetchers.get(j),
        oe = hu(K, F.path),
        Se = !1;
      p.has(j)
        ? (Se = !1)
        : s.includes(j)
        ? (Se = !0)
        : fe && fe.state !== 'idle' && fe.data === void 0
        ? (Se = u)
        : (Se = Vs(
            oe,
            ie(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: f,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: T,
                unstable_actionStatus: L,
                defaultShouldRevalidate: D ? !1 : u,
              }
            )
          )),
        Se &&
          N.push({
            key: j,
            routeId: F.routeId,
            path: F.path,
            matches: K,
            match: oe,
            controller: new AbortController(),
          });
    }),
    [v, N]
  );
}
function iv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Rd(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Vs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function Hs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  W(l, 'No route found in manifest');
  let o = {};
  for (let i in r) {
    let a = l[i] !== void 0 && i !== 'hasErrorBoundary';
    ir(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !a && !Nm.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
function uv(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function av(e, t, n, r, l, o, i, u) {
  let a = r.reduce((d, p) => d.add(p.route.id), new Set()),
    s = new Set(),
    c = await e({
      matches: l.map((d) => {
        let p = a.has(d.route.id);
        return ie({}, d, {
          shouldLoad: p,
          resolve: (E) => (
            s.add(d.route.id),
            p
              ? sv(t, n, d, o, i, E, u)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: u,
    });
  return (
    l.forEach((d) =>
      W(
        s.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    c.filter((d, p) => a.has(l[p].route.id))
  );
}
async function sv(e, t, n, r, l, o, i) {
  let u,
    a,
    s = (c) => {
      let d,
        p = new Promise((w, T) => (d = T));
      (a = () => d()), t.signal.addEventListener('abort', a);
      let S = (w) =>
          typeof c != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : c(
                { request: t, params: n.params, context: i },
                ...(w !== void 0 ? [w] : [])
              ),
        E;
      return (
        o
          ? (E = o((w) => S(w)))
          : (E = (async () => {
              try {
                return { type: 'data', result: await S() };
              } catch (w) {
                return { type: 'error', result: w };
              }
            })()),
        Promise.race([E, p])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let d,
          [p] = await Promise.all([
            s(c).catch((S) => {
              d = S;
            }),
            Hs(n.route, l, r),
          ]);
        if (d !== void 0) throw d;
        u = p;
      } else if ((await Hs(n.route, l, r), (c = n.route[e]), c)) u = await s(c);
      else if (e === 'action') {
        let d = new URL(t.url),
          p = d.pathname + d.search;
        throw be(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (c) u = await s(c);
    else {
      let d = new URL(t.url),
        p = d.pathname + d.search;
      throw be(404, { pathname: p });
    }
    W(
      u.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' +
          n.route.id +
          '" but didn\'t return anything from your `' +
          e +
          '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (c) {
    return { type: re.error, result: c };
  } finally {
    a && t.signal.removeEventListener('abort', a);
  }
  return u;
}
async function cv(e) {
  let { result: t, type: n, status: r } = e;
  if (Nd(t)) {
    let i;
    try {
      let u = t.headers.get('Content-Type');
      u && /\bapplication\/json\b/.test(u)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text());
    } catch (u) {
      return { type: re.error, error: u };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new da(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: i, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error)
    return { type: re.error, error: t, statusCode: pa(t) ? t.status : r };
  if (mv(t)) {
    var l, o;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: re.data, data: t, statusCode: r };
}
function fv(e, t, n, r, l, o) {
  let i = e.headers.get('Location');
  if (
    (W(
      i,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !ha.test(i))
  ) {
    let u = r.slice(0, r.findIndex((a) => a.route.id === n) + 1);
    (i = du(new URL(t.url), u, l, !0, i, o)), e.headers.set('Location', i);
  }
  return e;
}
function Ws(e, t, n) {
  if (ha.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      o = cr(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function zn(e, t, n, r) {
  let l = e.createURL(Ld(t)).toString(),
    o = { signal: n };
  if (r && dt(r.formMethod)) {
    let { formMethod: i, formEncType: u } = r;
    (o.method = i.toUpperCase()),
      u === 'application/json'
        ? ((o.headers = new Headers({ 'Content-Type': u })),
          (o.body = JSON.stringify(r.json)))
        : u === 'text/plain'
        ? (o.body = r.text)
        : u === 'application/x-www-form-urlencoded' && r.formData
        ? (o.body = pu(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function pu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Qs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function dv(e, t, n, r, l, o) {
  let i = {},
    u = null,
    a,
    s = !1,
    c = {},
    d = r && nt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let E = t[S].route.id;
      if (
        (W(!mn(p), 'Cannot handle redirect results in processLoaderData'),
        nt(p))
      ) {
        let w = p.error;
        d !== void 0 && ((w = d), (d = void 0)), (u = u || {});
        {
          let T = Br(e, E);
          u[T.route.id] == null && (u[T.route.id] = w);
        }
        (i[E] = void 0),
          s || ((s = !0), (a = pa(p.error) ? p.error.status : 500)),
          p.headers && (c[E] = p.headers);
      } else
        hn(p)
          ? (l.set(E, p.deferredData),
            (i[E] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !s &&
              (a = p.statusCode),
            p.headers && (c[E] = p.headers))
          : ((i[E] = p.data),
            p.statusCode && p.statusCode !== 200 && !s && (a = p.statusCode),
            p.headers && (c[E] = p.headers));
    }),
    d !== void 0 && r && ((u = { [r[0]]: d }), (i[r[0]] = void 0)),
    { loaderData: i, errors: u, statusCode: a || 200, loaderHeaders: c }
  );
}
function Ks(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = dv(t, n, r, l, u);
  for (let c = 0; c < o.length; c++) {
    let { key: d, match: p, controller: S } = o[c];
    W(
      i !== void 0 && i[c] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let E = i[c];
    if (!(S && S.signal.aborted))
      if (nt(E)) {
        let w = Br(e.matches, p == null ? void 0 : p.route.id);
        (s && s[w.route.id]) || (s = ie({}, s, { [w.route.id]: E.error })),
          e.fetchers.delete(d);
      } else if (mn(E)) W(!1, 'Unhandled fetcher revalidation redirect');
      else if (hn(E)) W(!1, 'Unhandled fetcher deferred data');
      else {
        let w = $t(E.data);
        e.fetchers.set(d, w);
      }
  }
  return { loaderData: a, errors: s };
}
function Ys(e, t, n, r) {
  let l = ie({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function Xs(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Br(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Gs(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((i = 'Bad Request'),
        l && n && r
          ? (u =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
          ? (u = 'defer() is not supported in actions')
          : o === 'invalid-body' && (u = 'Unable to encode submission body'))
      : e === 403
      ? ((i = 'Forbidden'),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = 'Method Not Allowed'),
        l && n && r
          ? (u =
              'You made a ' +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new da(e || 500, i, new Error(u), !0)
  );
}
function Js(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (mn(n)) return { result: n, idx: t };
  }
}
function Ld(e) {
  let t = typeof e == 'string' ? un(e) : e;
  return xn(ie({}, t, { hash: '' }));
}
function pv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== '';
}
function hv(e) {
  return Nd(e.result) && bm.has(e.result.status);
}
function hn(e) {
  return e.type === re.deferred;
}
function nt(e) {
  return e.type === re.error;
}
function mn(e) {
  return (e && e.type) === re.redirect;
}
function mv(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Nd(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function vv(e) {
  return qm.has(e.toLowerCase());
}
function dt(e) {
  return Jm.has(e.toLowerCase());
}
async function Zs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i];
    if (!a) continue;
    let s = e.find((d) => d.route.id === a.route.id),
      c = s != null && !Rd(s, a) && (o && o[a.route.id]) !== void 0;
    if (hn(u) && (l || c)) {
      let d = r[i];
      W(d, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Td(u, d, l).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function Td(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function ma(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function hu(e, t) {
  let n = typeof t == 'string' ? un(t).search : t.search;
  if (e[e.length - 1].route.index && ma(n || '')) return e[e.length - 1];
  let r = _d(e);
  return r[r.length - 1];
}
function qs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function vi(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function yv(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Pr(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function gv(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function $t(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function wv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Pd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Sv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Pd, JSON.stringify(n));
    } catch (r) {
      ir(
        !1,
        'Failed to save applied view transitions in sessionStorage (' + r + ').'
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wo.apply(this, arguments)
  );
}
const Io = _.createContext(null),
  Dd = _.createContext(null),
  Pn = _.createContext(null),
  va = _.createContext(null),
  Rn = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zd = _.createContext(null);
function Ev(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  dl() || W(!1);
  let { basename: r, navigator: l } = _.useContext(Pn),
    { hash: o, pathname: i, search: u } = jd(e, { relative: n }),
    a = i;
  return (
    r !== '/' && (a = i === '/' ? r : Lt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function dl() {
  return _.useContext(va) != null;
}
function Uo() {
  return dl() || W(!1), _.useContext(va).location;
}
function Md(e) {
  _.useContext(Pn).static || _.useLayoutEffect(e);
}
function kv() {
  let { isDataRoute: e } = _.useContext(Rn);
  return e ? jv() : xv();
}
function xv() {
  dl() || W(!1);
  let e = _.useContext(Io),
    { basename: t, future: n, navigator: r } = _.useContext(Pn),
    { matches: l } = _.useContext(Rn),
    { pathname: o } = Uo(),
    i = JSON.stringify(ca(l, n.v7_relativeSplatPath)),
    u = _.useRef(!1);
  return (
    Md(() => {
      u.current = !0;
    }),
    _.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !u.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let d = fa(s, JSON.parse(i), o, c.relative === 'path');
        e == null &&
          t !== '/' &&
          (d.pathname = d.pathname === '/' ? t : Lt([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, i, o, e]
    )
  );
}
function jd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(Pn),
    { matches: l } = _.useContext(Rn),
    { pathname: o } = Uo(),
    i = JSON.stringify(ca(l, r.v7_relativeSplatPath));
  return _.useMemo(() => fa(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function _v(e, t, n, r) {
  dl() || W(!1);
  let { navigator: l } = _.useContext(Pn),
    { matches: o } = _.useContext(Rn),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Uo(),
    c;
  c = s;
  let d = c.pathname || '/',
    p = d;
  if (a !== '/') {
    let w = a.replace(/^\//, '').split('/');
    p = '/' + d.replace(/^\//, '').split('/').slice(w.length).join('/');
  }
  let S = Kn(e, { pathname: p });
  return Nv(
    S &&
      S.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, u, w.params),
          pathname: Lt([
            a,
            l.encodeLocation
              ? l.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === '/'
              ? a
              : Lt([
                  a,
                  l.encodeLocation
                    ? l.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Cv() {
  let e = Mv(),
    t = pa(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement('h2', null, 'Unexpected Application Error!'),
    _.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? _.createElement('pre', { style: l }, n) : null,
    null
  );
}
const Pv = _.createElement(Cv, null);
class Rv extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          Rn.Provider,
          { value: this.props.routeContext },
          _.createElement(zd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(Io);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement(Rn.Provider, { value: t }, r)
  );
}
function Nv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let c = i.findIndex(
      (d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0
    );
    c >= 0 || W(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let a = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let d = i[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = c),
        d.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          E =
            d.route.loader &&
            p[d.route.id] === void 0 &&
            (!S || S[d.route.id] === void 0);
        if (d.route.lazy || E) {
          (a = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, d, p) => {
    let S,
      E = !1,
      w = null,
      T = null;
    n &&
      ((S = u && d.route.id ? u[d.route.id] : void 0),
      (w = d.route.errorElement || Pv),
      a &&
        (s < 0 && p === 0
          ? (Ov('route-fallback'), (E = !0), (T = null))
          : s === p &&
            ((E = !0), (T = d.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, p + 1)),
      f = () => {
        let m;
        return (
          S
            ? (m = w)
            : E
            ? (m = T)
            : d.route.Component
            ? (m = _.createElement(d.route.Component, null))
            : d.route.element
            ? (m = d.route.element)
            : (m = c),
          _.createElement(Lv, {
            match: d,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || p === 0)
      ? _.createElement(Rv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: S,
          children: f(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Od = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Od || {}),
  So = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(So || {});
function Tv(e) {
  let t = _.useContext(Io);
  return t || W(!1), t;
}
function Dv(e) {
  let t = _.useContext(Dd);
  return t || W(!1), t;
}
function zv(e) {
  let t = _.useContext(Rn);
  return t || W(!1), t;
}
function Fd(e) {
  let t = zv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function Mv() {
  var e;
  let t = _.useContext(zd),
    n = Dv(So.UseRouteError),
    r = Fd(So.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function jv() {
  let { router: e } = Tv(Od.UseNavigateStable),
    t = Fd(So.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Md(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, wo({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const bs = {};
function Ov(e, t, n) {
  bs[e] || (bs[e] = !0);
}
function Fv(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = pe.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  dl() && W(!1);
  let a = t.replace(/^\/*/, '/'),
    s = _.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: i,
        future: wo({ v7_relativeSplatPath: !1 }, u),
      }),
      [a, u, o, i]
    );
  typeof r == 'string' && (r = un(r));
  let {
      pathname: c = '/',
      search: d = '',
      hash: p = '',
      state: S = null,
      key: E = 'default',
    } = r,
    w = _.useMemo(() => {
      let T = cr(c, a);
      return T == null
        ? null
        : {
            location: { pathname: T, search: d, hash: p, state: S, key: E },
            navigationType: l,
          };
    }, [a, c, d, p, S, E, l]);
  return w == null
    ? null
    : _.createElement(
        Pn.Provider,
        { value: s },
        _.createElement(va.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function Iv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
function Uv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $v(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Av(e);
}
const Bv = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Vv = '6';
try {
  window.__reactRouterVersion = Vv;
} catch {}
function Hv(e, t) {
  return rv({
    basename: void 0,
    future: il({}, void 0, { v7_prependBasename: !0 }),
    history: Pm({ window: void 0 }),
    hydrationData: Wv(),
    routes: e,
    mapRouteProperties: Iv,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function Wv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = il({}, t, { errors: Qv(t.errors) })), t;
}
function Qv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new da(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === 'Error') {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == 'function')
          try {
            let i = new o(l.message);
            (i.stack = ''), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ''), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Kv = _.createContext({ isTransitioning: !1 }),
  Yv = _.createContext(new Map()),
  Xv = 'startTransition',
  ec = pp[Xv],
  Gv = 'flushSync',
  tc = Cm[Gv];
function Jv(e) {
  ec ? ec(e) : e();
}
function Rr(e) {
  tc ? tc(e) : e();
}
class Zv {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function qv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = _.useState(n.state),
    [i, u] = _.useState(),
    [a, s] = _.useState({ isTransitioning: !1 }),
    [c, d] = _.useState(),
    [p, S] = _.useState(),
    [E, w] = _.useState(),
    T = _.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    f = _.useCallback(
      (v) => {
        h ? Jv(v) : v();
      },
      [h]
    ),
    m = _.useCallback(
      (v, N) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: j,
          unstable_viewTransitionOpts: K,
        } = N;
        F.forEach((oe) => T.current.delete(oe)),
          v.fetchers.forEach((oe, Se) => {
            oe.data !== void 0 && T.current.set(Se, oe.data);
          });
        let fe =
          n.window == null ||
          typeof n.window.document.startViewTransition != 'function';
        if (!K || fe) {
          j ? Rr(() => o(v)) : f(() => o(v));
          return;
        }
        if (j) {
          Rr(() => {
            p && (c && c.resolve(), p.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: K.currentLocation,
                nextLocation: K.nextLocation,
              });
          });
          let oe = n.window.document.startViewTransition(() => {
            Rr(() => o(v));
          });
          oe.finished.finally(() => {
            Rr(() => {
              d(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
            });
          }),
            Rr(() => S(oe));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            w({
              state: v,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }))
          : (u(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }));
      },
      [n.window, p, c, T, f]
    );
  _.useLayoutEffect(() => n.subscribe(m), [n, m]),
    _.useEffect(() => {
      a.isTransitioning && !a.flushSync && d(new Zv());
    }, [a]),
    _.useEffect(() => {
      if (c && i && n.window) {
        let v = i,
          N = c.promise,
          F = n.window.document.startViewTransition(async () => {
            f(() => o(v)), await N;
          });
        F.finished.finally(() => {
          d(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(F);
      }
    }, [f, i, c, n.window]),
    _.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, p, l.location, i]),
    _.useEffect(() => {
      !a.isTransitioning &&
        E &&
        (u(E.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: E.currentLocation,
          nextLocation: E.nextLocation,
        }),
        w(void 0));
    }, [a.isTransitioning, E]),
    _.useEffect(() => {}, []);
  let x = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, N, F) =>
          n.navigate(v, {
            state: N,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (v, N, F) =>
          n.navigate(v, {
            replace: !0,
            state: N,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || '/',
    D = _.useMemo(
      () => ({ router: n, navigator: x, static: !1, basename: L }),
      [n, x, L]
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Io.Provider,
      { value: D },
      _.createElement(
        Dd.Provider,
        { value: l },
        _.createElement(
          Yv.Provider,
          { value: T.current },
          _.createElement(
            Kv.Provider,
            { value: a },
            _.createElement(
              Fv,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: x,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? _.createElement(bv, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function bv(e) {
  let { routes: t, future: n, state: r } = e;
  return _v(t, void 0, r, n);
}
const ey =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  ty = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ny = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      p = Uv(t, Bv),
      { basename: S } = _.useContext(Pn),
      E,
      w = !1;
    if (typeof s == 'string' && ty.test(s) && ((E = s), ey))
      try {
        let m = new URL(window.location.href),
          x = s.startsWith('//') ? new URL(m.protocol + s) : new URL(s),
          L = cr(x.pathname, S);
        x.origin === m.origin && L != null
          ? (s = L + x.search + x.hash)
          : (w = !0);
      } catch {}
    let T = Ev(s, { relative: l }),
      h = ry(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: d,
      });
    function f(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return _.createElement(
      'a',
      il({}, p, { href: E || T, onClick: w || o ? r : f, ref: n, target: a })
    );
  });
var nc;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(nc || (nc = {}));
var rc;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(rc || (rc = {}));
function ry(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = kv(),
    s = Uo(),
    c = jd(e, { relative: i });
  return _.useCallback(
    (d) => {
      if ($v(d, n)) {
        d.preventDefault();
        let p = r !== void 0 ? r : xn(s) === xn(c);
        a(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, c, r, l, n, e, o, i, u]
  );
}
const ly = '_layout_maiw9_1',
  oy = '_content_maiw9_13',
  lc = { layout: ly, content: oy };
function iy({ children: e }) {
  return X.jsx('div', {
    className: lc.layout,
    children: X.jsx('main', { className: lc.content, children: e }),
  });
}
const uy = '_frame_12i0m_1',
  ay = '_content_12i0m_12',
  oc = { frame: uy, content: ay };
function sy({ width: e, height: t, children: n }) {
  const r = _.useRef(null),
    [l, o] = _.useState(!1),
    [i, u] = _.useState(0),
    [a, s] = _.useState(0);
  return (
    _.useEffect(() => {
      r.current && r.current.scrollTo(0, r.current.scrollHeight);
    }, [r.current]),
    _.useEffect(() => {
      const c = (E) => {
          o(!0),
            r.current &&
              (u('touches' in E ? E.touches[0].clientY : E.pageY),
              s(r.current.scrollTop));
        },
        d = (E) => {
          if (!l || !r.current) return;
          const T = ('touches' in E ? E.touches[0].clientY : E.pageY) - i;
          r.current.scrollTop = a - T;
        },
        p = () => {
          o(!1);
        },
        S = r.current;
      return (
        S &&
          (S.addEventListener('mousedown', c),
          S.addEventListener('touchstart', c),
          S.addEventListener('mousemove', d),
          S.addEventListener('touchmove', d),
          S.addEventListener('mouseup', p),
          S.addEventListener('touchend', p)),
        () => {
          S &&
            (S.removeEventListener('mousedown', c),
            S.removeEventListener('touchstart', c),
            S.removeEventListener('mousemove', d),
            S.removeEventListener('touchmove', d),
            S.removeEventListener('mouseup', p),
            S.removeEventListener('touchend', p));
        }
      );
    }, [l, a, i]),
    X.jsx('div', {
      className: oc.frame,
      ref: r,
      style: { width: e, height: t },
      children: X.jsx('div', { className: oc.content, children: n }),
    })
  );
}
const cy = '_container_zkqdx_1',
  fy = '_circle_zkqdx_7',
  dy = '_fill_zkqdx_19',
  yi = {
    container: cy,
    circle: fy,
    fill: dy,
    'pulse-dot': '_pulse-dot_zkqdx_1',
  };
function py({ n: e, fills: t }) {
  const [n, r] = _.useState([]);
  return (
    _.useEffect(() => {
      const l = [];
      for (let o = 0; o < e; o++) {
        let i = `${yi.circle}`;
        o < t && (i = i.concat(` ${yi.fill}`)),
          l.push(X.jsx('div', { className: i }));
      }
      r(l);
    }, [e, t]),
    X.jsx('div', { className: yi.container, children: n })
  );
}
const hy = '_container_76i45_3',
  my = '_level_76i45_17',
  vy = '_composer_76i45_24',
  yy = '_jacket_76i45_31',
  Ol = { container: hy, level: my, composer: vy, jacket: yy };
function gy({
  level: e,
  composer: t,
  jacket: n,
  showLevel: r,
  showComposer: l,
  showJacket: o,
}) {
  function i(u) {
    return { opacity: u ? '100%' : '0' };
  }
  return X.jsxs('div', {
    className: Ol.container,
    children: [
      X.jsxs('div', {
        className: Ol.level,
        style: i(r),
        children: ['/ ', e, ' /'],
      }),
      X.jsxs('div', {
        className: Ol.composer,
        style: i(l),
        children: ['♫ ', t],
      }),
      X.jsx('div', {
        className: Ol.jacket,
        style: i(o),
        children: X.jsx('img', { src: n }),
      }),
    ],
  });
}
const wy = '_game_lgoyz_1',
  Sy = '_view_lgoyz_13',
  Ey = '_chart_lgoyz_24',
  ky = '_placeholder_lgoyz_31',
  xy = '_ui_lgoyz_35',
  Mn = {
    game: wy,
    view: Sy,
    chart: Ey,
    placeholder: ky,
    ui: xy,
    'v-expand': '_v-expand_lgoyz_1',
  };
function _y() {
  const [t, n] = _.useState(1),
    [r, l] = _.useState([]);
  return (
    _.useEffect(() => {
      const o = [];
      for (let i = 0; i < Math.min(4, t); i++)
        o.push(
          X.jsx('div', {
            className: Mn.chart,
            style: { backgroundPositionY: `${-450 * (3 - i)}px` },
          })
        );
      o.reverse(), l(o);
    }, [t]),
    X.jsx(X.Fragment, {
      children: X.jsxs('div', {
        className: Mn.game,
        children: [
          X.jsx(gy, {
            level: 'MAXIMUM 18',
            composer: 'Spacelectro',
            jacket: '/ja.jpg',
            showJacket: t >= 7,
            showLevel: t >= 5,
            showComposer: t >= 6,
          }),
          X.jsx(py, { n: 7, fills: 8 - t }),
          X.jsx('div', {
            className: Mn.view,
            children: X.jsxs(sy, {
              width: '100%',
              height: '100%',
              children: [
                X.jsx('div', { className: Mn.placeholder }),
                r,
                X.jsx('div', { className: Mn.placeholder }),
              ],
            }),
          }),
          X.jsxs('div', {
            className: Mn.ui,
            children: [
              X.jsx('input', { placeholder: '정답 입력' }),
              X.jsx('button', {
                onClick: () => n((o) => o + 1),
                children: '다음 →',
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Cy = '_container_5c4em_1',
  Py = { container: Cy };
function Ry() {
  return X.jsxs('div', {
    className: Py.container,
    children: [
      X.jsx('h1', { children: '404 Not Found' }),
      X.jsx(ny, { to: '/', children: 'return to home' }),
    ],
  });
}
const Ly = Hv([
  { path: '/misc/voldle', element: X.jsx(_y, {}), errorElement: X.jsx(Ry, {}) },
  {
    path: '/misc/voldle/admin',
    element: X.jsx('div', { children: 'TODO : add admin tools' }),
  },
]);
gi.createRoot(document.getElementById('root')).render(
  X.jsx(gc.StrictMode, {
    children: X.jsx(iy, { children: X.jsx(qv, { router: Ly }) }),
  })
);
