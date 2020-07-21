import * as Tone from 'tone';

const samplePath = `${process.env.PUBLIC_URL}/DrumSamples/snare.wav`;
const samples = {C4: samplePath};

const lpf = new Tone.Filter(6000, "lowpass");
const vol = new Tone.Volume(-6);
const rvb = new Tone.Freeverb({
	"roomSize": 0.5,
	"dampening": 4000,
	"wet": 0.1
});
const sw = new Tone.StereoWidener(0.3);

class Snare {
	constructor(cb) {
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(rvb,lpf,vol,sw,Tone.Master);
	}

	sampler() {
		return this.sampler;
	}
}

export default Snare;