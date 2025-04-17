const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form.elements['First Name'].value.trim();
  const lastName = form.elements['Last Name'].value.trim();
  const phone = form.elements['Phone Number'].value.trim();
  const email = form.elements['Email ID'].value.trim();

  if (firstName && lastName && phone && email) {
    alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);
  }
});
