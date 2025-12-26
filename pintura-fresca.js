

// PINTURA FRESCA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
	.thresh(.4)
	.out(o0)

// osc(4, .1).modulatePixelate(voronoi(9, .1, .2), 10).thresh(.5).out(o0)

src(o0)
	.color(
		() => Math.sin(time),
		() => Math.sin(time * .95),
		() => Math.sin(time * .77))
	.modulateScrollX(osc(10))
	.diff(src(o0)
		.color(1, 1, 0)
		.modulateScrollX(osc(10)
			.rotate(Math.PI)
		))
	.diff(src(o0)
		.color(1, 0, 1)
		.modulateScrollY(osc(10)))
	.diff(src(o0)
		.color(0, 1, 1)
		.modulateScrollY(osc(10)
			.rotate(Math.PI)
		))
	.mask(
		shape(4)
		.scale(1.8,.5)
		.invert()
		.add(src(o0)
			.scale(.5, .5)
			.color(
				() => Math.sin(time * -1),
				() => Math.sin(time * -.95),
				() => Math.sin(time * -.77))
		)
		.scrollX(.8)
		.scrollY(-.1)
	)
	.out(o1)
render(o1)