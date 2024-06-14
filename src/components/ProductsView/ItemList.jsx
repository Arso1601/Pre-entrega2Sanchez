import './ItemList.css';
import Item from './Item';

const ItemList = ( {products, category} ) => {

    return (

    <>
      <div class="container">
        <h1>{category}</h1>
        <article class="flex-container card-item">
          {products.map((product) => (
            <Item 
              title={product.title}
              price={product.price}
              image={product.image}
              idProd={product.id}
              category={product.category}
            />
          ))}
        </article>
      </div>
    </>
  );
}

export default ItemList
