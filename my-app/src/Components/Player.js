import React, {Component} from 'react';
import * as Tone from 'tone';
import ChordProgression from '../Chords/ChordProgression';
import Piano from '../Piano/Piano';
import Kick from '../Drums/Kick';
import Snare from '../Drums/Snare';
import Hat from '../Drums/Hat';

const keys = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const masterCompressor = new Tone.Compressor({
	"threshold" : -6,
	"ratio" : 3,
	"attack" : 0.5,
	"release" : 0.1
});
const dst = new Tone.Distortion({
    "distortion" : 0.1,
    "wet" : 0.1
});
const lpf = new Tone.Filter(2000, "lowpass");
const vol = new Tone.Volume(-6);
Tone.Master.chain(dst, lpf, masterCompressor,vol);
Tone.Transport.bpm.value = 156;
Tone.Transport.swing = 1;

class Player extends Component{

    constructor(props) {
        super(props);

        this.state = {
            key: "C",
            progression: [],
            progress: 0,
            pianoLoaded: false,
            kickLoaded: false,
            snareLoaded: false,
            hatLoaded: false
        }

        this.pn = new Piano(() => this.setState({...this.state, pianoLoaded: true})).sampler;
        this.kick = new Kick(() => this.setState({...this.state, kickLoaded: true})).sampler;
        this.snare = new Snare(() => this.setState({...this.state, snareLoaded: true})).sampler;
        this.hat = new Hat(() => this.setState({...this.state, hatLoaded: true})).sampler;

        this.chords = new Tone.Loop(this.playChord,"1n");
        this.melody = new Tone.Loop(this.playMelody,"8n");


        this.kickLoop = new Tone.Sequence((time,note) => {
            if(note!=="") {
                this.kick.triggerAttack(note);
            }
        }, ["C4","","","", "","","","C4", "C4","","","", "","","",""],"8n");
        this.snareLoop = new Tone.Sequence((time,note) => {
            if(note!=="") {
                this.snare.triggerAttack(note);
            }
        }, ["","C4"], "2n");
        this.hatLoop = new Tone.Loop(()=>this.hat.triggerAttack("C4"),"4n");
        
        this.kickLoop.humanize = true;
        this.snareLoop.humanize = true;
        this.hatLoop.humanize = true;

        this.nextChord = this.nextChord.bind(this);
        this.playChord = this.playChord.bind(this);
        this.playMelody = this.playMelody.bind(this);
    }


    nextChord = () => {
        const nextProgress = this.state.progress === this.state.progression.length-1 ? 0 : this.state.progress+1;
        this.setState({...this.state, progress: nextProgress});
    }

    playChord = () => {
        const chord = this.state.progression[this.state.progress];
        const root = Tone.Frequency(this.state.key+"3").transpose(chord.semitoneDist);
        const notes = Tone.Frequency(root).harmonize(chord.intervals).map(f => Tone.Frequency(f).toNote())
        .filter((c,i) => i<4);
        this.pn.triggerAttackRelease(notes,"1n");
        this.nextChord();
    }

    playMelody = () => {
        const chord = this.state.progression[this.state.progress];
        const root = Tone.Frequency(this.state.key+"5").transpose(chord.semitoneDist);
        const scale = chord.intervals.map(n => {
            if(n>=12)
                return n-12;
            else
                return n;
        });
        const notes = Tone.Frequency(root).harmonize(scale).map(f => Tone.Frequency(f).toNote());
        let noteIdx = Math.floor(Math.random()*notes.length);
        if(Math.random()<0.33)
            this.pn.triggerAttackRelease(notes[noteIdx]);
    }

    generateProgression = () => {
        this.setState({
            key: keys[Math.floor(Math.random()*keys.length)], 
            progress: 0, 
            progression: ChordProgression.generate(8)});
    }

    toggle = () => {
        this.setState({...this.state, progress: 0});
        if(Tone.Transport.state === "started") {
            Tone.Transport.stop();
        }
        else {
            this.chords.start(0);
            this.melody.start(0);
            this.kickLoop.start(0);
            this.snareLoop.start(0);
            this.hatLoop.start(0);
            Tone.Transport.start();
        }
    }

    render() {
        const progressionList = this.state.progression.map((chord,idx) => {
            return (
            <li key={idx}>
                {chord.degree}
                {idx===(this.state.progress+7)%8 ? "<" : ""}
            </li>
        )});
        return (
            <div>
                <div>
                    {this.state.pianoLoaded ? "" : "loading piano"}
                    {this.state.kickLoaded ? "" : "loading kick"}
                    {this.state.snareLoaded ? "" : "loading snare"}
                    {this.state.hatLoaded ? "" : "loading hat"}
                </div>
                <button onClick={this.generateProgression}>Generate Chords</button>
                <p>{this.state.key}</p>
                <ol>{progressionList}</ol>
                <button onClick={this.toggle}>Play</button>
            </div>
        );
    }
}

export default Player;