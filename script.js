// Loader
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};

// Typing effect
const text = "Front-End Web Developer | HTML • CSS • JavaScript";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}
typing();

// Dark mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Scroll to contact
function scrollToContact() {
    window.location.href = "contact.html";
}
document.getElementById("contactBtn").addEventListener("click", scrollToContact);

