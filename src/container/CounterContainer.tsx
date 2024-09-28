import Counter from "../component/counter/Counter";
import {useSelector} from "react-redux";
import {Todo} from "../modules/todos";
import useActions from "../lib/useActions";
import {decrease, increase} from "../modules/counter/actions";

const CounterContainer = () => {

    const number = useSelector((state: StateType) => state.counter);
    const [onIncrease, onDecrease] = useActions([increase, decrease],[]);

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

type StateType = {
    counter: number;
}

export default CounterContainer;