const hoverTargets = document.querySelectorAll('.hover-target');
const hoverImage = document.getElementById('hoverImage');
const hoverImageContent = document.getElementById('hoverImageContent');

hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', function() {
        const imageUrl = target.getAttribute('data-image');
        hoverImageContent.src = imageUrl;
        
        const rect = target.getBoundingClientRect();
        
        hoverImage.style.top = window.scrollY + rect.top - hoverImage.offsetHeight - -20 + 'px';
        hoverImage.style.left = window.scrollX + rect.left + (rect.width / 1000) - (hoverImage.offsetWidth / 10) + 'px';

        hoverImage.style.display = 'block';});

    target.addEventListener('mouseleave', function() {
        hoverImage.style.display = 'none';});
});