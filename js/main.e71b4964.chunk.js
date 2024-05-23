(this["webpackJsonpnft-wallet"] = this["webpackJsonpnft-wallet"] || []).push([[0], {
    1: function (A, e) {
        A.exports = React
    }, 135: function (A, e) {
    }, 143: function (A, e) {
    }, 147: function (A, e, t) {
    }, 151: function (A, e, t) {
    }, 152: function (A, e, t) {
    }, 153: function (A, e, t) {
    }, 154: function (A, e, t) {
    }, 155: function (A, e, t) {
        "use strict";
        t.r(e);
        var a, n = t(97), r = t.n(n), o = t(1), c = t.n(o), s = t(36), i = t.n(s), l = t(75), d = t(6), u = t(17),
            g = t(22), h = t(112), b = t(161), C = t(80), p = t(115), j = t(98), B = t(99), Q = "i18nextLng",
            w = function () {
                return localStorage.getItem(Q)
            };
        C.a.use(p.b).init({
            resources: {zh: j, en: B},
            lng: null !== (a = w()) && void 0 !== a ? a : "en",
            fallbackLng: "en",
            interpolation: {escapeValue: !1},
            cache: localStorage
        });
        var E, m, I = C.a, v = t(3), Y = t(25), f = t(48), x = t(64), O = t(65), D = t(56), M = t(57), G = t(113),
            N = t(14), P = ("/", parseInt("1"), ["https://goerli.infura.io/v3/"]),
            W = (5..toString(16), ["https://data-seed-prebsc-1-s1.binance.org:8545"]),
            k = (97..toString(16), ["https://endpoints.omniatech.io/v1/op/mainnet/public"]),
            y = (10..toString(16), new D.a({supportedChainIds: [10, 5]})),
            V = new M.b({rpc: (E = {}, Object(N.a)(E, 10, k[0]), Object(N.a)(E, 5, P[0]), E), qrcode: !0}),
            z = new O.BscConnector({supportedChainIds: [10, 5]}), T = "injected", R = "walletconnect", F = "bsc",
            H = (m = {}, Object(N.a)(m, T, y), Object(N.a)(m, R, V), Object(N.a)(m, F, z), m), L = "XXX_KEY",
            S = t(162);

        function U() {
            S.a.error({message: arguments.length <= 0 ? void 0 : arguments[0]})
        }

        var X = Object(f.a)((function () {
            var A = Object(o.useState)(!1), e = Object(u.a)(A, 2), t = e[0], a = e[1], n = Object(x.c)(), r = n.account,
                c = n.activate, s = n.deactivate, i = n.library, l = Object(o.useCallback)(function () {
                    var A = Object(Y.a)(Object(v.a)().mark((function A(e) {
                        var t, a, n;
                        return Object(v.a)().wrap((function (A) {
                            for (; ;) switch (A.prev = A.next) {
                                case 0:
                                    if (!(t = window.ethereum)) {
                                        A.next = 25;
                                        break
                                    }
                                    return A.prev = 2, A.next = 5, t.request({
                                        method: "wallet_switchEthereumChain",
                                        params: [{chainId: e.chainId}]
                                    });
                                case 5:
                                case 14:
                                    return A.abrupt("return");
                                case 8:
                                    if (A.prev = 8, A.t0 = A.catch(2), 4902 !== A.t0.code && 4902 !== (null === (a = A.t0.data) || void 0 === a || null === (n = a.originalError) || void 0 === n ? void 0 : n.code)) {
                                        A.next = 22;
                                        break
                                    }
                                    return A.prev = 11, A.next = 14, t.request({
                                        method: "wallet_addEthereumChain",
                                        params: [e]
                                    });
                                case 17:
                                    throw A.prev = 17, A.t1 = A.catch(11), new Error(A.t1.message);
                                case 20:
                                    A.next = 23;
                                    break;
                                case 22:
                                    throw A.t0;
                                case 23:
                                    A.next = 26;
                                    break;
                                case 25:
                                    throw new Error("Can't setup network on metamask because window.ethereum is undefined");
                                case 26:
                                case"end":
                                    return A.stop()
                            }
                        }), A, null, [[2, 8], [11, 17]])
                    })));
                    return function (e) {
                        return A.apply(this, arguments)
                    }
                }(), []), d = Object(o.useCallback)((function (A) {
                    var e = window.ethereum;
                    e && e.request({method: "wallet_watchAsset", params: {type: "ERC20", options: A}}).then((function (A) {
                        A ? S.a.success({message: "Successfully added to wallet!"}) : U("Added canceled")
                    })).catch(console.error)
                }), []), g = Object(o.useCallback)(function () {
                    var A = Object(Y.a)(Object(v.a)().mark((function A(e, t) {
                        return Object(v.a)().wrap((function (A) {
                            for (; ;) switch (A.prev = A.next) {
                                case 0:
                                    return A.next = 2, new Promise((function (A, a) {
                                        l(t).catch((function (A) {
                                        })).finally((function () {
                                            c(e, function () {
                                                var A = Object(Y.a)(Object(v.a)().mark((function A(n) {
                                                    return Object(v.a)().wrap((function (A) {
                                                        for (; ;) switch (A.prev = A.next) {
                                                            case 0:
                                                                if (!(n instanceof x.a)) {
                                                                    A.next = 14;
                                                                    break
                                                                }
                                                                return A.prev = 1, A.next = 4, l(t);
                                                            case 4:
                                                                return A.next = 6, c(e);
                                                            case 6:
                                                                return A.abrupt("return", A.sent);
                                                            case 9:
                                                                A.prev = 9, A.t0 = A.catch(1), U(A.t0.message);
                                                            case 12:
                                                                A.next = 16;
                                                                break;
                                                            case 14:
                                                                window.localStorage.removeItem(L), n instanceof D.b || n instanceof O.NoBscProviderError ? a(new Error("No provider was found")) : n instanceof D.c || n instanceof M.a ? (e instanceof M.b && (e.walletConnectProvider = void 0), a(new Error("Please authorize to access your account"))) : a(new Error(n.message));
                                                            case 16:
                                                            case"end":
                                                                return A.stop()
                                                        }
                                                    }), A, null, [[1, 9]])
                                                })));
                                                return function (e) {
                                                    return A.apply(this, arguments)
                                                }
                                            }()).then((function (e) {
                                                A()
                                            }))
                                        }))
                                    }));
                                case 2:
                                    return A.abrupt("return", A.sent);
                                case 3:
                                case"end":
                                    return A.stop()
                            }
                        }), A)
                    })));
                    return function (e, t) {
                        return A.apply(this, arguments)
                    }
                }(), [c, l]), h = Object(o.useCallback)(function () {
                    var A = Object(Y.a)(Object(v.a)().mark((function A(e, t) {
                        var a;
                        return Object(v.a)().wrap((function (A) {
                            for (; ;) switch (A.prev = A.next) {
                                case 0:
                                    if (!(a = H[e])) {
                                        A.next = 12;
                                        break
                                    }
                                    return A.prev = 2, A.next = 5, g(a, t);
                                case 5:
                                    A.next = 10;
                                    break;
                                case 7:
                                    A.prev = 7, A.t0 = A.catch(2), U(A.t0.message);
                                case 10:
                                    A.next = 13;
                                    break;
                                case 12:
                                    U("Unable to find connector");
                                case 13:
                                case"end":
                                    return A.stop()
                            }
                        }), A, null, [[2, 7]])
                    })));
                    return function (e, t) {
                        return A.apply(this, arguments)
                    }
                }(), [g]);
            return {
                currentAccount: r, connect: h, disconnect: Object(o.useCallback)((function () {
                    if (s(), window.localStorage.getItem("walletconnect")) {
                        var A = H.walletconnect;
                        A.close(), A.walletConnectProvider = void 0
                    }
                    window.localStorage.removeItem(L)
                }), [s]), addToken: d, library: i, connectModalVisible: t, showConnectModal: a
            }
        })), Z = X;

        function K(A) {
            var e = new G.a.providers.Web3Provider(A);
            return e.pollingInterval = 12e3, e
        }

        var q = Object(f.a)((function () {
            var A = Z.useContainer(), e = A.currentAccount, t = A.library, a = Object(o.useState)("0"),
                n = Object(u.a)(a, 2), r = n[0], c = n[1], s = Object(o.useCallback)((function () {
                    return !!e && (!!t && !!t.getSigner())
                }), [e, t]), i = Object(o.useCallback)(Object(Y.a)(Object(v.a)().mark((function A() {
                    var e, a;
                    return Object(v.a)().wrap((function (A) {
                        for (; ;) switch (A.prev = A.next) {
                            case 0:
                                if (s()) {
                                    A.next = 2;
                                    break
                                }
                                return A.abrupt("return");
                            case 2:
                                return e = t.getSigner(), A.next = 5, e.getBalance();
                            case 5:
                                a = A.sent, c(a.toString());
                            case 7:
                            case"end":
                                return A.stop()
                        }
                    }), A)
                }))), [s, t]), l = Object(o.useCallback)(function () {
                    var A = Object(Y.a)(Object(v.a)().mark((function A(e) {
                        var a;
                        return Object(v.a)().wrap((function (A) {
                            for (; ;) switch (A.prev = A.next) {
                                case 0:
                                    if (t) {
                                        A.next = 2;
                                        break
                                    }
                                    return A.abrupt("return");
                                case 2:
                                    return A.next = 4, t.waitForTransaction(e);
                                case 4:
                                    return a = A.sent, A.abrupt("return", a);
                                case 6:
                                case"end":
                                    return A.stop()
                            }
                        }), A)
                    })));
                    return function (e) {
                        return A.apply(this, arguments)
                    }
                }(), [t]), d = Object(o.useCallback)(Object(Y.a)(Object(v.a)().mark((function A() {
                    return Object(v.a)().wrap((function (A) {
                        for (; ;) switch (A.prev = A.next) {
                            case 0:
                                if (t) {
                                    A.next = 2;
                                    break
                                }
                                return A.abrupt("return", 0);
                            case 2:
                                return A.next = 4, t.getBlockNumber();
                            case 4:
                                return A.abrupt("return", A.sent);
                            case 5:
                            case"end":
                                return A.stop()
                        }
                    }), A)
                }))), [t]);
            return {
                currentAccount: e,
                waitForTx: l,
                updateEthWalletBalance: i,
                ethWalletBalance: r,
                getCurrentBlockNumber: d
            }
        })), J = q;
        var _ = Object(f.a)((function () {
                return {test: "1"}
            })), $ = t(10), AA = function (A) {
                var e = A.children;
                return Object($.jsx)(x.b, {
                    getLibrary: K,
                    children: Object($.jsx)(Z.Provider, {children: Object($.jsx)(J.Provider, {children: Object($.jsx)(_.Provider, {children: e})})})
                })
            }, eA = (t(147), + "./static/media/tv-border.be6726a1.svg"), tA = "./static/media/banner.6162cd5f.png",
            aA = "./static/media/logo2.32d4e673.png", nA = function () {
                return Object($.jsxs)("div", {
                    id: "BACKGROUND_GROUP",
                    children: [Object($.jsx)("div", {
                        className: "main",
                        style: {backgroundImage: "url(".concat(tA, ")")}
                    }), Object($.jsx)("div", {
                        className: "noise-mask", style: {
                            backgroundImage: "url(".concat("data:image/png;base64,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", ")")
                        }
                    }), Object($.jsx)("div", {
                        className: "tv-border",
                        style: {backgroundImage: "url(".concat(eA, ")")}
                    }), Object($.jsxs)("div", {
                        className: "content",
                        children: [Object($.jsx)("div", {
                            className: "logo",
                            children: Object($.jsx)("img", {src: aA, alt: ""})
                        }), Object($.jsx)("div", {className: "text", children: "$PIZA"})]
                    }), Object($.jsx)("div", {
                        className: "arrow", children: Object($.jsx)("button", {
                            onClick: function () {
                                var A = document.getElementById("piza");
                                null === A || void 0 === A || A.scrollIntoView({behavior: "smooth"})
                            }, children: "\u2193"
                        })
                    })]
                })
            },
            rA = ["In 2010, the exchange of 10,000 BTC for 2 pizzas marked a historic moment in the emergence of cryptocurrencies.", "Today, it\u2019s time for $piza to take reign. with 10,000 $piza shall being valued at 2 BTC."],
            oA = function () {
                return Object($.jsx)("div", {
                    id: "piza",
                    children: Object($.jsxs)("div", {
                        className: "container pixel-bordered-custom pixel-bordered-custom--2-inset",
                        children: [Object($.jsx)("div", {
                            className: "pad image pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: Object($.jsx)("img", {src: aA, alt: ""})
                        }), Object($.jsxs)("div", {
                            className: "pad desc pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: [Object($.jsx)("div", {
                                className: "title",
                                children: "$PIZA"
                            }), Object($.jsx)("p", {children: rA[0]}), Object($.jsx)("p", {children: rA[1]})]
                        })]
                    })
                })
            }, cA = "./static/media/swap.70f42052.png",
            sA = ["Tired of the usual animals and emoji, The most famous meme story in the crypto era is destined to be the king of memes.", "I'm planning to order 2 bitcoins, and I will pay with 10,000 pizzas. My pizzas will have onions, peppers, sausages, mushrooms, tomatoes, spicy Italian sausage, and other regular toppings. No weird fish toppings or anything like that.", "If you're interested, please let me know, and we can reach an agreement."],
            iA = function () {
                return Object($.jsx)("div", {
                    id: "story",
                    children: Object($.jsxs)("div", {
                        className: "container pixel-bordered-custom pixel-bordered-custom--2-inset",
                        children: [Object($.jsxs)("div", {
                            className: "pad desc pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: [Object($.jsx)("div", {
                                className: "title",
                                children: "ABOUT"
                            }), Object($.jsx)("p", {children: sA[0]}), Object($.jsx)("div", {
                                className: "bubble bubble-bottom-left",
                                children: sA[1]
                            }), Object($.jsx)("div", {className: "bubble bubble-bottom-right", children: sA[2]})]
                        }), Object($.jsx)("div", {
                            className: "pad image pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: Object($.jsx)("img", {src: cA, alt: ""})
                        })]
                    })
                })
            },
            lA = ["Piza celebrates a landmark moment in digital currency history. Inspired by the famous 2010 transaction where Laszlo Hanyecz bought two pizzas for 10,000 BTC, the $piza token was born as a BRC-20 in March 2023. By April 30th, 2023, the entire supply had been minted fairly on a first come, first serve basis.", "With the initial launch and upcoming migration to the innovative Runes protocol, Piza is poised to grow alongside Bitcoin's evolving legacy. ", "Join Our Journey: As we advance to Runes, we're not just commemorating history—we're inviting you to be a part of Piza’s future. Embrace the provenance as we continue to be a part of innovation while celebrating the roots of Bitcoin.", "Embrace the provenance as we continue to be a part of innovation while celebrating the roots of Bitcoin."],
            dA = function () {
                return Object($.jsx)("div", {
                    id: "token", children: Object($.jsxs)("div", {
                        className: "container pixel-bordered-custom pixel-bordered-custom--2-inset",
                        children: [Object($.jsxs)("div", {
                            className: "pad image pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: [Object($.jsx)("div", {
                                children: Object($.jsx)("img", {
                                    src: "data:image/png;base64,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",
                                    alt: ""
                                })
                            }), Object($.jsx)("div", {id:"Tokenomics",children: "Tokenomics:"}),
                                Object($.jsx)("div", {id:"piza–BRC20",children: "· 94% - $piza – 🍕"}),
                                Object($.jsx)("div", {id:"Piza-Rune",children: "· 3% - Piza Rune Holders 📍"}),
                                Object($.jsx)("div", {id:"Treasury",children: "· 3% - Treasury 🏦"})
                            ]
                        }), Object($.jsxs)("div", {
                            className: "pad desc pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: [Object($.jsx)("div", {
                                className: "title",
                                children: "TOKEN"
                            }), Object($.jsx)("p", {children: lA[0]}), Object($.jsx)("p", {children: lA[1]}), Object($.jsx)("p", {children: lA[2]})]
                        })]
                    })
                })
            }, uA = "./static/media/twitter.6ecfe729.svg", gA = "./static/media/telegram.fd1b3c70.svg",
            hA = function () {
                return Object($.jsx)("div", {
                    id: "footer",
                    children: Object($.jsxs)("div", {
                        className: "container",
                        children: [Object($.jsxs)("a", {
                            href: "https://x.com/pizasolanaday",
                            target: "_blank",
                            children: [Object($.jsx)("span", {className: "pad pixel-bordered-custom pixel-bordered-custom--4-inset"}), Object($.jsx)("img", {
                                src: uA,
                                alt: ""
                            })]
                        }), Object($.jsxs)("a", {
                            href: "https://t.me/pizasolday",
                            target: "_blank",
                            children: [Object($.jsx)("span", {className: "pad pixel-bordered-custom pixel-bordered-custom--4-inset"}), Object($.jsx)("img", {
                                src: gA,
                                alt: ""
                            })]
                        })]
                    })
                })
            }, bA = [{
                title: "Go to Jup.ag",
                icon: "",
                link: "https://jup.ag/"
            }, {
                title: "Go to pump",
                icon: "",
                link: "https://pump.fun/"
            }], CA = function () {
                return Object($.jsx)("div", {
                    id: "buy",
                    children: Object($.jsxs)("div", {
                        className: "container pixel-bordered-custom pixel-bordered-custom--2-inset",
                        children: [Object($.jsx)("div", {
                            className: "title pixel-bordered-custom pixel-bordered-custom--3-inset",
                            children: "How To Buy"
                        }), Object($.jsx)("div", {
                            className: "list", children: bA.map((function (A, e) {
                                return Object($.jsxs)("a", {
                                    className: "item",
                                    href: A.link,
                                    target: "_blank",
                                    children: [Object($.jsx)("div", {className: "pad pixel-bordered-custom pixel-bordered-custom--4-inset"}), Object($.jsxs)("div", {
                                        className: "content",
                                        children: [Object($.jsx)("img", {
                                            src: A.icon,
                                            alt: ""
                                        }), Object($.jsx)("span", {children: A.title})]
                                    })]
                                }, e)
                            }))
                        })]
                    })
                })
            }, pA = function () {
                return Object($.jsxs)("div", {
                    id: "main_MF",
                    className: "main_MF",
                    children: [Object($.jsx)(nA, {}), Object($.jsx)(CA, {}), Object($.jsx)(oA, {}), Object($.jsx)(iA, {}), Object($.jsx)(dA, {}), Object($.jsx)(hA, {})]
                })
            }, jA = function (A) {
                return A.Index = "/", A
            }({}), BA = c.a.createContext({to: "", from: ""}), QA = function (A) {
                var e = A.children, t = Object(g.f)(), a = Object(o.useState)({to: t.pathname, from: t.pathname}),
                    n = Object(u.a)(a, 2), r = n[0], c = n[1];
                return Object(o.useEffect)((function () {
                    c((function (A) {
                        return {to: t.pathname, from: A.to}
                    }))
                }), [t]), Object($.jsx)(BA.Provider, {value: r, children: e})
            }, wA = [{component: pA, exact: !0, key: "Index", path: jA.Index}], EA = function () {
                return Object($.jsx)(b.a, {
                    i18n: I,
                    children: Object($.jsx)(h.a, {
                        children: Object($.jsx)(QA, {
                            children: Object($.jsx)(AA, {
                                children: Object($.jsx)(g.c, {
                                    children: wA.map((function (A) {
                                        var e;
                                        return Object(o.createElement)(g.a, Object(d.a)(Object(d.a)({}, A), {}, {
                                            key: A.key,
                                            path: "".concat(A.path).concat(null !== (e = A.params) && void 0 !== e ? e : "")
                                        }))
                                    }))
                                })
                            })
                        })
                    })
                })
            }, mA = function () {
                var A = Object(o.useMemo)((function () {
                    return new l.QueryClient
                }), []);
                return Object($.jsx)(l.QueryClientProvider, {client: A, children: Object($.jsx)(EA, {})})
            };
        t(151), t(152), t(153), t(154);
        r.a.set({
            toExpPos: 999,
            toExpNeg: -999,
            precision: 64
        }), i.a.render(Object($.jsx)(c.a.StrictMode, {children: Object($.jsx)(mA, {})}), document.getElementById("SITE_CONTAINER"))
    }, 36: function (A, e) {
        A.exports = ReactDOM
    }, 98: function (A) {
        A.exports = JSON.parse('{"trans":{}}')
    }, 99: function (A) {
        A.exports = JSON.parse('{"trans":{"header":{"connect":"Connect Wallet","network":{"goerli":"Goerli","bsctestnet":"BSC Testnet"},"networkLinks":{"goerli":"logic_bugs_goerli.html","bsctestnet":"logic_bugs.html"},"mode":"Enable Sandbags"},"home":{"desc":"Due to the expanding destruction of whale habitats by humans on a global scale, whale populations are becoming increasingly scarce. As a result, our supply of whales is rapidly diminishing. The only way to protect whales is to place them in vaults."},"tx":{"4001":"Transaction Canceled","success":"Transaction Confirmed","successDescription":"Tx hash: ","txLink":"https://goerli.etherscan.io/tx/{{hash}}","-1000":"Cannot fetch balances","unknownError":"Transaction Failed","CALL_EXCEPTION":"Error encountered during contract execution."},"index":{"mint":"Mint WETH","check":"Check Balance","deposit":"Stake","withdraw":"Unstake","approve":"Approve","steal":"Stealing Money","fetch":"Fetching Receipt","recoverying":"Preparing WETH","process":{"check":"Check Balance|Preparing WETH in pool, this action only occurs when pool is empty.","deposit":"Stake|Staking {{amount}} WETH to the pool.","approve":"Approve|Approve pool contract using your WETH.","withdraw":"Unstake|Unstaking {{amount}} WETH from the pool."},"recovery":{"prepare":"Before Test","alertTitle":"Prepare WETH","alertDescription":"Before our test, we need prepare some WETH for our hacking, click this button to put some WETH in the pool."},"max":"Max","pool":{"nameOrigin":"WETH","nameProtected":"WETH (Protected)","locked":"Total WETH Locked","userWethInPool":"Your Staked WETH","userWethInWallet":"Your WETH Balance","info":"Pool Info","poolAddress":"Pool contract address: ","efTokenAddress":"Voucher token address: ","wethTokenAddress":"Test WETH token address: "},"hacker":{"sure":"I\'m now a hacker","submit":"Start Steal Money","stealOrigin":"Now, you will stealing money from the unprotected pool above by calling a hacker contract, you will get a lot of WETH from pool.","stealProtected":"Now, you will trying to steal money from the protected pool above by calling the same hacker contract, you will find transaction failed.","s1":"Ensure the pool is not empty","s2":"Stake a little WETH into the pool","s3":"Click following button to call hacker contract method"}},"description":{"div":"What happened?","hacker":{"title":"What does <1>hacker</1> do?","d1":"There is a logic bug and programming non-compliance in the business contract, this allows hackers to construct an illegal flashloan method, through which they can trigger a flash flashloan callback in the business contract, thereby calling the AAVE withdrawal operation. Then, the hacker can steal all the funds in the protocol by performing the withdraw operation again. This vulnerability exists because the hacker exploits a hidden error in the business contract and is therefore difficult to be audited.","d2":"If you want learn more about this kind of attack, read <1>this paper</1> from our research team.","s1":"Hacker call flashLoan method to enter the <1>receiveFlashLoan</1> callback method of the business contract","s2":"Get the money from aave to EF contract by <1>receiveFlashLoan</1> method","s3":"Call <1>withdraw</1> to steal the funds","s4":"Transfer the funds from the hacker contract back to the address"},"sandbags":{"title":"What does <1>Sandbags</1> do?","d1":"Sandbags is a blockchain security system that is designed to protect the blockchain network from attacks and malicious manipulation. At critical points of business execution, Sandbags logically validates the externally obtained parameters and related calculations to ensure proper execution of transactions. If anomalies are found during the validation process, Sandbags immediately suspends the execution of the transaction and, if necessary, hands it over to the Sandbags Relay Network for a full transaction simulation test or other more detailed testing. Through these measures, Sandbags can effectively prevent the devastating consequences of malicious manipulation.","s1":"Hacker performs <1>withdraw</1> to steal funds","s2":"Sandbags Filter Contract performs initial logical verification detection of hacked transactions","s3":"Suspend the execution of the hacked transaction if anomalies are found","s4":"Notify Sandbags Relay Network for verification","s5":"Sandbags Relay Network performs a logical validation test on the transaction","s6":"Sandbags Relay Network sends the validation result back to the chain for final processing"}},"mint":{"title":"Mint Gas and Tokens","eth":"Goerli Testnet ETH","weth":"Sandbags Test WETH","ethFaucet":"Go to Faucet","mintWeth":"Mint some WETH"},"wizard":{"connect":"Connect Wallet","title":"Checking Environment","ethFaucet":"Go to Faucet","mintWeth":"Mint Sandbags Test WETH","wallet":{"title":"Connect Wallet","description":"This dApp require Ethereum wallet connection, please click following button to connect your wallet."},"eth":{"title":"Check ETH Balance","description":"This dApp is deployed on the Goerli Network, please go to the faucet get some ETH first.","wait":"Fetching ETH balance from chain, please wait...","faucet":"https://goerlifaucet.com/"},"weth":{"title":"Check WETH Balance","description":"This dApp require test WETH, please click following button to mint some tokens."}},"receipt":{"title":"Receipt","before":"Before","after":"After","afterRelay":"Relay Process","blockNumber":"Snapshot Block No.","totalWethInPool":"WETH in Pool","wethWalletBalance":"WETH in Your Wallet","wethPoolBalance":"Your WETH in Pool","transaction":"Transaction","txLink":"https://goerli.etherscan.io/tx/{{hash}}"}}}')
    }
}, [[155, 1, 2]]]);
//# sourceMappingURL=main.e71b4964.chunk.js.map
