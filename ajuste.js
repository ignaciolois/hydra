// AJUSTE
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Philips_PM5544.svg/1200px-Philips_PM5544.svg.png")
src(s0)
	.out(o0)

s1.initCam()
src(s1)
	.posterize(8)
	.thresh(.3)
	.scale(1.1)
	.out(o1)

src(o0)
	.modulate(src(o0)
		.modulate(noise(10, .9), .005), .005)
	.modulate(voronoi(10), () => .009 * (50 + Math.sin(time1) * 50))
	.posterize(8)
	.out(o2)

src(o2)
	.mask(src(o1)
		.invert(() => Math.sin(time) * .5 + .5)
		.add(src(o1)
			.scrollX(0.05)
			.scrollY(0.05)))
	.out(o3)

render(o3)