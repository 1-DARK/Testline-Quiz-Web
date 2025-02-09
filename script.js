const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = `
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        `;
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = `
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        `;
    }
}

// Check for saved theme preference or use device preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('dark-mode'));
});

// Listen for changes in device color scheme preference
prefersDarkScheme.addListener((e) => {
    setTheme(e.matches);
});

// fetch api
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.questions) {
      data.questions.forEach((question) => {
        const mark =`<li>${question.description}</li>`;
        console.log(mark);
      });
    }
  })
  .catch((error) => console.error("Error loading data:", error));


  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;




// newwwwwwwwwwwwwwwwwwwwwwwwwww



