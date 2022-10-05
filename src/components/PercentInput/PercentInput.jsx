import { useSelector } from "react-redux";
import { values } from "../../constants/initialValues";
import { convertNumberToDischarge } from "../../functions/convertNumber";
import { selectAutoCostValue } from "../../store/main-page/selectors";
import stylesInput from "./styles.module.css";

export const PercentInput = ({unit, inputValue, input, styles, isDisabledInput}) => {
    const autoCost = useSelector((state) => selectAutoCostValue(state));
    const initAutoCostPayment = convertNumberToDischarge(Math.round(autoCost*inputValue/100));
    return (
        <>  
            <div className={[stylesInput.block].join(" ")}>
                <span className={stylesInput.values}>{initAutoCostPayment}</span>
                <span className={stylesInput.rubleUnit}>{values.autoCost.unit}</span>
            </div>
            
            <div className={[stylesInput.percentBlock].join(" ")}>
                <input 
                    type="text" 
                    defaultValue={inputValue + unit} 
                    maxLength="2" ref={input} 
                    className={[styles.input, stylesInput.inputPercent].join(" ")}
                    disabled={isDisabledInput}
                    >
                </input>
            </div>
        </>
        
    );
};