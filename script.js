//your JS code here. If required.

let form = document.querySelector('form');
let nameBox = document.getElementById('firstname');
let lastNameBox = document.getElementById('lastname');
let phoneBox = document.getElementById('tel');
let emailBox = document.getElementById('email');

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let name = nameBox.value.trim();
	let lastName = lastNameBox.value.trim();
	let tel = phoneBox.value.trim();
	let email = emailBox.value.trim();

	if (name && lastName && tel && email) {
		alert(`FirstName: ${name} LastName: ${lastName} Phone Number: ${tel} Email ID: ${email}`);
	}
});
