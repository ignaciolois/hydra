

// OLD NEWS
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
	.thresh(0.4)
	.mult(
		shape(99, 0.6)
		.repeat(99, 99)
		.scale(1.05, 1.05)
		.modulateScrollY(voronoi(2)
			.kaleid(5), .1)
		.modulateScrollX(voronoi(3)
			.kaleid(5), .1)
		.rotate(0.07)
		.invert()
		.color(1, .8, .6)
	)
	.add(
		noise(3, .2)
		.scale(1, .6, 1)
		.thresh(0.77, 0.01)
		.color(.9, 0, 0)
		.modulatePixelate(noise(50)
			.modulateScale(osc(1)), 1000)
		.mult(
			shape(99, 0.6)
			.repeat(199, 199)
			.scale(1.05, 1.05)
		), 2
	)
	.out()