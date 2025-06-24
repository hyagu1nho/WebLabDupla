document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('.material-icons');
    const accessibilityButton = document.getElementById('accessibility');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.textContent = 'light_mode';
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

       
        if (document.body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode';
            localStorage.setItem('theme', 'dark');  
        } else {
            icon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'light');
        }
    });

    if (accessibilityButton) {
        accessibilityButton.addEventListener('click', function() {
            document.body.classList.toggle('accessible');
        });
    }
});
