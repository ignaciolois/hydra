// AL HORNO
// L.O.I.S.
// CC BY-NC
// https://www.github.com/ignaciolois/hydra

osc(200, -0.1, 1.1)
	.kaleid(99)
	.scale(1, 0.4)
	.mult(osc(400, -.01, .6)
		.rotate(() => Math.PI))
	.mult(osc(800, -.01, .6)
		.rotate(() => Math.PI), .6)
	.modulateScale(osc(.2, .3)
		.kaleid(99), 5)
	.out(o2)

s0.initCam()
src(s0)
	.thresh(.2)
	.modulateScale(osc(-.09, .3)
		.kaleid(99), 5)
	.modulateScale(noise(.5, 3)
		.scale(.8), .2)
	.out(o3)

src(o2)
	.mult(src(o3)
		.modulate(src(o2), .03))
// 	.color(() => Math.sin(time * .97) * .5 + .5, 
//            () => Math.sin(time) * .5 + .5, 
//            () => Math.sin(time * 1.021) * .5 + .5)
	.out(o1)

render(o1)
