import React, {ChangeEvent, useCallback, useState} from "react";

const RegexInput: React.FC<RegexInputProps> = ({initValue = "", regex, onChange}) => {

    const [value, setValue] = useState<string>("");

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (regex.test(e.target.value) || e.target.value === "") {
            setValue(e.target.value);
            if (onChange) {
                onChange(e);
            }
        }
    }, [regex, onChange]);

    return <input value={value} onChange={handleChange}/>;
};

interface RegexInputProps {
    initValue?: string;
    regex: RegExp;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default RegexInput;