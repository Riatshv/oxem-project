export const convertNumberToDischarge = (number) => {
    let numberString = `${number}`;
    let string = "";
    let k = 0;  

    for (let i = numberString.length - 1; i >=0; i--) {
        if (k % 3 === 0 && k !== 0) {
            string += ` ${numberString[i]}`;
        } else {
            string += `${numberString[i]}`;
        }
        k+=1;
    };

    return [...string].reverse().join("");
};

export const convertDischargeNumber = (numberString) => {
    return parseInt(numberString.split(' ').join("")) || 0
};