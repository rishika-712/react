import React, { useEffect, useRef } from 'react';
import VIDEO from "./Video.mp4";

const RefExamples = () => {
    const eleRef = useRef();
    const videoRef = useRef(); 

    useEffect(() => {
        if (eleRef.current) {
            eleRef.current.style.color = "teal"; 
            eleRef.current.innerText = "React Ref"; 
        }

        if (videoRef.current) {
            videoRef.current.play(); 
        }
    }, []);

    return (
        <div>
            <h1 ref={eleRef}>RefExamples</h1> 
            <video ref={videoRef} src={VIDEO} controls width="400"></video> 
        </div>
    );
};

export default RefExamples;