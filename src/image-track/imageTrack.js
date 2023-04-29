import React, { useState, useEffect, useRef } from'react';
import { motion } from "framer-motion";
import { projects } from './projects/data';
import './imageTrack.css';

const ImageTrack = () => {

    // Carousel movement
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    // Carousel cards
    const [isOpen, setIsOpen] = useState(false);

    // Page html
    return (
        <div>
            {/* Carousel container */}
            <motion.div ref={carousel} id="image-track" className="home-page">
                {/* Image container */}
                <motion.div 
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    id="inner-image-track"
                >
                    {/* Images */}
                    {projects.map((project) => {
                    return (
                        <motion.div id='image-container'>
                            <img src={project.image2} alt="" key="" draggable="false" />
                        </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
        
    )
}

export default ImageTrack;