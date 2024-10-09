$(document).ready(function () {
	
	// modal 1
	$('.openModal').on('click', () => {
		const userAgent = navigator.userAgent;
		if (userAgent.match(/iPhone|iPad|iPod/)) {
			window.open('https://eml.co/assets/POL_TratatmientoDatos_SI_EML.pdf', '_blank')
		} else {
			$('.modal').css('display', 'flex')
			$('body').css('overflow','hidden')
		}
		document.getElementById('success').classList.remove('disable')
		var rect = document.getElementById("activar");
		var mark = document.getElementById("marco");
		bandera = true;
		rect.style.fill = "#faa22f";
        mark.style.visibility = "visible";
	})

	$('#data').on('click', () => {
		const userAgent = navigator.userAgent;
		if (userAgent.match(/iPhone|iPad|iPod/)) {
			window.open('https://eml.co/assets/POL_TratatmientoDatos_SI_EML.pdf', '_blank')
		} else {
			$('.modal').css('display', 'flex')
			$('body').css('overflow','hidden')
		}
		
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
		$('body').css('overflow','auto')
	})
})
