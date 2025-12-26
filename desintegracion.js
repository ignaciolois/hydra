// DESINTEGRACIÓN
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

s0.initCam()
src(s0)
	.thresh(0.3, 0.2)
	.brightness(0.3)
	.contrast(2)
	.modulate(src(o0)
        .scrollX(-.0003)
		.scrollY(-0.0003)
	)
	.modulate(src(o0)
        .scrollX(-.003)
		.scrollY(-0.003)
	)
	.modulate(src(o0)
        .scrollX(-.03)
		.scrollY(-0.03)
	)
	.modulateScrollX(voronoi(.5))
	.modulateScrollY(voronoi(.5))
	.colorama(.99)
	.out(o0)