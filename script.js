// EmailJS configuración
emailjs.init("TU_PUBLIC_KEY"); // ✅ Reemplaza con tu Public Key de EmailJS

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('formularioContacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const btn = e.target.querySelector('button');
  btn.textContent = '📤 Enviando...';
  btn.disabled = true;

  emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', this)
    .then(() => {
      document.getElementById('estadoFormulario').textContent = '✅ Mensaje enviado con éxito';
      document.getElementById('estadoFormulario').style.color = 'green';
      this.reset();
      btn.textContent = '📤 Enviar mensaje';
      btn.disabled = false;
    }, (err) => {
      document.getElementById('estadoFormulario').textContent = '❌ Error al enviar. Intenta de nuevo.';
      document.getElementById('estadoFormulario').style.color = 'red';
      btn.textContent = '📤 Enviar mensaje';
      btn.disabled = false;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // querySelectorAll selecciona *todos* los elementos con la clase
    const tarjetasProyecto = document.querySelectorAll('.proyecto-card');

    tarjetasProyecto.forEach(tarjeta => {
        
        // Esto hace que el puntero cambie, indicando que es clicable
        tarjeta.style.cursor = 'pointer'; 
        
        tarjeta.addEventListener('click', () => {
            
            const urlDestino = tarjeta.getAttribute('data-url');
            
            if (urlDestino) {
                window.location.href = urlDestino;
            }
        });
    });
});