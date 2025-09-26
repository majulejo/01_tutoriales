window.onload = function () {
    window.addEventListener("scroll", (e) => {
        console.log(window.scrollY);
    });

    lax.init();
    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });

    lax.addElements(".logo", {
        scrollY: {
            scale: [
                [0, 80],
                [1, 3],
            ],

            opacity: [
                [0, 70],
                [1, 0],
            ],

            translateY: [
                [0, 80],
                [1, 200],
            ],
        },
    });

    lax.addElements(".ultron", {
        scrollY: {
            opacity: [
                [0, 80],
                [0, 1],
            ],

            translateY: [
                [0, 400],
                [0, 80],
            ],
        },
    });

    lax.addElements(".loki", {
        scrollY: {
            opacity: [
                [40, 120],
                [0, 1],
            ],

            translateY: [
                [0, 400],
                [1, -80],
            ],
        },
    });

    lax.addElements(".thanos", {
        scrollY: {
            opacity: [
                [80, 160],
                [0, 1],
            ],

            translateY: [
                [0, 400],
                [1, 80],
            ],
        },
    });

    lax.addElements(".scroll-tip", {
        scrollY: {
            opacity: [
                [0, 600],
                [1, 0],
            ],

            translateY: [
                [0, 800],
                [-200, 0],
            ],

            "letter-spacing": [
                [0, 600],
                [0, 150],
                {
                    cssUnit: "px",
                },
            ],
        },
    });

    lax.addElements(".ironman-title", {
        scrollY: {
            filter: [
                [600, 700, 800, 900, 1000, 1100, 1200, 1300],
                [0, 50, 0, 50, 0, 50, 0, 50],
                {
                    cssFn: function (value) {
                        return `drop-shadow(0 0 ${value * 4}px yellow)`;
                    },
                },
            ],
            translateY: [
                [1200, 1700],
                [200, "elCenterY-150"],
            ],
        },
    });

    lax.addElements(".ironman-01", {
        scrollY: {
            translateY: [
                [1200, 2000],
                [600, -1500],
            ],
        },
    });

    lax.addElements(".ironman-02", {
        scrollY: {
            scale: [
                [2000, 2500],
                [0, 2],
            ],

            translateX: [
                [2000, 2200, 3000],
                [0, 1000, 0],
            ],

            translateY: [
                [2000, 2200, 3000],
                [-200, 0, -400],
            ],
        },
    });

    lax.addElements(".shield", {
        scrollY: {
            translateX: [
                [3200, 3400, 3600, 3800],
                [-800, "screenWidth -200", 0, "screenWidth -+ 200"],
            ],

            translateY: [
                [3200, 3400, 3600, 3800],
                [800, 1200, 1600, 1600],
            ],
        },
    });

    lax.addElements(".captain-title", {
        scrollY: {
            filter: [
                [3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700],
                [0, 50, 0, 50, 0, 50, 0, 50],
                {
                    cssFn: function (value) {
                        return `drop-shadow(0 0 ${value}px blue)`;
                    },
                },
            ],
            translateY: [
                [3000, 3500],
                [400, 900],
            ],
        },
    });

    lax.addElements(".capi", {
        scrollY: {
            translateX: [
                [3900, 4400],
                [400, -1200],
            ],
            translateY: [
                [3900, 4400],
                [100, 100],
            ],
            scale: [
                [3900, 4400],
                [1, 0.5],
            ],
            opacity: [
                [3900, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".shield02", {
        scrollY: {
            translateX: [
                [3900, 4400],
                [0, "screenWidth + 900"],
            ],
            translateY: [
                [3900, 4400],
                [100, 100],
            ],
            scale: [
                [3900, 4400],
                [1, 0.1],
            ],
            opacity: [
                [3900, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".rayo", {
        scrollY: {
            scaleX: [
                [4500, 500],
                [0, 1],
            ],
            translateY: [
                [4700, 5000, 5150],
                [-200, -200, 0],
            ],

            opacity: [
                [4500, 4800, 4850],
                [1, 1, 0],
            ],
        },
    });

    lax.addElements(".thor-title-01 img", {
        scrollY: {
            scale: [
                [4720, 5000],
                [3, 1],
            ],
            opacity: [
                [4700, 5000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-02 img", {
        scrollY: {
            scale: [
                [4740, 5000],
                [3, 1],
            ],
            opacity: [
                [4700, 5000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-03 img", {
        scrollY: {
            scale: [
                [4760, 5000],
                [3, 1],
            ],
            opacity: [
                [4700, 5000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-04 img", {
        scrollY: {
            scale: [
                [4780, 5000],
                [3, 1],
            ],
            opacity: [
                [4700, 5000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor", {
        scrollY: {
            translateX: [
                [4600, 4800],
                [-800, "screenWidth +500"],
            ],
            translateY: [
                [4600, 4800],
                [0, -3000],
            ],
        },
    });

    lax.addElements(".thor02", {
        scrollY: {
            opacity: [
                [4600, 5000],
                [0, 1],
            ],
            translateY: [
                [4600, 5000],
                [-5000, -300],
            ],
            filter: [
                [4600, 5000],
                [100, 0],
                {
                    cssFn: (value) => {
                        return `blur(${value}px)`;
                    }
                }
            ],
        },
    });


}