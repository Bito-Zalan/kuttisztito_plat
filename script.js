document.addEventListener("DOMContentLoaded", () => {

    // ===== KÁRTYA =====
    const card = document.getElementById('mainCard');
    const toggle = card.querySelector('.toggle-area');
    const details = card.querySelector('.details');
    const text = card.querySelector('.text');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            details.style.maxHeight = details.scrollHeight + "px";
            text.textContent = "Bezár";
        } else {
            details.style.maxHeight = null;
            text.textContent = "Részletek";

            const servicesSection = document.querySelector('.services');
            if (servicesSection) {
                const offset = 20;
                const topPosition = servicesSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: topPosition, behavior: 'smooth' });
            }
        }
    });

    // ===== SCROLL GOMB =====
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});