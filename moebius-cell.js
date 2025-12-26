// MOEBIUS CELL
// L.O.I.S.
// CC BY-NC
// https://github.com/ignaciolois/hydra

function nestedNoise(levels, seeds, thresholds, colors) {
	if (levels === 0) {
		return noise(seeds[0])
			.thresh(thresholds[0])
			.colorama(colors[0])
			.saturate(2.5)
	}

	return noise(seeds[0])
		.thresh(thresholds[0])
		.colorama(colors[0])
		.saturate(() => Math.PI)
		.diff(
			nestedNoise(levels - 1,
				seeds.slice(1),
				thresholds.slice(1),
				colors.slice(1))
		)
}

a = Math.PI * 0.5
b = a + Math.PI
c = a * Math.PI
d = a ** Math.PI

seeds = [a, b, c, d]
thresholds = [a * 0.1, b * 0.1, c * 0.1, d * 0.1]
colors = [a * 0.1, b * 0.1, c * 0.1, d * 0.1]

nestedNoise(
	3,
	seeds,
	thresholds,
	colors
)
.posterize(5)
.out(o0)

s0.initCam()
src(s0)
	.posterize(9)
	.out(o1)

src(o0)
	.modulate(src(o1), 0.8)
	.out(o2)

render(o0)
