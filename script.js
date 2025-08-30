 // Product list
const products = [
  { title: "Jeans & Pants", img: "jeans.webp" },
  { title: "DRY Fruits", img: "dryfruits.webp" },
  { title: "Flowers", img: "flower.webp" },
  { title: "Kitchen Essentials", img: "kitchen.jpg" },
  { title: "Health & Personal Care", img: "box2_image.jpg" },
  { title: "Vegitables", img: "veg1.jpg" },
  { title: "Womens Shopping", img: "womenshopping.webp" },
  { title: "Fruits", img: "fruits1.webp" },
  { title: "Beauty Picks", img: "box3_image.jpg" },
  { title: "Clothes", img: "box5_image.jpg" },
  { title: "Pet Care", img: "box6_image.jpg" },
  { title: "New Arrival Toys", img: "box7_image.jpg" },
  { title: "Discover Fashion Trends", img: "fushion.jpg" },
  { title: "Electronics", img: "box4_image.jpg" },
  // Extra products
  { title: "Laptops & Gadgets", img: "electronics.jpg" },
  { title: "Home Decor", img: "box1_image.jpg" },
  { title: "Shoes & Footwear", img: "shoes.jpg" },
  { title: "Airbuds & Leads", img: "buds.webp" },
  { title: "Mens Fushion", img: "men1.jpg" },
  { title: "Womens Makeup", img: "mkk.webp" },
];

// Render products dynamically
const shopSection = document.getElementById("shop-section");
products.forEach(p => {
  shopSection.innerHTML += `
    <div class="box">
      <div class="box-content">
        <h2>${p.title}</h2>
        <div class="box-img" style="background-image:url('${p.img}')"></div>
        <p>See More</p>
      </div>
    </div>
  `;
});

// Back to top
document.querySelector(".foot-panel1").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
