import React, {useCallback, useEffect, useRef, useState} from "react";
import './SelectBox.scss';

const SelectBox: React.FC<SelectBoxProps> = ({data, onChange, placeHolder}) => {

    const selectRef = useRef<HTMLDivElement>(null);

    const [value, setValue]
        = useState<{ value: string, label: string }>({
        value: placeHolder ? "" : data[0].value,
        label: placeHolder ? placeHolder : data[0].label
    });
    const [open, setOpen] = useState<boolean>(false);

    const handleItemClick = useCallback((targetValue: string, targetLabel: string) => {
        setValue({value: targetValue, label: targetLabel});
        if (onChange) {
            onChange(targetValue);
        }

    }, [onChange]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (e.target && selectRef.current && !selectRef.current.contains(e.target as HTMLDivElement)) {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [handleClickOutside]);

    return (
        <div ref={selectRef} className={`select_box${open ? " open" : ''}`} onClick={() => setOpen(!open)}>
            <div className={"text"}>{value.label}<i className={'arrow'}></i></div>
            <div className={`menu`}>
                {
                    data.map((item, index) =>
                        <div key={index} className={`item ${item.value === value.value ? 'selected' : ''}`}
                             onClick={() => handleItemClick(item.value, item.label)}>
                            {item.label}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

interface SelectBoxProps {
    data: { label: string, value: string }[];
    placeHolder?: string;
    onChange?: (value: string) => void;
}

export default SelectBox;