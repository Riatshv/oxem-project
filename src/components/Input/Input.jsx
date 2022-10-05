import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputLayout } from "../InputLayout/InputLayout";
import { BasicInput } from "../BasicInput/BasicInput";
import { PercentInput } from "../PercentInput/PercentInput";
import { convertDischargeNumber, convertNumberToDischarge } from "../../functions/convertNumber";
import { selectSubmitStatus } from "../../store/main-page/selectors";
import { submitStatus } from "../../constants/submitStatus";

export const Input = ({ unit, minimum, maximum, isPercent, change, inputValue}) => {
    const range = useRef(null);
    const filledRange = useRef(null);
    const input = useRef(null);
    const rangeThumb = useRef(null);
    const  dispatch = useDispatch();
    const isDisabledInput = useSelector((state) => selectSubmitStatus(state)) === submitStatus.loading;

    if (input.current) {
        input.current.value = convertNumberToDischarge(inputValue);
        if (isPercent) {
            input.current.value += unit;
        };
    };

    function initFilledRange(inputValue) {
        let widthPercent = (inputValue - minimum)*100/(maximum-minimum);
        if (inputValue < minimum) {
            widthPercent = 0;
        };
        if (inputValue > maximum) {
            widthPercent = 100;
        };
        filledRange.current.style = `width: ${widthPercent}%`;
    };

    function onMove(e) {
        if (isDisabledInput) {
            return;
        };
        const width = range.current.getBoundingClientRect().width;
        const leftBorder = range.current.getBoundingClientRect().x;
        const currentThumbPos = e.pageX - leftBorder;
        let filledRangePercent = currentThumbPos/width*100;
        let number = Math.round(minimum + filledRangePercent*(maximum-minimum)/100);
        if (currentThumbPos >= width) {
            filledRangePercent = 100;
            number = maximum;
        };
        if (currentThumbPos <= 0) {
            filledRangePercent = 0;
            number = minimum;
        };
        filledRange.current.style = `width: ${filledRangePercent}%`;
        dispatch(change(number));
    };

    function onBlur(e) {
        if (isDisabledInput) {
            return;
        };
        blurOn(e.currentTarget);
        let number = convertDischargeNumber(e.currentTarget.value) || inputValue;
        if (number <= minimum) {
            number = minimum; 
        };
        if (number >= maximum) {
            number = maximum;
        };
        e.currentTarget.value = convertNumberToDischarge(number);
        if (isPercent) {
            e.currentTarget.value += unit;
            
        };

        dispatch(change(number));
        initFilledRange(number);
    };
    
    function onInputNumber(e) {
        if (isDisabledInput) {
            return;
        };
        let number = parseInt(e.currentTarget.value.split(' ').join("")) || "";
        if ([1,2,3,4,5,6,7,8,9,0].includes(parseInt(e.data))) {
            if (e.currentTarget.value.length % 4 >= 0) {
                e.currentTarget.value = convertNumberToDischarge(number);
            }; 
            return;
        };
        if (e.data === null) {
            e.currentTarget.value = convertNumberToDischarge(number);
        };
        e.currentTarget.value = e.currentTarget.value.replace(e.data, "");
    };
    
    function onBlurOnEnterKey(e) {
        if (e.key === "Enter") {
            e.currentTarget.blur();
        };
    }

    function onFocus(e) {
        focusOn(e.currentTarget);
    };

    function blurOn(elem) {
        if (isPercent) {
            let percentBlock = elem.parentNode;
            percentBlock.style = "";
            let block = percentBlock.parentNode.parentNode;
            block.style = "";
            let rangeThumb = elem.parentNode.parentNode.nextSibling;
            rangeThumb.style = "height: 1px";
            return;
        };
        let block = elem.parentNode.parentNode;
        block.style = "";
        let rangeThumb = elem.parentNode.nextSibling;
        rangeThumb.style = "height: 2px";
    }

    function focusOn(elem) {
        if (isPercent) {
            let percentBlock = elem.parentNode;
            percentBlock.style = "background-color: white";
            let block = percentBlock.parentNode.parentNode;
            block.style = "background-color: white";
            let rangeThumb = elem.parentNode.parentNode.nextSibling;
            rangeThumb.style = "height: 1px"
            return;
        };
        let block = elem.parentNode.parentNode;
        let rangeThumb = elem.parentNode.nextSibling;
        rangeThumb.style = "height: 1px"
        block.style = "background-color: white"
    }

    useEffect(() => {
        initFilledRange(inputValue);

        rangeThumb.current.ondragstart = (event) => {
            event.preventDefault();
        }; 
        const addDocumentEventListeners = () => {
            focusOn(inputCurrent);

            document.addEventListener("pointermove", onMove);
            document.addEventListener("pointerup", () => {
                blurOn(inputCurrent);
                document.removeEventListener("pointermove", onMove);
            }, {once: true});
        };
        rangeThumb.current.addEventListener("pointerdown", addDocumentEventListeners);
        range.current.addEventListener("click", onMove);
        const thumb = rangeThumb.current;
        const rangeCurrent = range.current;
        const inputCurrent = input.current;

        input.current.addEventListener("blur", onBlur);
        input.current.addEventListener("input", onInputNumber);
        input.current.addEventListener("keydown", onBlurOnEnterKey);
        input.current.addEventListener("focus", onFocus);
        return () => {
            thumb.removeEventListener("pointerdown", addDocumentEventListeners);
            rangeCurrent.removeEventListener("click", onMove);
            inputCurrent.removeEventListener("blur", onBlur);
            inputCurrent.removeEventListener("input", onInputNumber);
            inputCurrent.removeEventListener("keydown", onBlurOnEnterKey);
            inputCurrent.removeEventListener("focus", onFocus);
        };
    }, [isDisabledInput])

    return (
            <InputLayout
                range={range}
                filledRange={filledRange}
                rangeThumb={rangeThumb}
                styles={styles}
                isDisabledInput={isDisabledInput}
            >
                {isPercent ? 
                    <PercentInput
                        styles={styles} 
                        input={input} 
                        unit={unit}
                        inputValue={inputValue}
                        isDisabledInput={isDisabledInput}
                    ></PercentInput>
                    :
                    <BasicInput 
                        styles={styles} 
                        input={input} 
                        unit={unit}
                        inputValue={inputValue}
                        isDisabledInput={isDisabledInput}
                    ></BasicInput>
                }
            </InputLayout>
    )
}