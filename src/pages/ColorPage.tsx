import {ColorProvider} from "../component/color/ColorContext";
import ColorBox from "../component/color/ColorBox";
import ColorSelector from "../component/color/ColorSelector";

const ColorPage = () => {
    return (
        <ColorProvider>
            <div>
                <ColorSelector/>
                <ColorBox/>
            </div>
        </ColorProvider>
    );
};

export default ColorPage;