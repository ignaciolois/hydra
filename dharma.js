

// DHARMA ARTHA KAMA MOKSHA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra



s0.initCam()
src(s0)
	.thresh(.3)
	.out(o0)

src(o0)
	.diff(src(o0)
		.scale(1.03)
		.posterize(12)
		.color(1, 1, 0))
	.diff(src(o0)
		.scale(1.06)
		.posterize(8)
           .invert()
		.color(0,0,.5))
	.diff(src(o0)
		.scale(1.09)
		.posterize(4)
           .invert()
		.color(0,1,0))

	//.modulatePixelate(gradient(.01).kaleid(99))
	
  	.colorama(()=>Math.sin(time * 0.0005))

	.out(o1)

render(o1)