// PANOPTIKÓN
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
	.out(o0)
//voronoi(.3, .2, 1.5).out(o0)
src(o0)
	.color(1,0,1)
	.modulateScrollX(osc(Math.tan(time * 100) * 10))
	.blend(src(o0)
		.color(0,1,1)
		.modulateScrollX(osc(-8)))
	.blend(src(o0)
		.color(1,1,0)
		.modulateScrollX(osc(5)))
	.modulateScale(voronoi(.2, 0.3, 2), 5)
	.modulateScale(voronoi(Math.tan(time * 100), 0.3, 2.5))
	.modulate(noise(.1), .05)
	.out(o1)

render(o1)
