const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById('hamburger');

sections.forEach((sec, i) => {
    if (i !== 0) sec.style.display = "none";
});

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);

        sections.forEach(sec => sec.style.display = "none");

        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.style.display = "block";

        targetSection.style.opacity = 0;
        setTimeout(() => targetSection.style.opacity = 1, 50);
    });
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
