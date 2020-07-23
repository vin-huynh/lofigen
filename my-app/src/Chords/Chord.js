import MajorScale from './MajorScale';
import majorScale from './MajorScale';

class Chord {
    constructor(degree,intervals,nextChordIdxs) {
        this.degree = degree;
        this.semitoneDist = majorScale[degree-1];
        this.intervals = intervals;
        this.nextChordIdxs = nextChordIdxs;
    }
    
    degree() {
    	return this.degree;
    }

    semitoneDist() {
        return this.semitoneDist;
    }

    intervals() {
        return this.intervals;
    }

    nextChordIdxs() {
        return this.nextChordIdxs;
    }

    nextChordIdx() {
        return this.nextChordIdxs[Math.floor(Math.random()*this.nextChordIdxs.length)];
    }

    generateVoicing(size) {
        if(size<3)
            return this.intervals.slice(0,3);
        let voicing = this.intervals.slice(1,size);
        voicing.sort(() => Math.random()-0.5);
        for(let i = 1; i<voicing.length; i++) {
            while(voicing[i] < voicing[i-1]){
                voicing[i] += 12;
            }
        }
        voicing.unshift(0);
        return voicing;
    }
}

export default Chord;