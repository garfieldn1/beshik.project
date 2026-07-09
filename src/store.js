import React, { createContext, useContext, useState } from 'react';

const defaultCatalogItems = [
  {
    id: 1,
    title: 'Klassik Milliy Beshik',
    description: "Oddiy va qulay dizayn, milliy naqshlar bilan bezatilgan toza tol yog'ochidan.",
    image: 'https://via.placeholder.com/480x320?text=Klassik+Beshik',
  },
  {
    id: 2,
    title: "Premium O'ymakor Beshik",
    description: "Qo'l mehnati bilan chuqur o'yilgan naqshlar. Haqiqiy san'at asari.",
    image: 'https://via.placeholder.com/480x320?text=O%27ymakor+Beshik',
  },
  {
    id: 3,
    title: 'Modern Ekologik Beshik',
    description: "Zamonaviy xonadonlar interyeriga mos tushuvchi ixcham va yengil uslubda.",
    image: 'https://via.placeholder.com/480x320?text=Modern+Beshik',
  },
];

const CatalogContext = createContext(null);

export function useCatalog() {
  return useContext(CatalogContext);
}

export function CatalogProvider({ children }) {
  const [items, setItems] = useState(defaultCatalogItems);

  const addItem = ({ title, description, image }) => {
    const newItem = {
      id: Date.now(),
      title,
      description,
      image: image?.trim() || 'https://via.placeholder.com/480x320?text=Beshik',
    };
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CatalogContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CatalogContext.Provider>
  );
}
