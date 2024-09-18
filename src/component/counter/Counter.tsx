import React from "react";

const Counter: React.FC<CounterProps> = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

type CounterProps = {
    number: number;
    onIncrease: () => void;
    onDecrease: () => void;
};

export default Counter;