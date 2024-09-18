$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'flex')
	})
	// cerra modal 1
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})
})
