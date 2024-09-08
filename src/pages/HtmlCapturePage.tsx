import {HtmlCaptureTemplate} from "../component/htmlCapture/HtmlCaptureTemplate";
import Lucid from "../assets/image/lucid.jpg";

const HtmlCapturePage = () => {
    return (
        <div style={{width: '800px', height: '800px', border: `1px #000 solid`}}>
            <HtmlCaptureTemplate>
                <div>
                    <img src={Lucid} alt={`lucid`} style={{width: '100%', height: '100%'}}/>
                </div>
            </HtmlCaptureTemplate>
        </div>
    );
};

export default HtmlCapturePage;