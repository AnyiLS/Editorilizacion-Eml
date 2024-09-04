let question = 0

const handleChangeArticle = () => {
	document.getElementById('text-article-container').innerHTML = ''

	if (articleBySections[question].title) {
		document.getElementById('text-article-container').innerHTML +=
			articleBySections[question].title
	}

	let text = ``

	articleBySections[question].text.forEach((item) => {
		text += `<p class="text-article">${item}</p>`
	})

	document.getElementById('text-article-container').innerHTML += text

	if (articleBySections[question].tooltip) {
		document.getElementById(
			'text-article-container'
		).innerHTML += `<div class="tooltip">${articleBySections[question].tooltip}</div>`
	}

	if (articleBySections[question].question) {
		document.getElementById('card-question-container').style.display =
			'block'
		document.getElementById(
			'question-number'
		).innerText = `Pregunta ${articleBySections[question].id}`
		document.getElementById('question').innerText =
			articleBySections[question].question

		document.getElementById('option-response').innerHTML = ''

		articleBySections[question].options.forEach((item, index) => {
			document.getElementById('option-response').innerHTML += `
				<div class="option-checkbox" id="responseQuestion${
					articleBySections[question].id
				}${letters[index]}">
					<div class="radio-buttom" id="radio-buttom-${letters[index].toLowerCase()}">
						<div class='radio-botton' id='radio-botton-${letters[index].toLowerCase()}'>
							
						</div>
					</div>
					<label>${item}</label>
				</div>		
				<div id="rango-2">
					<div class="text-option-response">
						<div id="color-2"></div>
					</div>
					<p
						id="texto-2"
						style="
							color: #fff;
							font-weight: 800;
						">
						50%
					</p>
				</div>		
				<div class='stadistics-container'>
					<div class='stadistics-bar-container'>
						<div class='bar-${letters[index].toLowerCase()}' id='bar-${letters[
				index
			].toLowerCase()}'></div>
					</div>
					<span id='number-stadistics-${letters[index].toLowerCase()}'>100%</span>
				</div>
			`
		})
	} else {
		document.getElementById('card-question-container').style.display =
			'none'
	}
}

const handleChangeQuestion = () => {
	if (question + 1 > 6) question = 0
	else question += 1
	handleChangeArticle()
}

const articleBySections = [
	{
		text: [
			'La vitamina D es un secosteroide y una prohormona1 liposoluble<sup>2</sup> vA la forma inactiva de este nutriente se le conoce como colecalciferol, la cual requiere de dos hidroxilaciones diferentes para ser activada, una en el hígado para convertirse en calcidiol o 25 hidroxicolecalciferol (25(OH)D o 25(OH)D3) y otra en el riñón para que el calcidol se metabolice en calcitriol o 1-alfa,25-dihidroxicolecalciferol (1,25(OH)2D o 1,25(OH)2D3).<sup>2</sup> Precisamente, el parámetro más utilizado para medir la cantidad de vitamina D en el organismo son los niveles de 25(OH)D en la sangre, siendo normales las concentraciones >30 ng/mL y óptimas las concentraciones >40 ng/mL.<sup>4</sup> Las concentraciones inferiores a 20 ng/mL representan una deficiencia nutricional.<sup>1,4</sup>',
			'La vitamina D tiene muchas funciones comprobadas dentro del organismo que son posibles gracias a su influencia en el curso de algunos procesos metabólicos básicos.<sup>5</sup> Las más conocidas son su papel en la mineralización ósea y en la regulación del calcio y sus efectos en la prevención de enfermedades como el raquitismo y la osteoporosis.<sup>3,5</sup> No obstante, se ha comprobado que todos los tejidos y todas las células del cuerpo tienen un receptor de vitamina D, por lo que su deficiencia, además de estar asociada con la fisiopatología de las enfermedades ya mencionadas, también puede afectar otras funciones del organismo.<sup>2</sup>',
		],
		id: 1,
		question:
			'¿Qué niveles séricos de 25 hidroxicolecalciferol (25(OH)D) representan una deficiencia nutricional?',
		options: [
			'< 20 ng/mL',
			'< 30 ng/mL',
			'< 40 ng/mL',
			'< Ninguna de las anteriores',
		],
		correct: 'A',
	},
	{
		title: '<h1 class="title-text">¿Qué efecto tienen los estrógenos sobre la vitamina D?</h1>',
		text: [
			'y en la regulación del calcio y sus efectos en la prevención de enfermedades como el raquitismo y la osteoporosis.<sup>3,5</sup> No obstante, se ha comprobado que todos los tejidos y todas las células del cuerpo tienen un receptor de vitamina D, por lo que su deficiencia, además de estar asociada con la fisiopatología de las enfermedades ya mencionadas, también puede afectar otras funciones del organismo.<sup>2</sup>',
			'Algunas de las células en las que se expresa la forma activa de la vitamina D son las del sistema inmunitario.<sup>3</sup> Esto, sumado con el hecho de que se han encontrado deterioros en el sistema inmunitario de pacientes con deficiencia de vitamina D, ha contribuido a que se comience a estudiar la relación entre este nutriente, los procesos de dicho sistema y la aparición de enfermedades autoinmunes. Se ha comprobado que los adecuados niveles de vitamina D en la sangre son los que determinan la secreción de citoquinas antiinflamatorias y de otros elementos reguladores del sistema inmunitario.<sup>5</sup> Asimismo, se ha evidenciado que la 1,25(OH)2D al unirse al receptor de la vitamina D (VDR, por sus siglas en inglés) inhibe la diferenciación y la proliferación de los linfocitos B y Th, lo cual genera que se pase de un estado inmunitario inflamatorio a uno más tolerante.<sup>1</sup> De igual manera, se ha encontrado que la deficiencia de vitamina D fomenta las respuestas que promueven la inflamación y altera el equilibrio de la actividad antiinflamatoria en el sistema inmunitario.<sup>5</sup> Todas estas cuestiones han hecho que nazca la idea de las respuestas inmunitarias varían en función de la disponibilidad de 25(OH)D y de que la deficiencia de vitamina D está relacionada con la fisiopatología de enfermedades autoinmunes.<sup>3</sup>',
		],
		tooltip:
			'Estudios han demostrado que la suplementación con vitamina D tiene beneficios en la actividad patológica de la artritis reumatoide, puede reducir la frecuencia de las úlceras gástricas en pacientes con esclerosis sistémica y reduce el daño asociado a la superficie ocular de pacientes con síndrome de Sjögren primario.<sup>2</sup>',
		id: 2,
		question:
			'¿Qué grupo etario se ve favorecido por la vitamina D y por qué?',
		options: [
			'Las mujeres, por las gonadotropinas',
			'Los hombres, por la testosterona',
			'Los hombres, por la testosterona',
			'Los hombres, por la androsterona',
		],
		correct: 'C',
	},
	{
		title: '<h1 class="title-text">¿Qué efecto tienen los estrógenos sobre la vitamina D?</h1>',
		text: [
			'Un factor que puede afectar tanto los efectos de la vitamina D en el organismo como el riesgo de padecer una enfermedad autoinmune es el género.<sup>6</sup> Esto se debe a la presencia de estrógenos y a la manera que tiene esta hormona de interactuar con la forma activa de la vitamina D. Se ha evidenciado que el estradiol puede disminuir la expresión del gen CYP24A1, lo cual a la larga lleva a una acumulación de vitamina D que desencadena una respuesta inmunitaria más potente en mujeres que en hombres. De hecho, se suelen encontrar niveles más altos de 25(OH) D en las mujeres y se ha establecido una relación directamente proporcional entre los niveles de este nutriente y de estradiol. Además, estudios han sugerido que el uso clínico de la vitamina D en pacientes con enfermedades autoinmunes como la artritis reumatoide puede tener mejores resultados en las mujeres que en los hombres.<sup>6</sup>',
		],
		id: 3,
		question:
			'Los pacientes de la tercera edad con deficiencia de vitamina D son especialmente vulnerables a desarrollar:',
		options: [
			'Enfermedades autoinmunes',
			'Enfermedades musculoesqueléticas',
			'Demencia',
			'Todas las anteriores',
		],
		correct: 'D',
	},
	{
		title: '<h1 class="title-text">Deficiencia de vitamina D en adultos mayores</h1>',
		text: [
			'La deficiencia de vitamina D es una problemática global, particularmente prevalente en la población de adultos mayores.<sup>7</sup> Ellos suelen presentar niveles inferiores a los óptimos de vitamina D debido a su baja ingesta de este micronutriente y a su reducida exposición a la luz ultravioleta.<sup>7</sup> Esto quiere decir que son un grupo etario especialmente vulnerable a las condiciones de salud que pueden surgir a raíz de la insuficiencia o deficiencia de la vitamina D.',
			'<span class="subtitle">Enfermedades autoinmunes:</span>',
			'La vitamina D desempeña un rol clave en la modulación de la función inmunitaria, con importantes consecuencias en el mantenimiento de la salud y la aparición de enfermedades, en particular los trastornos autoinmunitarios.<sup>6</sup> La evidencia sobre el efecto inmunomodulador de la 25(OH) D y el papel de la deficiencia y la suplementación de vitamina D en las enfermedades autoinmunes se han estudiado durante mucho tiempo.<sup>2</sup> Los niveles séricos bajos de 25(OH)D se han asociado a un mayor riesgo de aparición de enfermedades autoinmunes y a una mayor actividad de ese tipo de enfermedades.<sup>6</sup> Algunas de las condiciones que han sido asociadas con la deficiencia de 25(OH) D son la artritis reumatoide, el lupus eritematoso sistémico, la artritis psoriásica, la esclerosis sistémica y la enfermedad inflamatoria intestinal.<sup>2</sup>',
			'<span class="subtitle">Enfermedades musculoesqueléticas:</span>',
			'Como se mencionó anteriormente, la vitamina D es crucial en el proceso de mineralización ósea y en la regulación del calcio,<sup>3,5</sup> por eso incide en la regulación y modulación de la fisiología y las funciones del sistema musculoesquelético.<sup>7</sup> A medida que avanzan el tiempo y la edad de las personas, la situación de equilibrio del calcio se deteriora, lo que hace imperativo mantener un aporte adecuado de este mineral.<sup>8</sup> Sin embargo, es necesario conservar también unos niveles óptimos de vitamina D que modulen el calcio que ingresa al organismo. De hecho, en personas de edad avanzada la menor actividad física ya es responsable de un 6 % de pérdida ósea, pero cuando la dieta de ellos es deficiente en calcio y vitamina D se produce un 16 % adicional de pérdida de hueso.<sup>8</sup>',
			'Una de las enfermedades que las personas mayores son más susceptibles de padecer es la sarcopenia, una afección clínica asociada a la edad que se caracteriza por la pérdida progresiva de masa musculoesquelética con reducción de la fuerza muscular y el rendimiento físico.<sup>7</sup> Es un gran factor de riesgo de eventos adversos, como el delirio, la discapacidad y la muerte.<sup>7</sup> Varios estudios han demostrado, en personas mayores, que los niveles séricos de vitamina D están relacionados de forma independiente con la pérdida de masa muscular y la disminución de la fuerza muscular, lo que sugiere que las personas mayores con deficiencia de vitamina D están extremadamente expuestas a desarrollar sarcopenia.<sup>7</sup>',
		],
		id: 0,
	},
	{
		text: [
			'Por otro lado, los niveles bajos de vitamina D se asocian a casos más graves de osteoartritis de rodilla.<sup>9</sup> En un estudio transversal se encontró que hubo más casos graves de osteoartritis (56,6 %) en pacientes ancianos con insuficiencia o deficiencia de vitamina D (p = 0,04).<sup>9</sup> Adicionalmente, los individuos con deficiencia o insuficiencia de vitamina D presentaron una puntuación más alta en el índice de Lequesne (prueba de MannWhitney, p = 0,04) en comparación con los pacientes con niveles suficientes de vitamina D (véase la figura 1), lo que indicó un mayor deterioro funcional en los pacientes con deficiencia o insuficiencia de vitamina D.<sup>9</sup>',
			'<div class="center-image"><img src="./imagenes/grafica1.png"/></div>',
			'<span class="subtitle">Demencia:</span>',
			'Debido a que la vitamina D es una hormona pleotrópica que modula las respuestas inflamatorias sistémicas y del sistema nervioso central, los pacientes con deficiencia de vitamina D pueden ser especialmente vulnerables al deterioro cognitivo a largo plazo tras una enfermedad aguda.<sup>10</sup> De hecho, un estudio desarrollado por Evans y colegas determinó que la deficiencia de vitamina D se asoció con una peor cognición a los seis meses en pacientes adultos de edad avanzada con enfermedades agudas ingresados a urgencias que estaban cognitivamente intactos al inicio del estudio (véase la figura 2).<sup>10</sup>',
			'<div class="center-image"><img src="./imagenes/grafica2.png"/></div>',
		],
		id: 0,
	},
	{
		title: '<h1 class="title-text">Suplementación de vitamina D como profilaxis de las enfermedades autoinmunes</h1>',
		text: [
			'Así como la deficiencia de vitamina D contribuye a la aparición de enfermedades autoinmunes, su suplementación ha demostrado ser eficaz al prevenirlas. VITAL fue un estudio estadounidense, aleatorizado, doble ciego, controlado con placebo y con un diseño factorial de dos por dos que se realizó con el fin de investigar si la vitamina D y los ácidos grasos omega 3 reducen el riesgo de enfermedades autoinmunes En dicho estudio 25 871 pacientes (12 786 hombres mayores de 50 años y 13 085 mujeres mayores de 55 años) fueron aleatorizados en cuatro grupos para recibir vitamina D o su respectivo placebo o ácidos grasos omega 3 o su respectivo placebo y se les hizo seguimiento durante una media de 5,3 años.11 El criterio de valoración primario fue la cantidad de pacientes con enfermedad autoinmune confirmada al finalizar dicho seguimiento (véase la figura 3).',
		],
		id: 4,
		question: '¿Para qué sirve la profilaxis con vitamina D?',
		options: [
			'Prevenir enfermedades neurológicas',
			'Prevenir enfermedades autoinmunes',
			'Prevenir enfermedades psiquiátricas',
			'Ninguna de las anteriores',
		],
		correct: 'B',
	},
	{
		text: [
			'<div class="center-image"><img src="./imagenes/grafica3.png"/></div>',
			'<div class="tooltip">La suplementación con vitamina D redujo significativamente el riesgo de presentar enfermedades autoinmunes en comparación con el ácido graso omega 3 (22 % vs. 15 %).<sup>11</sup></div>',
			'En definitiva, a los ya conocidos efectos de la vitamina D sobre la homeostasis del calcio y los huesos hay que sumarle una estrecha relación con el sistema inmunitario y unos potentes efectos inmunomoduladores de su forma activa (1,25-(OH)2D).<sup>3</sup> Su deficiencia está asociada con la fisiopatología de enfermedades autoinmunes<sup>2</sup> y con el deterioro de la capacidad cognitiva en los adultos mayores.<sup>10</sup> Por eso, su suplementación es crucial para prevenir deficiencias nutricionales que puedan ocasionar la aparición de condiciones que deterioren el sistema musculoesquelético, el inmunitario o la capacidad cognitiva.',
		],
		id: 0,
	},
]

const letters = ['A', 'B', 'C', 'D']

document.addEventListener('DOMContentLoaded', () => {
	handleChangeArticle()
	
		localStorage.setItem('like', 0)
		localStorage.setItem('dislike', 0)
	

	const like = localStorage.getItem('like')
	const dislike = localStorage.getItem('dislike')

	document.getElementById('like').innerText = like ? like : 0
	document.getElementById('dislike').innerText = dislike ? dislike : 0
})

document.getElementById('like-image').addEventListener('click', () => {
	localStorage.setItem('like', parseInt(localStorage.getItem('like')) + 1)
	document.getElementById('like').innerText = localStorage.getItem('like')
	document.getElementById('dislike').innerText =
		localStorage.getItem('dislike')
})
document.getElementById('dislike-image').addEventListener('click', () => {
	localStorage.setItem(
		'dislike',
		parseInt(localStorage.getItem('dislike')) + 1
	)
	document.getElementById('like').innerText = localStorage.getItem('like')
	document.getElementById('dislike').innerText =
		localStorage.getItem('dislike')
})
document.getElementById('share').addEventListener('click', () => {
	navigator.clipboard
		.writeText(`${window.location.origin}/sesion.html`)
		.then(() => {
			Toastify({
				text: 'Url copiada en el portapapeles!',
				className: 'success',
				style: {
					background: '#00b09b',
					fontFamily: "'Montserrat', sans-serif",
					borderRadius: 10
				},
			}).showToast()
		})
})
