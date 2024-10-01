let bandera = false;

function toggleCheckbox() {
    var rect = document.getElementById("activar");
    var mark = document.getElementById("marco");

	console.log(rect.style.fill)
    if (!bandera) {
        rect.style.fill = "#faa22f";
        mark.style.visibility = "visible";
        bandera = true;
    } else {
        rect.style.fill = "#3420ff";
        mark.style.visibility = "hidden";
        bandera = false;
    }
}

document.getElementById('activar').addEventListener('click', function () {
	toggleCheckbox()
})