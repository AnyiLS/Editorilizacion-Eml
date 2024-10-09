$(document).ready(function () {
	
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'flex')
		document.getElementById('success').classList.remove('disable')
		var rect = document.getElementById("activar");
		var mark = document.getElementById("marco");
		bandera = true;
		rect.style.fill = "#faa22f";
        mark.style.visibility = "visible";
	})

	$('#data').on('click', () => {
		$('.modal').css('display', 'flex')
		document.getElementById('success').classList.remove('disable')
		var rect = document.getElementById("activar");
		var mark = document.getElementById("marco");
		bandera = true;
		rect.style.fill = "#faa22f";
        mark.style.visibility = "visible";
	})
	// cerra modal 1
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})
})
