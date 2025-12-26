// CMYK
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

voronoi(10, .1, 3)
	.modulatePixelate(voronoi(1, .01, 999))
	.add(
		src(s0)
		.thresh(.3)
		.blend(src(o3)
			.modulate(src(s0)
				.repeat(.3)
			)
			.thresh(.4)
             ))
	.modulatePixelate(osc(3).kaleid(3).repeat(.2), 500)
	.blend(src(s0), .4)
	.out(o3)

src(o3)
	.color(0, 1, 1)
	.out(o0)

src(o3)
	.color(1, 1, 0)
	.out(o1)

src(o3)
	.color(1, 0, 1)
	.out(o2)


render()