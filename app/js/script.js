const form = document.forms[0]

function logData() {
	const name = document.getElementById('name')
	console.log(name.value)
}

function register() {
	console.log('in register')
	var data = {
		name: form.name.value,
		email: form.email.value,
		password: form.password.value,
		classYear: form.classYear.value,
		// isAdmin: form.isAdmin.value,
		address: form.address.value

	}
	console.log(data)
	fetch('/register', {
		headers: {
			'Content-Type': 'application/json'
		}, 
		method: 'POST', 
		body: JSON.stringify(data)
	}).then(function(res) {
		console.log('here')
		res.json()
		.then(function(user) {
			alert(JSON.stringify(user))
		})
	}).catch(function(err) {
		console.log('error here')
		console.error(err)
	})
	console.log(data)

}