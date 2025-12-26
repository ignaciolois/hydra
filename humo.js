// HUMO
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()

src(s0)
	.out(o0)

src(o0)
	.saturate(12)
	.luma(0.35, 0.009)
	.add(src(o0)
		.saturate(12)
		.scroll(0.0012, 0.0012)
         , 0.01)
	.modulateScale(voronoi(() => (28.5 + Math.sin(time * 0.35) * 21.5) + 0.24)
		.modulateRotate(noise(3), 0.7))
	.brightness(0.4)

	.modulate(noise(0.1, 0.1)
				.rotate(1.57)
		, 0.01)
	.modulate( 
		osc(1, 0.05)
		.rotate(1.57)
	, 0.012)

	.out(o1)

render(o1)