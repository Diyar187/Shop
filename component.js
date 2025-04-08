// Fetchen von Footer und Navbar
document.addEventListener('DOMContentLoaded', () => {
    // Navbar einbinden
    fetch('../Components/navbar.html')
        .then(response => response.text()) // response gibt json und response.text macht diesen zu html text
        .then(data => {
            document.querySelectorAll('.navbar-js').forEach(element => {
                element.innerHTML = data;
            });

        })  
        .catch(error => console.error('Fehler beim Laden der Navbar:', error));

    // Footer einbinden
    fetch('../Components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('.footer-js').forEach(element => {
                element.innerHTML = data;
            });
        })
        .catch(error => console.error('Fehler beim Laden des Footers:', error));


    const links = document.querySelectorAll('.navbar-ul li a');
    const currentPath = window.location.pathname;

});



   