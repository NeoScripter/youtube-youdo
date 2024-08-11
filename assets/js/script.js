const keys = ['Escape', 'Backspace'];

function redirectAfterDelay() {
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/tv"; 
    }, 3000);
}

function redirectToGoogle() {
    window.location.href = "https://www.google.com";
}

document.addEventListener('keydown', function(event) {
    if (keys.includes(event.key)) {
        event.preventDefault(); 
        redirectToGoogle();
    }
});

redirectAfterDelay();
