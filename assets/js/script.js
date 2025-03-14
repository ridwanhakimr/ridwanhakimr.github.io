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
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (name && email && subject && message) {
      alert('Pesan berhasil dikirim!');
      document.getElementById('contactForm').reset(); // Reset form
    } else {
      alert('Harap isi semua field!');
    }
  });