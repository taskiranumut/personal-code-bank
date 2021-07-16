export const loginUser = async (e) => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  const messageDiv = document.querySelector('#message');
  messageDiv.innerHTML = '';

  const result = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
  console.log(result);
  if (result.status === 'ok') {
    console.log('The token: ', result.data);
    localStorage.setItem('token', result.data);
    messageDiv.innerHTML = 'Login is successful';
    const userDataRaw = result.data.split('.')[1];
    const userData = atob(userDataRaw);
    const objectUserData = JSON.parse(userData);
    console.log('User id: ', objectUserData.id);
  } else {
    messageDiv.innerHTML = result.error;
  }
};
