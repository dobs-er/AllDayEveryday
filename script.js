

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
    
}


);

// Submission Alert Message

const form = document.getElementById("contact");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        form.reset();
    });





