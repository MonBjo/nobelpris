import './menuAnimation.scss';

interface Props {
    setAnimation: (animation: string) => void;
}

function MenuAnimation({setAnimation}: Props) {
    function onChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
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
                <input type="radio" id="two" value="sneaking" name="animation" />
                <label htmlFor="two">Kameleont gång</label>
            </section>
        </nav>
    )
}

export default MenuAnimation;
