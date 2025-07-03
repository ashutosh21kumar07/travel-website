const toggleLink = document.getElementById('toggle-link');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const emailInput = document.querySelector('.signup-only');

let isLogin = true;

toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
  submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
  emailInput.style.display = isLogin ? 'none' : 'block';
  toggleLink.textContent = isLogin ? 'Sign Up' : 'Login';
});

document.getElementById('auth-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!username || !password || (!isLogin && !email)) {
    alert('Please fill out all required fields.');
    return;
  }

  alert(isLogin ? `Logging in as ${username}` : `Signing up as ${username} with email ${email}`);
});
