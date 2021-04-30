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
exports.listen = c;
exports.prefetch = u;

function e(e) {
  return new Promise(function (n, t, r) {
    (r = new XMLHttpRequest()).open("GET", e, r.withCredentials = !0), r.onload = function () {
      200 === r.status ? n() : t();
    }, r.send();
  });
}

function n(n) {
  return window.fetch ? fetch(n, {
    credentials: "include"
  }) : e(n);
}

var t,
    r = (t = document.createElement("link")).relList && t.relList.supports && t.relList.supports("prefetch") ? function (e) {
  return new Promise(function (n, t, r) {
    (r = document.createElement("link")).rel = "prefetch", r.href = e, r.onload = n, r.onerror = t, document.head.appendChild(r);
  });
} : e,
    o = window.requestIdleCallback || function (e) {
  var n = Date.now();
  return setTimeout(function () {
    e({
      didTimeout: !1,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - n));
      }
    });
  }, 1);
},
    i = new Set();

function c(e) {
  if (e || (e = {}), window.IntersectionObserver) {
    var n = function (e) {
      e = e || 1;
      var n = [],
          t = 0;

      function r() {
        t < e && n.length > 0 && (n.shift()(), t++);
      }

      return [function (e) {
        n.push(e) > 1 || r();
      }, function () {
        t--, r();
      }];
    }(e.throttle || 1 / 0),
        t = n[0],
        r = n[1],
        c = e.limit || 1 / 0,
        f = e.origins || [location.hostname],
        a = e.ignores || [],
        s = e.delay || 0,
        l = [],
        h = e.timeoutFn || o,
        d = "function" == typeof e.hrefFn && e.hrefFn,
        m = new IntersectionObserver(function (n) {
      n.forEach(function (n) {
        if (n.isIntersecting) l.push((n = n.target).href), function (e, n) {
          n ? setTimeout(e, n) : e();
        }(function () {
          -1 !== l.indexOf(n.href) && (m.unobserve(n), i.size < c && t(function () {
            u(d ? d(n) : n.href, e.priority).then(r).catch(function (n) {
              r(), e.onError && e.onError(n);
            });
          }));
        }, s);else {
          var o = l.indexOf((n = n.target).href);
          o > -1 && l.splice(o);
        }
      });
    });

    return h(function () {
      (e.el || document).querySelectorAll("a").forEach(function (e) {
        f.length && !f.includes(e.hostname) || function e(n, t) {
          return Array.isArray(t) ? t.some(function (t) {
            return e(n, t);
          }) : (t.test || t).call(t, n.href, n);
        }(e, a) || m.observe(e);
      });
    }, {
      timeout: e.timeout || 2e3
    }), function () {
      i.clear(), m.disconnect();
    };
  }
}

function u(e, t, o) {
  if (o = navigator.connection) {
    if (o.saveData) return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));
    if (/2g/.test(o.effectiveType)) return Promise.reject(new Error("Cannot prefetch, network conditions are poor"));
  }

  return Promise.all([].concat(e).map(function (e) {
    if (!i.has(e)) return i.add(e), (t ? n : r)(new URL(e, location.href).toString());
  }));
}
},{}],"../../node_modules/slide-element/dist/index.modern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = exports.toggle = exports.down = void 0;

let e = (e, t) => {
  let n = ["transitionend", "transitioncancel"],
      i = () => e.clientHeight,
      a = () => e.style,
      o = e => a().display = e,
      s = (e = !1) => {
    let n = Object.assign({
      height: "",
      overflow: "hidden",
      transitionDuration: ".25s",
      transitionTimingFunction: "ease"
    }, t);
    Object.entries(n).forEach(([t, n]) => {
      a()[t] = e ? "" : n;
    });
  },
      r = t => new Promise(o => {
    s();
    let r = [i() + "px", "0px"];
    t && r.reverse();
    let [c, l] = r;
    new Promise(t => {
      n.forEach((i, a) => {
        e.addEventListener(i, () => {
          e.dispatchEvent(new TransitionEvent(n[1 ^ a])), t();
        }, {
          once: !0
        });
      });
    }).then(() => {
      s(!0), o();
    }), a().height = c, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        a().height = l;
      });
    });
  }),
      c = async () => (await r(!1), o("none"), Promise.resolve(!1)),
      l = async () => (o("block"), await r(!0), Promise.resolve(!0));

  return {
    up: c,
    down: l,
    toggle: () => i() ? c() : l()
  };
},
    t = async (t, n = {}) => await e(t, n).down(),
    n = async (t, n = {}) => await e(t, n).up(),
    i = (t, n = {}) => e(t, n).toggle();

exports.toggle = i;
exports.up = n;
exports.down = t;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _quicklink = require("quicklink");

var _slideElement = require("slide-element");

var MobileMenuController = function MobileMenuController() {
  var mobileMenuToggle = document.getElementById("documentationNavigation");

  if (!mobileMenuToggle) {
    return;
  }

  mobileMenuToggle.addEventListener("click", function (e) {
    (0, _slideElement.toggle)(document.getElementById("sidebar")).then(function (opened) {
      mobileMenuToggle.querySelector('svg').style.transform = "scaleX(".concat(opened ? -1 : 1, ")");
    });
  });
};

var MenuController = function MenuController() {
  var nav = document.getElementById('nav');
  var navOpen = document.getElementById('navOpen');
  var navClose = document.getElementById('navClose');

  if (!nav) {
    return;
  }

  navOpen.addEventListener('click', function (e) {
    nav.classList.add('menu-open');
    document.body.classList.add('body-menu-open');
  });
  navClose.addEventListener('click', function (e) {
    nav.classList.remove('menu-open');
    document.body.classList.remove('body-menu-open');
  });
};

MenuController();
MobileMenuController();
(0, _quicklink.listen)();
},{"quicklink":"../../node_modules/quicklink/dist/quicklink.mjs","slide-element":"../../node_modules/slide-element/dist/index.modern.js"}]},{},["index.js"], null)
//# sourceMappingURL=/index.js.map