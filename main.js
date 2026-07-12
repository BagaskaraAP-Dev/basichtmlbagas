// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // -70px untuk menyesuaikan tinggi navbar
                behavior: 'smooth'
            });
        }
    });
});

// Penanganan pengiriman form kontak
const formKontak = document.getElementById('formKontak');

if(formKontak) {
    formKontak.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah halaman reload
        
        const nama = document.getElementById('nama').value;
        
        // Simulasi pengiriman pesan sukses
        alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima.`);
        
        // Reset formulir setelah dikirim
        formKontak.reset();
    });
}