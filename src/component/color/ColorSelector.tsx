import ColorContext from "./ColorContext";
import {useContext} from "react";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const ColorSelector = () => {

    const { action } = useContext(ColorContext);

    return (
        <div>
            <h2>색상을 선택하세요.</h2>
            <div style={{display: 'flex'}}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{background: color, width: '24px', height: '24px', cursor: 'pointer'}}
                        onClick={() => action.setColor(color)}
                        onContextMenu={e => {
                            e.preventDefault();
                            action.setSubColor(color);
                        }}
                    />
                ))}
            </div>
            <hr/>
        </div>
    );
};

export default ColorSelector;