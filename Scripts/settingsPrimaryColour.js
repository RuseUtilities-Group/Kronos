const goldColour = document.querySelector('.goldColour input[type="button"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'gold') {
        goldColour.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'gold');
        localStorage.setItem('theme', 'gold');
    } 
}

goldColour.addEventListener('click', switchTheme, false);
