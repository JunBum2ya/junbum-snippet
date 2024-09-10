import React, {useCallback, useReducer, useRef} from "react";
import './HtmlCapture.scss';
import html2canvas from "html2canvas";

const captureReducer = (state: CaptureState, action: CaptureAction): CaptureState => {
    const {phase, x, y} = action;
    switch (phase) {
        case "START":
            return {status: "PROGRESS", startX: x, startY: y, endX: x, endY: y};
        case "PROGRESS":
            return {status: "PROGRESS", startX: state.startX, startY: state.startY, endX: x, endY: y}
        case "END":
            return {status: "DORMANCY", startX: 0, startY: 0, endX: 0, endY: 0};
        default:
            return state;
    }
};

export const HtmlCaptureTemplate: React.FC<HtmlCaptureTemplateProps> = ({children, onCapture}) => {

    const [state, dispatch] = useReducer(captureReducer, {status: "DORMANCY", startX: 0, startY: 0, endX: 0, endY: 0});

    const htmlCaptureRef = useRef<HTMLDivElement>(null);

    const handleMouseClick = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        if (state.status === 'DORMANCY') {
            dispatch({phase: 'START', x: e.clientX, y: e.clientY});
        } else {
            if (htmlCaptureRef.current) {
                const canvas = await html2canvas(htmlCaptureRef.current, {
                    x: Math.min(state.startX, state.endX),
                    y: Math.min(state.startY, state.endY),
                    width: Math.abs(state.endX - state.startX),
                    height: Math.abs(state.endY - state.startY)
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
                top: `${Math.min(state.startY, state.endY)}px`,
                left: `${Math.min(state.startX, state.endX)}px`,
                width: `${Math.abs(state.endX - state.startX)}px`,
                height: `${Math.abs(state.endY - state.startY)}px`
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
    status: 'DORMANCY' | 'PROGRESS';
    startX: number;
    startY: number;
    endX: number;
    endY: number;
}

type CaptureAction = {
    phase: 'START' | 'PROGRESS' | 'END';
    x: number;
    y: number;
};