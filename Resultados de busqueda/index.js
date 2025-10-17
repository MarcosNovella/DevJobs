let ubicacionesArr = ["Remoto", "Ciudad de México", "Guadalajara"]

let tecnologiasArr = ["JavaScript", "Python", "Java", "C#", "Ruby", "Go", "PHP", "TypeScript", "Swift", "Kotlin"]

const resultadosContenedor = document.querySelector('.contenedor-resultados');
const selectTecnologia = document.querySelector('select[name="Tecnologia"]');
const selectUbicacion = document.querySelector('select[name="Ubicacion"]');
const resultados = document.querySelectorAll('.resultado');


// console.log(resultadosContenedor);

// Llenar los select con las opciones de tecnologias y ubicaciones

tecnologiasArr.forEach(tecnologia => {
    const option = document.createElement('option');
    option.value = tecnologia;
    option.textContent = tecnologia;
    selectTecnologia.appendChild(option);
})

ubicacionesArr.forEach(ubicacion => {
    const option = document.createElement('option');
    option.value = ubicacion;
    option.textContent = ubicacion;
    selectUbicacion.appendChild(option);
})

let encontrarTecnologia = () => {
    const tecnologiaSeleccionada = selectTecnologia.value;
    // console.log(`${tecnologiaSeleccionada}`);
    return tecnologiaSeleccionada;
}

let encontrarUbicacion = () => {
    const ubicacionSeleccionada = selectUbicacion.value;
    // console.log(`${ubicacionSeleccionada}`);
    return ubicacionSeleccionada;
}


selectTecnologia.addEventListener('change', encontrarTecnologia);
selectUbicacion.addEventListener('change', encontrarUbicacion);

// Filtrar los resultados en base a las selecciones

let filtrarResultadosUbicacion = () => {
    const ubicacion = encontrarUbicacion();
    resultados.forEach(resultado => {
        let ubicacionResultado = resultado.querySelector('.ubicacion').textContent;
        let resultadoTexto = ubicacionResultado.split('|')[1].trim();
        if ((ubicacion === "Ubicación" || resultadoTexto.toLowerCase().includes(ubicacion.toLowerCase()))) {
            resultado.style.display = 'block';
        } else {
            resultado.style.display = 'none';
        }
    });
}

selectUbicacion.addEventListener('change', filtrarResultadosUbicacion);