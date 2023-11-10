function convertTemperature() {
    // Get the temperature in Celsius
    var celsius = parseFloat(document.getElementById('celsius').value);

    // Check if the input is a valid number
    if (isNaN(celsius)) {
        alert('Please enter a valid number for Celsius temperature.');
        return;
    }

    // Convert Celsius to Fahrenheit and Kelvin
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;

    // Display the result
    var resultText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>Kelvin: ${kelvin.toFixed(2)}K`;
    document.getElementById('result').innerHTML = resultText;
}
