const themeToggleButton = document.getElementById('theme-toggle'); 
const body = document.body; 


//check if dark mode is already set in local storage
if (localStorage.getItem('darkMode')=== 'enabled'){
    body.classList.add('dark-mode');
}

//add event listener to the button 
themeToggleButton.addEventListener('click', () => {
    //toggle the 'dark-mode' class on body
    body.classList.toggle('dark-mode'); 

    //If dark mode is enabled, save it in localStorage
    if (body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled'); 
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});