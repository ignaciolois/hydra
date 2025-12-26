// TOSTADA FANTASMA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
  .posterize(() => 17 + Math.sin(time * 0.125) * 15)
  .out(o0)

src(o0)
  .diff(
    src(o0)
      .scale(1.05)
  )
  .diff(
    src(o0)
      .scale(1.05)
      .blend(
        src(o0)
          .scale(1.05)
          .color(1, 0, 1)
      )
      .color(0, 1)
      .diff(
        src(o0)
          .scale(1.05)
          .color(0, 1, 1)
      )
      .diff(
        src(o0)
          .scale(1.05)
          .color(1, 1, 0)
      )
  )
  .mult(
    src(s0)
      .thresh(() => 0.5 + Math.sin(time) * 0.5),
    0.25
  )
  .out(o1)

render(o1)
