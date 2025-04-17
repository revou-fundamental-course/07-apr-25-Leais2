// Inisialisasi variabel untuk slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

// Fungsi untuk menampilkan slide berdasarkan index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

// Fungsi untuk mengubah slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Event listener untuk tombol navigasi
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));

// Fungsi untuk mengatur interval slide otomatis
function autoSlide() {
    setInterval(() => {
        changeSlide(1);
    }, 3000); // Ganti slide setiap 3 detik
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi input
    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!');
        return;
    }

    // Simulasi pengiriman data (di sini Anda bisa menambahkan AJAX atau fetch untuk mengirim data ke server)
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);

    // Reset form setelah pengiriman
    this.reset();
});

// Fungsi untuk menginisialisasi slider
function initSlider() {
    showSlide(currentSlide);
    autoSlide();
}

// Inisialisasi slider saat halaman dimuat
document.addEventListener('DOMContentLoaded', initSlider);

// Fungsi untuk menampilkan pesan kesalahan
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    document.body.insertBefore(errorDiv, document.body.firstChild);

    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Fungsi untuk validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Tambahkan event listener untuk validasi email
document.getElementById('email').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        showError('Email tidak valid!');
    }
});

// Fungsi untuk menampilkan pesan sukses
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success';
    successDiv.textContent = message;
    document.body.insertBefore(successDiv, document.body.firstChild);

    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Tambahkan event listener untuk tombol kirim
document.querySelector('button[type="submit"]').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        showSuccess('Pesan Anda telah berhasil dikirim!');
    }
});

// Tambahkan event listener untuk tombol navigasi
document.querySelectorAll('.navigation button').forEach(button => {
    button.addEventListener('click', function() {
        const direction = this.classList.contains('next') ? 1 : -1;
        changeSlide(direction);
    });
});

// Inisialisasi slider saat halaman dimuat
document.addEventListener('DOMContentLoaded', initSlider);