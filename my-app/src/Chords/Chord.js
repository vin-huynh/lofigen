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
}

export default Chord;