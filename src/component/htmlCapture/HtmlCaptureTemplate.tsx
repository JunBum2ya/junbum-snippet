import React, {useCallback, useReducer, useRef} from "react";
import './HtmlCapture.scss';
import html2canvas from "html2canvas";

const captureReducer = (state: CaptureState, action: CaptureAction): CaptureState => {
    const {phase, x, y} = action;
    switch (phase) {
        case "START":
            return {status: 'PROGRESS', top: y, left: x, width: 0, height: 0};
        case "PROGRESS":
            return {
                status: 'PROGRESS',
                top: Math.min(state.top, y),
                left: Math.min(state.left, x),
                width: Math.abs(x - state.left),
                height: Math.abs(y - state.top)
            };
        case "END":
            return {status: 'DORMANCY', top: 0, left: 0, width: 0, height: 0};
        default:
            return state;
    }
};

export const HtmlCaptureTemplate: React.FC<HtmlCaptureTemplateProps> = ({children, onCapture}) => {

    const [state, dispatch] = useReducer(captureReducer, {status: "DORMANCY", top: 0, left: 0, width: 0, height: 0});

    const htmlCaptureRef = useRef<HTMLDivElement>(null);

    const handleMouseClick = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        if (state.status === 'DORMANCY') {
            dispatch({phase: 'START', x: e.clientX, y: e.clientY});
        } else {
            if (htmlCaptureRef.current) {
                const canvas = await html2canvas(htmlCaptureRef.current, {
                    x: state.left,
                    y: state.top,
                    width: state.width,
                    height: state.height
                });
                if (onCapture) {
                    onCapture(canvas);
                }
                dispatch({phase: 'END', x: e.clientX, y: e.clientY});
            }
        }
    }, [state, onCapture]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (state.status === 'PROGRESS') {
            dispatch({phase: 'PROGRESS', x: e.clientX, y: e.clientY});
        }
    }, [state]);

    return (
        <div ref={htmlCaptureRef} className={`capture_template ${state.status}`} onClick={handleMouseClick}
             onMouseMove={handleMouseMove}>
            {state.status === 'PROGRESS' && <div className={'capture_area'} style={{
                top: `${state.top}px`,
                left: `${state.left}px`,
                width: `${state.width}px`,
                height: `${state.height}px`
            }}></div>}
            {children}
        </div>
    );
};

type HtmlCaptureTemplateProps = {
    children: React.ReactNode;
    onCapture?: (e: HTMLCanvasElement) => void;
};

type CaptureState = {
    status: 'DORMANCY' | 'PROGRESS'
    top: number;
    left: number;
    width: number;
    height: number;
};

type CaptureAction = {
    phase: 'START' | 'PROGRESS' | 'END';
    x: number;
    y: number;
};