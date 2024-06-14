import { Link } from 'react-router-dom';
export default function ProductCard({ title, price, image, idProd, category }) {
  return (
    <>
      <div class="card text-white bg-dark  col-xl-2 col-md-2 col-sm-2">
        <img src={image} alt={title} />
        <h4 class="card-header">{title}</h4>
        <p class="card-text"> Precio: $ {price}</p>
        <p class="card-text"> Categoria: {category}</p>
        <button class="nav-link">
          <Link to={`/product/${idProd}`} class="btn btn-outline-warning">Ver detalles</Link>
        </button>
        <div class="card-footer"></div>
      </div>


    </>
  );
}
