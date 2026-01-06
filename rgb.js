// ROTACIÓN GIRATORIA BALANCEADA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
	.thresh(.4)
	//.modulatePixelate(osc(()=>Math.sin(time * 0.005) * 2))
	.out(o0)


src(o0)
	.invert()
	.color(0, 1, 1)
	.invert()
	.rotate(() => time / 10)
	.diff(
		src(o0)
		.invert()
		.color(1, 0, 1)
		.invert()
		.rotate(() => time / 20)
		.diff(
			src(o0)
			.invert()
			.color(1, 1, 0)
			.invert()
			.rotate(() => time / 30)
		)
	)
	.scale(()=>Math.sin(time) * 1.5 + 2)
	.out(o1)

render(o1)