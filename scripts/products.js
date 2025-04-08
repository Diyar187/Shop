// Elemente auswählen
const filterItems = document.querySelectorAll('.categories-div li');
const productItems = document.querySelectorAll('.products-div ul li');

// Aktiven Filter speichern
let activeFilter = '';

// Funktion zum Filtern der Produkte
function filterProducts(filter) {
    let visibleCount = 0;

    productItems.forEach(item => {
        const attribute = item.getAttribute('data-attribute');

        if (!filter || attribute === filter) {
            item.style.display = 'grid'; // Element einblenden
            visibleCount++;
        } else {
            item.style.display = 'none'; // Element ausblenden
        }
    });

    // Wenn keine Produkte mehr sichtbar sind, alle wieder anzeigen
    if (visibleCount === 0) {
        productItems.forEach(item => {
            item.style.display = 'flex';
        });
    }
}

// Klick-Event für die Filterbuttons hinzufügen
filterItems.forEach(item => {
    item.addEventListener('click', () => {
        const filter = item.textContent.toLowerCase();

        // Wenn derselbe Filter erneut geklickt wird, wird der Filter zurückgesetzt
        if (activeFilter === filter) {
            activeFilter = '';
        } else {
            activeFilter = filter;
        }

        // Filter anwenden
        filterProducts(activeFilter);

        // Aktiven Zustand im UI markieren
        filterItems.forEach(i => i.classList.remove('active'));
        if (activeFilter) {
            item.classList.add('active');
        }
    });
});

// Standardmäßig alles anzeigen
filterProducts('');
