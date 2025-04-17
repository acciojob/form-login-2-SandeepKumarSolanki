//your JS code here. If required.

let form = document.querySelector('form');
let nameBox = document.getElementById('name');
let lastNameBox = document.getElementById('lastname');
let phoneBox = document.getElementById('tel');
let emailBox = document.getElementById('email');

form.addEventListener("submit" , (e)=> {
	e.preventDefault();
	let name = nameBox.value;
	let lastName = lastNameBox.value;
	let tel = phoneBox.value;
	let email = emailBox.value;

	alert(`FirstName:${name} LastName: ${lastName} Phone Number: ${tel} Email ID:${email}`)
})