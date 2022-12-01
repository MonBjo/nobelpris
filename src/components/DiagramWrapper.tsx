import './diagramWrapper.scss'
import { useEffect, useRef } from 'react';
import nobelCoin from '../assets/nobel-coin.png';
import nobelTitle from '../assets/nobel-title.svg';
import anime from 'animejs';
import { LineController } from 'chart.js';

interface Props {
    displayDiagram: string;
}

function DiagramWrapper({displayDiagram}: Props) {
    const reference = useRef<HTMLInputElement>(null);
    console.log(reference.current);

    useEffect(() => {
        if(reference.current !== null) {
            console.log(reference.current);
            const refChildren = Array.from(reference.current.children);
            if(!displayDiagram) {
                refChildren[refChildren.length-1].classList.add('display');
            } else {
                
                refChildren.forEach((children: any, id: number) => {
                    if(children.className.includes('display')) {
                        children.classList.add('flip');
                        setTimeout(() => {
                            children.classList.remove('flip');
                        }, 2000);
                    }

                    if(children.id == displayDiagram) {
                        children.classList.add('display');
                    } else {
                        setTimeout(() => {
                            children.classList.remove('display');
                        }, 1500+1500);
                    }
                });

                anime({
                    targets: ['.diagram'],
                    duration: 1500,
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    rotateX: 50,
                    translateZ: -100,
                    endDelay: 1000
                });
                anime({
                    targets: ['.flip'], 
                    easing: 'easeInOutSine',
                    direction: 'alternate',
                    keyframes: [
                        { rotateX: 50, translateZ: -100, duration: 1500 },
                        { rotateY: -180, duration: 2000 }
                    ]
                });
            }
        }
    },[displayDiagram]);

    // anime({
    //     targets: '.animeTitle path',
    //     strokeDashoffset: [anime.setDashoffset, 0],
    //     easing: 'easeInOutSine',
    //     duration: 1500,
    //     delay: function(el, i) { return i * 250 },
    //     direction: 'alternate',
    //     loop: true
    // });

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
