function splitString(input) {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string]
}
function checkDiv(number) {
  let arrNum = number.split('/');
  if(arrNum.length > 2) {
    return false
  } else {
    return arrNum
  }
}

function ConvertHandler() {

  this.getNum = function(input) {
    let result = splitString(input)[0];
    let num = checkDiv(result);
    if(!num) {
      return undefined
    }
    let num1 = num[0];
    let num2 = num[1] || "1";
    if(isNaN(num1) || isNaN(num2)) {
      return undefined
    }
    result = parseFloat(num1) / parseFloat(num2);
    return result;
  };

  this.getUnit = function(input) {
    let result = splitString(input)[1].toLowerCase();
    switch(result) {
      case "l":
        return "L";
      case "gal":
        return "gal";
      case "mi":
        return "mi";
      case "km":
        return "km";
      case "lbs":
        return "lbs";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result = initUnit.toLowerCase();
    switch(result) {
      case "l":
        return "gal";
      case "gal":
        return "L";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();
    switch(result) {
      case "l":
        return "liters";
      case "gal":
        return "gallons";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return "no answer";
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = initUnit.toLowerCase();
    switch(result) {
      case "l":
        result = initNum / galToL;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;
