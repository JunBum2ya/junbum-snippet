import './AnalogClock.scss';
import {useEffect, useState} from "react";
import AnalogClockHand from "./AnalogClockHand";

const AnalogClock = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSeconds(s => s + 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [seconds]);

    return (
        <div className={`clock_container`}>
            <div className={`clock_content`}>
                <div className={`analog_clock`}>
                    <AnalogClockHand seconds={seconds} speed={1 / 600} style={{width: 35, height: 8}}/>
                    <AnalogClockHand seconds={seconds} speed={1 / 10} style={{width: 45}}/>
                    <AnalogClockHand seconds={seconds} speed={6} style={{width: 50, height: 2, color: '#C00'}}/>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;