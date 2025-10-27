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


//Filtrar los resultados por el titulo con el input 

let buscador = document.querySelector('#buscador');

buscador.addEventListener('input', (e) => {
    e.preventDefault();


    const resultadoVacio = document.createElement('p');
    resultadoVacio.textContent = "No se encontraron resultados";
    // resultadoVacio.classList.add('resultado-vacio');

    const busqueda = buscador.value.toLowerCase();
    resultados.forEach(resultado => {
        const titulo = resultado.querySelector('.titulo-secundario').textContent.toLowerCase();
        if (titulo.includes(busqueda)) {
            resultado.style.display = 'block';
        } else {
            resultadosContenedor.appendChild(resultadoVacio);
            resultado.style.display = 'none';
        }
    })
})


// Filtar los resultados por tecnologia

// const articleUno = document.querySelector('#ingeniero-de-software');

// const tecnologias = articleUno.dataset.tecnologias.split(', ');

// console.log(tecnologias);

const buscadorTecnologia = document.querySelector('#buscador-tecnologia');



let filtrarResultadosTecnologia = () => {

    resultados.forEach(resultado => {
        const tecnologias = resultado.dataset.tecnologias.split(', ');

        const tecnologiaSeleccionada = encontrarTecnologia();

        tecnologiaSeleccionada.toLowerCase();

        const tecnologiasLower = tecnologias.map(tech => tech.toLowerCase());

        if (tecnologiaSeleccionada === "Tecnología" || tecnologiasLower.includes(tecnologiaSeleccionada.toLowerCase())) {
            resultado.style.display = 'block';
        } else {
            resultado.style.display = 'none';
        }
    });

}

buscadorTecnologia.addEventListener('change', filtrarResultadosTecnologia);

// Hacer paginacion de los resultados

const resultadosPorPagina = 2;
const botonAnterior = document.querySelector('.anterior');
const botonSiguiente = document.querySelector('.posterior');

let paginaActual = 1;
let totalPaginas = Math.ceil(resultados.length / resultadosPorPagina);

let mostrarResultados = () => {
    
}