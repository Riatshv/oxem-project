import { convertNumberToDischarge } from "../../functions/convertNumber";

export const BasicInput = ({unit, inputValue, input, styles, isDisabledInput}) => {
    let inputValueString = convertNumberToDischarge(inputValue);
    return (
        <>
            <input 
                type="text" 
                defaultValue={inputValueString} 
                ref={input} 
                maxLength = "12" 
                className={[styles.input].join("")}
                disabled={isDisabledInput}
            ></input>
            <span>{unit}</span>
        </>
        
    );
};