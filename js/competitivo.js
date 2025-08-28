document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
        section.classList.add('visible');
    });
});