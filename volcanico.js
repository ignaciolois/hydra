// VOLCÁNICO
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
	.thresh(0.2)
	.posterize(8)
	.blend(src(o2))
	.out(o2)

osc(5)
	.add(noise(2))
// 	.blend(src(o2))
// 	.blend(src(s0))
	.out(o1)

noise(.1)
	.blend(src(o1), .6)
	.blend(src(o1)
		.luma(.3), 2)
	.blend(gradient(1), .3)
		.blend(src(o1)
			.mult(gradient(2)), .2)
		.blend(src(o1))
		.mult(gradient(2), .1)
	.modulatePixelate(src(o1)
		.modulateScale(src(o1)
			, 50), 30)
	.shift(.0001, .5, .9999)
	.invert()
	.out(o0)