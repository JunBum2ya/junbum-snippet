import React, {useState} from "react";
import './SelectBox.scss';

const SelectBox: React.FC<SelectBoxProps> = ({data, onChange, placeHolder}) => {

    const [value, setValue]
        = useState<{value: string, label: string}>({value: placeHolder ? "" : data[0].value, label: placeHolder ? placeHolder : data[0].label});
    const [open, setOpen] = useState<boolean>(false);

    const handleItemClick = (targetValue: string, targetLabel: string) => {
        setValue({ value: targetValue, label: targetLabel });
        if(onChange) {
            onChange(targetValue);
        }
    }

    return (
        <div className={`select_box`} onClick={() => setOpen(!open)}>
            <div className={"text"}>{value.label}</div>
            <div className={`menu${open ? " open" : ""}`}>
                {
                    data.map((item, index) =>
                        <div key={index} className={`item`} onClick={() => handleItemClick(item.value, item.label)}>
                            {item.label}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

interface SelectBoxProps {
    data: { label: string, value: string}[];
    placeHolder?: string;
    onChange?: (value: string) => void;
}

export default SelectBox;