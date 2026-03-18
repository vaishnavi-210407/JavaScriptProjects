let products = [
    {
        id: 1,
        name: "Yantiti Leather & Canvas Bags",
        category: "Bags",
        price: 29.99,
        oldPrice: 49.99,
        rating: 5,
        reviews: 64,
        discount: "20%",
        image: ""
    },
    {
        id: 2,
        name: "Nike Shoe",
        category: "Shoes",
        price: 29.99,
        oldPrice: 49.99,
        rating: 0,
        reviews: 0,
        discount: "20%",
        image: ""
    },
    {
        id: 3,
        name: "Stylish Wooden Chair",
        category: "Furniture",
        price: 29.99,
        oldPrice: 49.99,
        rating: 0,
        reviews: 0,
        discount: "20%",
        image: ""
    },
    {
        id: 4,
        name: "Womens Ring",
        category: "Jewelry",
        price: 29.99,
        oldPrice: 49.99,
        rating: 5,
        reviews: 44,
        discount: null,
        image: ""
    },
    {
        id: 5,
        name: "Women's Cosmetics",
        category: "Cosmetics",
        price: 29.99,
        oldPrice: 49.99,
        rating: 0,
        reviews: 0,
        discount: "20%",
        image: ""
    },
    {
        id: 6,
        name: "Full Sleeve T-shirt",
        category: "Clothing",
        price: 29.99,
        oldPrice: 49.99,
        rating: 0,
        reviews: 0,
        discount: "20%",
        image: ""
    },
    {
        id: 7,
        name: "Zone Headphone",
        category: "Electronics",
        price: 29.99,
        oldPrice: 49.99,
        rating: 5,
        reviews: 64,
        discount: "20%",
        image: ""
    },
    {
        id: 8,
        name: "Wooden Box WareDrove",
        category: "Furniture",
        price: 29.99,
        oldPrice: 49.99,
        rating: 0,
        reviews: 0,
        discount: "20%",
        image: ""
    }
];

products.forEach((item, idx)=>{
    document.getElementById("pro").innerHTML += `
    <div class="col-lg-3 col-md-6 col-12">
                    <div class="card product-card mt-5">
                        <div class="product-img">
                            <img src="./assets/images/img${idx + 1}.png" alt="${item.name}" class="img-fluid"
                                id="productImg" width="100%">
                        </div>
                        <div class="card-body">
                            <div class="star">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            <h6 class="card-title">${item.category}</h6>
                            <div class="d-flex">
                                <p class="price me-2">${item.price}</p>
                                <s class="strike">${item.oldPrice}</s>
                            </div>
                        </div>
                    </div>
                </div>`
})