const rgbValue = document.querySelector('#rgb-value');
const hexValue = document.querySelector('#hex-value');
const colorInput = document.querySelector('#color-input');

function updateColor(color) {

    const hex = color.substring(1);
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    rgbValue.textContent = `RGB: ${r}, ${g}, ${b}`;
    hexValue.textContent = `HEX: ${color.toUpperCase()}`;
}

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    updateColor(color);
});

updateColor(colorInput.value);