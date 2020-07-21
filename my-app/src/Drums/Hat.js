import * as Tone from 'tone';

const samplePath = `${process.env.PUBLIC_URL}/DrumSamples/hat.wav`;
const samples = {C4: samplePath};

const lpf = new Tone.Filter(2400, "lowpass");
const vol = new Tone.Volume(-9);
const sw = new Tone.StereoWidener(0.7);
const rvb = new Tone.Freeverb({
	"roomSize": 0.33,
	"dampening": 1200,
	"wet": 0.1
});
class Hat {
	constructor(cb) {
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(lpf,rvb,vol,sw,Tone.Master);
	}

	sampler() {
		return this.sampler;
	}
}

export default Hat;