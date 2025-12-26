// SON OF A GLITCH
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra


s0.initCam()
src(s0)
	.posterize(8)
	.out(o1)

// osc(5).add(noise(2)).out(o1)

noise(.1)
	.blend(src(o1), .6)
	.blend(src(o1).luma(.4), 2)
	.add(gradient(2), .2)
	.blend(src(o1)
		.add(gradient(2)), .2)
	.blend(src(o1))
	.mult(gradient(2), .1)
	.modulatePixelate(src(o1))
	.out(o0)