// JavaScript functionalities

// Initialize Firebase (replace with your own config)
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Fetch featured products from Firebase
  const featuredProducts = document.querySelector(".row");
  
  db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      const card = document.createElement("div");
      card.classList.add("col-md-3", "mb-4");
      card.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      `;
      featuredProducts.appendChild(card);
    });
  }).catch((error) => {
    console.error("Error fetching products: ", error);
  });
  