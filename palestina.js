// PALESTINA
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

// franja blanca
shape(4)
	.scale(1, 6.82, 0.9)
	.scale(0.8, 0.6, 1.8)
	.color(1, 1, 1)
// franja verde
	.layer(shape(4)
		.color(0, 0.9, 0, 0.5)
		.scale(1, 3.5, 0.99)
		.scrollY(-0.35))
//triángulo rojo
	.layer(solid(.7, 0, 0)
		.mask(shape(3, 0.4)
			.rotate(0.525)
			.scale(1, 0.5, 1.44)
			.scrollX(0.399), 0.2))
	.out(o0)

noise(5)
	.modulateRotate(noise(1), () => 3 + Math.sin(time * 0.33) * 3, 0.7)
	.out(o1)

s0.initCam()

src(o0)
	.modulate(osc(3, 0.6))
	.modulate(src(o1))
	.add(src(o1), 0.1)
	.scale(1.2, 1, 1)
	.modulate(src(s0).posterize(12), () => 0.5 + Math.sin(time * 0.33) * 0.5)
	.add(src(o0)
		.modulate(osc(3, 0.6))
		.modulate(src(o1)))
	.out(o2)
render(o2)