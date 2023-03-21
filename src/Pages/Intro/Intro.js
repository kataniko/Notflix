import React from 'react';
import { useTrail, useChain, useSprings, animated, useSpringRef } from '@react-spring/web'
import '../Intro/Intro.css';
import { ContextState } from '../contexts/ContextApi';
import {motion} from 'framer-motion';
import { Typography } from '@mui/joy';

const COORDS = [ 
    [80,30],
    [80,40],
    [80,50],
    [80,60],
    [80,70],
    [80,80],
    [80,90],
    [80,100],
    [80,110],
    [80,120],
    [80,130],
    [80,140],
    [80,150],
    [80,160],
    [90,160],
    [100,160],
    [110,160],
    [120,160],
    [130,30],
    [130,40],
    [130,50],
    [130,100],
    [130,110],
    [130,120],
    [130,130],
    [130,140],
    [130,150],
    [130,160],
    [120,30],
    [110,30],
    [100,30],
    [90,30],
    [130,110],
    [140,120],
    [150,130],
    [160,140],
    [170,150],
    [180,160],
    [190,160],
    [200,160],
    [210,160],
    [220,30],
    [220,40],
    [220,50],
    [220,60],
    [220,70],
    [220,80],
    [220,90],
    [220,100],
    [220,110],
    [220,120],
    [220,130],
    [220,140],
    [220,150],
    [220,160],
    [140,50],
    [150,60],
    [160,70],
    [170,80],
    [180,30],
    [190,30],
    [200,30],
    [210,30],
    [180 , 40],
    [180 ,50],
    [180 , 60],
    [180 , 70],
    [180 , 80],
    

 ]


const STROKE_WIDTH = 0.2;

const OFFSET = STROKE_WIDTH / 1;

const MAX_WIDTH = 300 + OFFSET * 2;
const MAX_HEIGHT = 200 + OFFSET * 2;

function Intro() {
    const { estado, setEstado } = ContextState();

    const gridApi = useSpringRef();

    const gridSprings = useTrail(32, {
        ref: gridApi,
        from: {
            x2: 0,
            y2: 0,
        },
        to: {
            x2: MAX_WIDTH,
            y2: MAX_HEIGHT,
        },
    });

    const boxApi = useSpringRef();

    const [boxSprings] = useSprings(COORDS.length, i => ({

        ref: boxApi,
        from: {
            scale: 0,
        },
        to: {
            scale: 0.7,
        },
        delay: i * 100,
        config: {
            mass: 2,
            tension: 220,
        },

    }));

    useChain([gridApi, boxApi], [0, 1], 1500);

    

    return (
        <motion.div initial={{z: 0,opacity: 0,scale: 3,}} animate={{ x: 0,opacity: 1,scale: 1,}} transition={{duration: 5,}} className='background-containerr'>
            <div className='containerr' onClick={() => setEstado(true)}>
                <svg className='box' viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
                    <g>
                        {gridSprings.map(({ x2 }, index) => (
                            <animated.line
                                x1={0}
                                y1={index * 10 + OFFSET}
                                x2={x2}
                                y2={index * 10 + OFFSET}
                                key={index}
                                strokeWidth={STROKE_WIDTH}
                                stroke="currentColor"
                            />
                        ))}
                        {gridSprings.map(({ y2 }, index) => (
                            <animated.line
                                x1={index * 10 + OFFSET}
                                y1={0}
                                x2={index * 10 + OFFSET}
                                y2={y2}
                                key={index}
                                strokeWidth={STROKE_WIDTH}
                                stroke="currentColor"
                            />
                        ))}
                    </g>
                    {boxSprings.map(({ scale }, index) => (
                        <animated.rect
                            key={index}
                            width={10}
                            height={10}
                            fill="currentColor"
                            style={{
                                transformOrigin: `${5 + OFFSET * 2}px ${5 + OFFSET * 2}px`,
                                transform: `translate(${COORDS[index][0] + OFFSET}px, ${COORDS[index][1] + OFFSET}px)`,
                                scale,
                            }}
                        />
                    ))}
                </svg>
            </div>
        </motion.div>
    );
}

export default Intro;
