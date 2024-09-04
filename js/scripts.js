
document.getElementById('cerrarsesion').addEventListener('click', function () {
	console.log('tegg')
	window.localStorage.clear()
	window.location.href = './sesion.html'
})
