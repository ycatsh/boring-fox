/* ==========================================
CURRENCY CONVERSION CONFIG
========================================== */

const apiKey = "";  //Example (put your ExchangeRate-API key here)


// Currency Conversion
const amtElement = document.getElementById('amount1');
const currElement = document.getElementById('currency1');
const convAmtElement = document.getElementById('amount2');
const convCurrElement = document.getElementById('currency2');
const rateElement = document.getElementById('rate');

amtElement.addEventListener('input', convert_currency);
currElement.addEventListener('change', convert_currency);
convCurrElement.addEventListener('change', convert_currency);

function add_currencies(selectElement, options, default_value) {
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;

        if (option === default_value) {
            optionElement.selected = true;
        }

        selectElement.appendChild(optionElement);
    });
}

async function update_currencies() {
    const currencies = ["USD", "EUR", "GBP", "JPY"];

    add_currencies(currElement, currencies, "USD");
    add_currencies(convCurrElement, currencies, "EUR");
}

async function convert_currency() {
    const amt = parseFloat(amtElement.value);
    const curr = currElement.value;
    const convCurr = convCurrElement.value;

    if (isNaN(amt)) {
        convAmtElement.value = '';
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${curr}`);
        const data = await response.json();

        if (data.result === 'error') {
            throw new Error(data['error-type']);
        }

        const rate = data.conversion_rates[convCurr];
        const conv_amt = amt * rate;

        rateElement.innerHTML = ` ${rate}`;
        convAmtElement.value = conv_amt.toFixed(2);
    } 
    catch (error) {
        rateElement.innerHTML = `Error. Check API key.`;
        console.log('Error:', error);
    }
}

// Unit Conversion
const unitInput = document.getElementById('unit-input');
const unitFromSelect = document.getElementById('unit-from');
const unitToSelect = document.getElementById('unit-to');
const unitResult = document.getElementById('unit-result');

function convert_units() {
    const value = parseFloat(unitInput.value.trim());
    const fromUnit = unitFromSelect.value;
    const toUnit = unitToSelect.value;

    if (isNaN(value) || value < 0) {
        unitResult.value = '';
        return;
    }

    const conversionFactors = {
        feet: { meters: 0.3048, centimeters: 30.48, kilometers: 0.0003048, miles: 0.000189394, inches: 12, feet: 1},
        inches: { meters: 0.0254, centimeters: 2.54, kilometers: 0.00002540005, miles: 0.00001578282, inches: 1, feet: 0.0833333},
        centimeters: { meters: 0.01, centimeters: 1, kilometers: 0.00001, miles: 0.0000062137, inches: 0.3937008, feet: 0.0328084},
        meters: { meters: 1, centimeters: 100, kilometers: 0.001, miles: 0.000621371, inches: 39.37008, feet: 3.28084},
        kilometers: { meters: 1000, centimeters: 100000, kilometers: 1, miles: 0.621371, inches: 39370.08, feet: 3280.84},
        miles: { meters: 1609.34, centimeters: 160934, kilometers: 1.60934, miles: 1, inches: 63360.00202752, feet: 5280.00016896},
    };

    const convertedValue = value * conversionFactors[fromUnit][toUnit];
    unitResult.value = `${convertedValue.toFixed(2)}`;
}


// Adds currencies
update_currencies();

// Defaults
unitFromSelect.value = "centimeters";
unitToSelect.value = "feet";

// Listeners
unitInput.addEventListener('input', convert_units);
unitFromSelect.addEventListener('change', convert_units);
unitToSelect.addEventListener('change', convert_units);
