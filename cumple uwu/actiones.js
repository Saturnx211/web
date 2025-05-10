const btnMusica = document.getElementById('btnMusica');
const cancion = document.getElementById('cancion');

btnMusica.addEventListener('click', () => {
    if (cancion.paused) {
        cancion.play();
        btnMusica.textContent = 'Pausar música ⏸️';
    } else {
        cancion.pause();
        btnMusica.textContent = 'MIRA UWU 🎵';
    }
});

btn.addEventListener("click", () => {
  music.play();
  btn.disabled = true;
  btn.innerText = "🎶 Reproduciendo...";
});

// Confeti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

setInterval(createConfetti, 300);

// Globitos
const style = document.createElement("style");
style.innerHTML = `
.confetti {
  position: fixed;
  width: 10px;
  height: 10px;
  background: hsl(${Math.random() * 360}, 100%, 70%);
  top: 0;
  border-radius: 50%;
  animation: fall linear infinite;
  z-index: 9999;
}
@keyframes fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}`;
document.head.appendChild(style);

// Explosión de fiesta cada 3 segundos (cuidado, es adictivo jaja)
setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 360,
      startVelocity: 40,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 3000);

 