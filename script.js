const calculateTemp = () => {
    const iT = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    
    const kelToCel = (kel) => {
        let celsius = (kel - 273.15).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(iT) + "&#176; Fahrenheit";
    }
    else if(valueTemp == 'fah') {
        document.getElementById("result").innerHTML = fahToCel(iT) + "&#176; Celsius";
    }
    else{
        document.getElementById("result").innerHTML = kelToCel(iT) + " Celsius";
    }
}

