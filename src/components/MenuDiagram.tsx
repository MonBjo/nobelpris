import './menuDiagram.scss'

interface Props {
    setDisplayDiagram: (displayDiagram: string) => void;
}

function MenuDiagram({setDisplayDiagram}: Props) {
    function onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setDisplayDiagram(event.target.value);
    }

    return (
        <section className="menuDiagram" onChange={onChangeValue}>
            <section className="fakeButton">
                <input type="radio" value="firstdiagram" id="done" name="diagram" />
                <label htmlFor="done">Genomsnittliga prissumman per år</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dthree" value="thirddiagram" name="diagram" />
                <label htmlFor="dthree">Antalet pristagare totalt, fördelat på de olika kategorierna</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfour" value="fourthdiagram" name="diagram" />
                <label htmlFor="dfour">Fördelningen mellan män och kvinnor bland pristagare</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfive" value="fifthdiagram" name="diagram" />
                <label htmlFor="dfive">Hur många gånger som Nobelpriset delats ut</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dsix" value="sixthdiagram" name="diagram" />
                <label htmlFor="dsix">Hur många pristagare som kommer från olika länder</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dseven" value="seventhdiagram" name="diagram" />
                <label htmlFor="dseven">De Nobelpristagare som vunnit mer än ett pris</label>
            </section>
        </section>
    )
}

export default MenuDiagram;
