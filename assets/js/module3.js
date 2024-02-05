function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e2 = m2[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e2, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : { enumerable: true, get: () => e2[k2] });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var l$2 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$2 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e2) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e2) {
  var d, c = {}, k2 = null, h2 = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e2;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$2, type: a, key: k2, ref: h2, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$2;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e2, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$2:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c = c(h2), a = "" === d ? "." + Q$1(h2, 0) : d, I$1(c) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c, b, e2, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e2 + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h2 = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h2 += R$1(k2, b, e2, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h2 += R$1(k2, b, e2, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b, e2) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e2, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e2) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h2 = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e2;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$2, type: a.type, key: c, ref: k2, props: d, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$2, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e2) {
  return U$1.current.useImperativeHandle(a, b, e2);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e2) {
  return U$1.current.useReducer(a, b, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e2) {
  return U$1.current.useSyncExternalStore(a, b, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const ReactExports = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React = /* @__PURE__ */ _mergeNamespaces({ __proto__: null, default: ReactExports }, [reactExports]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var f = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$2 = Object.prototype.hasOwnProperty, n$2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$2(c, a, g) {
  var b, d = {}, e2 = null, h2 = null;
  void 0 !== g && (e2 = "" + g);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b in a)
    m$2.call(a, b) && !p$3.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k$1, type: c, key: e2, ref: h2, props: d, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e2 = a[d];
        if (0 < g(e2, b))
          a[d] = b, a[c] = e2, c = d;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e2 = a.length, w2 = e2 >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e2 && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e2 && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h2(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b = h2(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c + e2;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e2, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var aa = reactExports, ca = schedulerExports;
function p$2(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v$1(a, b, c, d, e2, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e2;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v$1(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v$1(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v$1(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v$1(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v$1(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v$1(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v$1(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v$1(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v$1(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v$1("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v$1(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e2 = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e2 ? 0 !== e2.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e2, d) && (c = null), d || null === e2 ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e2.mustUseProperty ? a[e2.propertyName] = null === c ? 3 === e2.type ? false : "" : c : (b = e2.attributeName, d = e2.attributeNamespace, null === c ? a.removeAttribute(b) : (e2 = e2.type, c = 3 === e2 || 4 === e2 && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e2.length - 1, h2 = f2.length - 1; 1 <= g && 0 <= h2 && e2[g] !== f2[h2]; )
        h2--;
      for (; 1 <= g && 0 <= h2; g--, h2--)
        if (e2[g] !== f2[h2]) {
          if (1 !== g || 1 !== h2) {
            do
              if (g--, h2--, 0 > h2 || e2[g] !== f2[h2]) {
                var k2 = "\n" + e2[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e2 = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e2 = 0; e2 < c.length; e2++)
      b["$" + c[e2]] = true;
    for (c = 0; c < a.length; c++)
      e2 = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e2 && (a[c].selected = e2), e2 && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c) {
        a[e2].selected = true;
        d && (a[e2].defaultSelected = true);
        return;
      }
      null !== b || a[e2].disabled || (b = a[e2]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p$2(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p$2(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e2);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e2 = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e2) : a[c] = e2;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p$2(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p$2(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p$2(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e2, f2, g, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e2, f2, g, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e2, f2, g, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$2(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p$2(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e2 = c.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d = e2.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c)
          return Xb(e2), a;
        if (f2 === d)
          return Xb(e2), b;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c.return !== d.return)
      c = e2, d = f2;
    else {
      for (var g = false, h2 = e2.child; h2; ) {
        if (h2 === c) {
          g = true;
          c = e2;
          d = f2;
          break;
        }
        if (h2 === d) {
          g = true;
          d = e2;
          c = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c) {
            g = true;
            c = f2;
            d = e2;
            break;
          }
          if (h2 === d) {
            g = true;
            d = f2;
            c = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g)
          throw Error(p$2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p$2(190));
  }
  if (3 !== c.tag)
    throw Error(p$2(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
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
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h2 = g & ~e2;
    0 !== h2 ? d = tc(h2) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e2, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e2) && (e2 = d & -d, f2 = b & -b, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e2 = 1 << c, d |= a[c], b &= ~e2;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
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
      return b + 5e3;
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
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h2 = 1 << g, k2 = e2[g];
    if (-1 === k2) {
      if (0 === (h2 & c) || 0 !== (h2 & d))
        e2[g] = vc(h2, b);
    } else
      k2 <= b && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e2 = 31 - oc(c), f2 = 1 << e2;
    b[e2] = 0;
    d[e2] = -1;
    a[e2] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e2 = 1 << d;
    e2 & b | a[d] & b && (a[d] |= b);
    c &= ~e2;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e2] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e2 && -1 === b.indexOf(e2) && b.push(e2);
  return a;
}
function Uc(a, b, c, d, e2) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e2 = Yc(a, b, c, d);
    if (null === e2)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e2, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c && b[a] === e2[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e2[f2 - d]; d++)
    ;
  return md = e2.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e2, f2, g) {
    this._reactName = b2;
    this._targetInst = e2;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e2 = c[d];
    if (!ja.call(b, e2) || !He(a[e2], b[e2]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c.textContent.length, f2 = Math.min(d.start, e2);
        d = void 0 === d.end ? f2 : Math.min(d.end, e2);
        !a.extend && f2 > d && (e2 = d, d = f2, f2 = e2);
        e2 = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e2 && g && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e2 = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h2 = d[g], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h2 = d[g];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c = e2.bind(null, b, c, a);
  e2 = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e2 = true);
  d ? void 0 !== e2 ? a.addEventListener(b, c, { capture: true, passive: e2 }) : a.addEventListener(b, c, true) : void 0 !== e2 ? a.addEventListener(b, c, { passive: e2 }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e2) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h2 = d.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g = g.return;
            }
          for (; null !== h2; ) {
            g = Wc(h2);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e3 = xb(c), g2 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c, e3), g2.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d2 ? ue(d2) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e3);
          break a;
        }
        xa && xa(a, h3, d2);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e3), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c, e3), g2.push({ event: e3, listeners: d2 }), e3.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e2)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e2) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h2 = c, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h2))) : e2 || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h2))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e2 = c.nextSibling;
    a.removeChild(c);
    if (e2 && 8 === e2.nodeType)
      if (c = e2.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e2);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e2;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c)
    e2[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p$2(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e2 in d)
    if (!(e2 in b))
      throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p$2(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e2 = 32 - oc(d) - 1;
  d &= ~(1 << e2);
  c += 1;
  var f2 = 32 - oc(b) + e2;
  if (30 < f2) {
    var g = e2 - e2 % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e2 -= g;
    rg = 1 << 32 - oc(b) + e2 | c << e2 | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e2 | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p$2(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e2 = b.interleaved;
  null === e2 ? (c.next = c, Xg(b)) : (c.next = e2.next, e2.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e2 = d.pending;
    null === e2 ? b.next = b : (b.next = e2.next, e2.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e2 = d.interleaved;
  null === e2 ? (b.next = b, Xg(d)) : (b.next = e2.next, e2.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e2 = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e2 = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e2 = f2 = b : f2 = f2.next = b;
    } else
      e2 = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b = e2.shared.interleaved;
    if (null !== b) {
      e2 = b;
      do
        g |= e2.lane, e2 = e2.next;
      while (e2 !== b);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e2 = d.callback;
      if (null !== e2) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e2 = lh(a), f2 = ch(d, e2);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e2);
  null !== b && (mh(b, a, e2, d), eh(b, a, e2));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e2 = ch(c, d);
  e2.tag = 2;
  void 0 !== b && null !== b && (e2.callback = b);
  b = dh(a, e2, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e2, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e2, f2) : true;
}
function ph(a, b, c) {
  var d = false, e2 = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e2) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e2 = a.stateNode;
  e2.props = c;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e2.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c, e2, d), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p$2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p$2(147, a));
      var e2 = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e2.refs;
        b2 === jh && (b2 = e2.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e2(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h2(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e2(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e2(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e2(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e3 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e3 ? null : h2(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e3 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e3 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e3 = c2._init, r2(
            a2,
            b2,
            e3(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e3 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e3) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h2(b2, a2, "" + d2, e3);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e3);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e3);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e3);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e3, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e3, g2, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e3, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g2, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e3, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e3,
        m3
      ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a2, d2, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e2(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e2(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h3, f3.key), d2.return = a2, a2 = d2) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d2, f3), h3.return = a2, a2 = h3);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e2(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h3);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h3);
      if (Ka(f3))
        return t2(a2, d2, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e2(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h3), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$2(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$2(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e2, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e2);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p$2(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = O, e2 = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g = e2.next;
      e2.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e2 = f2;
    c.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d = d.baseState;
    var h2 = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h2;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p$2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e2 = c.pending, f2 = b.memoizedState;
  if (null !== e2) {
    c.pending = null;
    var g = e2 = e2.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e2);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e2 = b(), f2 = !He(d.memoizedState, e2);
  f2 && (d.memoizedState = e2, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e2, b), void 0, null);
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c, b, e2);
  }
  return e2;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e2 = ci();
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e2 = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e2.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e2.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e2 = L();
    mh(c, a, d, e2);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e2 = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h2 = f2(g, c);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e2.next = e2, Xg(b)) : (e2.next = k2.next, k2.next = e2);
          b.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e2, d);
    null !== c && (e2 = L(), mh(c, a, d, e2), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e2 = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p$2(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e2.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e2 = c;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e2, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e2 = b.value;
    c.payload = function() {
      return d(e2);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d.set(b, e2);
  } else
    e2 = d.get(b), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d.set(b, e2));
  e2.has(c) || (e2.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e2) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e2) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e2);
  d = Xh(a, b, c, d, f2, e2);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e2);
  return b.child;
}
function aj(a, b, c, d, e2) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e2);
    a = yh(c.type, null, d, b, b.mode, e2);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e2);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e2);
  }
  return dj(a, b, c, d, e2);
}
function ej(a, b, c) {
  var d = b.pendingProps, e2 = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e2, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e2) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e2);
  c = Xh(a, b, c, d, f2, e2);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e2, $i(a, b, e2);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e2);
  return b.child;
}
function ij(a, b, c, d, e2) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e2);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e2), d = true;
  else if (null === a) {
    var g = b.stateNode, h2 = b.memoizedProps;
    g.props = h2;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    k2 = b.memoizedState;
    h2 !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h2 = $g || oh(b, c, h2, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h2) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h2 = b.memoizedProps;
    l2 = b.type === b.elementType ? h2 : Lg(b.type, h2);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e2);
    var n2 = b.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e2);
}
function kj(a, b, c, d, e2, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e2 && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h2 = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h2, f2)) : Yi(a, b, h2, f2);
  b.memoizedState = d.state;
  e2 && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e2) {
  Ig();
  Jg(e2);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e2 = M.current, f2 = false, g = 0 !== (b.flags & 128), h2;
  (h2 = g) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b, g, d, h2, e2, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e2 ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e2, k2), d.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e2, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p$2(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e2 = b.mode;
    d = qj({ mode: "visible", children: d.children }, e2, 0, null);
    f2 = Ah(f2, e2, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e2.data) {
    d = e2.nextSibling && e2.nextSibling.dataset;
    if (d)
      var h2 = d.dgst;
    d = h2;
    f2 = Error(p$2(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h2 = 0 !== (g & a.childLanes);
  if (Ug || h2) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
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
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d.suspendedLanes | g)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d, a, e2, -1));
    }
    uj();
    d = Li(Error(p$2(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e2.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e2._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e2 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e2);
}
function yj(a, b, c) {
  var d = b.pendingProps, e2 = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c = b.child;
        for (e2 = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e2 = c), c = c.sibling;
        c = e2;
        null === c ? (e2 = b.child, b.child = null) : (e2 = c.sibling, c.sibling = null);
        xj(b, false, e2, c, f2);
        break;
      case "backwards":
        c = null;
        e2 = b.child;
        for (b.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c;
          c = e2;
          e2 = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p$2(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e2 = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e2;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e2 = b.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e2 = a.memoizedProps;
  if (e2 !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e2 = Ya(a, e2);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e2)
      if (!d.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g in h2)
            h2.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g in h2)
              !h2.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h2[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags & 14680064, d |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c |= e2.lanes | e2.childLanes, d |= e2.subtreeFlags, d |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
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
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e2 = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e2), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p$2(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e2 = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h2 = f2[g];
              "children" === g ? "string" === typeof h2 ? d.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g) && null != h2 && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e2;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a);
                e2 = d;
                break;
              case "source":
                D("error", a);
                e2 = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e2 = d;
                break;
              case "details":
                D("toggle", a);
                e2 = d;
                break;
              case "input":
                Za(a, d);
                e2 = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e2 = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e2 = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e2 = gb(a, d);
                D("invalid", a);
                break;
              default:
                e2 = d;
            }
            ub(c, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p$2(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e2 = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e2 && 3 !== q2.nodeType || (h2 = g + e2);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e2 && (h2 = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e2 = d = d.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e2 = e2.next;
    } while (e2 !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h2) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e2 = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e2 = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e2 = d = d.next;
        do {
          var f2 = e2, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e2 = e2.next;
        } while (e2 !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h2) {
          W(c, b, h2);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e2 = c[d];
      try {
        var f2 = a, g = b, h2 = g;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p$2(160));
        ak(f2, g, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W(e2, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g);
            var l2 = vb(h2, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p$2(160));
      }
      switch (d.tag) {
        case 5:
          var e2 = d.stateNode;
          d.flags & 32 && (ob(e2, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d) {
      var g = null !== e2.memoizedState || Kj;
      if (!g) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e2; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e2 = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e2, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h2 = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h2;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
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
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
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
              throw Error(p$2(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e2 = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e2, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h2 = b.sibling;
    if (null !== h2) {
      h2.return = b.return;
      V = h2;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e2 = xc(a), 0 !== e2 && (d = e2, b = Ok(a, e2)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e2 = a.current.alternate;
      if (0 === (d & 30) && !Pk(e2) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e2;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e2 = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e2 && (e2 = g);
            d &= ~f2;
          }
          d = e2;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e2 = c[d], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$2(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e2 = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e2;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e2 = d.queue;
          null !== e2 && (e2.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h2 = c, k2 = b;
        b = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h2, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h2, f2, b);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h2, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p$2(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e2, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$2(327));
  c = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h2;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e2 = b[c], d(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$2(331));
        var e2 = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c = e2.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e2 = Yf(b, H.current);
      Tg(b, c);
      e2 = Xh(null, b, d, a, e2, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b), e2.updater = nh, b.stateNode = e2, e2._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e2, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e2 = d._init;
        d = e2(d._payload);
        b.type = d;
        e2 = b.tag = $k(d);
        a = Lg(d, a);
        switch (e2) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p$2(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), dj(a, b, d, e2, c);
    case 1:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), ij(a, b, d, e2, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p$2(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e2 = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e2 = Ki(Error(p$2(423)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else if (d !== e2) {
            e2 = Ki(Error(p$2(424)), b);
            b = mj(a, b, d, c, e2);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e2) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e2 = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e2.children, Ef(d, e2) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), Zi(a, b, d, e2, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e2 = b.pendingProps;
        f2 = b.memoizedProps;
        g = e2.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e2.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h2.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p$2(341));
                g.lanes |= c;
                h2 = g.alternate;
                null !== h2 && (h2.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e2.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e2 = b.type, d = b.pendingProps.children, Tg(b, c), e2 = Vg(e2), d = d(e2), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e2 = Lg(d, b.pendingProps), e2 = Lg(d.type, e2), aj(a, b, d, e2, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e2 = b.pendingProps, e2 = b.elementType === d ? e2 : Lg(d, e2), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e2), rh(b, d, e2, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p$2(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e2, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e2, f2, b);
        case za:
          g = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e2, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e2);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e2) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e2, f2, g, h2, k2) {
  a = new bl(a, b, c, h2, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e2, f2, g, h2, k2) {
  a = cl(c, d, true, a, e2, f2, g, h2, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e2 = lh(c);
  f2 = ch(d, e2);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e2 = b.current, f2 = L(), g = lh(e2);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e2, b, g);
  null !== a && (mh(a, e2, g, f2), eh(a, e2, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p$2(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e2) {
  if (e2) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d) {
    var h2 = d;
    d = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e2) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g);
        h2.call(a2);
      };
    }
    gl(b, g, a, e2);
  } else
    g = rl(c, b, a, e2, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e2 = Db(d);
            if (!e2)
              throw Error(p$2(90));
            Wa(d);
            bb(d, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p$2(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p$2(299));
  var c = false, d = "", e2 = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e2 = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e2);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p$2(405));
  var d = null != c && c.hydratedSources || null, e2 = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e2 = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e2, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e2 = c._getVersion, e2 = e2(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e2] : b.mutableSourceEagerHydrationData.push(
        c,
        e2
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p$2(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$1 = reactDomExports;
{
  client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}
/**
* @remix-run/router v1.14.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substr(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location2, to) {
    warning(location2.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location2, index) {
  return {
    usr: location2.state,
    key: location2.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location2 = _extends$1({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location2;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location2 = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location2, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location2, index);
    let url = history.createHref(location2);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location2 = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location2, to);
    index = getIndex();
    let historyState = getHistoryState(location2, index);
    let url = history.createHref(location2);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location2 = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location2.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n2, i) => n2 === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map((match) => match.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$1({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
* React Router v6.21.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useParams() {
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location2;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location2 = parsedLocationArg;
  } else {
    location2 = locationFromContext;
  }
  let pathname = location2.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location2),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback", false);
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
  }
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location: location2
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location2);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
* React Router DOM v6.21.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref5;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location2, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
const HeaderInner = ({ title, subtitle }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "w-full relative h-min", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: " bg-blue-100 text-3xl font-dela text-center text-white p-4", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-blue-100 text-xl border-b border-blue-400 text-center font-medium max-w-4xl mx-auto py-4", children: subtitle })
  ] });
};
HeaderInner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
var define_import_meta_env_default$2 = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((define_import_meta_env_default$2 ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var withSelector = { exports: {} };
var withSelector_production_min = {};
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var e = reactExports;
function h$1(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var k = "function" === typeof Object.is ? Object.is : h$1, l = e.useState, m = e.useEffect, n$1 = e.useLayoutEffect, p$1 = e.useDebugValue;
function q$1(a, b) {
  var d = b(), f2 = l({ inst: { value: d, getSnapshot: b } }), c = f2[0].inst, g = f2[1];
  n$1(function() {
    c.value = d;
    c.getSnapshot = b;
    r$1(c) && g({ inst: c });
  }, [a, d, b]);
  m(function() {
    r$1(c) && g({ inst: c });
    return a(function() {
      r$1(c) && g({ inst: c });
    });
  }, [a]);
  p$1(d);
  return d;
}
function r$1(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var d = b();
    return !k(a, d);
  } catch (f2) {
    return true;
  }
}
function t$1(a, b) {
  return b();
}
var u$1 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$1 : q$1;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u$1;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
/**
* @license React
* use-sync-external-store-shim/with-selector.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var h = reactExports, n = shimExports;
function p(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e2, l2, g) {
  var c = t(null);
  if (null === c.current) {
    var f2 = { hasValue: false, value: null };
    c.current = f2;
  } else
    f2 = c.current;
  c = v(function() {
    function a2(a3) {
      if (!c2) {
        c2 = true;
        d2 = a3;
        a3 = l2(a3);
        if (void 0 !== g && f2.hasValue) {
          var b2 = f2.value;
          if (g(b2, a3))
            return k2 = b2;
        }
        return k2 = a3;
      }
      b2 = k2;
      if (q(d2, a3))
        return b2;
      var e3 = l2(a3);
      if (void 0 !== g && g(b2, e3))
        return b2;
      d2 = a3;
      return k2 = e3;
    }
    var c2 = false, d2, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a2(b());
    }, null === m2 ? void 0 : function() {
      return a2(m2());
    }];
  }, [b, e2, l2, g]);
  var d = r(a, c[0], c[1]);
  u(function() {
    f2.hasValue = true;
    f2.value = d;
  }, [d]);
  w(d);
  return d;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /* @__PURE__ */ getDefaultExportFromCjs(withSelectorExports);
var define_import_meta_env_default$1 = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
const { useDebugValue } = ReactExports;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
function useStore(api, selector = api.getState, equalityFn) {
  if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((define_import_meta_env_default$1 ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var define_import_meta_env_default = { BASE_URL: "./", MODE: "production", DEV: false, PROD: true, SSR: false };
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e2) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e2) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e2);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (e2) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e2) => {
      errorInSync = e2;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb2) => cb2(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb2) => cb2(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb2) => {
      hydrationListeners.add(cb2);
      return () => {
        hydrationListeners.delete(cb2);
      };
    },
    onFinishHydration: (cb2) => {
      finishHydrationListeners.add(cb2);
      return () => {
        finishHydrationListeners.delete(cb2);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb2) => {
      var _a2;
      return cb2((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb2) => cb2(stateFromStorage));
    }).catch((e2) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e2);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb2) => {
      hydrationListeners.add(cb2);
      return () => {
        hydrationListeners.delete(cb2);
      };
    },
    onFinishHydration: (cb2) => {
      finishHydrationListeners.add(cb2);
      return () => {
        finishHydrationListeners.delete(cb2);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((define_import_meta_env_default ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;
const i1 = "data:image/jpeg;base64,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";
const i2 = "data:image/jpeg;base64,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";
const useQuestions = create((set) => ({
  QStore: [
    {
      id: 0,
      question: "Методы сборки, предусматривающие сборку и сварку отдельных узлов, из которых состоит конструкция, а затем сборка и сварка самой конструкции",
      value: 100,
      options: [
        {
          id: "A",
          text: "Метод узловой сборки",
          isCorrect: true
        },
        {
          id: "B",
          text: "Метод рациональной сборки",
          isCorrect: false
        },
        {
          id: "C",
          text: "Метод общей сборки",
          isCorrect: false
        },
        {
          id: "D",
          text: "Метод оптимальной сборки",
          isCorrect: false
        }
      ]
    },
    {
      id: 1,
      question: "Какой способ сборки применяется при единичном производстве?",
      value: 150,
      options: [
        {
          id: "A",
          text: "С неполной взаимозаменяемостью",
          isCorrect: false
        },
        {
          id: "B",
          text: "С подгонкой деталей",
          isCorrect: true
        },
        {
          id: "C",
          text: "С полной взаимозаменяемостью",
          isCorrect: false
        },
        {
          id: "D",
          text: "Все перечисленные варианты",
          isCorrect: false
        }
      ]
    },
    {
      id: 2,
      question: "Какой способ сборки применяется при серийном производстве?",
      value: 200,
      options: [
        {
          id: "A",
          text: "С неполной взаимозаменяемостью",
          isCorrect: false
        },
        {
          id: "B",
          text: "С подгонкой деталей",
          isCorrect: false
        },
        {
          id: "C",
          text: "С полной взаимозаменяемостью",
          isCorrect: true
        },
        {
          id: "D",
          text: "Все перечисленные варианты",
          isCorrect: false
        }
      ]
    },
    // {
    //   id: 2,
    //   question:
    //     'Описание технологического процесса выполняется на специальных бланках, которые называются:',
    //   value: 200,
    //   options: [
    //     {
    //       id: 'A',
    //       text: 'Технологическая карта',
    //       isCorrect: true,
    //     },
    //     {
    //       id: 'B',
    //       text: 'Технологическая последовательность',
    //       isCorrect: false,
    //     },
    //     {
    //       id: 'C',
    //       text: 'Технологическая ведомость',
    //       isCorrect: false,
    //     },
    //     {
    //       id: 'D',
    //       text: 'Техническая карта',
    //       isCorrect: false,
    //     },
    //   ],
    // },
    {
      id: 3,
      question: "Способность однородных и разнородных металлов и сплавов образовывать сварные соединения  это…: ",
      value: 250,
      options: [
        {
          id: "A",
          text: "Свариваемость",
          isCorrect: true
        },
        {
          id: "B",
          text: "Технологичность",
          isCorrect: false
        },
        {
          id: "C",
          text: "Конструктивность",
          isCorrect: false
        },
        {
          id: "D",
          text: "Технические характеристики",
          isCorrect: false
        }
      ]
    },
    {
      id: 4,
      type: "draglist",
      question: "Определить правильную последовательность принципиальной схемы технологического процесса",
      value: 100,
      options: [
        { id: 0, textorder: "1", text: "Механическая сборка" },
        { id: 1, textorder: "2", text: "Сварка" },
        { id: 2, textorder: "3", text: "Заготовительные работы" },
        { id: 3, textorder: "4", text: "Контроль качества" },
        { id: 4, textorder: "5", text: "Правка" },
        { id: 5, textorder: "6", text: "Сборка и контроль сборки" },
        { id: 6, textorder: "7", text: "Термическая обработка" },
        { id: 7, textorder: "8", text: "Подготовка поверхности" },
        // Неупорядоченный словать ответов в формате text1: text2
        // text1 и text2 - строки из полей text из двух предыдущих списков соответственно
        {
          answer: [
            "Заготовительные работы",
            "Подготовка поверхности",
            "Сборка и контроль сборки",
            "Сварка",
            "Термическая обработка",
            "Правка",
            "Механическая сборка",
            "Контроль качества"
          ]
        }
      ]
    },
    {
      id: 5,
      question: "Описание технологического процесса выполняется на специальных бланках, которые называются:",
      value: 150,
      options: [
        {
          id: "A",
          text: "Технологическая карта",
          isCorrect: true
        },
        {
          id: "B",
          text: "Технологическая последовательность",
          isCorrect: false
        },
        {
          id: "C",
          text: "Технологическая ведомость",
          isCorrect: false
        },
        {
          id: "D",
          text: "Техническая карта",
          isCorrect: false
        }
      ]
    },
    {
      id: 6,
      question: "Определить технологическую последовательность сборки сварной конструкции",
      value: 200,
      options: [
        {
          id: "A",
          text: "Установка в сборочном приспособлении; подача деталей к месту сборки; фиксация.",
          isCorrect: false
        },
        {
          id: "B",
          text: "Фиксация; сварка; установка в сборочном приспособлении; подача деталей к месту сборки.",
          isCorrect: false
        },
        {
          id: "C",
          text: "Подача деталей к месту сборки; установка в сборочном приспособлении; фиксация; сварка.",
          isCorrect: true
        },
        {
          id: "D",
          text: "Сварка; установка в сборочном приспособлении; подача деталей к месту сборки; фиксация.",
          isCorrect: false
        }
      ]
    },
    {
      id: 7,
      question: "Дополните список сварных соединений. Стыковые,Угловые,Тавровые,Нахлесточные",
      value: 250,
      options: [
        {
          id: "A",
          text: "Параллельные",
          isCorrect: false
        },
        {
          id: "B",
          text: "Боковые",
          isCorrect: false
        },
        {
          id: "C",
          text: "Торцевые",
          isCorrect: true
        },
        {
          id: "D",
          text: "Точечные",
          isCorrect: false
        }
      ]
    },
    {
      id: 8,
      question: "Выберите способ сварки представленный на рисунке",
      value: 100,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          width: 300,
          src: i1,
          alt: ""
        }
      ) }),
      options: [
        {
          id: "A",
          text: "Сварка под флюсом",
          isCorrect: false
        },
        {
          id: "B",
          text: "Плазменная сварка",
          isCorrect: false
        },
        {
          id: "C",
          text: "Контактная сварка",
          isCorrect: true
        },
        {
          id: "D",
          text: "Сварка рением",
          isCorrect: false
        }
      ]
    },
    {
      id: 9,
      question: "Определите расположение шва в пространстве",
      value: 150,
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i2 }),
      options: [
        {
          id: "A",
          text: "Нижнее стыковое",
          isCorrect: false
        },
        {
          id: "B",
          text: "Вертикальное стыковое",
          isCorrect: false
        },
        {
          id: "C",
          text: "Горизонтальное стыковое",
          isCorrect: true
        },
        {
          id: "D",
          text: "Влодочку стыковое",
          isCorrect: false
        }
      ]
    },
    {
      id: 10,
      question: "Следующим этапом после формальной экспертизы является публикация сведений о заявке на изобретение, которая проводится по истечении ______ месяцев с момента подачи заявки. ",
      value: 200,
      options: [
        {
          id: "A",
          text: "10",
          isCorrect: false
        },
        {
          id: "B",
          text: "18",
          isCorrect: true
        },
        {
          id: "C",
          text: "12",
          isCorrect: false
        },
        {
          id: "D",
          text: "9",
          isCorrect: false
        }
      ]
    },
    {
      id: 11,
      question: "В объективном смысле авторское право — это подотрасль гражданского права, которая регулирует отношения по созданию, использованию и охране прав на_____",
      value: 250,
      options: [
        {
          id: "A",
          text: "произведения науки",
          isCorrect: false
        },
        {
          id: "B",
          text: "произведения науки, литературы и искусства",
          isCorrect: true
        },
        {
          id: "C",
          text: "литературы и искусства",
          isCorrect: false
        },
        {
          id: "D",
          text: "Учебные науки",
          isCorrect: false
        }
      ]
    },
    {
      id: 12,
      question: "Укажите гост на ручную дуговую сварку",
      value: 100,
      options: [
        {
          id: "A",
          text: "ГОСТ 5624-90",
          isCorrect: false
        },
        {
          id: "B",
          text: "ГОСТ 5264-80",
          isCorrect: true
        },
        {
          id: "C",
          text: "ГОСТ 5642-80",
          isCorrect: false
        },
        {
          id: "D",
          text: "ГОСТ 5264-90",
          isCorrect: false
        }
      ]
    },
    {
      id: 13,
      question: "В современной технике широко применяются _____ для получения наплавленного металла с заданными специальными свойствами по износостойкости, твердости, химической активности. Введите пропущенное словосочетание",
      value: 150,
      type: "input",
      options: [
        {
          id: 0,
          answer: "твердыесплавы"
        }
      ]
    },
    {
      id: 14,
      question: "__________________ и ___________________ элементы предназначены связать порошковые материалы покрытия электрода в однородную массу, сцементировать покрытие на электродном стержне, чтобы после высыхания оно имело нужную прочность.",
      value: 200,
      options: [
        {
          id: "A",
          text: "Сухие и прочные",
          isCorrect: false
        },
        {
          id: "B",
          text: "Связующие и цементирующие",
          isCorrect: true
        },
        {
          id: "C",
          text: "Цементирующие и однородные",
          isCorrect: false
        },
        {
          id: "D",
          text: "Стержневые и связующие",
          isCorrect: false
        }
      ]
    }
  ],
  correctAnswers: [],
  unCorrectAnswer: [],
  answerQuestion: (answer) => set((state) => ({
    correctAnswers: [...state.correctAnswers, answer]
  })),
  unCorrect: (answer) => set((state) => ({
    unCorrectAnswer: [...state.unCorrectAnswer, answer]
  }))
}));
const useScore = create(
  persist(
    (set) => ({
      score: 0,
      attempt: 10,
      getScore: (value) => set((state) => ({ score: state.score + value })),
      clearScore: () => {
        localStorage.removeItem("score-storage");
      }
    }),
    { name: "score-storage" }
  )
);
const useTimer = create(
  persist(
    (set, get) => ({
      timer: 0,
      interval: null,
      finishedTask: () => {
        window.activeTimer = null;
        set({ interval: null });
        localStorage.removeItem("timer-storage");
      },
      startTimer: () => {
        if (!window.activeTimer) {
          const interval = setInterval(() => {
            set((state) => ({
              timer: state.timer + 1
            }));
          }, 1e3);
          set({ interval });
          window.activeTimer = true;
        }
        if (JSON.parse(localStorage.getItem("score-storage")).state.score >= 1550) {
          clearInterval(get().interval);
          set({ interval: "finished" });
        }
      },
      formatTimer: (timer) => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        return `${minutes}:${seconds}`;
      },
      stopTimer: () => {
        clearInterval(get().interval);
        set({ interval: "finished" });
      },
      clearTimer: () => {
        set({ timer: 0 });
        localStorage.removeItem("timer-storage");
      }
    }),
    { name: "timer-storage" }
  )
);
const MenuItem = ({ question, id: id2 }) => {
  const navigate = useNavigate();
  const correctAnswers = useQuestions((state) => state.correctAnswers);
  const unCorrectAnswer = useQuestions((state) => state.unCorrectAnswer);
  [...correctAnswers, ...unCorrectAnswer].map((el2) => el2.id);
  const handleClick = () => {
    redirectToQuestion(id2);
  };
  const redirectToQuestion = (id22) => {
    navigate(`/question/${id22}`);
  };
  function getColor(value) {
    switch (value) {
      case 100: {
        return "bg-violent-100";
      }
      case 150: {
        return "bg-white-blue-100";
      }
      case 200: {
        return "bg-gray-200";
      }
      case 250: {
        return "bg-red-200";
      }
    }
  }
  const colorClass = getColor(question.value);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${unCorrectAnswer.some((u2) => u2.id === id2) ? ` bg-red-400 cursor-not-allowed text-white` : correctAnswers.some((u2) => u2.id === id2) ? "bg-green-400 text-white cursor-not-allowed" : `${colorClass} cursor-pointer text-blue-100 max-w-[254px] transition-all duration-100 hover:scale-110`}  p-12 mx-4 my-2 rounded shadow text-center`,
      onClick: unCorrectAnswer.some((u2) => u2.id === id2) ? null : correctAnswers.some((u2) => u2.id === id2) ? null : handleClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold", children: question.value })
    }
  );
};
MenuItem.propTypes = {
  question: PropTypes.object,
  id: PropTypes.number
};
const MenuList = () => {
  const questions = useQuestions((state) => state.QStore);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap max-w-4xl px-12 overflow-auto", children: questions.map((question) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "w-1/4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { question, id: question.id }) }, question.id)) }) });
};
function Timer() {
  const timer = useTimer((state) => state.timer);
  const formatTimer = useTimer((state) => state.formatTimer);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white", children: formatTimer(timer) }) });
}
const HomePageButton = ({ onClick }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: onClick || routeChange,
      className: "text-blue-200 text-xl p-3 rounded-t-none rounded-b-md \n      font-semibold whitespace-nowrap bg-blue-100 fixed top-1/2 \n      right-full transform translate-x-[90px] -rotate-90 cursor-pointer\n      transition-all duration-300 hover:scale-110",
      children: "На главную"
    }
  );
};
const QuestionPage = () => {
  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const startTimer = useTimer((state) => state.startTimer);
  useTimer((state) => state.interval);
  const currentScore = useScore((state) => state.score);
  const attempt = useScore((state) => state.attempt);
  console.log(currentScore);
  console.log(questions.length);
  reactExports.useEffect(() => {
    setTimeout(() => {
      startTimer();
    }, 100);
    if (currentScore >= 1550) {
      navigate("/result");
      clearInterval(JSON.parse(localStorage.getItem("timer-storage")).state.interval);
    }
    if (attempt === 0) {
      navigate("/result");
      clearInterval(JSON.parse(localStorage.getItem("timer-storage")).state.interval);
    }
  }, [currentScore, attempt]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-screen relative flex flex-col items-center justify-between min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeaderInner,
      {
        title: "Диагностика",
        subtitle: "Перед вами задания разных уровней сложности. У вас 10 попыток, чтобы получить призовые 1550 \r\n        очков. Кликните на карточку, чтобы перейти к заданию. Выберите вариант (варианты) ответа и нажмите\r\n        кнопку “Ответить”."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MenuList, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-14 bg-blue-100 flex items-center pl-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomePageButton, {})
  ] });
};
const CommonButton = ({ text, onClick, disabled }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick,
      className: `py-3 px-6 rounded-sm font-semibold cursor-pointer whitespace-nowrap  text-blue-200 transition-all duration-200   ${disabled ? "disabled:cursor-not-allowed bg-gray-300 text-gray-200" : "w-fit   hover:text-blue-100 hover:bg-blue-50 active:scale-95"} bg-white  scale-100 `,
      disabled,
      children: text
    }
  );
};
CommonButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
const Question = () => {
  const { id: id2 } = useParams();
  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const answerQuestion = useQuestions((state) => state.answerQuestion);
  const unCorrect = useQuestions((state) => state.unCorrect);
  const getScore = useScore((state) => state.getScore);
  const [selectedAnswer, setSelectedAnswer] = reactExports.useState(null);
  const [showAnswers, setShowAnswers] = reactExports.useState(false);
  const question = questions.find((q2) => q2.id == id2);
  const correctAnswerClass = "bg-green-100 text-white";
  const wrongAnswerClass = "bg-red-100 text-white";
  const getAnswerClass = (option) => {
    if (option.isCorrect) {
      return correctAnswerClass;
    } else {
      return wrongAnswerClass;
    }
  };
  if (!question) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {});
  }
  const handleSubmit = () => {
    setShowAnswers(true);
  };
  function handleAnswer(answer, question2) {
    if (answer.isCorrect) {
      answerQuestion(question2);
      getScore(question2.value);
      useScore.setState((state) => ({
        attempt: state.attempt - 1
      }));
    }
    if (!answer.isCorrect) {
      unCorrect(question2);
    }
    if (!answer.isCorrect) {
      useScore.setState((state) => ({
        attempt: state.attempt - 1
      }));
    }
    handleSubmit();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between items-center h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeaderInner,
      {
        title: "Выберите правильный вариант ответа",
        subtitle: question.question
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-2/3 justify-center h-[50vh] cursor-pointer", children: showAnswers ? (
      // Показать все варианты с подсветкой
      question.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `${getAnswerClass(
            option
          )} mb-2 mt-2 p-4 rounded-lg `,
          children: option.text
        },
        option.id
      ))
    ) : (
      // Обычный рендер без подсветки
      question.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-black bg-blue-50 mb-2 mt-2 p-4 rounded-lg hover:bg-blue-700 ",
          onClick: () => {
            setSelectedAnswer(option.id);
            handleAnswer(option, question);
          },
          children: option.text
        },
        option.id
      ))
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-14 bg-blue-100 flex justify-center py-1", children: selectedAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonButton,
      {
        onClick: () => navigate("/"),
        text: "Ответить"
      }
    ) })
  ] }) });
};
function ResultPage() {
  const score = useScore((state) => state.score);
  const questions = useQuestions((state) => state.questions);
  const { timer } = useTimer();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    QuizResults,
    {
      score,
      totalQuestions: 12,
      questions,
      timeSpent: timer
    }
  ) });
}
function QuizResults({ timeSpent, score, questions }) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  const { finishedTask } = useTimer();
  const clearScore = useScore((state) => state.clearScore);
  const correctAnswersLength = useQuestions(
    (state) => state.correctAnswers
  ).length;
  const correctAnswers = useQuestions((state) => state.correctAnswers);
  const unCorrectAnswer = useQuestions((state) => state.unCorrectAnswer);
  const handleClick = () => {
    clearScore();
    finishedTask();
    routeChange();
    window.DP = true;
    if (window.DP) {
      window.DP = null;
      location.reload();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between h-full min-h-screen text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeaderInner, { title: "Результаты теста !" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 max-full mx-auto text-black flex-grow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4 text-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow stats flex flex-row rounded-lg divide-x divide-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium mb-2", children: "Потраченное время" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold", children: [
            timeSpent,
            " сек"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium mb-2", children: "Заработано баллов" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: score })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium mb-2", children: "Правильных ответов" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: correctAnswersLength })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-medium mb-2", children: "Процент правильных" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold", children: [
            Math.round(
              correctAnswersLength / (correctAnswersLength + unCorrectAnswer.length) * 100
            ),
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "divide-y divide-gray-200", children: [
        correctAnswers.map((q2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "bg-green-100 p-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium", children: q2.question })
          },
          q2.id
        )),
        unCorrectAnswer.map((q2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "bg-red-100 p-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-medium", children: q2.question })
          },
          q2.id
        ))
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-14 bg-blue-100 flex py-1 pl-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonButton,
      {
        onClick: handleClick,
        text: "Закончить"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomePageButton, {})
  ] });
}
QuizResults.propTypes = {
  timeSpent: PropTypes.number,
  score: PropTypes.number,
  questions: PropTypes.array
};
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HashRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(QuestionPage, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/question/:id", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Question, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/result", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultPage, {}) })
  ] }) });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
);
