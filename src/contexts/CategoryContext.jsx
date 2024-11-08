import React, { createContext, useContext, useEffect, useState } from 'react';
import { categories as defaultCategories } from '../data/categories';

const CategoryContext = createContext({
  categories: [],
  addCategory: async () => {},
  updateCategory: async () => {},
  deleteCategory: async () => {}
});

const DB_NAME = 'chainNavDB';
const DB_VERSION = 1;
const STORE_NAME = 'categories';

export function CategoryProvider({ children }) {
  const [db, setDB] = useState(null);
  const [categories, setCategories] = useState([]);

  // 初始化 IndexDB
  useEffect(() => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      console.error("Database error:", request.error);
      setCategories(defaultCategories);
    };

    request.onsuccess = () => {
      setDB(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
  }, []);

  // 加载数据
  useEffect(() => {
    if (!db) return;

    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      if (request.result.length === 0) {
        // 首次加载，存入默认数据
        const writeTransaction = db.transaction(STORE_NAME, 'readwrite');
        const writeStore = writeTransaction.objectStore(STORE_NAME);
        
        defaultCategories.forEach(category => {
          writeStore.add(category);
        });

        setCategories(defaultCategories);
      } else {
        setCategories(request.result);
      }
    };
  }, [db]);

  const addCategory = async (category) => {
    if (!db) return;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.add(category);

      request.onsuccess = () => {
        setCategories(prev => [...prev, category]);
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  };

  const updateCategory = async (category) => {
    if (!db) return;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(category);

      request.onsuccess = () => {
        setCategories(prev => 
          prev.map(c => c.id === category.id ? category : c)
        );
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  };

  const deleteCategory = async (id) => {
    if (!db) return;

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => {
        setCategories(prev => prev.filter(c => c.id !== id));
        resolve();
      };
      request.onerror = () => reject(request.error);
    });
  };

  return (
    <CategoryContext.Provider 
      value={{ 
        categories, 
        addCategory, 
        updateCategory, 
        deleteCategory 
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoryProvider');
  }
  return context;
} 