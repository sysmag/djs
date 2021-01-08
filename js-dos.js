! function i(s, a, c) {
    function u(t, e) {
        if (!a[t]) {
            if (!s[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var r = a[t] = {
                exports: {}
            };
            s[t][0].call(r.exports, function(e) {
                return u(s[t][1][e] || e)
            }, r, r.exports, i, s, a, c)
        }
        return a[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < c.length; e++) u(c[e]);
    return u
}({
    1: [function(e, t, n) {
        "use strict";
        e("core-js/modules/web.dom.iterable"), e("core-js/modules/es6.array.iterator"), e("core-js/modules/es6.object.to-string"), e("core-js/modules/es6.object.keys"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = {
            keysCode: {
                left: 37,
                right: 39,
                up: 38,
                down: 40
            }
        };
        n.default = function(e, s, t) {
            void 0 === t && (t = o);
            var a = t.keysCode,
                c = {
                    left: "up",
                    right: "up",
                    up: "up",
                    down: "up"
                },
                u = {},
                r = function(e, t, n) {
                    u[e] = {
                        x: t,
                        y: n
                    }
                },
                i = function(e, t, n) {
                    if (void 0 !== u[e]) {
                        var o, r = u[e].x - t,
                            i = u[e].y - n;
                        Math.abs(r) < 15 && Math.abs(i) < 15 || (o = Math.abs(r) >= Math.abs(i) ? r < 0 ? "right" : "left" : i < 0 ? "down" : "up", u[e].x = t, u[e].y = n, function(e, t) {
                            if (c[e] !== t) {
                                c[e] = t;
                                for (var n = 0, o = Object.keys(c); n < o.length; n++) {
                                    var r = o[n];
                                    r !== e && "down" === c[r] && (c[r] = "up", s.onRelease(a[r]))
                                }
                                "down" === t && s.onPress(a[e])
                            }
                        }(o, "down"), delete u[e])
                    }
                },
                l = function(e, t, n) {
                    i(e, t, n), delete u[e]
                };
            e.addEventListener("touchstart", function(e) {
                e.preventDefault();
                for (var t = e.changedTouches, n = 0; n < t.length; n++) {
                    var o = t[n];
                    r(o.identifier, o.pageX, o.pageY)
                }
            }, !0), e.addEventListener("touchmove", function(e) {
                e.preventDefault();
                for (var t = e.changedTouches, n = 0; n < t.length; n++) {
                    var o = t[n];
                    i(o.identifier, o.pageX, o.pageY)
                }
            }, !0), e.addEventListener("touchend", function(e) {
                e.preventDefault();
                for (var t = e.changedTouches, n = 0; n < t.length; n++) {
                    var o = t[n];
                    l(o.identifier, o.pageX, o.pageY)
                }
            }, !0), e.addEventListener("mousedown", function(e) {
                e.preventDefault(), r(-1, e.pageX, e.pageY)
            }, !0), e.addEventListener("mousemove", function(e) {
                e.preventDefault(), i(-1, e.pageX, e.pageY)
            }, !0), e.addEventListener("mouseup", function(e) {
                e.preventDefault(), l(-1, e.pageX, e.pageY)
            }, !0), e.addEventListener("mouseleave", function(e) {
                e.preventDefault(), l(-1, e.pageX, e.pageY)
            }, !0)
        }
    }, {
        "core-js/modules/es6.array.iterator": 113,
        "core-js/modules/es6.object.keys": 119,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/web.dom.iterable": 134
    }],
    2: [function(e, t, n) {
        "use strict";
        var o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var l = o(e("../js-dos-dom")),
            f = {
                uppercase: !0
            };
        n.default = function(e, o, r) {
            void 0 === r && (r = f), l.applyCss("lqwerty-css", d + "\n\n" + (r.cssText || ""));
            var t = function() {
                    var e = r.uppercase ? s.value.toUpperCase() : s.value;
                    if (s.value = "", s.blur(), i.style.visibility = "hidden", 0 !== e.length) var t = 0,
                        n = setInterval(function() {
                            t >= 2 * e.length ? clearInterval(n) : (t % 2 == 0 ? o.onPress(e.charCodeAt(t / 2)) : o.onRelease(e.charCodeAt((t - 1) / 2)), t++)
                        }, 100)
                },
                i = l.createDiv("qwerty-container");
            i.innerHTML = '\n        <div>ENTER CHARS:</div>\n\n        <div class="qwerty-input-row">\n            <div>:>&nbsp;</div>\n            <input class="qwerty-input" value="">\n            \x3c!-- <div class="qwerty-cursor"></div> --\x3e\n            <div class="qwerty-send">Send</div>\n        </div>\n    ', i.style.visibility = "hidden";
            var n = function(e) {
                e.stopPropagation()
            };
            i.addEventListener("keydown", n), i.addEventListener("keyup", n), i.addEventListener("keypress", function(e) {
                13 === e.keyCode && t()
            }), i.addEventListener("keypress", n);
            var s = i.getElementsByTagName("input")[0],
                a = function() {
                    s.style.width = Math.max(2, s.value.length + 1) + "ch"
                };
            s.tabIndex = 1, s.addEventListener("input", a), s.addEventListener("blur", t);
            var c = i.getElementsByClassName("qwerty-send")[0];
            l.addButtonListener(c, function() {}, t);
            var u = l.createDiv("qwerty-key");
            l.addButtonListener(u, function() {}, function() {
                "hidden" === i.style.visibility ? (a(), i.style.visibility = "visible", s.focus()) : i.style.visibility = "hidden"
            }), e.appendChild(u), e.appendChild(i)
        };
        var d = "\n    .qwerty-container {\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n\n        display: flex;\n        flex-direction: column;\n\n        padding: 10px 20px;\n\n        font-size: 1em;\n        background: #000000e3;\n        border-bottom: 2px solid white;\n        font-family: monospace;\n        color: white;\n\n        line-height: 1.4em;\n    }\n\n    .qwerty-input-row {\n        display: flex;\n        flex-grow: 1;\n        align-items: center;\n    }\n\n    .qwerty-input, .qwerty-input:focus {\n        padding: 0;\n        margin: 0;\n        border: none;\n        background: black;\n        color: white;\n        font: inherit;\n        display: inline-block;\n        outline: none;\n    }\n\n    .qwerty-send {\n        color: black;\n        padding: 5px 0.5em;\n        margin-left: 0.5em;\n\n        padding: 5px;\n        background: lightgray;\n        border-left: 1px solid white;\n        border-top: 1px solid white;\n        border-right: 1px solid darkgray;\n        border-bottom: 1px solid darkgray;\n    }\n\n    .qwerty-key {\n        display: flex;\n        position: absolute;\n        left: 10px;\n        bottom: 10px;\n\n        align-items: center;\n        justify-content: center;\n        color: black;\n        font-size: 2em;\n\n        width: 48px;\n        height: 48px;\n        background: lightgray url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZRJREFUWIXtlr9KA0EQxn9ngmBroY0W/k0stZbYKFqICD6DYCFiLfgIgtG8iGIkRcBGsLGx8Q+JYAhcwDdQE8/iZsncesgpeCuYDw72+2bmZnZ3bhLooYf/Dg8YBIYc5X/2gDcg66iAtgcEjpID3Z0vAo2Uc08AFVNAA6inXEAWoM8SN4ASsKm0omg54QXhe8pnX7R54TPCi8pnS7R1u5IAmJR1SfiZZQ+AFeG7wu+VT120beGrKs6gIvxQeB4I7O6/AcrAldJOgQzQUsnKRHumKgU9CvfFp23vNg76BH4TsSdg90DqsAs4ont3AdBRtnPRDoRPK78xK/5Exb2LtpykgK+4WWdibLaWUTYvLrE2BsAUYXPl6O4GwiaqynoWGCZstBowACyI7QJ4UfEtwoYGWLIKMvF54A7Sa0IbsZ9hAZgjPA0zC3b4fDVJ0QGOZb0GjAPXwKV2SjqIfvoYJBpEPvBAdMjcEr3D70APoid5t287Oe0B54PIfIZN4DXl3P3AqPN/RB7h7/OIo/xNR3l7+EP4AJe/eBF8vW9QAAAAAElFTkSuQmCC) no-repeat center center;\n        border-left: 1px solid white;\n        border-top: 1px solid white;\n        border-right: 1px solid darkgray;\n        border-bottom: 1px solid darkgray;\n    }\n\n    .qwerty-cursor {\n        background: white;\n        width: 0.5em;\n        height: 1em;\n        animation: qwerty-blink 1s;\n        -moz-animation: qwerty-blink 1s infinite;\n        -webkit-animation: qwerty-blink 1s infinite;\n    }\n\n    @-moz-keyframes qwerty-blink {\n        0% {background:white;}\n        50% {background:black;}\n        100% {background:white;}\n    }\n\n    @-webkit-keyframes qwerty-blink {\n        0% {background:white;}\n        50% {background:black;}\n        100% {background:white;}\n    }\n"
    }, {
        "../js-dos-dom": 9
    }],
    3: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Build = {
            version: "6.22.59 (41e421b7818042bda0cd05c85fd24394)",
            jsVersion: "0329a6636601ab8227a503d39715874e236caf49",
            wasmJsSize: 189732,
            wasmVersion: "fb6d6cf569eb6b131117507da32415ce",
            wasmSize: 1809269,
            jsSize: 6656135,
            buildSeed: 1577289108299
        }
    }, {}],
    4: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.regexp.to-string"), e("core-js/modules/es6.object.to-string"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t, n) {
                var o = this;
                if (this.storeName = "files", this.db = null, this.version = e, this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, this.indexedDB) {
                    var r = this.indexedDB.open("js-dos-cache (" + e + ")", 1);
                    r.onerror = function(e) {
                        n("Can't open cache database")
                    }, r.onsuccess = function(e) {
                        o.db = r.result, t(o)
                    }, r.onupgradeneeded = function(e) {
                        try {
                            o.db = r.result, o.db.onerror = function(e) {
                                n("Can't upgrade cache database")
                            }, o.db.createObjectStore(o.storeName)
                        } catch (e) {
                            n("Can't upgrade cache database")
                        }
                    }
                } else n("Indexed db is not supported on this host")
            }
            return e.prototype.put = function(e, t, n) {
                if (null !== this.db) {
                    var o = this.db.transaction(this.storeName, "readwrite");
                    o.oncomplete = function() {
                        return n()
                    }, o.objectStore(this.storeName).put(t, e)
                } else n()
            }, e.prototype.get = function(e, t, n) {
                if (null !== this.db) {
                    var o = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(e);
                    o.onerror = function() {
                        return n("Can't read value for key '" + e + "'")
                    }, o.onsuccess = function() {
                        o.result ? t(o.result) : n("Result is empty for key '" + e + "', result: " + o.result)
                    }
                } else n("db is not initalized")
            }, e.prototype.forEach = function(n, o) {
                if (null !== this.db) {
                    var e = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).openCursor();
                    e.onerror = function() {
                        return o()
                    }, e.onsuccess = function(e) {
                        var t = e.target.result;
                        t ? (n(t.key.toString(), t.value), t.continue()) : o()
                    }
                } else o()
            }, e
        }();
        n.default = o
    }, {
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.regexp.to-string": 128
    }],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {}
            return e.prototype.put = function(e, t, n) {}, e.prototype.get = function(e, t, n) {
                n("Cache is not supported on this host")
            }, e.prototype.forEach = function(e, t) {
                t()
            }, e
        }();
        n.default = o
    }, {}],
    6: [function(e, t, n) {
        "use strict";
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = o(e("./js-dos-cache-db")),
            i = o(e("./js-dos-cache-noop"));
        n.default = function(t, n) {
            new r.default(t.version, n, function(e) {
                void 0 !== t.log && t.log("ERR! Can't initalize cache, cause: " + e), n(new i.default)
            })
        }
    }, {
        "./js-dos-cache-db": 4,
        "./js-dos-cache-noop": 5
    }],
    7: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.promise"), e("core-js/modules/es6.object.to-string"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                var o = this;
                this.shellInputQueue = [], this.shellInputClients = [], this.onstdout = void 0, this.keyEventConsumer = {
                    onPress: function(e) {
                        return o.simulateKeyEvent(e, !0)
                    },
                    onRelease: function(e) {
                        return o.simulateKeyEvent(e, !1)
                    }
                }, this.dos = e, this.em = e, this.api = e, this.api.ping = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    o.onping(e, t)
                }, this.onready = t
            }
            return e.prototype.width = function() {
                return this.dos.canvas.width
            }, e.prototype.height = function() {
                return this.dos.canvas.height
            }, e.prototype.fullscreen = function() {
                var t = this,
                    e = function(e) {
                        e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : (t.fullscreenInitialCssStyle = e.style.cssText, e.style.cssText = "\n                    position: fixed;\n                    left: 0;\n                    top: 0;\n                    bottom: 0;\n                    right: 0;\n                    background: black;\n                    z-index: 999;\n                ")
                    },
                    n = this.getParentDiv();
                null !== n && "dosbox-container" === n.className ? e(n) : e(this.dos.canvas)
            }, e.prototype.exitFullscreen = function() {
                var t = this,
                    e = function(e) {
                        void 0 !== t.fullscreenInitialCssStyle ? (e.style.cssText = t.fullscreenInitialCssStyle, delete t.fullscreenInitialCssStyle) : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitExitFullscreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                    },
                    n = this.getParentDiv();
                null !== n && "dosbox-container" === n.className ? e(n) : e(this.dos.canvas)
            }, e.prototype.listenStdout = function(e) {
                this.onstdout = e
            }, e.prototype.shell = function() {
                for (var i = this, s = [], e = 0; e < arguments.length; e++) s[e] = arguments[e];
                if (0 !== s.length) return new Promise(function(e, t) {
                    i.shellInputClients.push(e);
                    for (var n = 0, o = s; n < o.length; n++) {
                        var r = o[n];
                        i.shellInputQueue.push(r)
                    }
                    i.requestShellInput()
                })
            }, e.prototype.screenshot = function() {
                var e = this;
                return new Promise(function(t) {
                    e.api.send("screenshot", "", function(e) {
                        t(e)
                    })
                })
            }, e.prototype.exit = function() {
                try {
                    this.dos.terminate(), this.api.send("exit")
                } catch (e) {
                    return 0
                }
                return this.dos.error("Runtime is still alive!"), -1
            }, e.prototype.simulateKeyEvent = function(e, t) {
                var n = t ? "keydown" : "keyup",
                    o = document.createEvent("KeyboardEvent"),
                    r = {
                        get: function() {
                            return this.keyCodeVal
                        }
                    };
                Object.defineProperty(o, "keyCode", r), Object.defineProperty(o, "which", r), Object.defineProperty(o, "charCode", r), o.initKeyboardEvent ? o.initKeyboardEvent(n, !0, !0, document.defaultView, !1, !1, !1, !1, e, e) : o.initKeyEvent(n, !0, !0, document.defaultView, !1, !1, !1, !1, e, 0), o.keyCodeVal = e, this.dos.canvas && this.dos.canvas.dispatchEvent(o)
            }, e.prototype.simulateKeyPress = function(e) {
                var t = this;
                this.simulateKeyEvent(e, !0), setTimeout(function() {
                    return t.simulateKeyEvent(e, !1)
                }, 100)
            }, e.prototype.getParentDiv = function() {
                return this.dos.canvas.parentElement instanceof HTMLDivElement ? this.dos.canvas.parentElement : null
            }, e.prototype.getKeyEventConsumer = function() {
                return this.keyEventConsumer
            }, e.prototype.sendKeyPress = function(e) {
                this.api.send("sdl_key_event", e + "")
            }, e.prototype.requestShellInput = function() {
                this.sendKeyPress(13)
            }, e.prototype.onping = function(e, t) {
                switch (e) {
                    case "ready":
                        this.onready(this);
                        break;
                    case "frame":
                        this.onframe();
                        break;
                    case "shell_input":
                        if (0 === this.shellInputQueue.length) return;
                        var n = t[0],
                            o = t[1],
                            r = this.shellInputQueue.shift(),
                            i = this.em.lengthBytesUTF8(r) + 1;
                        if (o < i) return void(void 0 !== this.dos.onerror && this.dos.onerror("Can't execute cmd '" + r + "', because it's bigger then max cmd length " + o));
                        if (this.em.stringToUTF8(r, n, i), 0 === this.shellInputQueue.length) {
                            for (var s = 0, a = this.shellInputClients; s < a.length; s++) {
                                (0, a[s])()
                            }
                            this.shellInputClients = []
                        } else this.requestShellInput();
                        break;
                    case "write_stdout":
                        var c = t[0];
                        this.onstdout && this.onstdout(c)
                }
            }, e.prototype.onframe = function() {
                this.dos.tick()
            }, e
        }();
        n.DosCommandInterface = o
    }, {
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.promise": 122
    }],
    8: [function(e, t, n) {
        "use strict";
        e("core-js/modules/web.dom.iterable"), e("core-js/modules/es6.array.iterator"), e("core-js/modules/es6.object.to-string"), e("core-js/modules/es6.object.keys"), e("core-js/modules/es6.regexp.replace"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./js-dos-options");
        n.default = function(n) {
            var o = i;
            return Object.keys(r.DosBoxConfigDefaults).forEach(function(e) {
                return t = e, void(o = o.replace("%" + t + "%", (n[t] || r.DosBoxConfigDefaults[t]) + ""));
                var t
            }), o
        };
        var i = "\n# This is the configurationfile for DOSBox 0.74. (Please use the latest version of DOSBox)\n# Lines starting with a # are commentlines and are ignored by DOSBox.\n# They are used to (briefly) document the effect of each option.\n\n[sdl]\n#       fullscreen: Start dosbox directly in fullscreen. (Press ALT-Enter to go back)\n#       fulldouble: Use double buffering in fullscreen. It can reduce screen flickering, but it can also result in a slow DOSBox.\n#   fullresolution: What resolution to use for fullscreen: original or fixed size (e.g. 1024x768).\n#                     Using your monitor's native resolution with aspect=true might give the best results.\n#                     If you end up with small window on a large screen, try an output different from surface.\n# windowresolution: Scale the window to this size IF the output device supports hardware scaling.\n#                     (output=surface does not!)\n#           output: What video system to use for output.\n#                   Possible values: surface, overlay, opengl, openglnb.\n#         autolock: Mouse will automatically lock, if you click on the screen. (Press CTRL-F10 to unlock)\n#      sensitivity: Mouse sensitivity.\n#      waitonerror: Wait before closing the console if dosbox has an error.\n#         priority: Priority levels for dosbox. Second entry behind the comma is for when dosbox is not focused/minimized.\n#                     pause is only valid for the second entry.\n#                   Possible values: lowest, lower, normal, higher, highest, pause.\n#       mapperfile: File used to load/save the key/event mappings from. Resetmapper only works with the defaul value.\n#     usescancodes: Avoid usage of symkeys, might not work on all operating systems.\n\nfullscreen=false\nfulldouble=false\nfullresolution=original\nwindowresolution=original\noutput=surface\nautolock=%autolock%\nsensitivity=100\nwaitonerror=true\npriority=higher,normal\nmapperfile=mapper-jsdos.map\nusescancodes=true\nvsync=false\n\n[dosbox]\n# language: Select another language file.\n#  machine: The type of machine tries to emulate.\n#           Possible values: hercules, cga, tandy, pcjr, ega, vgaonly, svga_s3, svga_et3000, svga_et4000, svga_paradise, vesa_nolfb, vesa_oldvbe.\n# captures: Directory where things like wave, midi, screenshot get captured.\n#  memsize: Amount of memory DOSBox has in megabytes.\n#             This value is best left at its default to avoid problems with some games,\n#             though few games might require a higher value.\n#             There is generally no speed advantage when raising this value.\n\nlanguage=\nmachine=svga_s3\ncaptures=capture\nmemsize=16\n\n[render]\n# frameskip: How many frames DOSBox skips before drawing one.\n#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.\n#    scaler: Scaler used to enlarge/enhance low resolution modes.\n#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.\n#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.\n\nframeskip=0\naspect=false\nscaler=none\n\n[cpu]\n#      core: CPU Core used in emulation. auto will switch to dynamic if available and appropriate.\n#            Possible values: auto, dynamic, normal, simple.\n#   cputype: CPU Type used in emulation. auto is the fastest choice.\n#            Possible values: auto, 386, 386_slow, 486_slow, pentium_slow, 386_prefetch.\n#    cycles: Amount of instructions DOSBox tries to emulate each millisecond.\n#            Setting this value too high results in sound dropouts and lags.\n#            Cycles can be set in 3 ways:\n#              'auto'          tries to guess what a game needs.\n#                              It usually works, but can fail for certain games.\n#              'fixed #number' will set a fixed amount of cycles. This is what you usually need if 'auto' fails.\n#                              (Example: fixed 4000).\n#              'max'           will allocate as much cycles as your computer is able to handle.\n#\n#            Possible values: auto, fixed, max.\n#   cycleup: Amount of cycles to decrease/increase with keycombo.(CTRL-F11/CTRL-F12)\n# cycledown: Setting it lower than 100 will be a percentage.\n\ncore=auto\ncputype=auto\ncycles=%cycles%\ncycleup=10\ncycledown=20\n\n[mixer]\n#   nosound: Enable silent mode, sound is still emulated though.\n#      rate: Mixer sample rate, setting any device's rate higher than this will probably lower their sound quality.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n# blocksize: Mixer block size, larger blocks might help sound stuttering but sound will also be more lagged.\n#            Possible values: 1024, 2048, 4096, 8192, 512, 256.\n# prebuffer: How many milliseconds of data to keep on top of the blocksize.\n\nnosound=false\nrate=44100\nblocksize=1024\nprebuffer=20\n\n[midi]\n#     mpu401: Type of MPU-401 to emulate.\n#             Possible values: intelligent, uart, none.\n# mididevice: Device that will receive the MIDI data from MPU-401.\n#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.\n# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.\n#               See the README/Manual for more details.\n\nmpu401=intelligent\nmididevice=default\nmidiconfig=\n\n[sblaster]\n#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.\n#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.\n#  sbbase: The IO address of the soundblaster.\n#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.\n#     irq: The IRQ number of the soundblaster.\n#          Possible values: 7, 5, 3, 9, 10, 11, 12.\n#     dma: The DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n#    hdma: The High DMA number of the soundblaster.\n#          Possible values: 1, 5, 0, 3, 6, 7.\n# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.\n# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.\n#          Possible values: auto, cms, opl2, dualopl2, opl3, none.\n#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).\n#          Possible values: default, compat, fast.\n# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).\n#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.\n\nsbtype=sb16\nsbbase=220\nirq=7\ndma=1\nhdma=5\nsbmixer=true\noplmode=auto\noplemu=default\noplrate=44100\n\n[gus]\n#      gus: Enable the Gravis Ultrasound emulation.\n#  gusrate: Sample rate of Ultrasound emulation.\n#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#  gusbase: The IO base address of the Gravis Ultrasound.\n#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.\n#   gusirq: The IRQ number of the Gravis Ultrasound.\n#           Possible values: 5, 3, 7, 9, 10, 11, 12.\n#   gusdma: The DMA channel of the Gravis Ultrasound.\n#           Possible values: 3, 0, 1, 5, 6, 7.\n# ultradir: Path to Ultrasound directory. In this directory\n#           there should be a MIDI directory that contains\n#           the patch files for GUS playback. Patch sets used\n#           with Timidity should work fine.\n\ngus=false\ngusrate=44100\ngusbase=240\ngusirq=5\ngusdma=3\nultradir=C:ULTRASND\n\n[speaker]\n# pcspeaker: Enable PC-Speaker emulation.\n#    pcrate: Sample rate of the PC-Speaker sound generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.\n#            Possible values: auto, on, off.\n# tandyrate: Sample rate of the Tandy 3-Voice generation.\n#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.\n#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).\n\npcspeaker=true\npcrate=44100\ntandy=auto\ntandyrate=44100\ndisney=true\n\n[joystick]\n# joysticktype: Type of joystick to emulate: auto (default), none,\n#               2axis (supports two joysticks),\n#               4axis (supports one joystick, first joystick used),\n#               4axis_2 (supports one joystick, second joystick used),\n#               fcs (Thrustmaster), ch (CH Flightstick).\n#               none disables joystick emulation.\n#               auto chooses emulation depending on real joystick(s).\n#               (Remember to reset dosbox's mapperfile if you saved it earlier)\n#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.\n#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).\n#     autofire: continuously fires as long as you keep the button pressed.\n#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.\n#   buttonwrap: enable button wrapping at the number of emulated buttons.\n\njoysticktype=auto\ntimed=true\nautofire=false\nswap34=false\nbuttonwrap=false\n\n[serial]\n# serial1: set type of device connected to com port.\n#          Can be disabled, dummy, modem, nullmodem, directserial.\n#          Additional parameters must be in the same line in the form of\n#          parameter:value. Parameter for all types is irq (optional).\n#          for directserial: realport (required), rxdelay (optional).\n#                           (realport:COM1 realport:ttyS0).\n#          for modem: listenport (optional).\n#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,\n#                         transparent, port, inhsocket (all optional).\n#          Example: serial1=modem listenport:5000\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial2: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial3: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n# serial4: see serial1\n#          Possible values: dummy, disabled, modem, nullmodem, directserial.\n\nserial1=dummy\nserial2=dummy\nserial3=disabled\nserial4=disabled\n\n[dos]\n#            xms: Enable XMS support.\n#            ems: Enable EMS support.\n#            umb: Enable UMB support.\n# keyboardlayout: Language code of the keyboard layout (or none).\n\nxms=true\nems=true\numb=true\nkeyboardlayout=auto\n\n[ipx]\n# ipx: Enable ipx over UDP/IP emulation.\n\nipx=false\n\n[autoexec]\n# Lines in this section will be run at startup.\n# You can put your MOUNT lines here.\n\n# https://js-dos.com\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–ˆ  â–„â–„â–„â–€â–€â–ˆ â–ˆâ–€â–€â–€â–€â–€â–ˆ\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–ˆâ–ˆâ–„ â–ˆ â–€ â–„ â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–ˆâ–ˆ â–€ â–€â–€â–ˆ â–ˆ â–€â–€â–€ â–ˆ\n# â–€â–€â–€â–€â–€â–€â–€ â–€ â–ˆâ–„â–€â–„â–€ â–ˆ â–€â–€â–€â–€â–€â–€â–€\n# â–ˆâ–€â–„â–„â–ˆâ–€â–€â–„â–„ â–€ â–€â–ˆâ–„â–„â–„â–„ â–€â–„â–ˆâ–€â–ˆâ–€\n# â–ˆâ–€ â–€ â–€â–€â–„ â–ˆâ–€ â–„ â–„â–€â–€â–€â–„ â–ˆâ–€â–ˆâ–„\n# â–„ â–„â–„ â–ˆâ–€â–€â–„ â–„â–€â–„â–€â–€â–ˆ  â–€â–€â–„â–€â–€â–ˆâ–€\n#   â–„â–€â–€â–ˆâ–€â–€ â–ˆâ–€â–ˆâ–€â–ˆâ–€â–€â–„ â–€â–ˆâ–ˆâ–€â–ˆâ–„\n# â–€â–€â–€ â–€ â–€ â–ˆâ–„â–ˆ â–€â–ˆâ–„â–„â–ˆâ–€â–€â–€â–ˆâ–€â–€\n# â–ˆâ–€â–€â–€â–€â–€â–ˆ â–„â–„â–„ â–„ â–„ â–ˆ â–€ â–ˆâ–„â–„â–„â–„\n# â–ˆ â–ˆâ–ˆâ–ˆ â–ˆ â–€â–ˆâ–€â–€â–„â–€â–€â–„â–ˆâ–ˆâ–ˆâ–ˆâ–€â–€â–ˆâ–„â–ˆ\n# â–ˆ â–€â–€â–€ â–ˆ â–„â–€â–€â–ˆâ–€â–ˆâ–€â–„ â–€â–€â–„â–„â–ˆâ–„â–ˆ \n# â–€â–€â–€â–€â–€â–€â–€ â–€   â–€â–€ â–€  â–€   â–€â–€â–€\n"
    }, {
        "./js-dos-options": 13,
        "core-js/modules/es6.array.iterator": 113,
        "core-js/modules/es6.object.keys": 119,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.regexp.replace": 126,
        "core-js/modules/web.dom.iterable": 134
    }],
    9: [function(e, t, n) {
        "use strict";
        e("core-js/modules/web.dom.iterable"), e("core-js/modules/es6.array.iterator"), e("core-js/modules/es6.object.to-string"), e("core-js/modules/es6.object.keys"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = "ontouchstart" in document.documentElement;

        function r(e, t) {
            if (null === document.getElementById(e)) {
                var n = document.createElement("style");
                n.id = e, n.innerHTML = t, document.head.appendChild(n)
            }
        }
        n.applyCss = r, n.createDiv = function(e, t) {
            var n = document.createElement("div");
            return void 0 !== e && (n.className = e), void 0 !== t && r(e + "-style", t), n
        }, n.addButtonListener = function(r, i, s) {
            var a = !1;
            if (o) {
                var c = {},
                    e = function(e) {
                        if (e.target === r)
                            for (var t = e.changedTouches, n = 0; n < t.length; n++) {
                                var o = t[n].identifier;
                                switch (e.type) {
                                    case "touchstart":
                                        0 === Object.keys(c).length && i(), c[o] = 1;
                                        break;
                                    case "touchend":
                                        delete c[o], 0 === Object.keys(c).length && s();
                                        break;
                                    default:
                                        return
                                }
                                a = 0 < Object.keys(c).length, e.preventDefault()
                            }
                    };
                r.addEventListener("touchmove", e, !0), r.addEventListener("touchstart", e, !0), r.addEventListener("touchend", e, !0)
            }
            var t = !1;
            r.addEventListener("mousedown", function(e) {
                a || 0 !== e.button || e.target !== r || (t = !0, i(), e.preventDefault())
            }, !0), r.addEventListener("mouseup", function(e) {
                !a && t && 0 === e.button && (t = !1, s(), e.preventDefault())
            }, !0), r.addEventListener("mouseleave", function(e) {
                !a && t && 0 === e.button && (t = !1, s())
            }, !0)
        }
    }, {
        "core-js/modules/es6.array.iterator": 113,
        "core-js/modules/es6.object.keys": 119,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/web.dom.iterable": 134
    }],
    10: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.string.ends-with"), e("core-js/modules/es6.regexp.constructor"), e("core-js/modules/es6.regexp.replace"), e("core-js/modules/web.dom.iterable"), e("core-js/modules/es6.array.iterator"), e("core-js/modules/es6.string.iterator"), e("core-js/modules/es6.regexp.split"), e("core-js/modules/es6.typed.uint8-array"), e("core-js/modules/es6.promise"), e("core-js/modules/es6.object.to-string");
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = o(e("./js-dos-cache-noop")),
            u = e("./js-dos-xhr"),
            r = function() {
                function e(e) {
                    var t = this;
                    this.syncingPromise = null, this.lastSyncTime = 0, this.dos = e, this.em = e, this.fs = e.FS, this.dos.registerTickListener(function() {
                        Date.now() - t.lastSyncTime < 5e3 || (t.lastSyncTime = Date.now(), t.syncFs())
                    }), this.dos.registerPauseListener(function() {
                        return t.syncFs()
                    }), this.dos.registerTerminateListener(function() {
                        return t.syncFs()
                    })
                }
                return e.prototype.chdir = function(e) {
                    this.fs.chdir(e)
                }, e.prototype.extract = function(e, t, n) {
                    return void 0 === t && (t = "/"), void 0 === n && (n = "zip"), this.extractAll([{
                        url: e,
                        mountPoint: t,
                        type: n
                    }])
                }, e.prototype.extractAll = function(o) {
                    var c = this,
                        r = function(t) {
                            var o = c.normalizePath(t.mountPoint),
                                r = t.type || "zip",
                                i = "/" === o || 0 === o.length,
                                e = o.split("/");
                            c.createPath(e, 0, e.length);
                            return i || c.fs.mount(c.fs.filesystems.IDBFS, {}, o),
                                function() {
                                    return i || !c.readOk(o) ? (i || c.dos.warn("Indexed db does not contains '" + o + "' rewriting..."), n = t.url, s = o, e = r, new Promise(function(r, i) {
                                        "zip" === e ? new u.Xhr(n, {
                                            cache: new a.default,
                                            responseType: "arraybuffer",
                                            fail: function(e) {
                                                return i(e)
                                            },
                                            progress: function(e, t) {
                                                void 0 !== c.dos.onprogress && c.dos.onprogress("Downloading " + n, e, t)
                                            },
                                            success: function(e) {
                                                c.chdir(s);
                                                var t = new Uint8Array(e),
                                                    n = c.em._malloc(t.length);
                                                c.em.HEAPU8.set(t, n);
                                                var o = c.em._extract_zip(n, t.length);
                                                c.em._free(n), 0 === o ? (c.writeOk(s), r()) : i("Can't extract zip, retcode " + o + ", see more info in logs")
                                            }
                                        }) : i("Only ZIP archive is supported")
                                    })) : Promise.resolve();
                                    var n, s, e
                                }
                        };
                    return new Promise(function(i, s) {
                        if (0 < c.lastSyncTime) s("Can't create persistent mount point, after syncing process starts");
                        else {
                            for (var a = [], e = 0, t = o; e < t.length; e++) {
                                var n = t[e];
                                a.push(r(n))
                            }
                            c.fs.syncfs(!0, function(e) {
                                e && c.dos.error("Can't restore FS from indexed db, cause: " + e);
                                for (var t = [], n = 0, o = a; n < o.length; n++) {
                                    var r = o[n];
                                    t.push(r())
                                }
                                Promise.all(t).then(function() {
                                    c.syncFs().then(i).catch(s)
                                }).catch(s)
                            })
                        }
                    })
                }, e.prototype.createFile = function(e, t) {
                    t instanceof ArrayBuffer && (t = new Uint8Array(t));
                    var n = (e = e.replace(new RegExp("^[a-zA-z]+:"), "").replace(new RegExp("\\\\", "g"), "/")).split("/");
                    if (0 !== n.length) {
                        var o = n[n.length - 1].trim();
                        if (0 !== o.length) {
                            var r = this.createPath(n, 0, n.length - 1);
                            this.fs.createDataFile(r, o, t, !0, !0, !0)
                        } else void 0 !== this.dos.onerror && this.dos.onerror("Can't create file '" + e + "', because file name is empty")
                    } else void 0 !== this.dos.onerror && this.dos.onerror("Can't create file '" + e + "', because it's not valid file path")
                }, e.prototype.createPath = function(e, t, n) {
                    for (var o = "", r = t; r < n; ++r) {
                        var i = e[r].trim();
                        0 !== i.length && (this.fs.createPath(o, i, !0, !0), o = o + "/" + i)
                    }
                    return o
                }, e.prototype.syncFs = function() {
                    var o = this;
                    return this.syncingPromise || (this.syncingPromise = new Promise(function(t, n) {
                        Date.now();
                        o.fs.syncfs(!1, function(e) {
                            e && (o.dos.error("Can't sync FS to indexed db, cause: " + e), n(e)), o.syncingPromise = null, o.lastSyncTime = Date.now(), t()
                        })
                    })), this.syncingPromise
                }, e.prototype.normalizePath = function(e) {
                    return 0 !== e.length && "/" === e[0] || (e = "/" + e), 1 < e.length && e.endsWith("/") && (e = e.substr(0, e.length - 1)), e
                }, e.prototype.readOk = function(e) {
                    try {
                        var t = this.fs.readFile(e + "/state.fs");
                        return 79 === t[0] && 70 === t[1]
                    } catch (e) {
                        return !1
                    }
                }, e.prototype.writeOk = function(e) {
                    this.createFile(e + "/state.fs", new Uint8Array([79, 70]))
                }, e
            }();
        n.DosFS = r
    }, {
        "./js-dos-cache-noop": 5,
        "./js-dos-xhr": 15,
        "core-js/modules/es6.array.iterator": 113,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.promise": 122,
        "core-js/modules/es6.regexp.constructor": 123,
        "core-js/modules/es6.regexp.replace": 126,
        "core-js/modules/es6.regexp.split": 127,
        "core-js/modules/es6.string.ends-with": 129,
        "core-js/modules/es6.string.iterator": 130,
        "core-js/modules/es6.typed.uint8-array": 132,
        "core-js/modules/web.dom.iterable": 134
    }],
    11: [function(e, t, n) {
        "use strict";

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        e("core-js/modules/es7.symbol.async-iterator"), e("core-js/modules/es6.symbol"), e("core-js/modules/es6.promise"), e("core-js/modules/es6.object.to-string"), e("core-js/modules/es6.regexp.replace"), e("core-js/modules/es6.string.ends-with"), e("core-js/modules/es6.math.trunc"), e("core-js/modules/es6.math.clz32"), e("core-js/modules/es6.math.fround"), e("core-js/modules/es6.math.imul"), e("core-js/modules/es6.typed.uint8-array"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var f = e("./js-dos-build"),
            d = e("./js-dos-xhr"),
            r = function() {
                function e() {
                    this.wasmSupported = !1, this.global = window, this.wdosboxPromise = null, this.global.exports = {};
                    try {
                        if ("object" === ("undefined" == typeof WebAssembly ? "undefined" : o(WebAssembly)) && "function" == typeof WebAssembly.instantiate && "function" == typeof WebAssembly.compile) {
                            var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                            e instanceof WebAssembly.Module && (this.wasmSupported = new WebAssembly.Instance(e) instanceof WebAssembly.Instance)
                        }
                    } catch (e) {}
                    this.polyfill()
                }
                return e.prototype.polyfill = function() {
                    Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function(e, t) {
                        var n = 65535 & e,
                            o = 65535 & t;
                        return n * o + ((e >>> 16) * o + n * (t >>> 16) << 16) | 0
                    }), Math.imul = Math.imul, Math.fround || (Math.fround = function(e) {
                        return e
                    }), Math.fround = Math.fround, Math.clz32 || (Math.clz32 = function(e) {
                        e >>>= 0;
                        for (var t = 0; t < 32; t++)
                            if (e & 1 << 31 - t) return t;
                        return 32
                    }), Math.clz32 = Math.clz32, Math.trunc || (Math.trunc = function(e) {
                        return e < 0 ? Math.ceil(e) : Math.floor(e)
                    }), Math.trunc = Math.trunc
                }, e.prototype.resolveDosBox = function(e, t, n) {
                    var o = this;
                    this.global.exports.WDOSBOX ? n.ondosbox(this.global.exports.WDOSBOX, this.global.exports.instantiateWasm) : (null === this.wdosboxPromise && (this.wdosboxPromise = this.compileDosBox(e, t, n)), this.wdosboxPromise.then(function(e) {
                        setTimeout(function() {
                            o.wdosboxPromise = null, n.ondosbox(o.global.exports.WDOSBOX, o.global.exports.instantiateWasm)
                        }, 1)
                    }, function(e) {
                        setTimeout(function() {
                            o.wdosboxPromise = null, void 0 !== n.onerror && n.onerror(e)
                        }, 1)
                    }))
                }, e.prototype.compileDosBox = function(e, t, n) {
                    var o = e.lastIndexOf("/"),
                        r = e.indexOf("w", o),
                        i = r === o + 1 && 0 <= r;
                    return this.wasmSupported && i ? this.compileWasmDosBox(e, t, n) : (n.log && (n.log("[WARN] Using js version of dosbox, perfomance can be lower then expected"), n.log("[DEBUG] Wasm supported: " + this.wasmSupported + ", url: " + e)), i && (e = e.substr(0, r) + e.substr(r + 1)).endsWith("dosbox.js") && (e = e.replace("dosbox.js", "dosbox-emterp.js")), this.compileJsDosBox(e, t, n))
                }, e.prototype.compileJsDosBox = function(r, e, i) {
                    var s = this;
                    return new Promise(function(t, o) {
                        var n = f.Build.jsSize;
                        r.replace(".js", ".js.mem");
                        new d.Xhr(r, {
                            cache: e,
                            progress: function(e, t) {
                                i.onprogress && i.onprogress("Resolving DosBox (" + r + ")", n, Math.min(n, t))
                            },
                            fail: function(e, t, n) {
                                o("Can't download dosbox.js, code: " + t + ", message: " + n + ", url: " + e)
                            },
                            success: function(e) {
                                void 0 !== i.onprogress && i.onprogress("Resolving DosBox (" + r + ")", n, n), e += eval.call(s, e), t(s.global.exports.WDOSBOX)
                            }
                        })
                    })
                }, e.prototype.compileWasmDosBox = function(a, c, u) {
                    var l = this;
                    return new Promise(function(r, i) {
                        var s = f.Build.wasmSize + f.Build.wasmJsSize,
                            e = a.replace(".js", ".wasm.js");
                        new d.Xhr(e, {
                            cache: c,
                            responseType: "arraybuffer",
                            progress: function(e, t) {
                                u.onprogress && u.onprogress("Resolving DosBox (" + a + ")", s, Math.min(f.Build.wasmSize, t))
                            },
                            fail: function(e, t, n) {
                                i("Can't download wasm, code: " + t + ", message: " + n + ", url: " + e)
                            },
                            success: function(e) {
                                var t = WebAssembly.compile(e),
                                    o = function(e) {
                                        i(e + "")
                                    };
                                t.catch(o), t.then(function(n) {
                                    l.global.exports.instantiateWasm = function(e, t) {
                                        return e.env.globalscall = function() {
                                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                            u.onglobals && u.onglobals.apply(null, e)
                                        }, WebAssembly.instantiate(n, e).catch(o).then(function(e) {
                                            t(e, n)
                                        })
                                    }, new d.Xhr(a, {
                                        cache: c,
                                        progress: function(e, t) {
                                            u.onprogress && u.onprogress("Resolving DosBox", s, Math.min(s, f.Build.wasmSize + t))
                                        },
                                        fail: function(e, t, n) {
                                            i("Can't download wdosbox.js, code: " + t + ", message: " + n + ", url: " + e)
                                        },
                                        success: function(e) {
                                            void 0 !== u.onprogress && u.onprogress("Resolving DosBox", s, s), e += eval.call(window, e), r(l.global.exports.WDOSBOX)
                                        }
                                    })
                                })
                            }
                        })
                    })
                }, e
            }();
        n.Host = new r
    }, {
        "./js-dos-build": 3,
        "./js-dos-xhr": 15,
        "core-js/modules/es6.math.clz32": 114,
        "core-js/modules/es6.math.fround": 115,
        "core-js/modules/es6.math.imul": 116,
        "core-js/modules/es6.math.trunc": 117,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.promise": 122,
        "core-js/modules/es6.regexp.replace": 126,
        "core-js/modules/es6.string.ends-with": 129,
        "core-js/modules/es6.symbol": 131,
        "core-js/modules/es6.typed.uint8-array": 132,
        "core-js/modules/es7.symbol.async-iterator": 133
    }],
    12: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.promise"), e("core-js/modules/es6.object.to-string"), e("core-js/modules/es6.object.set-prototype-of");
        var o, r = (o = function(e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("./js-dos-build"),
            a = e("./js-dos-ci"),
            c = i(e("./js-dos-conf")),
            u = e("./js-dos-fs"),
            l = e("./js-dos-options"),
            f = e("./js-dos-ui"),
            d = function(o) {
                function e(e, t) {
                    var n = o.call(this) || this;
                    return n.isValid = !1, n.version = s.Build.version, n.fs = null, n.ui = null, n.tickListeners = [], n.pauseListeners = [], n.resumeListeners = [], n.terminateListeners = [], n.ciResolveFn = function() {}, n.canvas = e, n.onready = t, n.ci = new Promise(function(e) {
                        n.ciResolveFn = e
                    }), n.registerDefaultListeners(), n
                }
                return r(e, o), e.prototype.registerDefaultListeners = function() {
                    var e, t = this;
                    void 0 !== document.hidden ? e = "hidden" : void 0 !== document.mozHidden ? e = "mozHidden" : void 0 !== document.msHidden ? e = "msHidden" : void 0 !== document.webkitHidden && (e = "webkitHidden"), document.addEventListener("visibilityChange", function() {
                        document[e] ? t.pause() : t.resume()
                    }, !1), window.addEventListener("beforeunload", function() {
                        t.terminate()
                    })
                }, e.prototype.debug = function(e) {
                    void 0 !== this.log && this.log("[DEBUG] " + e)
                }, e.prototype.info = function(e) {
                    void 0 !== this.log && this.log("[INFO] " + e)
                }, e.prototype.warn = function(e) {
                    void 0 !== this.log && this.log("[WARN] " + e)
                }, e.prototype.error = function(e) {
                    void 0 !== this.log && this.log("[ERROR] " + e)
                }, e.prototype.ondosbox = function(e, t) {
                    this.info("DosBox resolved"), this.instantiateWasm = t, this.instance = new e(this)
                }, e.prototype.resolve = function() {
                    var o = this;
                    this.wdosboxUrl || (this.wdosboxUrl = "wdosbox.js"), this.log || (this.log = function(e) {
                        return console.log(e)
                    }), this.canvas ? (this.onprogress || (this.ui = new f.DosUi(this), this.onprogress = function(e, t, n) {
                        null !== o.ui && o.ui.onprogress(e, t, n)
                    }), this.SDL = {
                        defaults: {
                            widht: 320,
                            height: 200,
                            copyOnLock: !1,
                            discardOnLock: !0,
                            opaqueFrontBuffer: !1
                        }
                    }, this.isValid = !0) : void 0 !== this.onerror && this.onerror("canvas field is required, but not set!")
                }, e.prototype.onRuntimeInitialized = function() {
                    var t = this;
                    this.fs = new u.DosFS(this), this.onready({
                        fs: this.fs,
                        main: function(e) {
                            return null !== t.ui && (t.ui.detach(), t.ui = null), e || (e = []), null === t.fs ? new Promise(function(e, t) {
                                t("IllegalState: fs is null")
                            }) : (t.fs.chdir("/"), t.fs.createFile("/home/web_user/.dosbox/dosbox-jsdos.conf", c.default(t)), e.unshift("-userconf", "-c", "mount c .", "-c", "c:"), new a.DosCommandInterface(t, function(e) {
                                t.ciResolveFn(e)
                            }), t.callMain(e), t.ci)
                        }
                    })
                }, e.prototype.registerTickListener = function(e) {
                    this.tickListeners.push(e)
                }, e.prototype.registerPauseListener = function(e) {
                    this.pauseListeners.push(e)
                }, e.prototype.registerResumeListener = function(e) {
                    this.resumeListeners.push(e)
                }, e.prototype.registerTerminateListener = function(e) {
                    this.terminateListeners.push(e)
                }, e.prototype.tick = function() {
                    for (var e = 0, t = this.tickListeners; e < t.length; e++) {
                        (0, t[e])()
                    }
                }, e.prototype.pause = function() {
                    for (var e = 0, t = this.pauseListeners; e < t.length; e++) {
                        (0, t[e])()
                    }
                }, e.prototype.resume = function() {
                    for (var e = 0, t = this.resumeListeners; e < t.length; e++) {
                        (0, t[e])()
                    }
                }, e.prototype.terminate = function() {
                    for (var e = 0, t = this.terminateListeners; e < t.length; e++) {
                        (0, t[e])()
                    }
                }, e
            }(l.DosOptions);
        n.DosModule = d
    }, {
        "./js-dos-build": 3,
        "./js-dos-ci": 7,
        "./js-dos-conf": 8,
        "./js-dos-fs": 10,
        "./js-dos-options": 13,
        "./js-dos-ui": 14,
        "core-js/modules/es6.object.set-prototype-of": 120,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.promise": 122
    }],
    13: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.object.set-prototype-of");
        var o, r = (o = function(e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        });
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {},
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r(t, e), t
            }(n.DosBoxConfig = i);
        n.DosOptions = s, n.DosBoxConfigDefaults = {
            cycles: "max",
            autolock: !1
        }
    }, {
        "core-js/modules/es6.object.set-prototype-of": 120
    }],
    14: [function(e, t, n) {
        "use strict";
        var o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = o(e("./js-dos-dom")),
            i = function() {
                function e(e) {
                    this.overlay = null, this.loaderMessage = null, this.hidden = !0, this.css = '\n    .dosbox-container { position: relative; min-width: 320px; min-height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center; }\n    .dosbox-overlay, .dosbox-loader { position: absolute; left: 0; right: 0; top: 0; bottom: 0; background-color: rgba(51, 51, 51, 0.7); }\n    .dosbox-start { text-align: center; position: absolute; left: 0; right: 0; bottom: 50%; color: #fff; font-size: 1.5em; text-decoration: underline; cursor: pointer; }\n    .dosbox-overlay a { color: #fff; }\n    .dosbox-powered { position: absolute; right: 1em; bottom: 1em; font-size: 0.8em; color: #9C9C9C; }\n    .dosbox-loader-message { text-align: center; position: absolute; left: 0; right: 0; bottom: 50%; margin: 0 0 -3em 0; box-sizing: border-box; color: #fff; font-size: 1.5em; }\n    @-moz-keyframes loading { 0% { left: 0; } 50% { left: 8.33333em; } 100% { left: 0; } } @-webkit-keyframes loading { 0% { left: 0; } 50% { left: 8.33333em; } 100% { left: 0; } } @keyframes loading { 0% { left: 0; } 50% { left: 8.33333em; } 100% { left: 0; } } .st-loader { width: 10em; height: 2.5em; position: absolute; top: 50%; left: 50%; margin: -1.25em 0 0 -5em; box-sizing: border-box; }\n    .st-loader:before, .st-loader:after { content: ""; display: block; position: absolute; top: 0; bottom: 0; width: 1.25em; box-sizing: border-box; border: 0.25em solid #fff; }\n    .st-loader:before { left: -0.76923em; border-right: 0; }\n    .st-loader:after { right: -0.76923em; border-left: 0; }\n    .st-loader .equal { display: block; position: absolute; top: 50%; margin-top: -0.5em; left: 4.16667em; height: 1em; width: 1.66667em; border: 0.25em solid #fff; box-sizing: border-box; border-width: 0.25em 0; -moz-animation: loading 1.5s infinite ease-in-out; -webkit-animation: loading 1.5s infinite ease-in-out; animation: loading 1.5s infinite ease-in-out; background: #fff; }\n    ', this.overlayHtml = '\n        <div class="dosbox-loader">\n            <div class="st-loader">\n                <span class="equal"></span>\n            </div>\n            <div class="dosbox-loader-message"></div>\n        </div>\n        <div class="dosbox-powered">\n            Powered by &nbsp;<a href="https://js-dos.com">js-dos.com</a> (6.22)\n        </div>\n    ', this.dos = e, this.canvas = e.canvas;
                    try {
                        if (r.applyCss("js-dos-ui-css", this.css), null !== this.canvas.parentElement && "dosbox-container" !== this.canvas.parentElement.className) {
                            var t = r.createDiv("dosbox-container");
                            this.canvas.parentElement.replaceChild(t, this.canvas), t.appendChild(this.canvas);
                            var n = r.createDiv("dosbox-overlay");
                            t.appendChild(n), n.innerHTML = this.overlayHtml
                        }
                        var o = this.canvas.parentElement;
                        if (null === o) throw new Error("Illegal state, container is null");
                        if (this.overlay = this.childById(o, "dosbox-overlay"), null === this.overlay) throw new Error("Illegal state, overlay is null");
                        this.loaderMessage = this.childById(this.overlay, "dosbox-loader-message"), this.hidden = !0, this.show()
                    } catch (e) {
                        this.onprogress = this.onprogressFallback
                    }
                }
                return e.prototype.onprogress = function(e, t, n) {
                    32 < e.length && (e = "â€¦" + e.substr(-32));
                    var o = e + " " + Math.round(100 * n / t * 10) / 10 + "%";
                    null !== this.loaderMessage && (this.loaderMessage.innerHTML = o), this.dos.info(o), t <= n ? this.hide() : this.show()
                }, e.prototype.detach = function() {
                    this.hide(), this.onprogress = this.onprogressFallback
                }, e.prototype.hide = function() {
                    this.hidden || (this.hidden = !0, null !== this.overlay && this.overlay.setAttribute("style", "display: none"))
                }, e.prototype.show = function() {
                    this.hidden && (this.hidden = !1, null !== this.overlay && this.overlay.setAttribute("style", "display: block"))
                }, e.prototype.onprogressFallback = function(e, t, n) {
                    this.dos.info(e + " " + 100 * n / t + "%")
                }, e.prototype.childById = function(e, t) {
                    if (null === e) return null;
                    for (var n = 0; n < e.childElementCount; ++n) {
                        var o = e.children[n];
                        if (o.className === t) return o;
                        if (null !== (o = this.childById(o, t))) return o
                    }
                    return null
                }, e
            }();
        n.DosUi = i
    }, {
        "./js-dos-dom": 9
    }],
    15: [function(e, t, n) {
        "use strict";
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = o(e("./js-dos-cache-noop")),
            i = function() {
                function e(e, t) {
                    var n = this;
                    this.xhr = null, this.total = 0, this.loaded = 0, this.resource = e, this.options = t, this.options.method = t.method || "GET", this.cache = t.cache || new r.default, "GET" === this.options.method && this.cache.get(this.resource, function(e) {
                        void 0 !== n.options.success && n.options.success(e)
                    }, function() {
                        n.makeHttpRequest()
                    })
                }
                return e.prototype.makeHttpRequest = function() {
                    var e, t, n = this;
                    this.xhr = new XMLHttpRequest, this.xhr.open(this.options.method || "GET", this.resource, !0), "POST" === this.options.method && this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), this.xhr.overrideMimeType("text/plain; charset=x-user-defined"), "function" == typeof(e = this.xhr).addEventListener && e.addEventListener("progress", function(e) {
                        if (n.total = e.total, n.loaded = e.loaded, n.options.progress) return n.options.progress(e.total, e.loaded)
                    }), "function" == typeof(t = this.xhr).addEventListener && t.addEventListener("error", function(e) {
                        if (n.options.fail) return n.options.fail(n.resource, n.xhr.status, "connection problem"), delete n.options.fail
                    }), this.xhr.onreadystatechange = function() {
                        return n.onReadyStateChange()
                    }, this.options.responseType && (this.xhr.responseType = this.options.responseType), this.xhr.send(this.options.data)
                }, e.prototype.onReadyStateChange = function() {
                    var e = this.xhr;
                    if (4 === e.readyState)
                        if (200 === e.status) {
                            if (this.options.success) {
                                var t = Math.max(this.total, this.loaded);
                                return void 0 !== this.options.progress && this.options.progress(t, t), "GET" === this.options.method && this.resource.indexOf("?") < 0 && this.cache.put(this.resource, e.response, function() {}), this.options.success(e.response)
                            }
                        } else if (this.options.fail) return this.options.fail(this.resource, e.status, "connection problem"), delete this.options.fail
                }, e
            }();
        n.Xhr = i
    }, {
        "./js-dos-cache-noop": 5
    }],
    16: [function(e, t, n) {
        "use strict";
        e("core-js/modules/es6.object.assign"), e("core-js/modules/es6.promise"), e("core-js/modules/es6.object.to-string");
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = o(e("./js-dos-cache")),
            a = e("./js-dos-host"),
            c = e("./js-dos-module"),
            r = o(e("./controller/move")),
            i = o(e("./controller/qwerty")),
            u = function(r, i) {
                var e = new Promise(function(e, t) {
                    var n = new c.DosModule(r, e);
                    i || (i = {}), i.onerror || (i.onerror = function(e) {
                        console.error(e)
                    }), Object.assign(n, i);
                    var o = n.onerror;
                    n.onerror = function(e) {
                        t(e);
                        setTimeout(function() {
                            n.onerror = o ? (o(e), o) : n.error
                        }, 1)
                    }, n.resolve(), n.isValid && s.default(n, function(e) {
                        a.Host.resolveDosBox(n.wdosboxUrl, e, n)
                    })
                });
                return e.ready = function(t) {
                    return e.then(function(e) {
                        t(e.fs, e.main)
                    }), e
                }, e
            };
        n.default = u, window.Dos = u, window.DosController = {
            Qwerty: i.default,
            Move: r.default
        }
    }, {
        "./controller/move": 1,
        "./controller/qwerty": 2,
        "./js-dos-cache": 6,
        "./js-dos-host": 11,
        "./js-dos-module": 12,
        "core-js/modules/es6.object.assign": 118,
        "core-js/modules/es6.object.to-string": 121,
        "core-js/modules/es6.promise": 122
    }],
    17: [function(e, t, n) {
        t.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, {}],
    18: [function(e, t, n) {
        var o = e("./_wks")("unscopables"),
            r = Array.prototype;
        null == r[o] && e("./_hide")(r, o, {}), t.exports = function(e) {
            r[o][e] = !0
        }
    }, {
        "./_hide": 46,
        "./_wks": 111
    }],
    19: [function(e, t, n) {
        "use strict";
        var o = e("./_string-at")(!0);
        t.exports = function(e, t, n) {
            return t + (n ? o(e, t).length : 1)
        }
    }, {
        "./_string-at": 94
    }],
    20: [function(e, t, n) {
        t.exports = function(e, t, n, o) {
            if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, {}],
    21: [function(e, t, n) {
        var o = e("./_is-object");
        t.exports = function(e) {
            if (!o(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, {
        "./_is-object": 54
    }],
    22: [function(e, t, n) {
        "use strict";
        var u = e("./_to-object"),
            l = e("./_to-absolute-index"),
            f = e("./_to-length");
        t.exports = [].copyWithin || function(e, t) {
            var n = u(this),
                o = f(n.length),
                r = l(e, o),
                i = l(t, o),
                s = 2 < arguments.length ? arguments[2] : void 0,
                a = Math.min((void 0 === s ? o : l(s, o)) - i, o - r),
                c = 1;
            for (i < r && r < i + a && (c = -1, i += a - 1, r += a - 1); 0 < a--;) i in n ? n[r] = n[i] : delete n[r], r += c, i += c;
            return n
        }
    }, {
        "./_to-absolute-index": 97,
        "./_to-length": 101,
        "./_to-object": 102
    }],
    23: [function(e, t, n) {
        "use strict";
        var a = e("./_to-object"),
            c = e("./_to-absolute-index"),
            u = e("./_to-length");
        t.exports = function(e) {
            for (var t = a(this), n = u(t.length), o = arguments.length, r = c(1 < o ? arguments[1] : void 0, n), i = 2 < o ? arguments[2] : void 0, s = void 0 === i ? n : c(i, n); r < s;) t[r++] = e;
            return t
        }
    }, {
        "./_to-absolute-index": 97,
        "./_to-length": 101,
        "./_to-object": 102
    }],
    24: [function(e, t, n) {
        var c = e("./_to-iobject"),
            u = e("./_to-length"),
            l = e("./_to-absolute-index");
        t.exports = function(a) {
            return function(e, t, n) {
                var o, r = c(e),
                    i = u(r.length),
                    s = l(n, i);
                if (a && t != t) {
                    for (; s < i;)
                        if ((o = r[s++]) != o) return !0
                } else
                    for (; s < i; s++)
                        if ((a || s in r) && r[s] === t) return a || s || 0;
                return !a && -1
            }
        }
    }, {
        "./_to-absolute-index": 97,
        "./_to-iobject": 100,
        "./_to-length": 101
    }],
    25: [function(e, t, n) {
        var m = e("./_ctx"),
            y = e("./_iobject"),
            x = e("./_to-object"),
            j = e("./_to-length"),
            o = e("./_array-species-create");
        t.exports = function(f, e) {
            var d = 1 == f,
                p = 2 == f,
                h = 3 == f,
                _ = 4 == f,
                b = 6 == f,
                g = 5 == f || b,
                v = e || o;
            return function(e, t, n) {
                for (var o, r, i = x(e), s = y(i), a = m(t, n, 3), c = j(s.length), u = 0, l = d ? v(e, c) : p ? v(e, 0) : void 0; u < c; u++)
                    if ((g || u in s) && (r = a(o = s[u], u, i), f))
                        if (d) l[u] = r;
                        else if (r) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return o;
                    case 6:
                        return u;
                    case 2:
                        l.push(o)
                } else if (_) return !1;
                return b ? -1 : h || _ ? _ : l
            }
        }
    }, {
        "./_array-species-create": 27,
        "./_ctx": 31,
        "./_iobject": 51,
        "./_to-length": 101,
        "./_to-object": 102
    }],
    26: [function(e, t, n) {
        var o = e("./_is-object"),
            r = e("./_is-array"),
            i = e("./_wks")("species");
        t.exports = function(e) {
            var t;
            return r(e) && ("function" != typeof(t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), o(t) && null === (t = t[i]) && (t = void 0)), void 0 === t ? Array : t
        }
    }, {
        "./_is-array": 53,
        "./_is-object": 54,
        "./_wks": 111
    }],
    27: [function(e, t, n) {
        var o = e("./_array-species-constructor");
        t.exports = function(e, t) {
            return new(o(e))(t)
        }
    }, {
        "./_array-species-constructor": 26
    }],
    28: [function(e, t, n) {
        var r = e("./_cof"),
            i = e("./_wks")("toStringTag"),
            s = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(e) {
            var t, n, o;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), i)) ? n : s ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
        }
    }, {
        "./_cof": 29,
        "./_wks": 111
    }],
    29: [function(e, t, n) {
        var o = {}.toString;
        t.exports = function(e) {
            return o.call(e).slice(8, -1)
        }
    }, {}],
    30: [function(e, t, n) {
        var o = t.exports = {
            version: "2.6.10"
        };
        "number" == typeof __e && (__e = o)
    }, {}],
    31: [function(e, t, n) {
        var i = e("./_a-function");
        t.exports = function(o, r, e) {
            if (i(o), void 0 === r) return o;
            switch (e) {
                case 1:
                    return function(e) {
                        return o.call(r, e)
                    };
                case 2:
                    return function(e, t) {
                        return o.call(r, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return o.call(r, e, t, n)
                    }
            }
            return function() {
                return o.apply(r, arguments)
            }
        }
    }, {
        "./_a-function": 17
    }],
    32: [function(e, t, n) {
        t.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, {}],
    33: [function(e, t, n) {
        t.exports = !e("./_fails")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, {
        "./_fails": 39
    }],
    34: [function(e, t, n) {
        var o = e("./_is-object"),
            r = e("./_global").document,
            i = o(r) && o(r.createElement);
        t.exports = function(e) {
            return i ? r.createElement(e) : {}
        }
    }, {
        "./_global": 44,
        "./_is-object": 54
    }],
    35: [function(e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, {}],
    36: [function(e, t, n) {
        var a = e("./_object-keys"),
            c = e("./_object-gops"),
            u = e("./_object-pie");
        t.exports = function(e) {
            var t = a(e),
                n = c.f;
            if (n)
                for (var o, r = n(e), i = u.f, s = 0; r.length > s;) i.call(e, o = r[s++]) && t.push(o);
            return t
        }
    }, {
        "./_object-gops": 75,
        "./_object-keys": 78,
        "./_object-pie": 79
    }],
    37: [function(e, t, n) {
        var _ = e("./_global"),
            b = e("./_core"),
            g = e("./_hide"),
            v = e("./_redefine"),
            m = e("./_ctx"),
            y = "prototype",
            x = function(e, t, n) {
                var o, r, i, s, a = e & x.F,
                    c = e & x.G,
                    u = e & x.S,
                    l = e & x.P,
                    f = e & x.B,
                    d = c ? _ : u ? _[t] || (_[t] = {}) : (_[t] || {})[y],
                    p = c ? b : b[t] || (b[t] = {}),
                    h = p[y] || (p[y] = {});
                for (o in c && (n = t), n) i = ((r = !a && d && void 0 !== d[o]) ? d : n)[o], s = f && r ? m(i, _) : l && "function" == typeof i ? m(Function.call, i) : i, d && v(d, o, i, e & x.U), p[o] != i && g(p, o, s), l && h[o] != i && (h[o] = i)
            };
        _.core = b, x.F = 1, x.G = 2, x.S = 4, x.P = 8, x.B = 16, x.W = 32, x.U = 64, x.R = 128, t.exports = x
    }, {
        "./_core": 30,
        "./_ctx": 31,
        "./_global": 44,
        "./_hide": 46,
        "./_redefine": 85
    }],
    38: [function(e, t, n) {
        var o = e("./_wks")("match");
        t.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[o] = !1, !"/./" [t](n)
                } catch (e) {}
            }
            return !0
        }
    }, {
        "./_wks": 111
    }],
    39: [function(e, t, n) {
        t.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, {}],
    40: [function(e, t, n) {
        "use strict";
        e("./es6.regexp.exec");
        var l = e("./_redefine"),
            f = e("./_hide"),
            d = e("./_fails"),
            p = e("./_defined"),
            h = e("./_wks"),
            _ = e("./_regexp-exec"),
            b = h("species"),
            g = !d(function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            }),
            v = function() {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        t.exports = function(n, e, t) {
            var o = h(n),
                i = !d(function() {
                    var e = {};
                    return e[o] = function() {
                        return 7
                    }, 7 != "" [n](e)
                }),
                r = i ? !d(function() {
                    var e = !1,
                        t = /a/;
                    return t.exec = function() {
                        return e = !0, null
                    }, "split" === n && (t.constructor = {}, t.constructor[b] = function() {
                        return t
                    }), t[o](""), !e
                }) : void 0;
            if (!i || !r || "replace" === n && !g || "split" === n && !v) {
                var s = /./ [o],
                    a = t(p, o, "" [n], function(e, t, n, o, r) {
                        return t.exec === _ ? i && !r ? {
                            done: !0,
                            value: s.call(t, n, o)
                        } : {
                            done: !0,
                            value: e.call(n, t, o)
                        } : {
                            done: !1
                        }
                    }),
                    c = a[0],
                    u = a[1];
                l(String.prototype, n, c), f(RegExp.prototype, o, 2 == e ? function(e, t) {
                    return u.call(e, this, t)
                } : function(e) {
                    return u.call(e, this)
                })
            }
        }
    }, {
        "./_defined": 32,
        "./_fails": 39,
        "./_hide": 46,
        "./_redefine": 85,
        "./_regexp-exec": 87,
        "./_wks": 111,
        "./es6.regexp.exec": 124
    }],
    41: [function(e, t, n) {
        "use strict";
        var o = e("./_an-object");
        t.exports = function() {
            var e = o(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    }, {
        "./_an-object": 21
    }],
    42: [function(e, t, n) {
        var d = e("./_ctx"),
            p = e("./_iter-call"),
            h = e("./_is-array-iter"),
            _ = e("./_an-object"),
            b = e("./_to-length"),
            g = e("./core.get-iterator-method"),
            v = {},
            m = {};
        (n = t.exports = function(e, t, n, o, r) {
            var i, s, a, c, u = r ? function() {
                    return e
                } : g(e),
                l = d(n, o, t ? 2 : 1),
                f = 0;
            if ("function" != typeof u) throw TypeError(e + " is not iterable!");
            if (h(u)) {
                for (i = b(e.length); f < i; f++)
                    if ((c = t ? l(_(s = e[f])[0], s[1]) : l(e[f])) === v || c === m) return c
            } else
                for (a = u.call(e); !(s = a.next()).done;)
                    if ((c = p(a, l, s.value, t)) === v || c === m) return c
        }).BREAK = v, n.RETURN = m
    }, {
        "./_an-object": 21,
        "./_ctx": 31,
        "./_is-array-iter": 52,
        "./_iter-call": 56,
        "./_to-length": 101,
        "./core.get-iterator-method": 112
    }],
    43: [function(e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString)
    }, {
        "./_shared": 92
    }],
    44: [function(e, t, n) {
        var o = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = o)
    }, {}],
    45: [function(e, t, n) {
        var o = {}.hasOwnProperty;
        t.exports = function(e, t) {
            return o.call(e, t)
        }
    }, {}],
    46: [function(e, t, n) {
        var o = e("./_object-dp"),
            r = e("./_property-desc");
        t.exports = e("./_descriptors") ? function(e, t, n) {
            return o.f(e, t, r(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, {
        "./_descriptors": 33,
        "./_object-dp": 70,
        "./_property-desc": 83
    }],
    47: [function(e, t, n) {
        var o = e("./_global").document;
        t.exports = o && o.documentElement
    }, {
        "./_global": 44
    }],
    48: [function(e, t, n) {
        t.exports = !e("./_descriptors") && !e("./_fails")(function() {
            return 7 != Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, {
        "./_descriptors": 33,
        "./_dom-create": 34,
        "./_fails": 39
    }],
    49: [function(e, t, n) {
        var i = e("./_is-object"),
            s = e("./_set-proto").set;
        t.exports = function(e, t, n) {
            var o, r = t.constructor;
            return r !== n && "function" == typeof r && (o = r.prototype) !== n.prototype && i(o) && s && s(e, o), e
        }
    }, {
        "./_is-object": 54,
        "./_set-proto": 88
    }],
    50: [function(e, t, n) {
        t.exports = function(e, t, n) {
            var o = void 0 === n;
            switch (t.length) {
                case 0:
                    return o ? e() : e.call(n);
                case 1:
                    return o ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, {}],
    51: [function(e, t, n) {
        var o = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == o(e) ? e.split("") : Object(e)
        }
    }, {
        "./_cof": 29
    }],
    52: [function(e, t, n) {
        var o = e("./_iterators"),
            r = e("./_wks")("iterator"),
            i = Array.prototype;
        t.exports = function(e) {
            return void 0 !== e && (o.Array === e || i[r] === e)
        }
    }, {
        "./_iterators": 61,
        "./_wks": 111
    }],
    53: [function(e, t, n) {
        var o = e("./_cof");
        t.exports = Array.isArray || function(e) {
            return "Array" == o(e)
        }
    }, {
        "./_cof": 29
    }],
    54: [function(e, t, n) {
        t.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, {}],
    55: [function(e, t, n) {
        var o = e("./_is-object"),
            r = e("./_cof"),
            i = e("./_wks")("match");
        t.exports = function(e) {
            var t;
            return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e))
        }
    }, {
        "./_cof": 29,
        "./_is-object": 54,
        "./_wks": 111
    }],
    56: [function(e, t, n) {
        var i = e("./_an-object");
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(i(n)[0], n[1]) : e(n)
            } catch (e) {
                var r = t.return;
                throw void 0 !== r && i(r.call(t)), e
            }
        }
    }, {
        "./_an-object": 21
    }],
    57: [function(e, t, n) {
        "use strict";
        var o = e("./_object-create"),
            r = e("./_property-desc"),
            i = e("./_set-to-string-tag"),
            s = {};
        e("./_hide")(s, e("./_wks")("iterator"), function() {
            return this
        }), t.exports = function(e, t, n) {
            e.prototype = o(s, {
                next: r(1, n)
            }), i(e, t + " Iterator")
        }
    }, {
        "./_hide": 46,
        "./_object-create": 69,
        "./_property-desc": 83,
        "./_set-to-string-tag": 90,
        "./_wks": 111
    }],
    58: [function(e, t, n) {
        "use strict";
        var m = e("./_library"),
            y = e("./_export"),
            x = e("./_redefine"),
            j = e("./_hide"),
            w = e("./_iterators"),
            k = e("./_iter-create"),
            S = e("./_set-to-string-tag"),
            E = e("./_object-gpo"),
            P = e("./_wks")("iterator"),
            O = !([].keys && "next" in [].keys()),
            A = "values",
            M = function() {
                return this
            };
        t.exports = function(e, t, n, o, r, i, s) {
            k(n, t, o);
            var a, c, u, l = function(e) {
                    if (!O && e in h) return h[e];
                    switch (e) {
                        case "keys":
                        case A:
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                f = t + " Iterator",
                d = r == A,
                p = !1,
                h = e.prototype,
                _ = h[P] || h["@@iterator"] || r && h[r],
                b = _ || l(r),
                g = r ? d ? l("entries") : b : void 0,
                v = "Array" == t && h.entries || _;
            if (v && (u = E(v.call(new e))) !== Object.prototype && u.next && (S(u, f, !0), m || "function" == typeof u[P] || j(u, P, M)), d && _ && _.name !== A && (p = !0, b = function() {
                    return _.call(this)
                }), m && !s || !O && !p && h[P] || j(h, P, b), w[t] = b, w[f] = M, r)
                if (a = {
                        values: d ? b : l(A),
                        keys: i ? b : l("keys"),
                        entries: g
                    }, s)
                    for (c in a) c in h || x(h, c, a[c]);
                else y(y.P + y.F * (O || p), t, a);
            return a
        }
    }, {
        "./_export": 37,
        "./_hide": 46,
        "./_iter-create": 57,
        "./_iterators": 61,
        "./_library": 62,
        "./_object-gpo": 76,
        "./_redefine": 85,
        "./_set-to-string-tag": 90,
        "./_wks": 111
    }],
    59: [function(e, t, n) {
        var i = e("./_wks")("iterator"),
            s = !1;
        try {
            var o = [7][i]();
            o.return = function() {
                s = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (e) {}
        t.exports = function(e, t) {
            if (!t && !s) return !1;
            var n = !1;
            try {
                var o = [7],
                    r = o[i]();
                r.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[i] = function() {
                    return r
                }, e(o)
            } catch (e) {}
            return n
        }
    }, {
        "./_wks": 111
    }],
    60: [function(e, t, n) {
        t.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, {}],
    61: [function(e, t, n) {
        t.exports = {}
    }, {}],
    62: [function(e, t, n) {
        t.exports = !1
    }, {}],
    63: [function(e, t, n) {
        var i = e("./_math-sign"),
            o = Math.pow,
            s = o(2, -52),
            a = o(2, -23),
            c = o(2, 127) * (2 - a),
            u = o(2, -126);
        t.exports = Math.fround || function(e) {
            var t, n, o = Math.abs(e),
                r = i(e);
            return o < u ? r * (o / u / a + 1 / s - 1 / s) * u * a : c < (n = (t = (1 + a / s) * o) - (t - o)) || n != n ? r * (1 / 0) : r * n
        }
    }, {
        "./_math-sign": 64
    }],
    64: [function(e, t, n) {
        t.exports = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
        }
    }, {}],
    65: [function(e, t, n) {
        var o = e("./_uid")("meta"),
            r = e("./_is-object"),
            i = e("./_has"),
            s = e("./_object-dp").f,
            a = 0,
            c = Object.isExtensible || function() {
                return !0
            },
            u = !e("./_fails")(function() {
                return c(Object.preventExtensions({}))
            }),
            l = function(e) {
                s(e, o, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            f = t.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, o)) {
                        if (!c(e)) return "F";
                        if (!t) return "E";
                        l(e)
                    }
                    return e[o].i
                },
                getWeak: function(e, t) {
                    if (!i(e, o)) {
                        if (!c(e)) return !0;
                        if (!t) return !1;
                        l(e)
                    }
                    return e[o].w
                },
                onFreeze: function(e) {
                    return u && f.NEED && c(e) && !i(e, o) && l(e), e
                }
            }
    }, {
        "./_fails": 39,
        "./_has": 45,
        "./_is-object": 54,
        "./_object-dp": 70,
        "./_uid": 107
    }],
    66: [function(e, t, n) {
        var a = e("./_global"),
            c = e("./_task").set,
            u = a.MutationObserver || a.WebKitMutationObserver,
            l = a.process,
            f = a.Promise,
            d = "process" == e("./_cof")(l);
        t.exports = function() {
            var n, o, r, e = function() {
                var e, t;
                for (d && (e = l.domain) && e.exit(); n;) {
                    t = n.fn, n = n.next;
                    try {
                        t()
                    } catch (e) {
                        throw n ? r() : o = void 0, e
                    }
                }
                o = void 0, e && e.enter()
            };
            if (d) r = function() {
                l.nextTick(e)
            };
            else if (!u || a.navigator && a.navigator.standalone)
                if (f && f.resolve) {
                    var t = f.resolve(void 0);
                    r = function() {
                        t.then(e)
                    }
                } else r = function() {
                    c.call(a, e)
                };
            else {
                var i = !0,
                    s = document.createTextNode("");
                new u(e).observe(s, {
                    characterData: !0
                }), r = function() {
                    s.data = i = !i
                }
            }
            return function(e) {
                var t = {
                    fn: e,
                    next: void 0
                };
                o && (o.next = t), n || (n = t, r()), o = t
            }
        }
    }, {
        "./_cof": 29,
        "./_global": 44,
        "./_task": 96
    }],
    67: [function(e, t, n) {
        "use strict";
        var r = e("./_a-function");

        function o(e) {
            var n, o;
            this.promise = new e(function(e, t) {
                if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
                n = e, o = t
            }), this.resolve = r(n), this.reject = r(o)
        }
        t.exports.f = function(e) {
            return new o(e)
        }
    }, {
        "./_a-function": 17
    }],
    68: [function(e, t, n) {
        "use strict";
        var d = e("./_descriptors"),
            p = e("./_object-keys"),
            h = e("./_object-gops"),
            _ = e("./_object-pie"),
            b = e("./_to-object"),
            g = e("./_iobject"),
            r = Object.assign;
        t.exports = !r || e("./_fails")(function() {
            var e = {},
                t = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
            return e[n] = 7, o.split("").forEach(function(e) {
                t[e] = e
            }), 7 != r({}, e)[n] || Object.keys(r({}, t)).join("") != o
        }) ? function(e, t) {
            for (var n = b(e), o = arguments.length, r = 1, i = h.f, s = _.f; r < o;)
                for (var a, c = g(arguments[r++]), u = i ? p(c).concat(i(c)) : p(c), l = u.length, f = 0; f < l;) a = u[f++], d && !s.call(c, a) || (n[a] = c[a]);
            return n
        } : r
    }, {
        "./_descriptors": 33,
        "./_fails": 39,
        "./_iobject": 51,
        "./_object-gops": 75,
        "./_object-keys": 78,
        "./_object-pie": 79,
        "./_to-object": 102
    }],
    69: [function(o, e, t) {
        var r = o("./_an-object"),
            i = o("./_object-dps"),
            s = o("./_enum-bug-keys"),
            a = o("./_shared-key")("IE_PROTO"),
            c = function() {},
            u = "prototype",
            l = function() {
                var e, t = o("./_dom-create")("iframe"),
                    n = s.length;
                for (t.style.display = "none", o("./_html").appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l[u][s[n]];
                return l()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (c[u] = r(e), n = new c, c[u] = null, n[a] = e) : n = l(), void 0 === t ? n : i(n, t)
        }
    }, {
        "./_an-object": 21,
        "./_dom-create": 34,
        "./_enum-bug-keys": 35,
        "./_html": 47,
        "./_object-dps": 71,
        "./_shared-key": 91
    }],
    70: [function(e, t, n) {
        var o = e("./_an-object"),
            r = e("./_ie8-dom-define"),
            i = e("./_to-primitive"),
            s = Object.defineProperty;
        n.f = e("./_descriptors") ? Object.defineProperty : function(e, t, n) {
            if (o(e), t = i(t, !0), o(n), r) try {
                return s(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, {
        "./_an-object": 21,
        "./_descriptors": 33,
        "./_ie8-dom-define": 48,
        "./_to-primitive": 103
    }],
    71: [function(e, t, n) {
        var s = e("./_object-dp"),
            a = e("./_an-object"),
            c = e("./_object-keys");
        t.exports = e("./_descriptors") ? Object.defineProperties : function(e, t) {
            a(e);
            for (var n, o = c(t), r = o.length, i = 0; i < r;) s.f(e, n = o[i++], t[n]);
            return e
        }
    }, {
        "./_an-object": 21,
        "./_descriptors": 33,
        "./_object-dp": 70,
        "./_object-keys": 78
    }],
    72: [function(e, t, n) {
        var o = e("./_object-pie"),
            r = e("./_property-desc"),
            i = e("./_to-iobject"),
            s = e("./_to-primitive"),
            a = e("./_has"),
            c = e("./_ie8-dom-define"),
            u = Object.getOwnPropertyDescriptor;
        n.f = e("./_descriptors") ? u : function(e, t) {
            if (e = i(e), t = s(t, !0), c) try {
                return u(e, t)
            } catch (e) {}
            if (a(e, t)) return r(!o.f.call(e, t), e[t])
        }
    }, {
        "./_descriptors": 33,
        "./_has": 45,
        "./_ie8-dom-define": 48,
        "./_object-pie": 79,
        "./_property-desc": 83,
        "./_to-iobject": 100,
        "./_to-primitive": 103
    }],
    73: [function(e, t, n) {
        var o = e("./_to-iobject"),
            r = e("./_object-gopn").f,
            i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(e) {
            return s && "[object Window]" == i.call(e) ? function(e) {
                try {
                    return r(e)
                } catch (e) {
                    return s.slice()
                }
            }(e) : r(o(e))
        }
    }, {
        "./_object-gopn": 74,
        "./_to-iobject": 100
    }],
    74: [function(e, t, n) {
        var o = e("./_object-keys-internal"),
            r = e("./_enum-bug-keys").concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(e) {
            return o(e, r)
        }
    }, {
        "./_enum-bug-keys": 35,
        "./_object-keys-internal": 77
    }],
    75: [function(e, t, n) {
        n.f = Object.getOwnPropertySymbols
    }, {}],
    76: [function(e, t, n) {
        var o = e("./_has"),
            r = e("./_to-object"),
            i = e("./_shared-key")("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(e) {
            return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
        }
    }, {
        "./_has": 45,
        "./_shared-key": 91,
        "./_to-object": 102
    }],
    77: [function(e, t, n) {
        var s = e("./_has"),
            a = e("./_to-iobject"),
            c = e("./_array-includes")(!1),
            u = e("./_shared-key")("IE_PROTO");
        t.exports = function(e, t) {
            var n, o = a(e),
                r = 0,
                i = [];
            for (n in o) n != u && s(o, n) && i.push(n);
            for (; t.length > r;) s(o, n = t[r++]) && (~c(i, n) || i.push(n));
            return i
        }
    }, {
        "./_array-includes": 24,
        "./_has": 45,
        "./_shared-key": 91,
        "./_to-iobject": 100
    }],
    78: [function(e, t, n) {
        var o = e("./_object-keys-internal"),
            r = e("./_enum-bug-keys");
        t.exports = Object.keys || function(e) {
            return o(e, r)
        }
    }, {
        "./_enum-bug-keys": 35,
        "./_object-keys-internal": 77
    }],
    79: [function(e, t, n) {
        n.f = {}.propertyIsEnumerable
    }, {}],
    80: [function(e, t, n) {
        var r = e("./_export"),
            i = e("./_core"),
            s = e("./_fails");
        t.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                o = {};
            o[e] = t(n), r(r.S + r.F * s(function() {
                n(1)
            }), "Object", o)
        }
    }, {
        "./_core": 30,
        "./_export": 37,
        "./_fails": 39
    }],
    81: [function(e, t, n) {
        t.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    }, {}],
    82: [function(e, t, n) {
        var o = e("./_an-object"),
            r = e("./_is-object"),
            i = e("./_new-promise-capability");
        t.exports = function(e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise
        }
    }, {
        "./_an-object": 21,
        "./_is-object": 54,
        "./_new-promise-capability": 67
    }],
    83: [function(e, t, n) {
        t.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, {}],
    84: [function(e, t, n) {
        var r = e("./_redefine");
        t.exports = function(e, t, n) {
            for (var o in t) r(e, o, t[o], n);
            return e
        }
    }, {
        "./_redefine": 85
    }],
    85: [function(e, t, n) {
        var i = e("./_global"),
            s = e("./_hide"),
            a = e("./_has"),
            c = e("./_uid")("src"),
            o = e("./_function-to-string"),
            r = "toString",
            u = ("" + o).split(r);
        e("./_core").inspectSource = function(e) {
            return o.call(e)
        }, (t.exports = function(e, t, n, o) {
            var r = "function" == typeof n;
            r && (a(n, "name") || s(n, "name", t)), e[t] !== n && (r && (a(n, c) || s(n, c, e[t] ? "" + e[t] : u.join(String(t)))), e === i ? e[t] = n : o ? e[t] ? e[t] = n : s(e, t, n) : (delete e[t], s(e, t, n)))
        })(Function.prototype, r, function() {
            return "function" == typeof this && this[c] || o.call(this)
        })
    }, {
        "./_core": 30,
        "./_function-to-string": 43,
        "./_global": 44,
        "./_has": 45,
        "./_hide": 46,
        "./_uid": 107
    }],
    86: [function(e, t, n) {
        "use strict";
        var r = e("./_classof"),
            i = RegExp.prototype.exec;
        t.exports = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var o = n.call(e, t);
                if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return o
            }
            if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e, t)
        }
    }, {
        "./_classof": 28
    }],
    87: [function(e, t, n) {
        "use strict";
        var o, r, s = e("./_flags"),
            a = RegExp.prototype.exec,
            c = String.prototype.replace,
            i = a,
            u = "lastIndex",
            l = (o = /a/, r = /b*/g, a.call(o, "a"), a.call(r, "a"), 0 !== o[u] || 0 !== r[u]),
            f = void 0 !== /()??/.exec("")[1];
        (l || f) && (i = function(e) {
            var t, n, o, r, i = this;
            return f && (n = new RegExp("^" + i.source + "$(?!\\s)", s.call(i))), l && (t = i[u]), o = a.call(i, e), l && o && (i[u] = i.global ? o.index + o[0].length : t), f && o && 1 < o.length && c.call(o[0], n, function() {
                for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (o[r] = void 0)
            }), o
        }), t.exports = i
    }, {
        "./_flags": 41
    }],
    88: [function(t, e, n) {
        var o = t("./_is-object"),
            r = t("./_an-object"),
            i = function(e, t) {
                if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
            };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, n, o) {
                try {
                    (o = t("./_ctx")(Function.call, t("./_object-gopd").f(Object.prototype, "__proto__").set, 2))(e, []), n = !(e instanceof Array)
                } catch (e) {
                    n = !0
                }
                return function(e, t) {
                    return i(e, t), n ? e.__proto__ = t : o(e, t), e
                }
            }({}, !1) : void 0),
            check: i
        }
    }, {
        "./_an-object": 21,
        "./_ctx": 31,
        "./_is-object": 54,
        "./_object-gopd": 72
    }],
    89: [function(e, t, n) {
        "use strict";
        var o = e("./_global"),
            r = e("./_object-dp"),
            i = e("./_descriptors"),
            s = e("./_wks")("species");
        t.exports = function(e) {
            var t = o[e];
            i && t && !t[s] && r.f(t, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, {
        "./_descriptors": 33,
        "./_global": 44,
        "./_object-dp": 70,
        "./_wks": 111
    }],
    90: [function(e, t, n) {
        var o = e("./_object-dp").f,
            r = e("./_has"),
            i = e("./_wks")("toStringTag");
        t.exports = function(e, t, n) {
            e && !r(e = n ? e : e.prototype, i) && o(e, i, {
                configurable: !0,
                value: t
            })
        }
    }, {
        "./_has": 45,
        "./_object-dp": 70,
        "./_wks": 111
    }],
    91: [function(e, t, n) {
        var o = e("./_shared")("keys"),
            r = e("./_uid");
        t.exports = function(e) {
            return o[e] || (o[e] = r(e))
        }
    }, {
        "./_shared": 92,
        "./_uid": 107
    }],
    92: [function(e, t, n) {
        var o = e("./_core"),
            r = e("./_global"),
            i = "__core-js_shared__",
            s = r[i] || (r[i] = {});
        (t.exports = function(e, t) {
            return s[e] || (s[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: o.version,
            mode: e("./_library") ? "pure" : "global",
            copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, {
        "./_core": 30,
        "./_global": 44,
        "./_library": 62
    }],
    93: [function(e, t, n) {
        var r = e("./_an-object"),
            i = e("./_a-function"),
            s = e("./_wks")("species");
        t.exports = function(e, t) {
            var n, o = r(e).constructor;
            return void 0 === o || null == (n = r(o)[s]) ? t : i(n)
        }
    }, {
        "./_a-function": 17,
        "./_an-object": 21,
        "./_wks": 111
    }],
    94: [function(e, t, n) {
        var c = e("./_to-integer"),
            u = e("./_defined");
        t.exports = function(a) {
            return function(e, t) {
                var n, o, r = String(u(e)),
                    i = c(t),
                    s = r.length;
                return i < 0 || s <= i ? a ? "" : void 0 : (n = r.charCodeAt(i)) < 55296 || 56319 < n || i + 1 === s || (o = r.charCodeAt(i + 1)) < 56320 || 57343 < o ? a ? r.charAt(i) : n : a ? r.slice(i, i + 2) : o - 56320 + (n - 55296 << 10) + 65536
            }
        }
    }, {
        "./_defined": 32,
        "./_to-integer": 99
    }],
    95: [function(e, t, n) {
        var o = e("./_is-regexp"),
            r = e("./_defined");
        t.exports = function(e, t, n) {
            if (o(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(r(e))
        }
    }, {
        "./_defined": 32,
        "./_is-regexp": 55
    }],
    96: [function(e, t, n) {
        var o, r, i, s = e("./_ctx"),
            a = e("./_invoke"),
            c = e("./_html"),
            u = e("./_dom-create"),
            l = e("./_global"),
            f = l.process,
            d = l.setImmediate,
            p = l.clearImmediate,
            h = l.MessageChannel,
            _ = l.Dispatch,
            b = 0,
            g = {},
            v = "onreadystatechange",
            m = function() {
                var e = +this;
                if (g.hasOwnProperty(e)) {
                    var t = g[e];
                    delete g[e], t()
                }
            },
            y = function(e) {
                m.call(e.data)
            };
        d && p || (d = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return g[++b] = function() {
                a("function" == typeof e ? e : Function(e), t)
            }, o(b), b
        }, p = function(e) {
            delete g[e]
        }, "process" == e("./_cof")(f) ? o = function(e) {
            f.nextTick(s(m, e, 1))
        } : _ && _.now ? o = function(e) {
            _.now(s(m, e, 1))
        } : h ? (i = (r = new h).port2, r.port1.onmessage = y, o = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function(e) {
            l.postMessage(e + "", "*")
        }, l.addEventListener("message", y, !1)) : o = v in u("script") ? function(e) {
            c.appendChild(u("script"))[v] = function() {
                c.removeChild(this), m.call(e)
            }
        } : function(e) {
            setTimeout(s(m, e, 1), 0)
        }), t.exports = {
            set: d,
            clear: p
        }
    }, {
        "./_cof": 29,
        "./_ctx": 31,
        "./_dom-create": 34,
        "./_global": 44,
        "./_html": 47,
        "./_invoke": 50
    }],
    97: [function(e, t, n) {
        var o = e("./_to-integer"),
            r = Math.max,
            i = Math.min;
        t.exports = function(e, t) {
            return (e = o(e)) < 0 ? r(e + t, 0) : i(e, t)
        }
    }, {
        "./_to-integer": 99
    }],
    98: [function(e, t, n) {
        var o = e("./_to-integer"),
            r = e("./_to-length");
        t.exports = function(e) {
            if (void 0 === e) return 0;
            var t = o(e),
                n = r(t);
            if (t !== n) throw RangeError("Wrong length!");
            return n
        }
    }, {
        "./_to-integer": 99,
        "./_to-length": 101
    }],
    99: [function(e, t, n) {
        var o = Math.ceil,
            r = Math.floor;
        t.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : o)(e)
        }
    }, {}],
    100: [function(e, t, n) {
        var o = e("./_iobject"),
            r = e("./_defined");
        t.exports = function(e) {
            return o(r(e))
        }
    }, {
        "./_defined": 32,
        "./_iobject": 51
    }],
    101: [function(e, t, n) {
        var o = e("./_to-integer"),
            r = Math.min;
        t.exports = function(e) {
            return 0 < e ? r(o(e), 9007199254740991) : 0
        }
    }, {
        "./_to-integer": 99
    }],
    102: [function(e, t, n) {
        var o = e("./_defined");
        t.exports = function(e) {
            return Object(o(e))
        }
    }, {
        "./_defined": 32
    }],
    103: [function(e, t, n) {
        var r = e("./_is-object");
        t.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof(n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof(n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, {
        "./_is-object": 54
    }],
    104: [function(e, t, n) {
        "use strict";
        if (e("./_descriptors")) {
            var g = e("./_library"),
                v = e("./_global"),
                m = e("./_fails"),
                y = e("./_export"),
                x = e("./_typed"),
                o = e("./_typed-buffer"),
                d = e("./_ctx"),
                j = e("./_an-instance"),
                r = e("./_property-desc"),
                w = e("./_hide"),
                i = e("./_redefine-all"),
                s = e("./_to-integer"),
                k = e("./_to-length"),
                S = e("./_to-index"),
                a = e("./_to-absolute-index"),
                c = e("./_to-primitive"),
                u = e("./_has"),
                E = e("./_classof"),
                P = e("./_is-object"),
                p = e("./_to-object"),
                h = e("./_is-array-iter"),
                O = e("./_object-create"),
                A = e("./_object-gpo"),
                M = e("./_object-gopn").f,
                _ = e("./core.get-iterator-method"),
                l = e("./_uid"),
                f = e("./_wks"),
                b = e("./_array-methods"),
                T = e("./_array-includes"),
                D = e("./_species-constructor"),
                L = e("./es6.array.iterator"),
                C = e("./_iterators"),
                I = e("./_iter-detect"),
                F = e("./_set-species"),
                R = e("./_array-fill"),
                B = e("./_array-copy-within"),
                q = e("./_object-dp"),
                z = e("./_object-gopd"),
                U = q.f,
                N = z.f,
                W = v.RangeError,
                G = v.TypeError,
                H = v.Uint8Array,
                V = "ArrayBuffer",
                K = "Shared" + V,
                Y = "BYTES_PER_ELEMENT",
                X = "prototype",
                Q = Array[X],
                J = o.ArrayBuffer,
                Z = o.DataView,
                $ = b(0),
                ee = b(2),
                te = b(3),
                ne = b(4),
                oe = b(5),
                re = b(6),
                ie = T(!0),
                se = T(!1),
                ae = L.values,
                ce = L.keys,
                ue = L.entries,
                le = Q.lastIndexOf,
                fe = Q.reduce,
                de = Q.reduceRight,
                pe = Q.join,
                he = Q.sort,
                _e = Q.slice,
                be = Q.toString,
                ge = Q.toLocaleString,
                ve = f("iterator"),
                me = f("toStringTag"),
                ye = l("typed_constructor"),
                xe = l("def_constructor"),
                je = x.CONSTR,
                we = x.TYPED,
                ke = x.VIEW,
                Se = "Wrong length!",
                Ee = b(1, function(e, t) {
                    return Te(D(e, e[xe]), t)
                }),
                Pe = m(function() {
                    return 1 === new H(new Uint16Array([1]).buffer)[0]
                }),
                Oe = !!H && !!H[X].set && m(function() {
                    new H(1).set({})
                }),
                Ae = function(e, t) {
                    var n = s(e);
                    if (n < 0 || n % t) throw W("Wrong offset!");
                    return n
                },
                Me = function(e) {
                    if (P(e) && we in e) return e;
                    throw G(e + " is not a typed array!")
                },
                Te = function(e, t) {
                    if (!(P(e) && ye in e)) throw G("It is not a typed array constructor!");
                    return new e(t)
                },
                De = function(e, t) {
                    return Le(D(e, e[xe]), t)
                },
                Le = function(e, t) {
                    for (var n = 0, o = t.length, r = Te(e, o); n < o;) r[n] = t[n++];
                    return r
                },
                Ce = function(e, t, n) {
                    U(e, t, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                },
                Ie = function(e) {
                    var t, n, o, r, i, s, a = p(e),
                        c = arguments.length,
                        u = 1 < c ? arguments[1] : void 0,
                        l = void 0 !== u,
                        f = _(a);
                    if (null != f && !h(f)) {
                        for (s = f.call(a), o = [], t = 0; !(i = s.next()).done; t++) o.push(i.value);
                        a = o
                    }
                    for (l && 2 < c && (u = d(u, arguments[2], 2)), t = 0, n = k(a.length), r = Te(this, n); t < n; t++) r[t] = l ? u(a[t], t) : a[t];
                    return r
                },
                Fe = function() {
                    for (var e = 0, t = arguments.length, n = Te(this, t); e < t;) n[e] = arguments[e++];
                    return n
                },
                Re = !!H && m(function() {
                    ge.call(new H(1))
                }),
                Be = function() {
                    return ge.apply(Re ? _e.call(Me(this)) : Me(this), arguments)
                },
                qe = {
                    copyWithin: function(e, t) {
                        return B.call(Me(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
                    },
                    every: function(e) {
                        return ne(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    fill: function(e) {
                        return R.apply(Me(this), arguments)
                    },
                    filter: function(e) {
                        return De(this, ee(Me(this), e, 1 < arguments.length ? arguments[1] : void 0))
                    },
                    find: function(e) {
                        return oe(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    findIndex: function(e) {
                        return re(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    forEach: function(e) {
                        $(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    indexOf: function(e) {
                        return se(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    includes: function(e) {
                        return ie(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    join: function(e) {
                        return pe.apply(Me(this), arguments)
                    },
                    lastIndexOf: function(e) {
                        return le.apply(Me(this), arguments)
                    },
                    map: function(e) {
                        return Ee(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    reduce: function(e) {
                        return fe.apply(Me(this), arguments)
                    },
                    reduceRight: function(e) {
                        return de.apply(Me(this), arguments)
                    },
                    reverse: function() {
                        for (var e, t = this, n = Me(t).length, o = Math.floor(n / 2), r = 0; r < o;) e = t[r], t[r++] = t[--n], t[n] = e;
                        return t
                    },
                    some: function(e) {
                        return te(Me(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    sort: function(e) {
                        return he.call(Me(this), e)
                    },
                    subarray: function(e, t) {
                        var n = Me(this),
                            o = n.length,
                            r = a(e, o);
                        return new(D(n, n[xe]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, k((void 0 === t ? o : a(t, o)) - r))
                    }
                },
                ze = function(e, t) {
                    return De(this, _e.call(Me(this), e, t))
                },
                Ue = function(e) {
                    Me(this);
                    var t = Ae(arguments[1], 1),
                        n = this.length,
                        o = p(e),
                        r = k(o.length),
                        i = 0;
                    if (n < r + t) throw W(Se);
                    for (; i < r;) this[t + i] = o[i++]
                },
                Ne = {
                    entries: function() {
                        return ue.call(Me(this))
                    },
                    keys: function() {
                        return ce.call(Me(this))
                    },
                    values: function() {
                        return ae.call(Me(this))
                    }
                },
                We = function(e, t) {
                    return P(e) && e[we] && "symbol" != typeof t && t in e && String(+t) == String(t)
                },
                Ge = function(e, t) {
                    return We(e, t = c(t, !0)) ? r(2, e[t]) : N(e, t)
                },
                He = function(e, t, n) {
                    return !(We(e, t = c(t, !0)) && P(n) && u(n, "value")) || u(n, "get") || u(n, "set") || n.configurable || u(n, "writable") && !n.writable || u(n, "enumerable") && !n.enumerable ? U(e, t, n) : (e[t] = n.value, e)
                };
            je || (z.f = Ge, q.f = He), y(y.S + y.F * !je, "Object", {
                getOwnPropertyDescriptor: Ge,
                defineProperty: He
            }), m(function() {
                be.call({})
            }) && (be = ge = function() {
                return pe.call(this)
            });
            var Ve = i({}, qe);
            i(Ve, Ne), w(Ve, ve, Ne.values), i(Ve, {
                slice: ze,
                set: Ue,
                constructor: function() {},
                toString: be,
                toLocaleString: Be
            }), Ce(Ve, "buffer", "b"), Ce(Ve, "byteOffset", "o"), Ce(Ve, "byteLength", "l"), Ce(Ve, "length", "e"), U(Ve, me, {
                get: function() {
                    return this[we]
                }
            }), t.exports = function(e, f, t, i) {
                var d = e + ((i = !!i) ? "Clamped" : "") + "Array",
                    n = "get" + e,
                    s = "set" + e,
                    p = v[d],
                    a = p || {},
                    o = p && A(p),
                    r = !p || !x.ABV,
                    c = {},
                    u = p && p[X],
                    h = function(e, r) {
                        U(e, r, {
                            get: function() {
                                return e = r, (t = this._d).v[n](e * f + t.o, Pe);
                                var e, t
                            },
                            set: function(e) {
                                return t = r, n = e, o = this._d, i && (n = (n = Math.round(n)) < 0 ? 0 : 255 < n ? 255 : 255 & n), void o.v[s](t * f + o.o, n, Pe);
                                var t, n, o
                            },
                            enumerable: !0
                        })
                    };
                r ? (p = t(function(e, t, n, o) {
                    j(e, p, d, "_d");
                    var r, i, s, a, c = 0,
                        u = 0;
                    if (P(t)) {
                        if (!(t instanceof J || (a = E(t)) == V || a == K)) return we in t ? Le(p, t) : Ie.call(p, t);
                        r = t, u = Ae(n, f);
                        var l = t.byteLength;
                        if (void 0 === o) {
                            if (l % f) throw W(Se);
                            if ((i = l - u) < 0) throw W(Se)
                        } else if (l < (i = k(o) * f) + u) throw W(Se);
                        s = i / f
                    } else s = S(t), r = new J(i = s * f);
                    for (w(e, "_d", {
                            b: r,
                            o: u,
                            l: i,
                            e: s,
                            v: new Z(r)
                        }); c < s;) h(e, c++)
                }), u = p[X] = O(Ve), w(u, "constructor", p)) : m(function() {
                    p(1)
                }) && m(function() {
                    new p(-1)
                }) && I(function(e) {
                    new p, new p(null), new p(1.5), new p(e)
                }, !0) || (p = t(function(e, t, n, o) {
                    var r;
                    return j(e, p, d), P(t) ? t instanceof J || (r = E(t)) == V || r == K ? void 0 !== o ? new a(t, Ae(n, f), o) : void 0 !== n ? new a(t, Ae(n, f)) : new a(t) : we in t ? Le(p, t) : Ie.call(p, t) : new a(S(t))
                }), $(o !== Function.prototype ? M(a).concat(M(o)) : M(a), function(e) {
                    e in p || w(p, e, a[e])
                }), p[X] = u, g || (u.constructor = p));
                var l = u[ve],
                    _ = !!l && ("values" == l.name || null == l.name),
                    b = Ne.values;
                w(p, ye, !0), w(u, we, d), w(u, ke, !0), w(u, xe, p), (i ? new p(1)[me] == d : me in u) || U(u, me, {
                    get: function() {
                        return d
                    }
                }), c[d] = p, y(y.G + y.W + y.F * (p != a), c), y(y.S, d, {
                    BYTES_PER_ELEMENT: f
                }), y(y.S + y.F * m(function() {
                    a.of.call(p, 1)
                }), d, {
                    from: Ie,
                    of: Fe
                }), Y in u || w(u, Y, f), y(y.P, d, qe), F(d), y(y.P + y.F * Oe, d, {
                    set: Ue
                }), y(y.P + y.F * !_, d, Ne), g || u.toString == be || (u.toString = be), y(y.P + y.F * m(function() {
                    new p(1).slice()
                }), d, {
                    slice: ze
                }), y(y.P + y.F * (m(function() {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !m(function() {
                    u.toLocaleString.call([1, 2])
                })), d, {
                    toLocaleString: Be
                }), C[d] = _ ? l : b, g || _ || w(u, ve, b)
            }
        } else t.exports = function() {}
    }, {
        "./_an-instance": 20,
        "./_array-copy-within": 22,
        "./_array-fill": 23,
        "./_array-includes": 24,
        "./_array-methods": 25,
        "./_classof": 28,
        "./_ctx": 31,
        "./_descriptors": 33,
        "./_export": 37,
        "./_fails": 39,
        "./_global": 44,
        "./_has": 45,
        "./_hide": 46,
        "./_is-array-iter": 52,
        "./_is-object": 54,
        "./_iter-detect": 59,
        "./_iterators": 61,
        "./_library": 62,
        "./_object-create": 69,
        "./_object-dp": 70,
        "./_object-gopd": 72,
        "./_object-gopn": 74,
        "./_object-gpo": 76,
        "./_property-desc": 83,
        "./_redefine-all": 84,
        "./_set-species": 89,
        "./_species-constructor": 93,
        "./_to-absolute-index": 97,
        "./_to-index": 98,
        "./_to-integer": 99,
        "./_to-length": 101,
        "./_to-object": 102,
        "./_to-primitive": 103,
        "./_typed": 106,
        "./_typed-buffer": 105,
        "./_uid": 107,
        "./_wks": 111,
        "./core.get-iterator-method": 112,
        "./es6.array.iterator": 113
    }],
    105: [function(e, t, n) {
        "use strict";
        var o = e("./_global"),
            r = e("./_descriptors"),
            i = e("./_library"),
            s = e("./_typed"),
            a = e("./_hide"),
            c = e("./_redefine-all"),
            u = e("./_fails"),
            l = e("./_an-instance"),
            f = e("./_to-integer"),
            d = e("./_to-length"),
            p = e("./_to-index"),
            h = e("./_object-gopn").f,
            _ = e("./_object-dp").f,
            b = e("./_array-fill"),
            g = e("./_set-to-string-tag"),
            v = "ArrayBuffer",
            m = "DataView",
            y = "prototype",
            x = "Wrong index!",
            j = o[v],
            w = o[m],
            k = o.Math,
            S = o.RangeError,
            E = o.Infinity,
            P = j,
            O = k.abs,
            A = k.pow,
            M = k.floor,
            T = k.log,
            D = k.LN2,
            L = "byteLength",
            C = "byteOffset",
            I = r ? "_b" : "buffer",
            F = r ? "_l" : L,
            R = r ? "_o" : C;

        function B(e, t, n) {
            var o, r, i, s = new Array(n),
                a = 8 * n - t - 1,
                c = (1 << a) - 1,
                u = c >> 1,
                l = 23 === t ? A(2, -24) - A(2, -77) : 0,
                f = 0,
                d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for ((e = O(e)) != e || e === E ? (r = e != e ? 1 : 0, o = c) : (o = M(T(e) / D), e * (i = A(2, -o)) < 1 && (o--, i *= 2), 2 <= (e += 1 <= o + u ? l / i : l * A(2, 1 - u)) * i && (o++, i /= 2), c <= o + u ? (r = 0, o = c) : 1 <= o + u ? (r = (e * i - 1) * A(2, t), o += u) : (r = e * A(2, u - 1) * A(2, t), o = 0)); 8 <= t; s[f++] = 255 & r, r /= 256, t -= 8);
            for (o = o << t | r, a += t; 0 < a; s[f++] = 255 & o, o /= 256, a -= 8);
            return s[--f] |= 128 * d, s
        }

        function q(e, t, n) {
            var o, r = 8 * n - t - 1,
                i = (1 << r) - 1,
                s = i >> 1,
                a = r - 7,
                c = n - 1,
                u = e[c--],
                l = 127 & u;
            for (u >>= 7; 0 < a; l = 256 * l + e[c], c--, a -= 8);
            for (o = l & (1 << -a) - 1, l >>= -a, a += t; 0 < a; o = 256 * o + e[c], c--, a -= 8);
            if (0 === l) l = 1 - s;
            else {
                if (l === i) return o ? NaN : u ? -E : E;
                o += A(2, t), l -= s
            }
            return (u ? -1 : 1) * o * A(2, l - t)
        }

        function z(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }

        function U(e) {
            return [255 & e]
        }

        function N(e) {
            return [255 & e, e >> 8 & 255]
        }

        function W(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        }

        function G(e) {
            return B(e, 52, 8)
        }

        function H(e) {
            return B(e, 23, 4)
        }

        function V(e, t, n) {
            _(e[y], t, {
                get: function() {
                    return this[n]
                }
            })
        }

        function K(e, t, n, o) {
            var r = p(+n);
            if (r + t > e[F]) throw S(x);
            var i = e[I]._b,
                s = r + e[R],
                a = i.slice(s, s + t);
            return o ? a : a.reverse()
        }

        function Y(e, t, n, o, r, i) {
            var s = p(+n);
            if (s + t > e[F]) throw S(x);
            for (var a = e[I]._b, c = s + e[R], u = o(+r), l = 0; l < t; l++) a[c + l] = u[i ? l : t - l - 1]
        }
        if (s.ABV) {
            if (!u(function() {
                    j(1)
                }) || !u(function() {
                    new j(-1)
                }) || u(function() {
                    return new j, new j(1.5), new j(NaN), j.name != v
                })) {
                for (var X, Q = (j = function(e) {
                        return l(this, j), new P(p(e))
                    })[y] = P[y], J = h(P), Z = 0; J.length > Z;)(X = J[Z++]) in j || a(j, X, P[X]);
                i || (Q.constructor = j)
            }
            var $ = new w(new j(2)),
                ee = w[y].setInt8;
            $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || c(w[y], {
                setInt8: function(e, t) {
                    ee.call(this, e, t << 24 >> 24)
                },
                setUint8: function(e, t) {
                    ee.call(this, e, t << 24 >> 24)
                }
            }, !0)
        } else j = function(e) {
            l(this, j, v);
            var t = p(e);
            this._b = b.call(new Array(t), 0), this[F] = t
        }, w = function(e, t, n) {
            l(this, w, m), l(e, j, m);
            var o = e[F],
                r = f(t);
            if (r < 0 || o < r) throw S("Wrong offset!");
            if (o < r + (n = void 0 === n ? o - r : d(n))) throw S("Wrong length!");
            this[I] = e, this[R] = r, this[F] = n
        }, r && (V(j, L, "_l"), V(w, "buffer", "_b"), V(w, L, "_l"), V(w, C, "_o")), c(w[y], {
            getInt8: function(e) {
                return K(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return K(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = K(this, 2, e, arguments[1]);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = K(this, 2, e, arguments[1]);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return z(K(this, 4, e, arguments[1]))
            },
            getUint32: function(e) {
                return z(K(this, 4, e, arguments[1])) >>> 0
            },
            getFloat32: function(e) {
                return q(K(this, 4, e, arguments[1]), 23, 4)
            },
            getFloat64: function(e) {
                return q(K(this, 8, e, arguments[1]), 52, 8)
            },
            setInt8: function(e, t) {
                Y(this, 1, e, U, t)
            },
            setUint8: function(e, t) {
                Y(this, 1, e, U, t)
            },
            setInt16: function(e, t) {
                Y(this, 2, e, N, t, arguments[2])
            },
            setUint16: function(e, t) {
                Y(this, 2, e, N, t, arguments[2])
            },
            setInt32: function(e, t) {
                Y(this, 4, e, W, t, arguments[2])
            },
            setUint32: function(e, t) {
                Y(this, 4, e, W, t, arguments[2])
            },
            setFloat32: function(e, t) {
                Y(this, 4, e, H, t, arguments[2])
            },
            setFloat64: function(e, t) {
                Y(this, 8, e, G, t, arguments[2])
            }
        });
        g(j, v), g(w, m), a(w[y], s.VIEW, !0), n[v] = j, n[m] = w
    }, {
        "./_an-instance": 20,
        "./_array-fill": 23,
        "./_descriptors": 33,
        "./_fails": 39,
        "./_global": 44,
        "./_hide": 46,
        "./_library": 62,
        "./_object-dp": 70,
        "./_object-gopn": 74,
        "./_redefine-all": 84,
        "./_set-to-string-tag": 90,
        "./_to-index": 98,
        "./_to-integer": 99,
        "./_to-length": 101,
        "./_typed": 106
    }],
    106: [function(e, t, n) {
        for (var o, r = e("./_global"), i = e("./_hide"), s = e("./_uid"), a = s("typed_array"), c = s("view"), u = !(!r.ArrayBuffer || !r.DataView), l = u, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, a, !0), i(o.prototype, c, !0)) : l = !1;
        t.exports = {
            ABV: u,
            CONSTR: l,
            TYPED: a,
            VIEW: c
        }
    }, {
        "./_global": 44,
        "./_hide": 46,
        "./_uid": 107
    }],
    107: [function(e, t, n) {
        var o = 0,
            r = Math.random();
        t.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++o + r).toString(36))
        }
    }, {}],
    108: [function(e, t, n) {
        var o = e("./_global").navigator;
        t.exports = o && o.userAgent || ""
    }, {
        "./_global": 44
    }],
    109: [function(e, t, n) {
        var o = e("./_global"),
            r = e("./_core"),
            i = e("./_library"),
            s = e("./_wks-ext"),
            a = e("./_object-dp").f;
        t.exports = function(e) {
            var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == e.charAt(0) || e in t || a(t, e, {
                value: s.f(e)
            })
        }
    }, {
        "./_core": 30,
        "./_global": 44,
        "./_library": 62,
        "./_object-dp": 70,
        "./_wks-ext": 110
    }],
    110: [function(e, t, n) {
        n.f = e("./_wks")
    }, {
        "./_wks": 111
    }],
    111: [function(e, t, n) {
        var o = e("./_shared")("wks"),
            r = e("./_uid"),
            i = e("./_global").Symbol,
            s = "function" == typeof i;
        (t.exports = function(e) {
            return o[e] || (o[e] = s && i[e] || (s ? i : r)("Symbol." + e))
        }).store = o
    }, {
        "./_global": 44,
        "./_shared": 92,
        "./_uid": 107
    }],
    112: [function(e, t, n) {
        var o = e("./_classof"),
            r = e("./_wks")("iterator"),
            i = e("./_iterators");
        t.exports = e("./_core").getIteratorMethod = function(e) {
            if (null != e) return e[r] || e["@@iterator"] || i[o(e)]
        }
    }, {
        "./_classof": 28,
        "./_core": 30,
        "./_iterators": 61,
        "./_wks": 111
    }],
    113: [function(e, t, n) {
        "use strict";
        var o = e("./_add-to-unscopables"),
            r = e("./_iter-step"),
            i = e("./_iterators"),
            s = e("./_to-iobject");
        t.exports = e("./_iter-define")(Array, "Array", function(e, t) {
            this._t = s(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, {
        "./_add-to-unscopables": 18,
        "./_iter-define": 58,
        "./_iter-step": 60,
        "./_iterators": 61,
        "./_to-iobject": 100
    }],
    114: [function(e, t, n) {
        var o = e("./_export");
        o(o.S, "Math", {
            clz32: function(e) {
                return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
            }
        })
    }, {
        "./_export": 37
    }],
    115: [function(e, t, n) {
        var o = e("./_export");
        o(o.S, "Math", {
            fround: e("./_math-fround")
        })
    }, {
        "./_export": 37,
        "./_math-fround": 63
    }],
    116: [function(e, t, n) {
        var o = e("./_export"),
            r = Math.imul;
        o(o.S + o.F * e("./_fails")(function() {
            return -5 != r(4294967295, 5) || 2 != r.length
        }), "Math", {
            imul: function(e, t) {
                var n = 65535,
                    o = +e,
                    r = +t,
                    i = n & o,
                    s = n & r;
                return 0 | i * s + ((n & o >>> 16) * s + i * (n & r >>> 16) << 16 >>> 0)
            }
        })
    }, {
        "./_export": 37,
        "./_fails": 39
    }],
    117: [function(e, t, n) {
        var o = e("./_export");
        o(o.S, "Math", {
            trunc: function(e) {
                return (0 < e ? Math.floor : Math.ceil)(e)
            }
        })
    }, {
        "./_export": 37
    }],
    118: [function(e, t, n) {
        var o = e("./_export");
        o(o.S + o.F, "Object", {
            assign: e("./_object-assign")
        })
    }, {
        "./_export": 37,
        "./_object-assign": 68
    }],
    119: [function(e, t, n) {
        var o = e("./_to-object"),
            r = e("./_object-keys");
        e("./_object-sap")("keys", function() {
            return function(e) {
                return r(o(e))
            }
        })
    }, {
        "./_object-keys": 78,
        "./_object-sap": 80,
        "./_to-object": 102
    }],
    120: [function(e, t, n) {
        var o = e("./_export");
        o(o.S, "Object", {
            setPrototypeOf: e("./_set-proto").set
        })
    }, {
        "./_export": 37,
        "./_set-proto": 88
    }],
    121: [function(e, t, n) {
        "use strict";
        var o = e("./_classof"),
            r = {};
        r[e("./_wks")("toStringTag")] = "z", r + "" != "[object z]" && e("./_redefine")(Object.prototype, "toString", function() {
            return "[object " + o(this) + "]"
        }, !0)
    }, {
        "./_classof": 28,
        "./_redefine": 85,
        "./_wks": 111
    }],
    122: [function(n, e, t) {
        "use strict";
        var o, r, i, s, a = n("./_library"),
            c = n("./_global"),
            u = n("./_ctx"),
            l = n("./_classof"),
            f = n("./_export"),
            d = n("./_is-object"),
            p = n("./_a-function"),
            h = n("./_an-instance"),
            _ = n("./_for-of"),
            b = n("./_species-constructor"),
            g = n("./_task").set,
            v = n("./_microtask")(),
            m = n("./_new-promise-capability"),
            y = n("./_perform"),
            x = n("./_user-agent"),
            j = n("./_promise-resolve"),
            w = "Promise",
            k = c.TypeError,
            S = c.process,
            E = S && S.versions,
            P = E && E.v8 || "",
            O = c[w],
            A = "process" == l(S),
            M = function() {},
            T = r = m.f,
            D = !! function() {
                try {
                    var e = O.resolve(1),
                        t = (e.constructor = {})[n("./_wks")("species")] = function(e) {
                            e(M, M)
                        };
                    return (A || "function" == typeof PromiseRejectionEvent) && e.then(M) instanceof t && 0 !== P.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (e) {}
            }(),
            L = function(e) {
                var t;
                return !(!d(e) || "function" != typeof(t = e.then)) && t
            },
            C = function(l, n) {
                if (!l._n) {
                    l._n = !0;
                    var o = l._c;
                    v(function() {
                        for (var c = l._v, u = 1 == l._s, e = 0, t = function(e) {
                                var t, n, o, r = u ? e.ok : e.fail,
                                    i = e.resolve,
                                    s = e.reject,
                                    a = e.domain;
                                try {
                                    r ? (u || (2 == l._h && R(l), l._h = 1), !0 === r ? t = c : (a && a.enter(), t = r(c), a && (a.exit(), o = !0)), t === e.promise ? s(k("Promise-chain cycle")) : (n = L(t)) ? n.call(t, i, s) : i(t)) : s(c)
                                } catch (e) {
                                    a && !o && a.exit(), s(e)
                                }
                            }; o.length > e;) t(o[e++]);
                        l._c = [], l._n = !1, n && !l._h && I(l)
                    })
                }
            },
            I = function(i) {
                g.call(c, function() {
                    var e, t, n, o = i._v,
                        r = F(i);
                    if (r && (e = y(function() {
                            A ? S.emit("unhandledRejection", o, i) : (t = c.onunhandledrejection) ? t({
                                promise: i,
                                reason: o
                            }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", o)
                        }), i._h = A || F(i) ? 2 : 1), i._a = void 0, r && e.e) throw e.v
                })
            },
            F = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            },
            R = function(t) {
                g.call(c, function() {
                    var e;
                    A ? S.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            B = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), C(t, !0))
            },
            q = function(e) {
                var n, o = this;
                if (!o._d) {
                    o._d = !0, o = o._w || o;
                    try {
                        if (o === e) throw k("Promise can't be resolved itself");
                        (n = L(e)) ? v(function() {
                            var t = {
                                _w: o,
                                _d: !1
                            };
                            try {
                                n.call(e, u(q, t, 1), u(B, t, 1))
                            } catch (e) {
                                B.call(t, e)
                            }
                        }): (o._v = e, o._s = 1, C(o, !1))
                    } catch (e) {
                        B.call({
                            _w: o,
                            _d: !1
                        }, e)
                    }
                }
            };
        D || (O = function(e) {
            h(this, O, w, "_h"), p(e), o.call(this);
            try {
                e(u(q, this, 1), u(B, this, 1))
            } catch (e) {
                B.call(this, e)
            }
        }, (o = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n("./_redefine-all")(O.prototype, {
            then: function(e, t) {
                var n = T(b(this, O));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = A ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), i = function() {
            var e = new o;
            this.promise = e, this.resolve = u(q, e, 1), this.reject = u(B, e, 1)
        }, m.f = T = function(e) {
            return e === O || e === s ? new i(e) : r(e)
        }), f(f.G + f.W + f.F * !D, {
            Promise: O
        }), n("./_set-to-string-tag")(O, w), n("./_set-species")(w), s = n("./_core")[w], f(f.S + f.F * !D, w, {
            reject: function(e) {
                var t = T(this);
                return (0, t.reject)(e), t.promise
            }
        }), f(f.S + f.F * (a || !D), w, {
            resolve: function(e) {
                return j(a && this === s ? O : this, e)
            }
        }), f(f.S + f.F * !(D && n("./_iter-detect")(function(e) {
            O.all(e).catch(M)
        })), w, {
            all: function(e) {
                var s = this,
                    t = T(s),
                    a = t.resolve,
                    c = t.reject,
                    n = y(function() {
                        var o = [],
                            r = 0,
                            i = 1;
                        _(e, !1, function(e) {
                            var t = r++,
                                n = !1;
                            o.push(void 0), i++, s.resolve(e).then(function(e) {
                                n || (n = !0, o[t] = e, --i || a(o))
                            }, c)
                        }), --i || a(o)
                    });
                return n.e && c(n.v), t.promise
            },
            race: function(e) {
                var t = this,
                    n = T(t),
                    o = n.reject,
                    r = y(function() {
                        _(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, o)
                        })
                    });
                return r.e && o(r.v), n.promise
            }
        })
    }, {
        "./_a-function": 17,
        "./_an-instance": 20,
        "./_classof": 28,
        "./_core": 30,
        "./_ctx": 31,
        "./_export": 37,
        "./_for-of": 42,
        "./_global": 44,
        "./_is-object": 54,
        "./_iter-detect": 59,
        "./_library": 62,
        "./_microtask": 66,
        "./_new-promise-capability": 67,
        "./_perform": 81,
        "./_promise-resolve": 82,
        "./_redefine-all": 84,
        "./_set-species": 89,
        "./_set-to-string-tag": 90,
        "./_species-constructor": 93,
        "./_task": 96,
        "./_user-agent": 108,
        "./_wks": 111
    }],
    123: [function(e, t, n) {
        var o = e("./_global"),
            i = e("./_inherit-if-required"),
            r = e("./_object-dp").f,
            s = e("./_object-gopn").f,
            a = e("./_is-regexp"),
            c = e("./_flags"),
            u = o.RegExp,
            l = u,
            f = u.prototype,
            d = /a/g,
            p = /a/g,
            h = new u(d) !== d;
        if (e("./_descriptors") && (!h || e("./_fails")(function() {
                return p[e("./_wks")("match")] = !1, u(d) != d || u(p) == p || "/a/i" != u(d, "i")
            }))) {
            u = function(e, t) {
                var n = this instanceof u,
                    o = a(e),
                    r = void 0 === t;
                return !n && o && e.constructor === u && r ? e : i(h ? new l(o && !r ? e.source : e, t) : l((o = e instanceof u) ? e.source : e, o && r ? c.call(e) : t), n ? this : f, u)
            };
            for (var _ = function(t) {
                    t in u || r(u, t, {
                        configurable: !0,
                        get: function() {
                            return l[t]
                        },
                        set: function(e) {
                            l[t] = e
                        }
                    })
                }, b = s(l), g = 0; b.length > g;) _(b[g++]);
            (f.constructor = u).prototype = f, e("./_redefine")(o, "RegExp", u)
        }
        e("./_set-species")("RegExp")
    }, {
        "./_descriptors": 33,
        "./_fails": 39,
        "./_flags": 41,
        "./_global": 44,
        "./_inherit-if-required": 49,
        "./_is-regexp": 55,
        "./_object-dp": 70,
        "./_object-gopn": 74,
        "./_redefine": 85,
        "./_set-species": 89,
        "./_wks": 111
    }],
    124: [function(e, t, n) {
        "use strict";
        var o = e("./_regexp-exec");
        e("./_export")({
            target: "RegExp",
            proto: !0,
            forced: o !== /./.exec
        }, {
            exec: o
        })
    }, {
        "./_export": 37,
        "./_regexp-exec": 87
    }],
    125: [function(e, t, n) {
        e("./_descriptors") && "g" != /./g.flags && e("./_object-dp").f(RegExp.prototype, "flags", {
            configurable: !0,
            get: e("./_flags")
        })
    }, {
        "./_descriptors": 33,
        "./_flags": 41,
        "./_object-dp": 70
    }],
    126: [function(e, t, n) {
        "use strict";
        var k = e("./_an-object"),
            o = e("./_to-object"),
            S = e("./_to-length"),
            E = e("./_to-integer"),
            P = e("./_advance-string-index"),
            O = e("./_regexp-exec-abstract"),
            A = Math.max,
            M = Math.min,
            d = Math.floor,
            p = /\$([$&`']|\d\d?|<[^>]*>)/g,
            h = /\$([$&`']|\d\d?)/g;
        e("./_fix-re-wks")("replace", 2, function(r, i, x, j) {
            return [function(e, t) {
                var n = r(this),
                    o = null == e ? void 0 : e[i];
                return void 0 !== o ? o.call(e, n, t) : x.call(String(n), e, t)
            }, function(e, t) {
                var n = j(x, e, this, t);
                if (n.done) return n.value;
                var o = k(e),
                    r = String(this),
                    i = "function" == typeof t;
                i || (t = String(t));
                var s = o.global;
                if (s) {
                    var a = o.unicode;
                    o.lastIndex = 0
                }
                for (var c = [];;) {
                    var u = O(o, r);
                    if (null === u) break;
                    if (c.push(u), !s) break;
                    "" === String(u[0]) && (o.lastIndex = P(r, S(o.lastIndex), a))
                }
                for (var l, f = "", d = 0, p = 0; p < c.length; p++) {
                    u = c[p];
                    for (var h = String(u[0]), _ = A(M(E(u.index), r.length), 0), b = [], g = 1; g < u.length; g++) b.push(void 0 === (l = u[g]) ? l : String(l));
                    var v = u.groups;
                    if (i) {
                        var m = [h].concat(b, _, r);
                        void 0 !== v && m.push(v);
                        var y = String(t.apply(void 0, m))
                    } else y = w(h, r, _, b, v, t);
                    d <= _ && (f += r.slice(d, _) + y, d = _ + h.length)
                }
                return f + r.slice(d)
            }];

            function w(i, s, a, c, u, e) {
                var l = a + i.length,
                    f = c.length,
                    t = h;
                return void 0 !== u && (u = o(u), t = p), x.call(e, t, function(e, t) {
                    var n;
                    switch (t.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return i;
                        case "`":
                            return s.slice(0, a);
                        case "'":
                            return s.slice(l);
                        case "<":
                            n = u[t.slice(1, -1)];
                            break;
                        default:
                            var o = +t;
                            if (0 === o) return e;
                            if (f < o) {
                                var r = d(o / 10);
                                return 0 === r ? e : r <= f ? void 0 === c[r - 1] ? t.charAt(1) : c[r - 1] + t.charAt(1) : e
                            }
                            n = c[o - 1]
                    }
                    return void 0 === n ? "" : n
                })
            }
        })
    }, {
        "./_advance-string-index": 19,
        "./_an-object": 21,
        "./_fix-re-wks": 40,
        "./_regexp-exec-abstract": 86,
        "./_to-integer": 99,
        "./_to-length": 101,
        "./_to-object": 102
    }],
    127: [function(e, t, n) {
        "use strict";
        var f = e("./_is-regexp"),
            m = e("./_an-object"),
            y = e("./_species-constructor"),
            x = e("./_advance-string-index"),
            j = e("./_to-length"),
            w = e("./_regexp-exec-abstract"),
            d = e("./_regexp-exec"),
            o = e("./_fails"),
            k = Math.min,
            p = [].push,
            s = "split",
            h = "length",
            _ = "lastIndex",
            S = 4294967295,
            E = !o(function() {
                RegExp(S, "y")
            });
        e("./_fix-re-wks")("split", 2, function(r, i, b, g) {
            var v;
            return v = "c" == "abbc" [s](/(b)*/)[1] || 4 != "test" [s](/(?:)/, -1)[h] || 2 != "ab" [s](/(?:ab)*/)[h] || 4 != "." [s](/(.?)(.?)/)[h] || 1 < "." [s](/()()/)[h] || "" [s](/.?/)[h] ? function(e, t) {
                var n = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!f(e)) return b.call(n, e, t);
                for (var o, r, i, s = [], a = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), c = 0, u = void 0 === t ? S : t >>> 0, l = new RegExp(e.source, a + "g");
                    (o = d.call(l, n)) && !(c < (r = l[_]) && (s.push(n.slice(c, o.index)), 1 < o[h] && o.index < n[h] && p.apply(s, o.slice(1)), i = o[0][h], c = r, s[h] >= u));) l[_] === o.index && l[_]++;
                return c === n[h] ? !i && l.test("") || s.push("") : s.push(n.slice(c)), s[h] > u ? s.slice(0, u) : s
            } : "0" [s](void 0, 0)[h] ? function(e, t) {
                return void 0 === e && 0 === t ? [] : b.call(this, e, t)
            } : b, [function(e, t) {
                var n = r(this),
                    o = null == e ? void 0 : e[i];
                return void 0 !== o ? o.call(e, n, t) : v.call(String(n), e, t)
            }, function(e, t) {
                var n = g(v, e, this, t, v !== b);
                if (n.done) return n.value;
                var o = m(e),
                    r = String(this),
                    i = y(o, RegExp),
                    s = o.unicode,
                    a = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (E ? "y" : "g"),
                    c = new i(E ? o : "^(?:" + o.source + ")", a),
                    u = void 0 === t ? S : t >>> 0;
                if (0 === u) return [];
                if (0 === r.length) return null === w(c, r) ? [r] : [];
                for (var l = 0, f = 0, d = []; f < r.length;) {
                    c.lastIndex = E ? f : 0;
                    var p, h = w(c, E ? r : r.slice(f));
                    if (null === h || (p = k(j(c.lastIndex + (E ? 0 : f)), r.length)) === l) f = x(r, f, s);
                    else {
                        if (d.push(r.slice(l, f)), d.length === u) return d;
                        for (var _ = 1; _ <= h.length - 1; _++)
                            if (d.push(h[_]), d.length === u) return d;
                        f = l = p
                    }
                }
                return d.push(r.slice(l)), d
            }]
        })
    }, {
        "./_advance-string-index": 19,
        "./_an-object": 21,
        "./_fails": 39,
        "./_fix-re-wks": 40,
        "./_is-regexp": 55,
        "./_regexp-exec": 87,
        "./_regexp-exec-abstract": 86,
        "./_species-constructor": 93,
        "./_to-length": 101
    }],
    128: [function(t, e, n) {
        "use strict";
        t("./es6.regexp.flags");
        var o = t("./_an-object"),
            r = t("./_flags"),
            i = t("./_descriptors"),
            s = "toString",
            a = /./ [s],
            c = function(e) {
                t("./_redefine")(RegExp.prototype, s, e, !0)
            };
        t("./_fails")(function() {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }) ? c(function() {
            var e = o(this);
            return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? r.call(e) : void 0)
        }) : a.name != s && c(function() {
            return a.call(this)
        })
    }, {
        "./_an-object": 21,
        "./_descriptors": 33,
        "./_fails": 39,
        "./_flags": 41,
        "./_redefine": 85,
        "./es6.regexp.flags": 125
    }],
    129: [function(e, t, n) {
        "use strict";
        var o = e("./_export"),
            s = e("./_to-length"),
            a = e("./_string-context"),
            c = "endsWith",
            u = "" [c];
        o(o.P + o.F * e("./_fails-is-regexp")(c), "String", {
            endsWith: function(e) {
                var t = a(this, e, c),
                    n = 1 < arguments.length ? arguments[1] : void 0,
                    o = s(t.length),
                    r = void 0 === n ? o : Math.min(s(n), o),
                    i = String(e);
                return u ? u.call(t, i, r) : t.slice(r - i.length, r) === i
            }
        })
    }, {
        "./_export": 37,
        "./_fails-is-regexp": 38,
        "./_string-context": 95,
        "./_to-length": 101
    }],
    130: [function(e, t, n) {
        "use strict";
        var o = e("./_string-at")(!0);
        e("./_iter-define")(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = o(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, {
        "./_iter-define": 58,
        "./_string-at": 94
    }],
    131: [function(e, t, n) {
        "use strict";
        var o = e("./_global"),
            s = e("./_has"),
            r = e("./_descriptors"),
            i = e("./_export"),
            a = e("./_redefine"),
            c = e("./_meta").KEY,
            u = e("./_fails"),
            l = e("./_shared"),
            f = e("./_set-to-string-tag"),
            d = e("./_uid"),
            p = e("./_wks"),
            h = e("./_wks-ext"),
            _ = e("./_wks-define"),
            b = e("./_enum-keys"),
            g = e("./_is-array"),
            v = e("./_an-object"),
            m = e("./_is-object"),
            y = e("./_to-object"),
            x = e("./_to-iobject"),
            j = e("./_to-primitive"),
            w = e("./_property-desc"),
            k = e("./_object-create"),
            S = e("./_object-gopn-ext"),
            E = e("./_object-gopd"),
            P = e("./_object-gops"),
            O = e("./_object-dp"),
            A = e("./_object-keys"),
            M = E.f,
            T = O.f,
            D = S.f,
            L = o.Symbol,
            C = o.JSON,
            I = C && C.stringify,
            F = "prototype",
            R = p("_hidden"),
            B = p("toPrimitive"),
            q = {}.propertyIsEnumerable,
            z = l("symbol-registry"),
            U = l("symbols"),
            N = l("op-symbols"),
            W = Object[F],
            G = "function" == typeof L && !!P.f,
            H = o.QObject,
            V = !H || !H[F] || !H[F].findChild,
            K = r && u(function() {
                return 7 != k(T({}, "a", {
                    get: function() {
                        return T(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var o = M(W, t);
                o && delete W[t], T(e, t, n), o && e !== W && T(W, t, o)
            } : T,
            Y = function(e) {
                var t = U[e] = k(L[F]);
                return t._k = e, t
            },
            X = G && "symbol" == typeof L.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof L
            },
            Q = function(e, t, n) {
                return e === W && Q(N, t, n), v(e), t = j(t, !0), v(n), s(U, t) ? (n.enumerable ? (s(e, R) && e[R][t] && (e[R][t] = !1), n = k(n, {
                    enumerable: w(0, !1)
                })) : (s(e, R) || T(e, R, w(1, {})), e[R][t] = !0), K(e, t, n)) : T(e, t, n)
            },
            J = function(e, t) {
                v(e);
                for (var n, o = b(t = x(t)), r = 0, i = o.length; r < i;) Q(e, n = o[r++], t[n]);
                return e
            },
            Z = function(e) {
                var t = q.call(this, e = j(e, !0));
                return !(this === W && s(U, e) && !s(N, e)) && (!(t || !s(this, e) || !s(U, e) || s(this, R) && this[R][e]) || t)
            },
            $ = function(e, t) {
                if (e = x(e), t = j(t, !0), e !== W || !s(U, t) || s(N, t)) {
                    var n = M(e, t);
                    return !n || !s(U, t) || s(e, R) && e[R][t] || (n.enumerable = !0), n
                }
            },
            ee = function(e) {
                for (var t, n = D(x(e)), o = [], r = 0; n.length > r;) s(U, t = n[r++]) || t == R || t == c || o.push(t);
                return o
            },
            te = function(e) {
                for (var t, n = e === W, o = D(n ? N : x(e)), r = [], i = 0; o.length > i;) !s(U, t = o[i++]) || n && !s(W, t) || r.push(U[t]);
                return r
            };
        G || (a((L = function() {
            if (this instanceof L) throw TypeError("Symbol is not a constructor!");
            var t = d(0 < arguments.length ? arguments[0] : void 0),
                n = function(e) {
                    this === W && n.call(N, e), s(this, R) && s(this[R], t) && (this[R][t] = !1), K(this, t, w(1, e))
                };
            return r && V && K(W, t, {
                configurable: !0,
                set: n
            }), Y(t)
        })[F], "toString", function() {
            return this._k
        }), E.f = $, O.f = Q, e("./_object-gopn").f = S.f = ee, e("./_object-pie").f = Z, P.f = te, r && !e("./_library") && a(W, "propertyIsEnumerable", Z, !0), h.f = function(e) {
            return Y(p(e))
        }), i(i.G + i.W + i.F * !G, {
            Symbol: L
        });
        for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), oe = 0; ne.length > oe;) p(ne[oe++]);
        for (var re = A(p.store), ie = 0; re.length > ie;) _(re[ie++]);
        i(i.S + i.F * !G, "Symbol", {
            for: function(e) {
                return s(z, e += "") ? z[e] : z[e] = L(e)
            },
            keyFor: function(e) {
                if (!X(e)) throw TypeError(e + " is not a symbol!");
                for (var t in z)
                    if (z[t] === e) return t
            },
            useSetter: function() {
                V = !0
            },
            useSimple: function() {
                V = !1
            }
        }), i(i.S + i.F * !G, "Object", {
            create: function(e, t) {
                return void 0 === t ? k(e) : J(k(e), t)
            },
            defineProperty: Q,
            defineProperties: J,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: te
        });
        var se = u(function() {
            P.f(1)
        });
        i(i.S + i.F * se, "Object", {
            getOwnPropertySymbols: function(e) {
                return P.f(y(e))
            }
        }), C && i(i.S + i.F * (!G || u(function() {
            var e = L();
            return "[null]" != I([e]) || "{}" != I({
                a: e
            }) || "{}" != I(Object(e))
        })), "JSON", {
            stringify: function(e) {
                for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
                if (n = t = o[1], (m(t) || void 0 !== e) && !X(e)) return g(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !X(t)) return t
                }), o[1] = t, I.apply(C, o)
            }
        }), L[F][B] || e("./_hide")(L[F], B, L[F].valueOf), f(L, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
    }, {
        "./_an-object": 21,
        "./_descriptors": 33,
        "./_enum-keys": 36,
        "./_export": 37,
        "./_fails": 39,
        "./_global": 44,
        "./_has": 45,
        "./_hide": 46,
        "./_is-array": 53,
        "./_is-object": 54,
        "./_library": 62,
        "./_meta": 65,
        "./_object-create": 69,
        "./_object-dp": 70,
        "./_object-gopd": 72,
        "./_object-gopn": 74,
        "./_object-gopn-ext": 73,
        "./_object-gops": 75,
        "./_object-keys": 78,
        "./_object-pie": 79,
        "./_property-desc": 83,
        "./_redefine": 85,
        "./_set-to-string-tag": 90,
        "./_shared": 92,
        "./_to-iobject": 100,
        "./_to-object": 102,
        "./_to-primitive": 103,
        "./_uid": 107,
        "./_wks": 111,
        "./_wks-define": 109,
        "./_wks-ext": 110
    }],
    132: [function(e, t, n) {
        e("./_typed-array")("Uint8", 1, function(o) {
            return function(e, t, n) {
                return o(this, e, t, n)
            }
        })
    }, {
        "./_typed-array": 104
    }],
    133: [function(e, t, n) {
        e("./_wks-define")("asyncIterator")
    }, {
        "./_wks-define": 109
    }],
    134: [function(e, t, n) {
        for (var o = e("./es6.array.iterator"), r = e("./_object-keys"), i = e("./_redefine"), s = e("./_global"), a = e("./_hide"), c = e("./_iterators"), u = e("./_wks"), l = u("iterator"), f = u("toStringTag"), d = c.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), _ = 0; _ < h.length; _++) {
            var b, g = h[_],
                v = p[g],
                m = s[g],
                y = m && m.prototype;
            if (y && (y[l] || a(y, l, d), y[f] || a(y, f, g), c[g] = d, v))
                for (b in o) y[b] || i(y, b, o[b], !0)
        }
    }, {
        "./_global": 44,
        "./_hide": 46,
        "./_iterators": 61,
        "./_object-keys": 78,
        "./_redefine": 85,
        "./_wks": 111,
        "./es6.array.iterator": 113
    }]
}, {}, [16]);
//# sourceMappingURL=js-dos.js.map
