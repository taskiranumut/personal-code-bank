export const registerUser = async (e) => {
  e.preventDefault();
  const firstName = document.querySelector('#register-firstname').value;
  const lastName = document.querySelector('#register-lastname').value;
  const email = document.querySelector('#register-email').value;
  const password = document.querySelector('#register-password').value;
  const messageDiv = document.querySelector('#message');
  messageDiv.innerHTML = '';

  const result = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  }).then((res) => res.json());
  console.log(result);
  if (result.status === 'ok') {
    messageDiv.innerHTML = 'Registration is completed.';
  } else {
    messageDiv.innerHTML = result.error;
  }
};
