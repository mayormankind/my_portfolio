import { Box } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export function Reveal({children}) {

    const ref = useRef(null);
    const controls = useAnimation();
    const overlayControls = useAnimation();
    const InView = useInView(ref, { once: true })

    useEffect(()=>{
        if(InView){
            controls.start('visible')
            overlayControls.start('visible')
        }
    },[InView])
  return (
    <Box ref={ref} pos='relative' w={'fit-content'} overflow='hidden'>
        <motion.div
            variants={{
                hidden:{opacity: 0, y:75},
                visible:{opacity: 1, y:0},
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, delay:0.25}}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden:{ left:0 },
                visible:{ left: '100%'}
            }}
            initial="hidden"
            animate={overlayControls}
            transition={{ duration: 0.5, ease: 'easeIn'}}
            style={{
                position: 'absolute', top: 4, bottom: 4, left: 0, right: 0, background:'#0A6DE4', zIndex: 20,
            }}
        />
    </Box>
  )
}
