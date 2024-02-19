import config from "../config.js";

const amt_element = document.getElementById('amount1');
const curr_element = document.getElementById('currency1');
const conv_amt_element = document.getElementById('amount2');
const conv_curr_element = document.getElementById('currency2');
const rate_element = document.getElementById('rate');

const api_key = config.curr_api_key;

amt_element.addEventListener('input', convert_currency);
curr_element.addEventListener('change', convert_currency);
conv_curr_element.addEventListener('change', convert_currency);


function add_currencies(select_element, options, default_value) {
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;

        if (option === default_value) {
            optionElement.selected = true;
        }

        select_element.appendChild(optionElement);
    });
}

async function update_currencies() {
    const currencies = ["USD", "INR", "EUR", "GBP", "JPY"];

    add_currencies(curr_element, currencies, "USD");
    add_currencies(conv_curr_element, currencies, "JPY");
}

async function convert_currency() {
    const amt = parseFloat(amt_element.value);
    const curr = curr_element.value;
    const conv_curr = conv_curr_element.value;

    if (isNaN(amt)) {
        conv_amt_element.value = '';
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${curr}`);
        const data = await response.json();

        if (data.result === 'error') {
            throw new Error(data['error-type']);
        }

        const rate = data.conversion_rates[conv_curr];
        const conv_amt = amt * rate;

        rate_element.innerHTML = ` ${rate}`;
        conv_amt_element.value = conv_amt.toFixed(2);
    } 
    catch (error) {
        console.log('Error:', error);
    }
}

update_currencies();