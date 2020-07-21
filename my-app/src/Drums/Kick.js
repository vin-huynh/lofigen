import * as Tone from 'tone';

const samplePath = `${process.env.PUBLIC_URL}/DrumSamples/kick.wav`;
const samples = {C4: samplePath};

const vol = new Tone.Volume(-3);
const rvb = new Tone.Freeverb({
	"roomSize": 0.66,
	"dampening": 1200,
	"wet": 0.1
});

class Kick {
	constructor(cb) {
		this.sampler = new Tone.Sampler(samples, () => {
			cb();
		}).chain(rvb,vol,Tone.Master);
	}

	sampler() {
		return this.sampler;
	}
}

export default Kick;