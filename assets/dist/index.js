// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/quicklink/dist/quicklink.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = i;
exports.prefetch = c;

function n(n) {
  return new Promise(function (e, t, r) {
    (r = new XMLHttpRequest()).open("GET", n, r.withCredentials = !0), r.onload = function () {
      200 === r.status ? e() : t();
    }, r.send();
  });
}

var e,
    t = (e = document.createElement("link")).relList && e.relList.supports && e.relList.supports("prefetch") ? function (n) {
  return new Promise(function (e, t, r) {
    (r = document.createElement("link")).rel = "prefetch", r.href = n, r.onload = e, r.onerror = t, document.head.appendChild(r);
  });
} : n,
    r = window.requestIdleCallback || function (n) {
  var e = Date.now();
  return setTimeout(function () {
    n({
      didTimeout: !1,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
},
    o = new Set();

function i(n) {
  if (n || (n = {}), window.IntersectionObserver) {
    var e = function (n) {
      n = n || 1;
      var e = [],
          t = 0;

      function r() {
        t < n && e.length > 0 && (e.shift()(), t++);
      }

      return [function (n) {
        e.push(n) > 1 || r();
      }, function () {
        t--, r();
      }];
    }(n.throttle || 1 / 0),
        t = e[0],
        i = e[1],
        u = n.limit || 1 / 0,
        a = n.origins || [location.hostname],
        f = n.ignores || [],
        s = n.timeoutFn || r,
        l = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.isIntersecting && (l.unobserve(e = e.target), o.size < u && t(function () {
          c(e.href, n.priority).then(i).catch(function (e) {
            i(), n.onError && n.onError(e);
          });
        }));
      });
    });

    return s(function () {
      (n.el || document).querySelectorAll("a").forEach(function (n) {
        a.length && !a.includes(n.hostname) || function n(e, t) {
          return Array.isArray(t) ? t.some(function (t) {
            return n(e, t);
          }) : (t.test || t).call(t, e.href, e);
        }(n, f) || l.observe(n);
      });
    }, {
      timeout: n.timeout || 2e3
    }), function () {
      o.clear(), l.disconnect();
    };
  }
}

function c(e, r, i) {
  if (!(i = navigator.connection) || !i.saveData && !/2g/.test(i.effectiveType)) return Promise.all([].concat(e).map(function (e) {
    if (!o.has(e)) return o.add(e), (r ? function (e) {
      return window.fetch ? fetch(e, {
        credentials: "include"
      }) : n(e);
    } : t)(new URL(e, location.href).toString());
  }));
}
},{}],"../../node_modules/slide-element/dist/slide-element.es.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = exports.toggle = exports.down = void 0;

/**
  * slide-element
  * Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
  * URL: https://github.com/alexmacarthur/slide-element
  */
const t = ["height", "paddingTop", "paddingBottom"],
      n = {
  duration: .25,
  timingFunction: "ease"
},
      o = (n, o, e = t) => {
  for (let t in o) e.includes(t) || delete o[t];

  Object.assign(n.style, o);
},
      e = t => t.replace(/-([a-z])/g, t => t[1].toUpperCase()),
      i = (n, o) => new Promise(i => {
  const a = o.reduce((t, o) => (t.push(((t, n) => new Promise(o => {
    const i = function (d) {
      e(d.propertyName) === n && (((t, n) => {
        t.removeEventListener("transitionend", n), t.removeEventListener("transitioncancel", n);
      })(t, i), o());
    };

    ((t, n) => {
      t.addEventListener("transitionend", n), t.addEventListener("transitioncancel", n);
    })(t, i);
  }))(n, o)), t), []);
  return Promise.all(a).then(() => {
    d(n, [...t, "overflow", "transitionProperty", "transitionDuration", "transitionTimingFunction"]), i();
  });
}),
      d = (t, n) => {
  n.forEach(n => t.style[n] = "");
},
      a = t => window.getComputedStyle(t),
      r = (t, n, e, d) => {
  const {
    fromTopPadding: r,
    fromBottomPadding: s,
    fromHeight: p,
    toTopPadding: g,
    toBottomPadding: m,
    toHeight: c
  } = e,
        h = (l = {
    paddingTop: [r, g],
    paddingBottom: [s, m],
    height: [p, c]
  }, Object.keys(l).reduce((t, n) => {
    const o = l[n].map(t => parseInt(t, 10));
    return o[0] == o[1] || t.push(n), t;
  }, []));
  var l;
  i(t, h).then(d), o(t, {
    paddingTop: r,
    paddingBottom: s,
    height: p
  }, h), ((t, n) => {
    const o = a(t),
          {
      duration: e,
      timingFunction: i
    } = n,
          d = {
      overflow: "hidden",
      transitionProperty: "padding, height",
      transitionDuration: e + "s",
      transitionTimingFunction: i
    };

    for (let t in d) o[t] === d[t] && delete d[t];

    Object.assign(t.style, d);
  })(t, n), requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      o(t, {
        paddingTop: g,
        paddingBottom: m,
        height: c
      }, h);
    });
  });
},
      s = (t, o = n) => new Promise(n => {
  t.dataset.isSlidOpen = "true", t.style.display = "block";
  const e = a(t);
  r(t, o, {
    fromTopPadding: "0px",
    fromBottomPadding: "0px",
    fromHeight: "0px",
    toTopPadding: e.paddingTop,
    toBottomPadding: e.paddingBottom,
    toHeight: e.height
  }, () => {
    n(!0);
  });
}),
      p = (t, o = n) => new Promise(n => {
  const e = a(t);
  r(t, o, {
    fromTopPadding: e.paddingTop,
    fromBottomPadding: e.paddingBottom,
    toTopPadding: "0px",
    toBottomPadding: "0px",
    fromHeight: e.height,
    toHeight: "0px"
  }, () => {
    delete t.dataset.isSlidOpen, t.style.display = "none", n(!1);
  });
}),
      g = (t, o = n) => t.dataset.isSlidOpen ? p(t, o) : s(t, o);

exports.toggle = g;
exports.up = p;
exports.down = s;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _quicklink = require("quicklink");

var _slideElement = require("slide-element");

document.getElementById("documentationNavigation").addEventListener("click", function (e) {
  (0, _slideElement.toggle)(document.getElementById("sidebar"), function (opened) {
    e.currentTarget.querySelector('svg').style.transform = "scaleX(".concat(opened ? -1 : 1, ");");
  });
});

var MenuController = function MenuController() {
  var nav = document.getElementById('nav');
  var navOpen = document.getElementById('navOpen');
  var navClose = document.getElementById('navClose');

  if (!nav) {
    return;
  }

  navOpen.addEventListener('click', function (e) {
    console.log(nav);
    nav.classList.add('menu-open');
    document.body.classList.add('body-menu-open');
  });
  navClose.addEventListener('click', function (e) {
    nav.classList.remove('menu-open');
    document.body.classList.remove('body-menu-open');
  });
};

MenuController();
(0, _quicklink.listen)();
},{"quicklink":"../../node_modules/quicklink/dist/quicklink.mjs","slide-element":"../../node_modules/slide-element/dist/slide-element.es.min.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map