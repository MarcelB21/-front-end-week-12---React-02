import React from 'react';

function FruitComponent({title, Emoji, Type, fruitQuantity, setFruitQuantity}) {
    return (
        <article className="fruitComponent">
            <h3> {title} {Emoji} </h3>
            <button type={Type} disabled={fruitQuantity===0} onClick={() => setFruitQuantity(fruitQuantity-1)}>-</button>
            <p>aantal : {fruitQuantity}</p>
            <button type={Type} onClick={() => setFruitQuantity(fruitQuantity+1)}>+</button>
        </article>
    );

}

export default FruitComponent;