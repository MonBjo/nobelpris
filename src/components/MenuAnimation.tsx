import './menuAnimation.scss';

function MenuAnimation() {
  
    return (
        <nav className="menuAnimation">
            <p>Animationsstil</p>
            <section className="fakeButton">
                <input type="radio" id="one" value="aone" name="animation" />
                <label htmlFor="one">Bok</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="two" value="atwo" name="animation" />
                <label htmlFor="two">Toning</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="three" value="athree" name="animation" />
                <label htmlFor="three">Gardiner</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="four" value="" name="animation" />
                <label htmlFor="four">Kort</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="five" value="" name="animation" />
                <label htmlFor="five">Persienner</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="six" value="" name="animation" />
                <label htmlFor="six">Kub</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="seven" value="" name="animation" />
                <label htmlFor="seven">Karusell 1</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="eight" value="" name="animation" />
                <label htmlFor="eight">Karusell 2</label>
            </section>
        </nav>
    )
}

export default MenuAnimation;
