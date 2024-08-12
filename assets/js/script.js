const keys = ['Esc', 'Back'];

function redirectAfterDelay() {
    setTimeout(() => {
        window.location.href = "https://www.youtube.com/tv"; 
    }, 3000);
}

document.addEventListener('keydown', function(event) {
    if (keys.includes(event.key)) {
        event.preventDefault(); 
        window.close()
    }
});

redirectAfterDelay();