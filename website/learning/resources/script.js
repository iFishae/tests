var siteToggleMode = (function () {
    var body = document.body;
    var logo = document.getElementById('logoToggle');

    function toggleLogo (mode) {
        logo.src = 'images/'+mode+'-logo.png';
    }

    function toggleMode() {  
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            toggleLogo('light');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            toggleLogo('dark');
        }
    }

    return {
        toggleMode: toggleMode
    };
})();

// Event Listener 
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('logoToggle').addEventListener('click', siteToggleMode.toggleMode);
});
