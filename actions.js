// Elimina este código:
// alert('¡Lili, eres la estrella de hoy! 🌟');

// Reemplázalo por esto:
function mostrarMensaje() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '1000';
    modal.innerHTML = `
        <p>¡Lili, eres la estrella de hoy! 🌟</p>
        <button onclick="this.parentElement.remove()">Aceptar</button>
    `;
    document.body.appendChild(modal);
}

// Actualiza el evento de la foto:
document.getElementById('fotoLili').addEventListener('click', mostrarMensaje);
// JavaScript: Interacciones y efectos
  function mostrarSorpresa() {
    const sorpresa = document.getElementById('sorpresa');
    sorpresa.style.display = 'block';
    sorpresa.style.animation = 'aparecer 1s forwards';
    lanzarConfeti();
}

function lanzarConfeti() {
    const colores = ['#ff6b6b', '#ffa502', '#2ed573', '#1e90ff', '#ff4757'];
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.style.position = 'fixed';
        confeti.style.width = '10px';
        confeti.style.height = '10px';
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.left = Math.random() * window.innerWidth + 'px';
        confeti.style.top = '-10px';
        confeti.style.borderRadius = '50%';
        confeti.style.animation = `caer ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 5000);
    }
}

// Crear globos
for (let i = 0; i < 10; i++) {
    const globo = document.createElement('div');
    globo.classList.add('globo');
    globo.style.left = Math.random() * window.innerWidth + 'px';
    globo.style.bottom = '-100px';
    globo.style.background = `hsl(${Math.random() * 360}, 70%, 70%)`;
    document.body.appendChild(globo);
}

// Animación para la foto
document.getElementById('fotoLili').addEventListener('click', () => {
    alert('¡Lili, eres la estrella de hoy! 🌟');
});

