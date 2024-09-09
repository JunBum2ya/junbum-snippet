import {HtmlCaptureTemplate} from "../component/htmlCapture/HtmlCaptureTemplate";
import Lucid from "../assets/image/lucid.jpg";
import {useCallback, useState} from "react";

const HtmlCapturePage = () => {

    const [captureImage, setCaptureImage] = useState<string | null>(null);

    const handleCapture = useCallback((canvas: HTMLCanvasElement) => {
        setCaptureImage(canvas.toDataURL('image/png', 'capture.png'));
    },[]);

    return (
        <div id={`test`} style={{backgroundColor: '#4d5',width: '800px', height: '800px', border: `1px #000 solid`}}>
            <HtmlCaptureTemplate onCapture={handleCapture}>
                <div>
                    <img src={Lucid} alt={`lucid`} style={{width: '100%', height: '100%'}}/>
                </div>
            </HtmlCaptureTemplate>
            {captureImage && <img src={captureImage} alt={`capture`}/>}
        </div>
    );
};

export default HtmlCapturePage;