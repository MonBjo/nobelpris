import './menuAnimation.scss';

interface Props {
    setAnimation: (animation: string) => void;
}

function MenuAnimation({setAnimation}: Props) {
    function onChangeValue(event) {
        console.log(event.target.value);
        setAnimation(event.target.value);
    }

    return (
        <nav className="menuAnimation" onChange={onChangeValue}>
            <p>Animationsstil</p>
            <section className="fakeButton">
                <input type="radio" id="one" value="pages" name="animation" defaultChecked={true} />
                <label htmlFor="one">Bläddra</label>
            </section>
            <section className="fakeButton">
                <input type="radio" id="three" value="sneaking" name="animation" />
                <label htmlFor="three">Kameleont gång</label>
            </section>
        </nav>
    )
}

export default MenuAnimation;
