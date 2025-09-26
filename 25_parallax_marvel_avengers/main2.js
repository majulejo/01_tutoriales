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
                [0, 300],
                [1, 0.3],
            ],
            opacity: [
                [0, 300],
                [1, 0],
            ],
            translateY: [
                [0, 300],
                [0, 200],
            ],
        },
    });

    lax.addElements(".ultron", {
        scrollY: {
            opacity: [
                [100, 400],
                [0, 1],
            ],
            translateY: [
                [100, 500],
                [100, 0],
            ],
        },
    });

    lax.addElements(".loki", {
        scrollY: {
            opacity: [
                [200, 500],
                [0, 1],
            ],
            translateY: [
                [200, 600],
                [100, -50],
            ],
        },
    });

    lax.addElements(".thanos", {
        scrollY: {
            opacity: [
                [300, 600],
                [0, 1],
            ],
            translateY: [
                [300, 700],
                [100, 50],
            ],
        },
    });

    lax.addElements(".scroll-tip", {
        scrollY: {
            opacity: [
                [400, 1000],
                [1, 0],
            ],
            translateY: [
                [400, 1200],
                [-100, 0],
            ],
            "letter-spacing": [
                [400, 1000],
                [0, 50],
                {
                    cssUnit: "px",
                },
            ],
        },
    });

    lax.addElements(".ironman-title", {
        scrollY: {
            filter: [
                [800, 900, 1000, 1100, 1200, 1300],
                [0, 30, 0, 30, 0, 30],
                {
                    cssFn: function (value) {
                        return `drop-shadow(0 0 ${value * 2}px yellow)`;
                    },
                },
            ],
            translateY: [
                [1000, 1500],
                [200, 400],
            ],
        },
    });

    lax.addElements(".ironman-01", {
        scrollY: {
            translateY: [
                [1200, 1800],
                [600, -800],
            ],
        },
    });

    lax.addElements(".ironman-02", {
        scrollY: {
            scale: [
                [1500, 2000],
                [0, 1.5],
            ],
            translateX: [
                [1500, 2000, 2500],
                [0, 500, 0],
            ],
            translateY: [
                [1500, 2000, 2500],
                [-200, 0, -200],
            ],
        },
    });

    lax.addElements(".shield", {
        scrollY: {
            translateX: [
                [2000, 2400, 2800],
                [-800, 200, 0],
            ],
            translateY: [
                [2000, 2400, 2800],
                [800, 400, 200],
            ],
        },
    });

    lax.addElements(".captain-title", {
        scrollY: {
            filter: [
                [2200, 2300, 2400, 2500, 2600, 2700],
                [0, 30, 0, 30, 0, 30],
                {
                    cssFn: function (value) {
                        return `drop-shadow(0 0 ${value}px blue)`;
                    },
                },
            ],
            translateY: [
                [2200, 2800],
                [400, 600],
            ],
        },
    });

    lax.addElements(".capi", {
        scrollY: {
            translateX: [
                [2800, 3500],
                [400, -800],
            ],
            translateY: [
                [2800, 3500],
                [100, 100],
            ],
            scale: [
                [2800, 3500],
                [1, 0.7],
            ],
            opacity: [
                [2800, 3000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".shield02", {
        scrollY: {
            translateX: [
                [2800, 3500],
                [0, 800],
            ],
            translateY: [
                [2800, 3500],
                [100, 100],
            ],
            scale: [
                [2800, 3500],
                [1, 0.3],
            ],
            opacity: [
                [2800, 3000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".rayo", {
        scrollY: {
            scaleX: [
                [3500, 3800],
                [0, 1],
            ],
            translateY: [
                [3700, 4200],
                [-200, 0],
            ],
            opacity: [
                [3500, 3800, 4200],
                [1, 1, 0],
            ],
        },
    });

    // Animaciones de Thor - valores ajustados
    lax.addElements(".thor-title-01 img", {
        scrollY: {
            scale: [
                [3700, 4200],
                [3, 1],
            ],
            opacity: [
                [3700, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-02 img", {
        scrollY: {
            scale: [
                [3750, 4200],
                [3, 1],
            ],
            opacity: [
                [3750, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-03 img", {
        scrollY: {
            scale: [
                [3800, 4200],
                [3, 1],
            ],
            opacity: [
                [3800, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor-title-04 img", {
        scrollY: {
            scale: [
                [3850, 4200],
                [3, 1],
            ],
            opacity: [
                [3850, 4000],
                [0, 1],
            ],
        },
    });

    lax.addElements(".thor", {
        scrollY: {
            translateX: [
                [3500, 4000],
                [-800, 500],
            ],
            translateY: [
                [3500, 4000],
                [0, -500],
            ],
        },
    });

    lax.addElements(".thor02", {
        scrollY: {
            opacity: [
                [4000, 5000],
                [0, 1],
            ],
            translateY: [
                [4000, 5500],
                [-1000, 0],
            ],
            filter: [
                [4000, 5000],
                [20, 0],
                {
                    cssFn: (value) => {
                        return `blur(${value}px)`;
                    }
                }
            ],
        },
    });
};