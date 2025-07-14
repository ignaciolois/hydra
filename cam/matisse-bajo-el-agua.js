// MATISSE BAJO EL AGUA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
	.out(o0)

src(o0)
	.saturate(2.3)
	.posterize(5)
	.colorama(0.135)
	.shift(-0.1, 0.2, 0.5)
	.invert()
	.modulateRotate(noise(2)
		.modulateKaleid(noise(1), 3), 0.2)
	.diff(src(s0).invert())
	.out(o1)

render(o1)