import { Circle, Flex, keyframes, useColorMode } from '@chakra-ui/react';
import React from 'react'

function BackdropEffect() {
    const {colorMode}=useColorMode();
    const isDark = colorMode==='dark';
    const circleAnimate = keyframes`
        0%{transform:translate(0px)}
        50%{transform:translate(-400px)}
        100%{transform:translate(0px)}
    `;
    const circleAnimate2 = keyframes`
        0%{top:100%; left:0}
        25%{top:50%; left:25%%}
        50%{top:0; left:50%}
        75%{top:50%; left:75%}
        100%{top:100%; left:100%}
    `;
    const circleAnimate3 = keyframes`
        0%{transform:translate(20px)}
        50%{transform:translate(-150px)}
        100%{transform:translate(20px)}
    `;
    const randomSize = () =>{
        let randomNumber = Math.floor(Math.random()* 200);
        let size = randomNumber <= 50 ? `${randomNumber + 70}px` : `${randomNumber}px`;
        return size;
    }
    const randomColor = () =>{
        const Lightcolor =['red.100','blue.100','cyan','green.100','orange','purple.100','yellow']
        const Darkcolor =['red.300','blue.300','cyan','green.300','orange','purple.300','yellow']
        let randomIndex = Math.floor(Math.random()* 6);
        let pickedColor = isDark ? Lightcolor[randomIndex] : Darkcolor[randomIndex];
        return pickedColor;
    }
  return (
    <Flex bg='transparent' opacity={'0.2'} w='100%' h='100%' pos={'absolute'} justify='space-between' top={0}>
        <Circle size={randomSize()} bg={randomColor()} animation={`${circleAnimate} 7s linear infinite`} pos='absolute' top='20%' left='70%'/>
        <Circle size={randomSize()} bg={randomColor()} animation={`${circleAnimate2} 10s linear infinite`} pos='absolute' top='40%' left='20%'/>
        <Circle size={randomSize()} bg={randomColor()} animation={`${circleAnimate3} 9s linear infinite`} pos='absolute' top='70%' left='50%'/>
    </Flex>
  )
}

export default BackdropEffect;
