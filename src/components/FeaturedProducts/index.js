import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured'
  );
  console.log(collections);

  return (
    <section>

      <h1>Featured</h1>
      <ProductsGrid products={featuredCollection?.products} />

      <h1>Featured Caps</h1>
      <ProductsGrid products={featuredCollection.products} />

    </section>
  );
}
