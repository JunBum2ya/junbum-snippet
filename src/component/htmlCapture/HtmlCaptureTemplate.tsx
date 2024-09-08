import React, {useCallback, useState} from "react";
import './HtmlCapture.scss';
import {useLocation} from "react-router-dom";

export const HtmlCaptureTemplate: React.FC<HtmlCaptureTemplateProps> = ({children}) => {

    const [status, setStatus] = useState<CaptureStatus>('DORMANCY');
    const [start, setStart] = useState<LocationType>({x: 0, y: 0});
    const [end, setEnd] = useState<LocationType>({x: 0, y: 0});

    const handleClickTemplate = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (status === 'DORMANCY') {
            setStatus('PROGRESS');
            setStart({x: e.clientX, y: e.clientY});
        } else {
            setStatus('DORMANCY');
        }
    }, [status]);

    const handleMoveTemplate = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (status === 'PROGRESS') {
            setEnd({x: e.clientX, y: e.clientY});
        }
    }, [status]);

    return (
        <div className={`capture_template ${status}`} onClick={handleClickTemplate} onMouseMove={handleMoveTemplate}>
            {status === 'PROGRESS' && <HtmlCaptureArea top={start.y} left={start.x} width={end.x} height={end.y}/>}
            {children}
        </div>
    );
};

const HtmlCaptureArea = (props: HtmlCaptureAreaProps) => {
    return (
        <div className={'capture_area'} style={{
            top: `${props.top}px`,
            left: `${props.left}px`,
            width: `${props.width - props.left}px`,
            height: `${props.height - props.top}px`
        }}></div>
    );
};

type CaptureStatus = 'DORMANCY' | 'PROGRESS';

type LocationType = {
    x: number;
    y: number;
}

type HtmlCaptureTemplateProps = {
    children: React.ReactNode;
};

type HtmlCaptureAreaProps = {
    top: number;
    left: number;
    width: number;
    height: number;
};