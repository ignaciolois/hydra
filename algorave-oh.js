

// ALGORAVE OTRA HISTORIA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

hush()
speed = 1

s0.initCam()

voronoi(12)
	.modulateScale(osc(5)
		.kaleid(() => 50 + Math.sin(time * 0.25) * 40), 22, 0.5)
	.out(o0)

src(s0)
	.luma(0.25)
	.modulate(src(o0), 1.5)
	.out(o1)

src(o0)
	.colorama(() => 0.5 * Math.log(time * 0.125) + 0.5)
	.mult(src(o0)
		.scrollX(0.01), 0.7)
	.out(o2)

render(o2)
