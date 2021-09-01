const buttons = document.querySelectorAll(".btn")
const btnLength = buttons.length
let displayNumbersValue = document.querySelector("#displayNumbers")
let displayValue = document.querySelector("#display")
let arrayOfValues = []
let finNum = NaN
let stepsThrough = 0
let isEqualsPushed = false

function getId(data) {
    return data.id
}

function clear() {
    displayValue.textContent = "";
}

function storeNumber(data) {
    let numbers = data.textContent
    return numbers
}

function operate(array) {
    let finalNum = 0
    if(array.length == 1) {
        finalNum = array[0]
        arrayOfValues = []
        return finalNum
    }
    for(i = 0; i < array.length; i++) {
        if(array[i] === "+") {
            finalNum = (parseFloat(array[(i-1)])) + (parseFloat(array[(i+1)]))
            array.splice((i + 1), 1, finalNum)

        } else if(array[i] === "-") {
            finalNum = (parseFloat(array[(i-1)])) - (parseFloat(array[(i+1)]))
            array.splice(i, 1, finalNum)
            
        } else if(array[i] === "/") {
            finalNum = (parseFloat(array[(i-1)])) / (parseFloat(array[(i+1)]))
            array.splice(i, 1, finalNum)

        } else if(array[i] === "X") {
            finalNum = (parseFloat(array[(i-1)])) * (parseFloat(array[(i+1)]))
            array.splice(i, 1, finalNum)

        } else {

        }
    }
    arrayOfValues = []
    return finalNum
}

function operClick(data) {
    let id = getId(data)
    let text = ""
    let topText = document.createTextNode(displayValue.textContent)

    if(displayValue.textContent.length >= 31 && (id == "zero" || id == "one" || id == "two" || id == "three" || id == "four" || id == "five" || id == "six" || id == "seven" || id == "eight" || id == "nine" || id == "decimal")){
        return
    }

    if(displayValue.textContent == "+" && id != "backspace" || displayValue.textContent == "-" && id != "backspace" || displayValue.textContent == "/" && id != "backspace" || displayValue.textContent == "X" && id != "backspace" ) {
        arrayOfValues.push(storeNumber(displayValue).toString())
        displayNumbersValue.appendChild(topText)
        
        clear()
    }

    switch(id) {
        case "zero":
            text = document.createTextNode("0")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "one":
            text = document.createTextNode("1")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "two":
            text = document.createTextNode("2")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "three":
            text = document.createTextNode("3")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "four":
            text = document.createTextNode("4")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "five":
            text = document.createTextNode("5")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "six":
            text = document.createTextNode("6")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "seven":
            text = document.createTextNode("7")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "eight":
            text = document.createTextNode("8")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "nine":
            text = document.createTextNode("9")
            if(displayValue.textContent === finNum.toString() && stepsThrough == 0) {
                clear()
            }
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            stepsThrough += 1
            break;
        case "multiply":
            arrayOfValues.push(storeNumber(displayValue))
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            displayNumbersValue.appendChild(topText)
                        
            clear()
            text = document.createTextNode("X")
            break;
        case "divide":
            arrayOfValues.push(storeNumber(displayValue))
            displayNumbersValue.appendChild(topText)
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            
            clear()
            text = document.createTextNode("/")
            break;
        case "add":
            arrayOfValues.push(storeNumber(displayValue))
            displayNumbersValue.appendChild(topText)
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            
            clear()
            text = document.createTextNode("+")
            break;
        case "subtract":
            arrayOfValues.push(storeNumber(displayValue))
            displayNumbersValue.appendChild(topText)
            if(isEqualsPushed === true) {
                displayNumbersValue.textContent = ""
                isEqualsPushed = false
            }
            clear()
            text = document.createTextNode("-")
            break;
        case "equals":
            if(displayValue.textContent === finNum.toString()) {
                text = finNum
                stepsThrough = 0
            } else {
                isEqualsPushed = true
                arrayOfValues.push(storeNumber(displayValue))
                finNum = operate(arrayOfValues)
                displayNumbersValue.appendChild(topText)
                clear()
                stepsThrough = 0
                if(isNaN(finNum) == true || finNum == Infinity) {
                    finNum = "That's not a valid operation"
                    text = document.createTextNode(`${finNum}`)
                } else {
                    text = document.createTextNode(`${finNum}`)
                }
            }
            break;
        case "clear":
            clear()
            displayNumbersValue.textContent = ""
            arrayOfValues = []
            break;
        case "decimal":
            if(displayValue.textContent.indexOf(".") > -1 || displayValue.textContent[0] == undefined) {
                return
            }
            text = document.createTextNode(".")
            break
        case "backspace":
            if(displayValue.textContent.length >= 2) {
                displayValue.textContent = displayValue.textContent.slice(0, -1)
            } else if (displayValue.textContent.length == 1 && arrayOfValues.length == 0) {
                displayValue.textContent = ""
                displayNumbersValue.textContent = ""
            } else if (arrayOfValues.length == 0) {
                break       
            } else {
                displayNumbersValue.textContent = "" 
                displayValue.textContent = arrayOfValues[arrayOfValues.length - 1].toString()
                arrayOfValues.pop()
                for(i = 0; i < arrayOfValues.length; i++) {
                    topText = document.createTextNode(arrayOfValues[i])
                    displayNumbersValue.appendChild(topText)
                }
            }
            
    }
        
    if(id == "clear") {
        return
    }

    if(displayNumbersValue.textContent.length >= 40) {
        displayNumbersValue.textContent = displayNumbersValue.textContent.slice(-40, -1)
    }

    if(text !== "") {
        displayValue.appendChild(text)
    }
    displayValue.normalize()
    

}

for(i = 0; i < btnLength; i++) {
    buttons[i].onclick = function(e) {
        operClick(this)
    }
}
