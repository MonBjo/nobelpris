import './menuDiagram.scss'

function MenuDiagram() {
    function onChangeValue(event) {
        console.log(event.target.value);
    }

    return (
        <section className="menuDiagram">
            <section className="fakeButton">
                <input type="radio" id="done" value="" name="diagram" />
                <label htmlFor="done">Genomsnittliga prissumman per år</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dtwo" value="" name="diagram" />
                <label htmlFor="dtwo">Antalet pristagare inom de olika kategorierna, för ett valt år</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dthree" value="" name="diagram" />
                <label htmlFor="dthree">Antalet pristagare totalt, fördelat på de olika kategorierna (cirkeldiagram)</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfour" value="" name="diagram" />
                <label htmlFor="dfour">Fördelningen mellan män och kvinnor bland pristagare (cirkeldiagram)</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dfive" value="" name="diagram" />
                <label htmlFor="dfive">Hur många gånger som Nobelpriset delats ut, inom varje kategori</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dsix" value="" name="diagram" />
                <label htmlFor="dsix">Hur många pristagare som kommer från olika länder</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="dseven" value="" name="diagram" />
                <label htmlFor="dseven">De Nobelpristagare som vunnit flest Nobelpris. Visa till exempel topp 10.</label>
            </section>
        </section>
    )
}

export default MenuDiagram;
