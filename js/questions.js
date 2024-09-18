let responseQuestion1 = null

let questions = null

console.log('questions', question)

const handleSetListeners = () => {
	
	articleBySections[question].options.forEach((item, index) => {
		const id = `responseQuestion${articleBySections[question].id}${letters[index]}`
		document.getElementById(id).addEventListener('click', () => {
			questions = articleBySections[question].id
			responseQuestion1 = letters[index]
			const idRadio = `radio-buttom-${letters[index].toLowerCase()}`
			const arrayLetters = letters.filter(
				(item) =>
					item !== articleBySections[question] &&
					item !== letters[index]
			)

			arrayLetters.forEach((item) => {
				const idRadio = `radio-buttom-${item.toLowerCase()}`
				document.getElementById(idRadio).style =
					'border:1px solid #fff'

				document.getElementById(
					`bar-${item.toLowerCase()}`
				).style.background = '#fff'

				document.getElementById(
					`radio-botton-${item.toLowerCase()}`
				).style = 'background: #bbb8b4;'
			})

			document.getElementById(idRadio).style.border = '3px solid #F9A12F'
			document.getElementById(
				`radio-botton-${letters[index].toLowerCase()}`
			).style = 'display: block; background: #F9A12F;'

			document.getElementById(
				`bar-${letters[index].toLowerCase()}`
			).style.background = '#F9A12F'
		})
	})
}

document.getElementById('button-next-article').addEventListener('click', () => {
	
	handleChangeQuestion();
	handleSetListeners();
	if (question !== 3) document.getElementById('button-next-article').setAttribute('disabled', 'true')
})



document.addEventListener('DOMContentLoaded', () => {
	handleSetListeners()
})
// Preguntas # 1
// document.addEventListener('Dom', () => {
// handleSetListeners()
// document
// 	.getElementById('responseQuestion1A')
// 	.addEventListener('click', () => {
// 		responseQuestion1 = 'A'
// 		questions = 1

// 		document.getElementById('radio-buttom-a').style.background =
// 			'#1861ab'
// 	})

// document
// 	.getElementById('responseQuestion1B')
// 	.addEventListener('click', () => {
// 		responseQuestion1 = 'B'
// 		questions = 1

// 		document.getElementById('radio-buttom-b').style.background =
// 			'#1861ab'
// 	})

// document
// 	.getElementById('responseQuestion1C')
// 	.addEventListener('click', () => {
// 		responseQuestion1 = 'C'
// 		questions = 1

// 		document.getElementById('radio-buttom-c').style.background =
// 			'#1861ab'
// 	})

// document
// 	.getElementById('responseQuestion1D')
// 	.addEventListener('click', () => {
// 		responseQuestion1 = 'D'
// 		questions = 1

// 		document.getElementById('radio-buttom-d').style.background =
// 			'#1861ab'
// 	})
// })
// Preguntas # 1

document.getElementById('boton-1').addEventListener('click', () => {
	let token = JSON.parse(localStorage.getItem('token')).data.token

	let formData = new FormData()

	formData.append('question', questions)
	formData.append('response', responseQuestion1)

	fetch(
		'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/save-question',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		}
	)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('button-next-article').removeAttribute('disabled')
			const correct = articleBySections[question].correct
			if (correct !== responseQuestion1) {
				const idRadio = `radio-buttom-${responseQuestion1.toLowerCase()}`
				document.getElementById(idRadio).style =
					'border:1px solid #D50000'

				document.getElementById(
					`bar-${responseQuestion1.toLowerCase()}`
				).style.background = '#D50000'

				document.getElementById(
					`radio-botton-${responseQuestion1.toLowerCase()}`
				).style = 'background: #D50000;'
			}

			const idRadio = `radio-buttom-${correct.toLowerCase()}`
			document.getElementById(idRadio).style = 'border:1px solid #1a8f1f'

			document.getElementById(
				`bar-${correct.toLowerCase()}`
			).style.background = '#1a8f1f'

			document.getElementById(
				`radio-botton-${correct.toLowerCase()}`
			).style = 'background: #1a8f1f;'

			document
				.querySelectorAll('.stadistics-container')
				.forEach((item) => {
					item.style.display = 'flex'
				})

			for (let i = 0; i < letters.length; i++) {
				document.getElementById(
					`bar-${letters[i].toLowerCase()}`
				).style.width = `${data.data[letters[i].toLowerCase()]}%`

				document.getElementById(
					`number-stadistics-${letters[i].toLowerCase()}`
				).innerText = `${data.data[letters[i].toLowerCase()].toFixed(
					2
				)}%`

				document.getElementById(
					`radio-botton-${letters[i].toLowerCase()}`
				).style.display = 'block'
			}

			// document.getElementById('radio-buttom-a').style.background =
			// 	'#1861ab'
			// document.getElementById('radio-buttom-b').style.background =
			// 	responseQuestion1 === 'B' ? '#f5a11b' : '#80808075'
			// document.getElementById('radio-buttom-c').style.background =
			// 	responseQuestion1 === 'C' ? '#f5a11b' : '#80808075'
			// document.getElementById('radio-buttom-d').style.background =
			// 	responseQuestion1 === 'D' ? '#f5a11b' : '#80808075'

			// document.getElementById('success-1').style.display = 'block'
			// document.getElementById('error-1').style.display = 'block'
			// document.getElementById('error-2').style.display = 'block'
			// document.getElementById('error-3').style.display = 'block'

			// document.getElementById('rango-1').style.display = 'flex'
			// document.getElementById('color-1').style.background = '#1861ab'
			// document.getElementById(
			// 	'color-1'
			// ).style.width = `${data.data.a.toFixed(2)}%`
			// document.getElementById(
			// 	'texto-1'
			// ).innerText = `${data.data.a.toFixed(2)}%`

			// document.getElementById('rango-2').style.display = 'flex'
			// document.getElementById('color-2').style.background =
			// 	responseQuestion1 === 'B' ? '#f5a11b' : '#80808075'
			// document.getElementById(
			// 	'color-2'
			// ).style.width = `${data.data.b.toFixed(2)}%`
			// document.getElementById(
			// 	'texto-2'
			// ).innerText = `${data.data.b.toFixed(2)}%`

			// document.getElementById('rango-3').style.display = 'flex'
			// document.getElementById('color-3').style.background =
			// 	responseQuestion1 === 'C' ? '#f5a11b' : '#80808075'
			// document.getElementById(
			// 	'color-3'
			// ).style.width = `${data.data.c.toFixed(2)}%`
			// document.getElementById(
			// 	'texto-3'
			// ).innerText = `${data.data.c.toFixed(2)}%`

			// document.getElementById('rango-4').style.display = 'flex'
			// document.getElementById('color-4').style.background =
			// 	responseQuestion1 === 'D' ? '#f5a11b' : '#80808075'
			// document.getElementById(
			// 	'color-4'
			// ).style.width = `${data.data.d.toFixed(2)}%`
			// document.getElementById(
			// 	'texto-4'
			// ).innerText = `${data.data.d.toFixed(2)}%`

			// document.getElementById('boton-1').style.display = 'none'
		})
		.catch((error) => {
			// Manejar errores si es necesario
			console.error('Error al guardar la respuesta:', error)
		})
})

// Preguntas 2 b
let responseQuestion2 = null

let questions2 = null

document.getElementById('responseQuestion2A').addEventListener('click', () => {
	responseQuestion2 = 'A'
	questions = 2

	document.getElementById('radio-buttom-a-2').style.background = '#1861ab'
})

document.getElementById('responseQuestion2B').addEventListener('click', () => {
	responseQuestion2 = 'B'
	questions = 2

	document.getElementById('radio-buttom-b-2').style.background = '#1861ab'
})

document.getElementById('responseQuestion2C').addEventListener('click', () => {
	responseQuestion2 = 'C'
	questions = 2

	document.getElementById('radio-buttom-c-2').style.background = '#1861ab'
})

document.getElementById('responseQuestion2D').addEventListener('click', () => {
	responseQuestion2 = 'D'
	questions = 2

	document.getElementById('radio-buttom-d-2').style.background = '#1861ab'
})

document.getElementById('boton-1-2').addEventListener('click', () => {
	let token = JSON.parse(localStorage.getItem('token')).data.token

	let formData = new FormData()

	formData.append('question', questions)
	formData.append('response', responseQuestion2)

	fetch(
		'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/save-question',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		}
	)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('radio-buttom-c-2').style.background =
				'#1861ab'
			document.getElementById('radio-buttom-b-2').style.background =
				responseQuestion2 === 'B' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-a-2').style.background =
				responseQuestion2 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-d-2').style.background =
				responseQuestion2 === 'D' ? '#f5a11b' : '#80808075'

			document.getElementById('success-1-2').style.display = 'block'
			document.getElementById('error-1-2').style.display = 'block'
			document.getElementById('error-2-2').style.display = 'block'
			document.getElementById('error-3-2').style.display = 'block'

			document.getElementById('rango-1-2').style.display = 'flex'
			document.getElementById('color-1-2').style.background = '#1861ab'
			document.getElementById(
				'color-1-2'
			).style.width = `${data.data.c.toFixed(2)}%`
			document.getElementById(
				'texto-1-2'
			).innerText = `${data.data.c.toFixed(2)}%`

			document.getElementById('rango-2-2').style.display = 'flex'
			document.getElementById('color-2-2').style.background =
				responseQuestion2 === 'B' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-2-2'
			).style.width = `${data.data.b.toFixed(2)}%`
			document.getElementById(
				'texto-2-2'
			).innerText = `${data.data.b.toFixed(2)}%`

			document.getElementById('rango-3-2').style.display = 'flex'
			document.getElementById('color-3-2').style.background =
				responseQuestion2 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-3-2'
			).style.width = `${data.data.a.toFixed(2)}%`
			document.getElementById(
				'texto-3-2'
			).innerText = `${data.data.a.toFixed(2)}%`

			document.getElementById('rango-4-2').style.display = 'flex'
			document.getElementById('color-4-2').style.background =
				responseQuestion2 === 'D' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-4-2'
			).style.width = `${data.data.d.toFixed(2)}%`
			document.getElementById(
				'texto-4-2'
			).innerText = `${data.data.d.toFixed(2)}%`

			document.getElementById('boton-1-2').style.display = 'none'
		})
		.catch((error) => {
			// Manejar errores si es necesario
			console.error('Error al guardar la respuesta:', error)
		})
})

// Preguntas 3 c
let responseQuestion3 = null

let questions3 = null

document.getElementById('responseQuestion3A').addEventListener('click', () => {
	responseQuestion3 = 'A'
	questions = 3

	document.getElementById('radio-buttom-a-3').style.background = '#1861ab'
})

document.getElementById('responseQuestion3B').addEventListener('click', () => {
	responseQuestion3 = 'B'
	questions = 3

	document.getElementById('radio-buttom-b-3').style.background = '#1861ab'
})

document.getElementById('responseQuestion3C').addEventListener('click', () => {
	responseQuestion3 = 'C'
	questions = 3

	document.getElementById('radio-buttom-c-3').style.background = '#1861ab'
})

document.getElementById('responseQuestion3D').addEventListener('click', () => {
	responseQuestion3 = 'D'
	questions = 3

	document.getElementById('radio-buttom-d-3').style.background = '#1861ab'
})

document.getElementById('boton-1-3').addEventListener('click', () => {
	let token = JSON.parse(localStorage.getItem('token')).data.token

	let formData = new FormData()

	formData.append('question', questions)
	formData.append('response', responseQuestion3)

	fetch(
		'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/save-question',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		}
	)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('radio-buttom-d-3').style.background =
				'#1861ab'
			document.getElementById('radio-buttom-b-3').style.background =
				responseQuestion3 === 'B' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-a-3').style.background =
				responseQuestion3 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-c-3').style.background =
				responseQuestion3 === 'C' ? '#f5a11b' : '#80808075'

			document.getElementById('success-1-3').style.display = 'block'
			document.getElementById('error-1-3').style.display = 'block'
			document.getElementById('error-2-3').style.display = 'block'
			document.getElementById('error-3-3').style.display = 'block'

			document.getElementById('rango-1-3').style.display = 'flex'
			document.getElementById('color-1-3').style.background = '#1861ab'
			document.getElementById(
				'color-1-3'
			).style.width = `${data.data.d.toFixed(2)}%`
			document.getElementById(
				'texto-1-3'
			).innerText = `${data.data.d.toFixed(2)}%`

			document.getElementById('rango-2-3').style.display = 'flex'
			document.getElementById('color-2-3').style.background =
				responseQuestion3 === 'B' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-2-3'
			).style.width = `${data.data.b.toFixed(2)}%`
			document.getElementById(
				'texto-2-3'
			).innerText = `${data.data.b.toFixed(2)}%`

			document.getElementById('rango-3-3').style.display = 'flex'
			document.getElementById('color-3-3').style.background =
				responseQuestion3 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-3-3'
			).style.width = `${data.data.a.toFixed(2)}%`
			document.getElementById(
				'texto-3-3'
			).innerText = `${data.data.a.toFixed(2)}%`

			document.getElementById('rango-4-3').style.display = 'flex'
			document.getElementById('color-4-3').style.background =
				responseQuestion3 === 'C' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-4-3'
			).style.width = `${data.data.c.toFixed(2)}%`
			document.getElementById(
				'texto-4-3'
			).innerText = `${data.data.c.toFixed(2)}%`

			document.getElementById('boton-1-3').style.display = 'none'
		})
		.catch((error) => {
			// Manejar errores si es necesario
			console.error('Error al guardar la respuesta:', error)
		})
})

// Preguntas 4 d
let responseQuestion4 = null

let questions4 = null

document.getElementById('responseQuestion4A').addEventListener('click', () => {
	responseQuestion4 = 'A'
	questions = 4

	document.getElementById('radio-buttom-a-4').style.background = '#1861ab'
})

document.getElementById('responseQuestion4B').addEventListener('click', () => {
	responseQuestion4 = 'B'
	questions = 4

	document.getElementById('radio-buttom-b-4').style.background = '#1861ab'
})

document.getElementById('responseQuestion4C').addEventListener('click', () => {
	responseQuestion4 = 'C'
	questions = 4

	document.getElementById('radio-buttom-c-4').style.background = '#1861ab'
})

document.getElementById('responseQuestion4D').addEventListener('click', () => {
	responseQuestion4 = 'D'
	questions = 4

	document.getElementById('radio-buttom-d-4').style.background = '#1861ab'
})

document.getElementById('boton-1-4').addEventListener('click', () => {
	let token = JSON.parse(localStorage.getItem('token')).data.token

	let formData = new FormData()

	formData.append('question', questions)
	formData.append('response', responseQuestion4)

	fetch(
		'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/save-question',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		}
	)
		.then((response) => response.json())
		.then((data) => {
			document.getElementById('radio-buttom-b-4').style.background =
				'#1861ab'
			document.getElementById('radio-buttom-d-4').style.background =
				responseQuestion4 === 'D' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-a-4').style.background =
				responseQuestion4 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById('radio-buttom-c-4').style.background =
				responseQuestion4 === 'C' ? '#f5a11b' : '#80808075'

			document.getElementById('success-1-4').style.display = 'block'
			document.getElementById('error-1-4').style.display = 'block'
			document.getElementById('error-2-4').style.display = 'block'
			document.getElementById('error-3-4').style.display = 'block'

			document.getElementById('rango-1-4').style.display = 'flex'
			document.getElementById('color-1-4').style.background = '#1861ab'
			document.getElementById(
				'color-1-4'
			).style.width = `${data.data.b.toFixed(2)}%`
			document.getElementById(
				'texto-1-4'
			).innerText = `${data.data.b.toFixed(2)}%`

			document.getElementById('rango-2-4').style.display = 'flex'
			document.getElementById('color-2-4').style.background =
				responseQuestion4 === 'D' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-2-4'
			).style.width = `${data.data.d.toFixed(2)}%`
			document.getElementById(
				'texto-2-4'
			).innerText = `${data.data.d.toFixed(2)}%`

			document.getElementById('rango-3-4').style.display = 'flex'
			document.getElementById('color-3-4').style.background =
				responseQuestion4 === 'A' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-3-4'
			).style.width = `${data.data.a.toFixed(2)}%`
			document.getElementById(
				'texto-3-4'
			).innerText = `${data.data.a.toFixed(2)}%`

			document.getElementById('rango-4-4').style.display = 'flex'
			document.getElementById('color-4-4').style.background =
				responseQuestion4 === 'C' ? '#f5a11b' : '#80808075'
			document.getElementById(
				'color-4-4'
			).style.width = `${data.data.c.toFixed(2)}%`
			document.getElementById(
				'texto-4-4'
			).innerText = `${data.data.c.toFixed(2)}%`

			document.getElementById('boton-1-4').style.display = 'none'
		})
		.catch((error) => {
			// Manejar errores si es necesario
			console.error('Error al guardar la respuesta:', error)
		})
})

