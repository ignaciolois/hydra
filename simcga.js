// SIMCGA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra


s0.initCam()

src(s0)
    .pixelate(100, 100)
    .thresh(0.45, 0.2)
    .posterize(8)
    .color(()=>0.5 + Math.sin(time*0.5) * 0.5,0.5,0)
    .out()
