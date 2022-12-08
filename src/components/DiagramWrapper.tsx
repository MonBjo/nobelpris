import './diagramWrapper.scss'
import { useEffect, useRef } from 'react';
import nobelCoin from '../assets/nobel-coin.png';
import nobelTitle from '../assets/nobel-title.svg';
import anime from 'animejs';
import { Pie, Bar, Line, PolarArea, Doughnut } from 'react-chartjs-2';
import { 
    yearlyPriceMoneyDiagramData, 
    categoryDiagramData, 
    
    genderDiagramData, 
    lauretsCategoryDiagramData,
    countryDiagramData,
    mostAwardsDiagramData
} from './data.ts';

interface Props {
    displayDiagram: string;
    animation: string;
}

function DiagramWrapper({displayDiagram, animation}: Props) {
    const reference = useRef<HTMLInputElement>(null);
    const totalPrices = categoryDiagramData.datasets[0].data.reduce((addedSum: any, newSum: any) => addedSum + newSum, 0);
    const totalLauretes = lauretsCategoryDiagramData.datasets[0].data.reduce((addedSum: any, newSum: any) => addedSum + newSum, 0);

    useEffect(() => {
        if(reference.current !== null) {
            const refChildren = Array.from(reference.current.children);

            if(!displayDiagram) {
                refChildren[0].classList.add('display');
            } else {
                if(animation == "pages") {
                    const bookRaiseTimeDelay: number = 1000;
                    const bookFallbackTime: number = 1500;
                    const pageFlipTime: number = 2000;

                    refChildren.forEach((children: any, id: number) => {
                        if(children.className.includes('display')) {
                            children.classList.add('flip');
                            children.classList.remove('display');
                            setTimeout(() => {
                                children.classList.remove('flip');
                            }, bookFallbackTime + pageFlipTime);
                        }

                        if(children.id == displayDiagram) {
                            children.classList.add('display');
                        } else {
                            setTimeout(() => {
                                children.classList.remove('display');
                            }, bookFallbackTime + pageFlipTime);
                        }
                    });

                    anime({
                        targets: ['.display'],
                        duration: bookFallbackTime,
                        easing: 'easeInCirc',
                        direction: 'alternate',
                        rotateX: 50,
                        rotateZ: 10, 
                        translateZ: -105,
                        endDelay: bookRaiseTimeDelay
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
                                duration: bookFallbackTime 
                            },
                            { 
                                rotateY: -180, 
                                rotateZ: -2, 
                                translateX: 15,
                                opacity: 0, 
                                easing: 'easeInOutSine', 
                                duration: pageFlipTime 
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
            <section className="diagram" id="cover">
                <img src={nobelTitle} className="animeTitle" />
                <img src={nobelCoin} className="coin" />
                <p>Nobelpriset är årliga internationella utmärkelser, som av tre svenska och en norsk institution tilldelas personer som "gjort mänskligheten den största nytta" inom fysik, kemi, fysiologi eller medicin, litteratur och fredsarbete. Priserna fastställdes av dynamitens uppfinnare, Alfred Nobel, genom hans testamente från 1895, och delades ut första gången 1901. Varje nobelpris anses som den mest prestigefyllda utmärkelsen inom sitt område. </p>
            </section>
            
            <section className="diagram" id="firstdiagram">
                <p>Genomsnittliga prissumman per år</p>
                <Line data={yearlyPriceMoneyDiagramData} datasetIdKey='id' />
            </section>

            <section className="diagram" id="thirddiagram">
                <p>{totalLauretes} personer har tagit emot nobelpriset</p>
                <Pie data={lauretsCategoryDiagramData}/>
            </section>
            
            <section className="diagram" id="fourthdiagram">
                <p>Fördelningen mellan män och kvinnor bland pristagare</p>
                <Pie data={genderDiagramData} />
            </section>
            
            <section className="diagram" id="fifthdiagram">
                <p>Nobelpriset har delats ut {totalPrices} gånger</p>
                <Bar data={categoryDiagramData} />
            </section>
            
            <section className="diagram" id="sixthdiagram">
                <p>Vilka länder pristagarna kommer ifrån, med minst 3.</p>
                <Doughnut data={countryDiagramData} />
            </section>

            <section className="diagram" id="seventhdiagram">
                <p>De Nobelpristagare som vunnit mer än ett pris</p>
                <PolarArea data={mostAwardsDiagramData} />
            </section>
        </section>
    )
}

export default DiagramWrapper;
