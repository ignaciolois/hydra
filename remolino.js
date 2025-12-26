// REMOLINO
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra


hush()

s0.initCam()

noise(() => 1 * (5 + Math.sin(time * .1) * 10), .01)
	.out(o0)

src(s0)
	.modulatePixelate(voronoi(16, .7, .9), 30, 40)
	.modulate(src(o0), .01)
	.modulateScale(osc(9), 0.4)
	.shift(
		() => Math.sin(time * 1.1) * .3 + .2,
		() => Math.sin(time * .33) * .3 + .4,
		() => Math.sin(time) * .3 + .7, .95)
	.posterize(5)
	.out(o1)

render(o1)