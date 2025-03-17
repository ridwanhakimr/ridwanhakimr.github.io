document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".active")?.classList.remove("active");
            this.classList.add("active");
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah form submit default

  // Ambil nilai input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Format pesan
  const subject = `Pesan dari ${name}`;
  const body = `Nama: ${name}%0D%0AEmail: ${email}%0D%0APesan: ${message}`;

  // Buat link mailto
  const mailtoLink = `mailto:ridwanhakimrmdhn@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Buka link mailto
  window.location.href = mailtoLink;
});

// Tombol Kembali ke Atas
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});