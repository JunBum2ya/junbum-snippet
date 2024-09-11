import React, {createContext, useState} from "react";

const ColorContext = createContext<ColorContextType>({
    state: {color: 'black', subColor: 'red'}, action: {
        setColor: (value: string) => {},
        setSubColor: (value: string) => {}
    }
});

const ColorProvider = ({ children }: ColorProviderType) => {
    const [color, setColor] = useState('black');
    const [subColor, setSubColor] = useState("red");

    const value: ColorContextType = {
        state: { color, subColor },
        action: {setColor, setSubColor}
    }

    return (
      <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

type ColorContextType = {
    state: {
        color: string;
        subColor: string;
    };
    action: {
        setColor: (value: string) => void;
        setSubColor: (value: string) => void;
    }
};

type ColorProviderType = {
    children: React.ReactNode;
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;