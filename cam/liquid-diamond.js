// LIQUID DIAMOND
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
	.luma(0.3)
	.modulate(
		voronoi(24)
		.modulateScale(osc(5)
			.kaleid(() => 50 + Math.sin(time * 0.25) * 40), 22, 0.5), 1.5)
	.out()
