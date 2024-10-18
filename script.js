function hideShow() {
    const mapSection = document.querySelector('.map-section');
    const footer = document.querySelector('footer');

    mapSection.style.display = mapSection.style.display === 'block' ? 'none' : 'block';
    footer.style.display = footer.style.display === 'block' ? 'none' : 'block';
}
 // dark mode function()
 function test() {
    document.body.classList.toggle("dark-mode");
}
