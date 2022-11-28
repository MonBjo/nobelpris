import './diagramWrapper.scss'
import alfred from '../assets/alfred-nobel.jpg';

function DiagramWrapper() {
  
    return (
        <section className="diagramWrapper">
            <section className="cover">
                <p>Alfred Nobel</p>
                <img src={alfred} />
            </section>
            <section>diagram 1</section>
            <section>diagram 2</section>
            <section>diagram 3</section>
            <section>diagram 4</section>
            <section>diagram 5</section>
            <section>diagram 6</section>
        </section>
    )
}

export default DiagramWrapper;
