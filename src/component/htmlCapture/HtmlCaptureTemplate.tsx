import React, {useCallback, useRef, useState} from "react";
import './HtmlCapture.scss';
import html2canvas from "html2canvas";

export const HtmlCaptureTemplate: React.FC<HtmlCaptureTemplateProps> = ({children, onCapture}) => {

    const htmlCaptureRef = useRef<HTMLDivElement>(null);

    const [status, setStatus] = useState<CaptureStatus>('DORMANCY');
    const [start, setStart] = useState<LocationType>({x: 0, y: 0});
    const [end, setEnd] = useState<LocationType>({x: 0, y: 0});

    const handleMouseClick = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        if (status === 'DORMANCY') {
            setStatus('PROGRESS');
            setStart({x: e.clientX, y: e.clientY});
        } else {
            if (htmlCaptureRef.current) {
                await html2canvas(htmlCaptureRef.current, {
                    x: start.x,
                    y: start.y,
                    width: end.x - start.x,
                    height: end.y - start.y
                }).then(canvas => {
                    if (onCapture) {
                        onCapture(canvas);
                    }
                });
                setStatus('DORMANCY');
            }
        }
    }, [status, onCapture]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (status === 'PROGRESS') {
            setEnd({x: e.clientX, y: e.clientY});
        }
    }, [status]);

    return (
        <div ref={htmlCaptureRef} className={`capture_template ${status}`} onClick={handleMouseClick} onMouseMove={handleMouseMove}>
            {status === 'PROGRESS' && <div className={'capture_area'} style={{
                top: `${start.y}px`,
                left: `${start.x}px`,
                width: `${end.x - start.x}px`,
                height: `${end.y - start.y}px`
            }}></div>}
            {children}
        </div>
    );
};

type CaptureStatus = 'DORMANCY' | 'PROGRESS';

type LocationType = {
    x: number;
    y: number;
}

type HtmlCaptureTemplateProps = {
    children: React.ReactNode;
    onCapture?: (e: HTMLCanvasElement) => void;
};