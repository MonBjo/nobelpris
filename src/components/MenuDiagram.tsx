import './menuDiagram.scss'

interface Props {
    setDisplayDiagram: (displayDiagram: string) => void;
}

function MenuDiagram({setDisplayDiagram}: Props) {
    function onChangeValue(event) {
        console.log(event.target.value);
        setDisplayDiagram(event.target.value);
    }

    return (
        <section className="menuDiagram" onChange={onChangeValue}>
            <section className="fakeButton">
                <input type="radio" value="firstdiagram" id="done" name="diagram" />
                <label htmlFor="done">Genomsnittliga prissumman per år</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dtwo" value="seconddiagram" name="diagram" />
                <label htmlFor="dtwo">Antalet pristagare inom de olika kategorierna, för ett valt år</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dthree" value="thirddiagram" name="diagram" />
                <label htmlFor="dthree">Antalet pristagare totalt, fördelat på de olika kategorierna (cirkeldiagram)</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfour" value="fourthdiagram" name="diagram" />
                <label htmlFor="dfour">Fördelningen mellan män och kvinnor bland pristagare (cirkeldiagram)</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfive" value="fifthdiagram" name="diagram" />
                <label htmlFor="dfive">Hur många gånger som Nobelpriset delats ut, inom varje kategori</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dsix" value="sixthdiagram" name="diagram" />
                <label htmlFor="dsix">Hur många pristagare som kommer från olika länder</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dseven" value="seventhdiagram" name="diagram" />
                <label htmlFor="dseven">De Nobelpristagare som vunnit flest Nobelpris. Visa till exempel topp 10.</label>
            </section>
        </section>
    )
}

export default MenuDiagram;
