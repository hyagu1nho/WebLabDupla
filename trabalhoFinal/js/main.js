document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('theme-toggle');
  const accessibilityButton = document.getElementById('accessibility');

  // Se salva o tema escuro vai pra outr pagina com o mesmo
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    const icon = toggleButton?.querySelector('.material-icons');
    if (icon) icon.textContent = 'light_mode';
  }

  // Botão de tema 
  if (toggleButton) {
    const icon = toggleButton.querySelector('.material-icons');

    toggleButton.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
        if (icon) icon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
      } else {
        if (icon) icon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Botão de acessibilidade
  if (accessibilityButton) {
    accessibilityButton.addEventListener('click', function () {
      document.body.classList.toggle('accessible');
    });
  }
});
