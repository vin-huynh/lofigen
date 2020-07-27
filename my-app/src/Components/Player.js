import React, {Component} from 'react';
import * as Tone from 'tone';
import ChordProgression from '../Chords/ChordProgression';
import Piano from '../Piano/Piano';
import Kick from '../Drums/Kick';
import Snare from '../Drums/Snare';
import Hat from '../Drums/Hat';
import Noise from '../Drums/Noise';
import Visualizer from './Visualizer';
import Keys from '../Chords/Keys';
import {fiveToFive} from '../Chords/MajorScale';
import intervalWeights from '../Chords/IntervalWeights';

const cmp = new Tone.Compressor({
	"threshold" : -6,
	"ratio" : 3,
	"attack" : 0.5,
	"release" : 0.1
});
const lpf = new Tone.Filter(2000, "lowpass");
const vol = new Tone.Volume(-6);
Tone.Master.chain(cmp,lpf,vol);
Tone.Transport.bpm.value = 156;
Tone.Transport.swing = 1;

class Player extends Component{

    constructor(props) {
        super(props);

        this.state = {
            key: "C",
            progression: [],
            scale: [],
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
            melodyOff: false,

            scalePos: 0,
        }

        this.pn = new Piano(() => this.setState({...this.state, pianoLoaded: true})).sampler;
        this.kick = new Kick(() => this.setState({...this.state, kickLoaded: true})).sampler;
        this.snare = new Snare(() => this.setState({...this.state, snareLoaded: true})).sampler;
        this.hat = new Hat(() => this.setState({...this.state, hatLoaded: true})).sampler;
        this.noise = Noise;

        this.chords = new Tone.Sequence((time,note) => {
            this.playChord();
        }, [""], "1n");
        this.melody = new Tone.Sequence((time,note) => {
            this.playMelody();
        }, [""], "8n");

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
        
        this.chords.humanize = true;
        this.melody.humanize = true;
        this.kickLoop.humanize = true;
        this.snareLoop.humanize = true;
        this.hatLoop.humanize = true;

        this.nextChord = this.nextChord.bind(this);
        this.playChord = this.playChord.bind(this);
        this.playMelody = this.playMelody.bind(this);
        this.generateProgression = this.generateProgression.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    nextChord = () => {
        const nextProgress = this.state.progress === this.state.progression.length-1 ? 0 : this.state.progress+1;
        const nextKickOff = Math.random()<0.15;
        const nextSnareOff = Math.random()<0.20;
        const nextHatOff = Math.random()<0.25;
        const nextMelodyDensity = Math.random()*0.3+0.2;
        const nextMelodyOff = Math.random()<0.25;

        if(this.state.progress===4) {
            this.setState({...this.state,
                progress: nextProgress,
                kickOff: nextKickOff,
                snareOff: nextSnareOff,
                hatOff: nextHatOff
            });
        } else if (this.state.progress===0) {
            this.setState({...this.state,
                progress: nextProgress,
                kickOff: nextKickOff,
                snareOff: nextSnareOff,
                hatOff: nextHatOff,
                melodyDensity: nextMelodyDensity,
                melodyOff: nextMelodyOff
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
        //this.pn.context._context.resume();
        this.pn.triggerAttackRelease(notes,"1n");
        this.nextChord();
    }

    playMelody = () => {
        // const chord = this.state.progression[this.state.progress];
        // const root = Tone.Frequency(this.state.key+"5").transpose(chord.semitoneDist);
        // const scale = chord.generateMode();
        // const notes = Tone.Frequency(root).harmonize(scale).map(f => Tone.Frequency(f).toNote());
        // const noteIdx = Math.floor(Math.random()*notes.length);
        // if(Math.random()<this.state.melodyDensity)
        //     this.pn.triggerAttack(notes[noteIdx]);

        if(this.state.melodyOff || !(Math.random()<this.state.melodyDensity)) {
            return;
        }

        const descendRange = Math.min(this.state.scalePos,7) + 1;
        const ascendRange = Math.min(this.state.scale.length - this.state.scalePos,7);

        let descend = descendRange > 1;
        let ascend = ascendRange > 1;

        if(descend && ascend) {
            if(Math.random()>0.5) {
                ascend = !descend;
            } else {
                descend = !ascend;
            }
        }

        let weights = descend ? intervalWeights.slice(0,descendRange) : intervalWeights.slice(0,ascendRange);

        const sum = weights.reduce((prev,curr) => prev+curr, 0);
        weights = weights.map(w => w/sum);
        for(let i = 1; i < weights.length; i++) {
            weights[i] += weights[i-1];
        }

        const randomWeight = Math.random();
        let scaleDist = 0;
        let found = false;
        while(!found) {
            if(randomWeight <= weights[scaleDist]) {
                found = true;
            }
            else {
                scaleDist++;
            }
        }

        const scalePosChange = descend ? -scaleDist : scaleDist;
        const newScalePos = this.state.scalePos + scalePosChange;

        this.setState({
            ...this.state,
            scalePos: newScalePos,
        })

        this.pn.triggerAttackRelease(this.state.scale[newScalePos],"2n");
    }

    generateProgression = () => {
        const scale = fiveToFive;
        const newKey = Keys[Math.floor(Math.random()*Keys.length)];
        const newScale = Tone.Frequency(newKey+"5").harmonize(scale).map(f => Tone.Frequency(f).toNote());
        const newProgression = ChordProgression.generate(8);
        const newScalePos = Math.floor(Math.random()*scale.length);

        this.setState({
            ...this.state,
            key: newKey, 
            progress: 0, 
            progression: newProgression,
            scale: newScale,
            genChordsOnce: true,
            scalePos: newScalePos,
        });
    }

    toggle = () => {
        this.setState({...this.state, progress: 0});
        if(Tone.Transport.state === "started") {
            this.noise.stop();
            Tone.Transport.stop();
            this.props.toggleWakeLock();
        }
        else {
            Tone.start();
            Tone.Transport.start();
            this.noise.start(0);
            this.chords.start(0);
            this.melody.start(0);
            this.kickLoop.start(0);
            this.snareLoop.start(0);
            this.hatLoop.start(0);
            this.props.toggleWakeLock();
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