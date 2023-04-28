import React, { useState, useEffect, useRef } from'react';
import { motion } from "framer-motion";
import images from './images';
import './imageTrack.css';

const ImageTrack = () => {

    // Carousel movement
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <div>
            <motion.div ref={carousel} id="image-track" className="home-page">
            <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            id="inner-image-track"
            >
                {images.map(image => {
                return (
                    <motion.div id='image-container'>
                    <img src={image} alt="" key="" draggable="false" />
                    </motion.div>
                    );
                })}
            </motion.div>
            </motion.div>
        </div>
        
    )
}

export default ImageTrack;