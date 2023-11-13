function convert() {

    let celsius = parseFloat(document.getElementById('Celsius').value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('Fahrenheit').value = fahrenheit.toFixed(2);

    let fahrenheitInput = parseFloat(document.getElementById('Fahrenheit').value);
    let celsiusInput = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById('Celsius').value = celsiusInput.toFixed(2);
}

