// ARGENTINA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra


shape(99, 0.3, 2)
	.scale(0.2, 0.5)
	.color([0.4, .6].smooth(1), 0.5, 0)
	.luma(0.001)
	.add(o3, 0.7)
	.modulateScale(osc(20, .1, .1).kaleid(99), .2)
	.out(o3)

shape(4)
	.scale(1, 6.82, 0.9)
	.scale(0.8, 0.6, 1.8)
	.color(1, 1, 1)
	.blend(shape(4)
		.color(0.455, 0.675, 0.875)
		.scale(1, 3.5, 0.99)
		.scrollY(0.35), .3)
	.blend(shape(4)
		.color(0.455, 0.675, 0.875)
		.scale(1, 3.5, 0.99)
		.scrollY(-0.35), .3)
	.out(o0)

noise(5)
	.modulateRotate(noise(.5), () => 3 + Math.sin(time * 0.33) * 3, 0.7)
	.out(o1)

s0.initCam()

src(o0)
	.modulate(osc(3, 0.6))
	.modulate(src(o1))
	.add(src(o1), 0.1)
	.scale(1.2, 1, 1)
	.modulate(src(s0)
		.posterize(12), () => 0.5 + Math.sin(time * 0.33) * 0.5)
	.blend(src(o3))
	.add(src(o0)
		.modulate(osc(3, 0.6))
		.modulate(src(o1)))
	.out(o2)
render(o2)