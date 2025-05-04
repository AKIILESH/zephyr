const products = {
    polo: {
      name: "Polo T-shirt",
      description: "Classic style, perfect for both work and casual wear.",
      price: "₹280",
      images: ["images/polo1.jpg", "images/polo2.jpg", "images/polo3.jpg"],
      colors: ["Black", "White", "Navy","Grey","Yellow"],
      sizes: ["XS","S", "M", "L", "XL","XXL"],
      methods: "DTF,Embroidery",
      fabric: "Cotton,Polyester,PolyCotton"
    },
    roundneck: {
      name: "Roundneck T-shirt",
      description: "Comfortable and versatile for everyday use.",
      price: "₹449",
      images: ["images/round1.jpg", "images/round2.jpg"],
      colors: ["White", "Grey", "Charcoal"],
      sizes: ["XS","S", "M", "L", "XL","XXL"],
      methods: "DTG, Screen Print,DTF,Embroidery",
      fabric: "100% Bio-Washed Cotton"
    },
    hoodie: {
      name: "Hoodie",
      description: "Stay warm and stylish with our premium hoodies.",
      price: "₹899",
      images: ["images/hoodie1.jpg", "images/hoodie2.jpg"],
      colors: ["Black", "Maroon", "Olive"],
      sizes: ["S", "M", "L", "XL","XXL"],
      methods: "Embroidery, Vinyl Transfer,DTF,DTG",
      fabric: "Cotton Blend with Fleece"
    },
    sports: {
      name: "Sports Apparel",
      description: "Performance fabrics for all your athletic needs.",
      price: "₹390",
      images: ["images/1.png", "images/2.png"],
      colors: ["All"],
      sizes: ["XS","S", "M", "L", "XL","XXL"],
      methods: "Sublimation, DTF",
      fabric: "Dry-Fit Polyester, Marse"
    }
  };
  
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products[productId];
  
  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("printing-methods").textContent = product.methods;
    document.getElementById("fabric").textContent = product.fabric;
  
    // Colors
    const colorContainer = document.getElementById("colors");
product.colors.forEach(color => {
  const span = document.createElement("span");
  span.textContent = color;
  span.className = "color-box";
  span.style.backgroundColor = color.toLowerCase(); // Set the background color
  span.style.color = (color.toLowerCase() === "white") ? "black" : "white"; // Ensure text is visible
  colorContainer.appendChild(span);
});


    
  
    // Sizes
    const sizeContainer = document.getElementById("sizes");
    product.sizes.forEach(size => {
      const span = document.createElement("span");
      span.textContent = size;
      span.className = "size-box";
      sizeContainer.appendChild(span);
    });
  
    // Images
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.getElementById("thumbnails");
  
    mainImage.src = product.images[0];
  
    product.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.onclick = () => mainImage.src = src;
      thumbnails.appendChild(img);
    });
  }
  
