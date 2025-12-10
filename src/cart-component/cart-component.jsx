import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CartSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: #4f46e5;
  }
`;

const RemoveButton = styled(Button)`
  background: #ef4444;
  margin-left: 1rem;

  &:hover {
    background: #dc2626;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ShoppingCart = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
    { id: 4, name: "Monitor", price: 15000 },
    { id: 5, name: "Headphones", price: 2000 },
    { id: 6, name: "Webcam", price: 3000 },
  ];

  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      let found = false;

      const updated = prev.map((item) => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!found) {
        return [...updated, { ...product, quantity: 1 }];
      }

      return updated;
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updated = [];
      prev.map((item) => {
        if (item.id !== productId) {
          updated.push(item);
        }
        return item;
      });
      return updated;
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) => {
      const updated = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === id) {
          const newQty = prev[i].quantity - 1;
          if (newQty > 0) {
            updated.push({ ...prev[i], quantity: newQty });
          }
        } else {
          updated.push(prev[i]);
        }
      }
      return updated;
    });
  };

  // Calculate total
  const getTotal = () => {
    let sum = 0;
    cart.map((item) => {
      sum += item.price * item.quantity;
      return item;
    });
    return sum;
  };

  return (
    <Container>
      <h1>Products</h1>
      <Grid>
        {products.map((product) => (
          <Card key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card>
        ))}
      </Grid>

      <CartSection>
        <h2>Cart ({cart.length} items)</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    ₹{item.price} × {item.quantity} = ₹
                    {item.price * item.quantity}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>

                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    Remove
                  </RemoveButton>
                </div>
              </CartItem>
            ))}

            <h3 style={{ marginTop: "1rem" }}>Total: ₹{getTotal()}</h3>
          </>
        )}
      </CartSection>
    </Container>
  );
};

export default ShoppingCart;
