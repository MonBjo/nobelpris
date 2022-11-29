import './diagramWrapper.scss'
import alfred from '../assets/alfred-nobel.jpg';

interface Props {
    displayDiagram: string;
}

function DiagramWrapper({displayDiagram}: Props) {
    let diagrams = document.querySelectorAll('.diagram');
    console.log(diagrams);

    // ================ TODO ================ \\
    // Figure out how to work with nodeLists. \\

    return (
        <section className="diagramWrapper">
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
                <h1>Alfred Nobel</h1>
                <img src={alfred} />
                <p>Nobelpriset är årliga internationella utmärkelser, som av tre svenska och en norsk institution tilldelas personer som "gjort mänskligheten den största nytta" inom fysik, kemi, fysiologi eller medicin, litteratur och fredsarbete. Priserna fastställdes av dynamitens uppfinnare, Alfred Nobel, genom hans testamente från 1895, och delades ut första gången 1901. Varje nobelpris anses som den mest prestigefyllda utmärkelsen inom sitt område.</p>
            </section>
        </section>
    )
}

export default DiagramWrapper;
