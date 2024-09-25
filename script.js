const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  // Toggle between dark and light mode
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Change the button icon
  if (body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  }
});
