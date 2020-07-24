import React, {Component} from 'react';
import * as Tone from 'tone';
import ChordProgression from '../Chords/ChordProgression';
import Piano from '../Piano/Piano';
import Kick from '../Drums/Kick';
import Snare from '../Drums/Snare';
import Hat from '../Drums/Hat';
import Noise from '../Drums/Noise';
import Visualizer from './Visualizer';

const keys = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const masterCompressor = new Tone.Compressor({
	"threshold" : -6,
	"ratio" : 3,
	"attack" : 0.5,
	"release" : 0.1
});
const lpf = new Tone.Filter(2000, "lowpass");
const vol = new Tone.Volume(-6);
Tone.Master.chain(lpf, masterCompressor,vol);
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
            hatLoaded: false,
            contextStarted: false,
            genChordsOnce: false,
            kickOff: false,
            snareOff: false,
            hatOff: false,
            melodyDensity: 0.33,
        }

        this.pn = new Piano(() => this.setState({...this.state, pianoLoaded: true})).sampler;
        this.kick = new Kick(() => this.setState({...this.state, kickLoaded: true})).sampler;
        this.snare = new Snare(() => this.setState({...this.state, snareLoaded: true})).sampler;
        this.hat = new Hat(() => this.setState({...this.state, hatLoaded: true})).sampler;
        this.noise = Noise;

        this.chords = new Tone.Loop(this.playChord,"1n");
        this.melody = new Tone.Loop(this.playMelody,"8n");


        this.kickLoop = new Tone.Sequence((time,note) => {
            if(!this.state.kickOff) {
                if(note==="C4" && Math.random()<0.9) {
                    this.kick.triggerAttack(note);
                } else if(note==="." && Math.random()<0.1) {
                    this.kick.triggerAttack("C4");
                }
            }
            
        }, ["C4","","","", "","","","C4", "C4","",".","", "","","",""],"8n");

        this.snareLoop = new Tone.Sequence((time,note) => {
            if(!this.state.snareOff) {
                if(note!=="" && Math.random()<0.80) {
                    this.snare.triggerAttack(note);
                }
            }
        }, ["","C4"], "2n");

        this.hatLoop = new Tone.Sequence((time,note) => {
            if(!this.state.hatOff) {
                if(note!=="" && Math.random()<0.80) {
                    this.hat.triggerAttack(note);
                }
            }
        }, ["C4","C4","C4","C4","C4","C4","C4","C4"], "4n");
        
        this.kickLoop.humanize = true;
        this.snareLoop.humanize = true;
        this.hatLoop.humanize = true;

        this.nextChord = this.nextChord.bind(this);
        this.playChord = this.playChord.bind(this);
        this.playMelody = this.playMelody.bind(this);
    }


    nextChord = () => {
        const nextProgress = this.state.progress === this.state.progression.length-1 ? 0 : this.state.progress+1;
        if(this.state.progress===4) {
            let nextKickOff = Math.random()<0.15;
            let nextSnareOff = Math.random()<0.20;
            let nextHatOff = Math.random()<0.25;

            this.setState({...this.state,
                progress: nextProgress,
                kickOff: nextKickOff,
                snareOff: nextSnareOff,
                hatOff: nextHatOff
            });
        } else if (this.state.progress===0) {
            let nextKickOff = Math.random()<0.15;
            let nextSnareOff = Math.random()<0.20;
            let nextHatOff = Math.random()<0.25;

            let nextMelodyDensity = Math.random()*0.66;

            this.setState({...this.state,
                progress: nextProgress,
                kickOff: nextKickOff,
                snareOff: nextSnareOff,
                hatOff: nextHatOff,
                melodyDensity: nextMelodyDensity
            });
            
        } else {
            this.setState({...this.state,
                progress: nextProgress,
            });
        }
        
    }

    playChord = () => {
        const chord = this.state.progression[this.state.progress];
        const root = Tone.Frequency(this.state.key+"3").transpose(chord.semitoneDist);
        const size = 4;
        const voicing = chord.generateVoicing(size);
        const notes = Tone.Frequency(root).harmonize(voicing).map(f => Tone.Frequency(f).toNote());
        this.nextChord();
        this.pn.triggerAttackRelease(notes,"1n");
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
        if(Math.random()<this.state.melodyDensity)
            this.pn.triggerAttackRelease(notes[noteIdx]);
    }

    generateProgression = () => {
        this.setState({
            key: keys[Math.floor(Math.random()*keys.length)], 
            progress: 0, 
            progression: ChordProgression.generate(8),
            genChordsOnce: true});
    }

    toggle = () => {
        this.setState({...this.state, progress: 0});
        if(Tone.Transport.state === "started") {
            Tone.Transport.stop();
            this.noise.stop();
        }
        else {
            this.noise.start(0);
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
            <li className={idx===(this.state.progress+7)%8 ? "live" : ""} key={idx}>
                {chord.degree}
                
            </li>
        )});

        const prep = (
            <div className="prep">
                <div className="sampleLoad">
                    {!(this.state.pianoLoaded && this.state.kickLoaded && this.state.snareLoaded && this.state.hatLoaded) ?
                        "loAding sAmples" :
                        this.state.contextStarted ? "" : 
                            <button
                                className="contextBtn"
                                onClick={() => {
                                    Tone.start();
                                    this.setState({...this.state, contextStarted: true});
                                }}
                            >
                                stArt Audio context
                            </button>}
                </div>
            </div>
        );

        const playable = (
            <div className="playable">
                <button 
                    className="generateBtn"
                    onClick={this.generateProgression}>
                        generAte cHords
                </button>
                {!(this.state.genChordsOnce) ? "" : 
                    <div>
                        <div className="info">
                            <h3 className="key">{this.state.key.toLowerCase()}</h3>
                            <ol className="progressionList">{progressionList}</ol>
                        </div>
                        
                        <button 
                            className="playBtn"
                            onClick={this.toggle}>
                                {Tone.Transport.state==="started" ? "stop" : "plAy"}
                        </button>
                    </div>
                }
            </div>
        );

        const visual = (
            <section className="visualizer">
                <Visualizer audio={Tone.Master}/>
            </section>
        );

        return (
            <div>
                <div className="content">
                    <div className="title">
                        <h1>lofi generAtor</h1>
                        <h5>by Vin-HuynH</h5>
                    </div>
                    <div className="instructions">
                        <h3>How to use lofigen</h3>
                        <ol>
                            {!(this.state.pianoLoaded && this.state.kickLoaded && this.state.snareLoaded && this.state.hatLoaded) ?
                                <li>WAit for sAmples to loAd</li> : ""}
                            {!(this.state.contextStarted) ? 
                                <li>stArt Audio context</li> : ""}
                            <li>generAte cHords</li>
                            <li>press plAy And enjoy</li>
                        </ol>
                    </div>
                    {this.state.pianoLoaded && this.state.kickLoaded && this.state.snareLoaded && this.state.hatLoaded &&
                        this.state.contextStarted ? playable : prep}
                </div>
                <section className={"gradient " + this.state.key.replace("#","s")}></section>
                {Tone.Transport.state === "started" ? visual : ""}
                <section className="backdrop"></section>
            </div>
            
        );
    }
}

export default Player;