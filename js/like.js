const handleGetLike = () => {
	axios
		.get('https://api-editorizacion-dinamica-2.eml.com.co/api/get-likes')
		.then((res) => {
			document.getElementById('like').innerText = res.data.message.like
			document.getElementById('dislike').innerText =
				res.data.message.unlike
		})
}

const handleSaveLike = (type) => {
	axios
		.post('https://api-editorizacion-dinamica-2.eml.com.co/api/add-like', {
			type,
		})
		.then((res) => {
			document.getElementById('like').innerText = res.data.message.like
			document.getElementById('dislike').innerText =
				res.data.message.unlike
		})
}

let canUnlike = true,
	canLike = true

document.addEventListener('DOMContentLoaded', () => {
	handleGetLike()

    document.getElementById('like-image').style.opacity = 0.5
    document.getElementById('dislike-image').style.opacity = 0.5

	document.getElementById('like-image').addEventListener('click', () => {
		if (canLike) {
			canLike = false
			canUnlike = false
			handleSaveLike('like')
            document.getElementById('like-image').style.opacity = 1
		}
	})

	document.getElementById('dislike-image').addEventListener('click', () => {
		if (canUnlike) {
			canLike = false
			canUnlike = false
			handleSaveLike('unlike')
            document.getElementById('dislike-image').style.opacity = 1
		}
	})
})
