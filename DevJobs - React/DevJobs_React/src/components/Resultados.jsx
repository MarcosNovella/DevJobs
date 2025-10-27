import data from "../data/data.json";

function Resultados() {
  return (
    <div className="contenedor-resultados">
      {data.map((job) => (
        <article
          key={job.id}
          className="resultado" data-tecnologia={job.data[0]}
        >
          <h3 className="titulo-secundario">{job.titulo}</h3>
          <h5 className="ubicacion">{job.ubicacion}</h5>
          <p className="article-detalle">{job.descripcion}</p>
          <button className="btn-article">Aplicar</button>
        </article>
      ))}
    </div>
  );
}

export default Resultados;
