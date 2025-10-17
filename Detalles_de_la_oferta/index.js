let botones = document.querySelectorAll('.btn-aplicar');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.toggle('desactivado');
        boton.textContent = boton.classList.contains('desactivado') ? 'Aplicado' : 'Aplicar ahora';
    })
});