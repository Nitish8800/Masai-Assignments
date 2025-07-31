async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error("API request failed");
    const products = await response.json();
    
    products.forEach(product => {
      console.log(`Title: ${product.title}, Price: $${product.price}`);
    });
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);

  } catch (error) {
    console.error("Failed to fetch products. Please try again later.");
  }
}

fetchProducts();