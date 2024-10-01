import React from 'react'
import Product_card from '../component/product_card'
import products from '../api/product';


function CatalogProduct() {
  return (
    <div className="container mx-auto mt-12 px-4 lg:px-16">
      <h1 className="text-4xl font-bold text-[#9b0656] mb-6 text-center">Catalogue de Produits</h1>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Product_card
            key={product._id}
            _id={product._id}
            nom={product.nom}
            prix={product.prix}
            description={product.description}
            image={product.image}
            categorie={product.categorie}
          />
        ))}
      </section>
    </div>
  );
}

export default CatalogProduct;