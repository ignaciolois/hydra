// TINTA CHINA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
    .thresh(0.4)
	.out(o1)

osc(6, .2, .38)
	.saturate(2)
	.diff(solid(1, 0, 0))
	.pixelate(9, 99)
	.modulateRotate(noise([1, 3, 2, 5, .3, 7, 2, 12, .1].smooth(3)), () => 1.5 * Math.sin(0.08 * time))
	.mask(src(o1)
		.invert(() => Math.sin(time * 0.1)))
	.out(o0)
