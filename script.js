function showPanel(id) {
    document.getElementById(id).style.display = "block";
}

function hidePanel(id) {
    document.getElementById(id).style.display = "none";
}

function convert(a) {
    a = Number(a);
    if (a === 1) {
        var celsius = Number(document.getElementById("celsius1").value);

        var fahrenheit = Number(((9 / 5) * celsius + 32).toFixed(5));
        var kelvin = Number((celsius + 273.15).toFixed(5));

        document.getElementById("fahrenheit1").value = fahrenheit;
        document.getElementById("kelvin1").value = kelvin;
    }

    if (a === 2) {
        var fahrenheit = Number(document.getElementById("fahrenheit2").value);

        var celsius = Number(((fahrenheit - 32) * (5 / 9)).toFixed(5));
        var kelvin = Number((celsius + 273.15).toFixed(5));

        document.getElementById("celsius2").value = celsius;
        document.getElementById("kelvin2").value = kelvin;
    }

    if (a === 3) {
        var kelvin = Number(document.getElementById("kelvin3").value);

        var celsius = Number((kelvin - 273.15).toFixed(5));
        var fahrenheit = Number(((9 / 5) * celsius + 32).toFixed(5));

        document.getElementById("celsius3").value = celsius;
        document.getElementById("fahrenheit3").value = fahrenheit;
    }
}