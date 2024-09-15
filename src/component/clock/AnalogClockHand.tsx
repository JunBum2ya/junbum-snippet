const AnalogClockHand = (props: AnalogClockHandProps) => {
    return (
        <div className={`hand`} style={{
            transform: `rotate(${(props.seconds * props.speed) + 90}deg)`,
            width: `${props?.style?.width ?? 50}%`,
            height: `${props?.style?.height ?? 6}px`,
            backgroundColor: `${props?.style?.color ?? '#000'}`,
            left: `${50 - (props?.style?.width ?? 0)}%`
        }}></div>
    );
};

type AnalogClockHandProps = {
  seconds: number;
  speed: number;
  style?: AnalogClockHandStyle;
};

type AnalogClockHandStyle = {
  color?: string;
  width?: number;
  height?: number;
};

export default AnalogClockHand;