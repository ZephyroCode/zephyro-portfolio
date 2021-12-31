const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = (language) => {
  const langJson = require(`./languages/${language}.json`);
  for (const textToChange of textsToChange) {
    const { section } = textToChange.dataset;
    const { value } = textToChange.dataset;
    textToChange.innerHTML = langJson[section][value];
  }
}

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.dataset.language);
})


toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (toggleIcon.src.includes('moon.svg')) {
    toggleIcon.src = './assets/img/icons/sun.svg';
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.src = './assets/img/icons/moon.svg';
    toggleText.textContent = 'Dark Mode';
  }
});

toggleColors.addEventListener('click', (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color);
});
