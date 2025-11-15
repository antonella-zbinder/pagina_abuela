// Función para mostrar el formulario elegido 
function mostrarFormulario(tipo) {
    const formWhatsapp = document.getElementById("form-whatsapp");
    const formEmail = document.getElementById("form-email");

    if (tipo === "whatsapp") {
        formWhatsapp.classList.remove("oculto");
        formEmail.classList.add("oculto");
    } else {
        formEmail.classList.remove("oculto");
        formWhatsapp.classList.add("oculto");
    }
}

// Función para enviar WhatsApp 
document.getElementById("form-whatsapp").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("wa-nombre").value;
    const email = document.getElementById("wa-email").value;
    const mensaje = document.getElementById("wa-mensaje").value;

    const texto = `Hola María Rosa, soy ${nombre}. Mi correo es ${email}. Quiero consultarte: ${mensaje}`;
    
    const telefono = "5491127200568"; 
    
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});


window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('is-loaded');
    }, 300);
});


const backToTopButton = document.querySelector('.back-to-top');

if (backToTopButton) { 
    
    window.addEventListener('scroll', () => {
        
        if (window.scrollY > 300) {
            backToTopButton.classList.add('is-visible');
        } else {
            backToTopButton.classList.remove('is-visible');
        }
    });

    
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
