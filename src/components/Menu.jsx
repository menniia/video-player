import React from "react";

const Menu = ({ onSelectVideo }) => {
    const clickHandler = event => {
        const name = event.target.value;
        onSelectVideo(name);
    }
    return (
        <form action="#" onClick={clickHandler}>
            <input type="radio" name="src" value="fast" /> Fast
            <input type="radio" name="src" value="slow" /> Slow
            <input type="radio" name="src" value="cute" /> Cute
            <input type="radio" name="src" value="eek" /> Eek
        </form>
    )
}

export default Menu;