setTimeout(() => {
	if (!window.location.href.includes('sesion')) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		let formControlRegister = {}

		document.getElementById('nombre').addEventListener('change', (e) => {
			e.preventDefault();
			formControlRegister.name = e.target.value
		})

		document.getElementById('email').addEventListener('change', (e) => {
			e.preventDefault();
			formControlRegister.mail = e.target.value
		})

		document
			.getElementById('iddocumento')
			.addEventListener('change', (e) => {
				e.preventDefault();
				formControlRegister.document = e.target.value
			})
		
		
		document.getElementById('success').addEventListener('click', (e) => {
			e.preventDefault()

			if (!formControlRegister.name) {
				document.querySelector('.Text-nombre').style.border =
					'2px solid #D50000'
				document.querySelector('.Text-nombre').placeholder =
					'Debes ingresar tu nombre'
				document.querySelector('.Text-nombre').classList.add('error')
			}

			if (!formControlRegister.mail) {
				document.querySelector('#email').style.border =
					'2px solid #D50000'
				document.querySelector('#email').placeholder =
					'Debes ingresar tu email'
				document.querySelector('#email').classList.add('error')
			}

			if (!formControlRegister.document) {
				document.querySelector('#iddocumento').style.border =
					'2px solid #D50000'
				document.querySelector('#iddocumento').placeholder =
					'Debes ingresar tu Documento'
				document.querySelector('#iddocumento').classList.add('error')
			}

			if (document.querySelector('.no-check')) {
				if (window.innerWidth > 767) {
					document.querySelector('#data').style.fill = '#f5a500'
				} else {
					document.querySelector('#data').style.fill = '#D50000'
				}
				
				document.querySelector('#activar rect').style.stroke = 'red'
				document.querySelector('#activar rect').style.strokeWidth =
					'1px'
			}

			if (
				formControlRegister.name &&
				formControlRegister.mail &&
				formControlRegister.document &&
				!document.querySelector('.no-check')
			) {
				const disable = document.querySelector('#success')

				if (
					formControlRegister.name !== '' &&
					formControlRegister.mail !== '' &&
					formControlRegister.document !== ''
				) {
					if (emailRegex.test(formControlRegister.mail)) {
						let formData = new FormData()
						formData.append('name', formControlRegister.name)
						formData.append('email', formControlRegister.mail)
						formData.append(
							'document',
							formControlRegister.document
						)

						// Realizar una solicitud GET a la API
						axios
							.post(
								'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/register',
								formData
							)
							.then((response) => {
								formControlRegister = {}
								document.getElementById('nombre').value = ''
								document.getElementById('email').value = ''
								document.getElementById('iddocumento').value =
									''
								Swal.fire({
									icon: 'success',
									text: 'Registro exitoso',
								}).then((res) => {
									if (res.isConfirmed) {
										window.location.href = './index.html'
									}
								})
							})
							.catch((error) => {
								console.error(error)
								Swal.fire({
									icon: 'error',
									text: error.response.data.data,
								})
							})
					} else {
						alert('El correo electrónico no es válido.')
					}
				}
			}
		})
	} else {
		let formControlLogin = {}

		document
			.getElementById('documentLogin')
			.addEventListener('change', (e) => {
				formControlLogin.document = e.target.value
			})

		document
			.getElementById('nombreLogin')
			.addEventListener('change', (e) => {
				formControlLogin.user = e.target.value
			})

		document
			.getElementById('successLogin')
			.addEventListener('click', async (e) => {
				console.log(successLogin)

				// Obtener el valor del campo documentLogin
				let documentValue =
					document.getElementById('documentLogin').value

				if (documentValue !== '') {
					let formData = new FormData()
					formData.append('document', documentValue)

					try {
						// Realizar una solicitud POST a la API usando axios
						const response = await axios.post(
							'https://api-editorizacion-dinamica-2.eml.com.co/api/auth/login',
							formData,
							{
								headers: {
									'Content-Type': 'multipart/form-data',
								},
							}
						)

						const data = response.data
						document.getElementById('documentLogin').value = ''

						Swal.fire({
							icon: 'success',
							title: '¡Bienvenido!',
							text: 'Inicio de sesión exitoso.',
							confirmButtonText: 'Aceptar',
						}).then(() => {
							localStorage.setItem('token', JSON.stringify(data))
							window.location.href = './articulo1.html'
						})
					} catch (error) {
						console.error('Error al conectar con la API:', error)

						Swal.fire({
							icon: 'error',
							title: 'Error',
							text: 'Hubo un problema con el inicio de sesión. Inténtalo de nuevo.',
							confirmButtonText: 'Aceptar',
						})
					}
				} else {
					Swal.fire({
						icon: 'warning',
						title: 'Advertencia',
						text: 'Por favor, ingresa un documento.',
						confirmButtonText: 'Aceptar',
					})
				}
			})
	}
}, 1000)
