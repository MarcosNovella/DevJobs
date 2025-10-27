import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Resultados from './components/Resultados.jsx'

function App() {
  return (
    <>
      <Header />
      <section class="seccion-titulo">
            <h1 class="titulo">Encuentra tu proximo trabajo</h1>
            <h3 class="subtitulo">Explora miles de oportunidades en el sector tecnologico</h3>
        </section>
        <section class="buscador-contenedor">
            <div class="relative">
                <img class="lupita" src="lupita.png" alt=""/>
                <input id="buscador" class="buscador" type="text" placeholder="Buscar trabajos, empresas o habilidades"/>
            </div>
            <select class="select-buscador" name="Tecnologia" id="buscador-tecnologia">
                <option value="Tecnología">Tecnología</option>
            </select>
            <select class="select-buscador" name="Ubicacion" id="">
                <option value="Ubicación">Ubicación</option>
            </select>
            <select class="select-buscador" name="tipoDeContrato" id="">
                <option value="Tipo de contrato">Tipo de contrato</option>
            </select>
            <select class="select-buscador" name="nivelDeExperiencia" id="">
                <option value="Nivel de experiencia">Nivel de experiencia</option>
            </select>
        </section>
        <Resultados />
      <Footer />
    </>
  )
}

export default App
