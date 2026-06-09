import { useState, useEffect } from "react";
import type { Item } from "../components/CartItem";

export function useCart() {
  const [cart, setCart] = useState<Item[]>(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from localstorage", error);
      return [];
    }
  });
  // Persist cart to localstorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localstorage", error);
    }
  }, [cart]);

  //sync Across the tab
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || "[]");
          setCart(newCart);
        } catch (error) {
          console.error("Failed to parse cart from localstorage", error);
        }
      }
    };
    window.addEventListener("storage", handleStorage);
    //cleanup
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const addToCart = (product: Item) => {
    setCart((currentCart: Item[]) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };
  // renamed to updateQuantity + typed params (were implicit any)
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    // fixed arrow syntax, return the mapped array, spread ...item (not CartItem)
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };
}
