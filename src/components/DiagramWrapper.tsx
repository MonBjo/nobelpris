import './diagramWrapper.scss'
import { useEffect, useRef } from 'react';
import nobelCoin from '../assets/nobel-coin.png';
import nobelTitle from '../assets/nobel-title.svg';
import anime from 'animejs';

interface Props {
    displayDiagram: string;
    animation: string;
}

function DiagramWrapper({displayDiagram, animation}: Props) {
    const reference = useRef<HTMLInputElement>(null);
    // console.log(reference.current);

    useEffect(() => {
        if(reference.current !== null) {
            // console.log(reference.current);
            const refChildren = Array.from(reference.current.children);
            if(!displayDiagram) {
                refChildren[refChildren.length-1].classList.add('display');
            } else {
                
                if(animation == "pages") {
                refChildren.forEach((children: any, id: number) => {
                    if(children.className.includes('display')) {
                        children.classList.add('flip');
                        children.classList.remove('display');
                        setTimeout(() => {
                            children.classList.remove('flip');
                        }, 1500+2000);
                    }

                    if(children.id == displayDiagram) {
                        children.classList.add('display');
                    } else {
                        setTimeout(() => {
                            children.classList.remove('display');
                        }, 1500+2000);
                    }
                });

                anime({
                    targets: ['.display'],
                    duration: 1500,
                    easing: 'easeInCirc',
                    direction: 'alternate',
                    rotateX: 50,
                    rotateZ: 10, 
                    translateZ: -105,
                    endDelay: 1000
                });
                anime({
                    targets: ['.flip'], 
                    direction: 'alternate',
                    keyframes: [
                        { 
                            rotateX: 50,
                            rotateZ: 10, 
                            opacity: 3,
                            translateZ: -100, 
                            easing: 'easeInCirc',
                            duration: 1500 
                        },
                        { 
                            rotateY: -180, 
                            rotateZ: -5, 
                            opacity: 0, 
                            easing: 'easeInOutSine', 
                            duration: 2000 
                        }
                    ]
                });
                } else if(animation == "sneaking") {
                    refChildren.forEach((children: any, id: number) => {
                        if(children.className.includes('display')) {
                            children.classList.add('hide');
                            children.classList.remove('display');
                            setTimeout(() => {
                                children.classList.remove('hide');
                            }, 1500*9);
                        }
    
                        if(children.id == displayDiagram) {
                            children.classList.add('display');
                        } else {
                            setTimeout(() => {
                                children.classList.remove('display');
                            }, 2000);
                        }
                    });

                    anime({
                        targets: ['.display'],
                        direction: 'forwards',
                        // easing: 'easeOutBack',
                        easing: 'easeInBack',
                        keyframes: [
                            {
                                easing: 'easeOutBack',
                                duration: 1,
                                translateX: -4000,
                                translateZ: -1000,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: 15
                            },
                            {
                                duration: 500,
                                translateX: -2500,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -1800,
                                translateZ: -800,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: -15
                            },
                            {
                                duration: 500,
                                translateX: -1400,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -1100,
                                translateZ: -600,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: 15
                            },
                            {
                                duration: 500,
                                translateX: -900,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -800,
                                translateZ: -400,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: -15
                            },
                            {
                                duration: 500,
                                translateX: -700,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -600,
                                translateZ: -200,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: 15
                            },
                            {
                                duration: 500,
                                translateX: -500,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -400,
                                translateZ: 100,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: -15
                            },
                            {
                                duration: 500,
                                translateX: -300,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: -200,
                                translateZ: 150,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: 15
                            },
                            {
                                duration: 500,
                                translateX: -100,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: 0,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: -15
                            },
                            {
                                duration: 500,
                                translateX: 0,
                                scaleX: 0.3,
                                scaleY: 1,
                                skewX: 0
                            },
                            {
                                easing: 'easeOutBack',
                                duration: 1000,
                                translateX: 50,
                                translateZ: 0,
                                scaleX: 0.5,
                                scaleY: 0.7,
                                skewX: 25
                            },
                            {
                                easing: 'cubicBezier(1, 1.7, .77, .8)',
                                // easing: 'cubicBezier(.26, .14, .77, 2)',
                                duration: 800,
                                translateX: 0,
                                scaleX: 1,
                                scaleY: 1,
                                skewX: 0
                            }
                        ]
                    });
                }
            }
        }
    },[displayDiagram]);


    return (
        <section ref={reference} className="diagramWrapper">
            <section className="diagram" id="seventhdiagram">
                diagram 7
            </section>
            <section className="diagram" id="sixthdiagram">
                diagram 6
            </section>
            <section className="diagram" id="fifthdiagram">
                diagram 5
            </section>
            <section className="diagram" id="fourthdiagram">
                diagram 4
            </section>
            <section className="diagram" id="thirddiagram">
                diagram 3
            </section>
            <section className="diagram" id="seconddiagram">
                diagram 2
            </section>
            <section className="diagram" id="firstdiagram">
                diagram 1
            </section>
            <section className="diagram" id="cover">
                <img src={nobelTitle} className="animeTitle" />
                <img src={nobelCoin} className="coin" />
                <p>Nobelpriset är årliga internationella utmärkelser, som av tre svenska och en norsk institution tilldelas personer som "gjort mänskligheten den största nytta" inom fysik, kemi, fysiologi eller medicin, litteratur och fredsarbete. Priserna fastställdes av dynamitens uppfinnare, Alfred Nobel, genom hans testamente från 1895, och delades ut första gången 1901. Varje nobelpris anses som den mest prestigefyllda utmärkelsen inom sitt område.</p>
            </section>
        </section>
    )
}

export default DiagramWrapper;
