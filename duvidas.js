document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            
            faqItems.forEach(el => el.classList.remove('active'));

            // altera a class do icone clicado como falei no css
            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});