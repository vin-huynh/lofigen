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
            {freqs.map((v,i) => {

                const height = Math.max(3*(69+0.5*v),10); 
                return(
                    <div key={i}
                        className="freqBar"
                        style={{
                            height: `${height}px`,
                        }}>
                        
                    </div>);
            })}
        </div>
    );
};

export default Visualizer;