'use client';

import { useState, useEffect } from 'react';

interface Product {
  _id: string;
  name: string;
  qtd: number;
  cat_id: string;
}

interface Category {
  _id: string;
  name: string;
}

const products = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [categoryFilter, setcategoryFilter] = useState<string>('all');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/products')
      .then((res) => res.json())
      .then((data) => {
        setProductsList(data);
      });
    
    fetch('http://127.0.0.1:3000/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategoriesList(data);
      });
  }, []);

  const filterProducts = (category: string) => {
    setcategoryFilter(category);
  };

  const filteredProducts = categoryFilter === 'all'
    ? productsList
    : productsList.filter(product => product.cat_id === categoryFilter);

  return (
    <main className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div id="filters" className="mb-4">
        <button onClick={() => filterProducts('all')} className="bg-blue-500 text-white py-2 px-4 m-2 rounded hover:bg-blue-700">Buscar Todos</button>
        {categoriesList.map(category => (
          <button 
            key={category._id} 
            onClick={() => filterProducts(category._id)} 
            className="bg-blue-500 text-white py-2 px-4 m-2 rounded hover:bg-blue-700">
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.map(({ _id, name, qtd }) => (
          <div key={_id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
            <p className="text-xl font-semibold mb-2">{name}</p>
            <p className="text-gray-600">Quantidade: {qtd}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default products;