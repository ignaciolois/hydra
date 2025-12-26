// DIABOLUS EX MACHINA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
	.out(o1)

// noise(5, .5).blend(noise(5, .5).scale(0.7)).out(o1)

noise(5, .5)
	.posterize(8)
	.thresh(.2)
	.modulatePixelate(noise(.1)
		.blend(noise(.2)))
	.modulateScale(noise(.02, .05))
	.modulateRotate(osc(.2))
	.colorama([.2, .8, 1.3].smooth(5))
	.mask(src(o1)
		.thresh(0.17)
		.colorama(2)
		.invert(() => Math.sin(time * .2))
	)
	.out(o2)

render(o2)