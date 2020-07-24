import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

const fft = new Tone.FFT(16);

const Visualizer = (props) => {

    const [freqs,setFreqs] = useState([...fft.getValue()]);
    const reqRef = useRef();

    const animate = () => {
        setFreqs([...fft.getValue()]);
        reqRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        props.audio.connect(fft);

        reqRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(reqRef.current);
    }, []);

    return (
        <div className="freqList">
            {freqs.map((f,i) => 
                <div key={i}
                     className="freqBar"
                     style={{
                         height: `${150+f}px`,
                     }}>
                    
                </div>)
            }
        </div>
    );
};

export default Visualizer;