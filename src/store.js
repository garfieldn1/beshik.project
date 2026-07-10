import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'catalogItems';

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

const loadCatalogItems = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return defaultCatalogItems;
    }
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : defaultCatalogItems;
  } catch {
    return defaultCatalogItems;
  }
};

export function CatalogProvider({ children }) {
  const [items, setItems] = useState(loadCatalogItems);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore localStorage write errors
    }
  }, [items]);

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
