let bandera = false;

function toggleCheckbox() {
    var rect = document.getElementById("activar");
    var mark = document.getElementById("marco");

	console.log(rect.style.fill)
    if (!bandera) {
        rect.style.fill = "#faa22f";
        mark.style.visibility = "visible";
        bandera = true;
        document.getElementById('activar').classList.remove('no-check')
    } else {
        rect.style.fill = "#3420ff";
        mark.style.visibility = "hidden";
        document.getElementById('activar').classList.add('no-check')
        bandera = false;
    }
}

setTimeout(() => {
    document.getElementById('activar').addEventListener('click', function () {
        toggleCheckbox()
    })
}, 1000)