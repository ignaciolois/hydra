// 2025
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
// voronoi(5, 0.5, 1.2)
	.out(o1)
src(o1)
	.saturate(3.5)
	.posterize(4)
	.colorama(() => Math.sin(time * 0.25) * 0.5 + 0.5)
	.blend(src(o0)
		.scrollX(0.01))
	.blend(src(o0)
		.scrollX(-0.01))
	.blend(src(o0)
		.scrollY(0.01))
	.blend(src(o0)
		.scrollY(-0.01))
	.out(o0)

