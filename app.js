// localStorage.clear(); 

let products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 59.99,
        category: "Electronics",
        image: "https://www.action.pk/cdn/shop/files/p9-wireless-bluetooth-headphones-random-colors-5.webp?v=1730371051",
        inStock: true,
        quantity: 1
    },
    {
        id: 2,
        name: "Smartphone with 128GB Storage",
        price: 399.99,
        category: "Electronics",
        image: "https://sparx.pk/cdn/shop/files/Edge-20-Pro-Sparkling-Blue.jpg?v=1721641402",
        inStock: true,
        quantity: 1
    },
    {
        id: 3,
        name: "4K Ultra HD Smart TV",
        price: 699.99,
        category: "Electronics",
        image: "https://www.aysonline.pk/wp-content/uploads/2024/10/TCL-LED-43V6B.jpg",
        inStock: false,
        quantity: 1
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        price: 39.99,
        category: "Electronics",
        image: "https://cubeonline.pk/cdn/shop/files/earfun-air-wireless-earbuds_1024x1024.jpg?v=1696404511",
        inStock: true,
        quantity: 1
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        price: 29.99,
        category: "Electronics",
        image: "https://fonepro.pk/wp-content/uploads/Buy-Tronsmart-T7-Portable-Speaker-in-Pakistan-at-Dab-Lew-Tech.png",
        inStock: true,
        quantity: 1
    },
    {
        id: 6,
        name: "USB-C Fast Charger",
        price: 24.99,
        category: "Electronics",
        image: "https://techpoint.pk/wp-content/uploads/2022/12/mix-ch-3-min.jpg",
        inStock: true,
        quantity: 1
    }
];

console.log(products)


function listProducts(products) {
    let productsListEl = document.querySelector(".products-list-container");
    if (productsListEl) {
        for (let i = 0; i < products.length; i++) {
            let productsCard = makeProductsCard(products[i]);
            productsListEl.innerHTML += productsCard;
        }
    }
}

listProducts(products);


function makeProductsCard(products) {
    return `<div class="products"> 
                <img class="products-image" src="${products.image}" alt="${products.name}"/>
                <div class="products-text">
                    <h2>${products.name}</h2>
                    <p>${products.category}</p>
                    <p>$${products.price}</p>
                    <button class="add-to-cart" onclick="addToCart(${products.id})">Add to Cart</button>
                </div>
            </div>
        `
}

function signUp(event) {
    event.preventDefault();

    const signupUserName = document.querySelector(".username");
    const signupUserPassword = document.querySelector(".password");
    const signupUserEmail = document.querySelector(".email");
    const error = document.querySelectorAll("p");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExist = users.some(user =>
        user.userName === signupUserName.value || user.userEmail === signupUserEmail.value
    );

    if (userExist) {
        error[0].innerHTML = "User already exists";
        error[0].style.display = "block";
        error[0].style.color = "red";
        error[0].style.fontSize = "20px";

        signupUserName.value = "";
        signupUserPassword.value = "";
        signupUserEmail.value = "";

        setTimeout(() => {
            error[0].style.display = "none";
        }, 3000);

        return;
    }

    const newUser = {
        userName: signupUserName.value,
        userPassword: signupUserPassword.value,
        userEmail: signupUserEmail.value,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    signupUserName.value = "";
    signupUserPassword.value = "";
    signupUserEmail.value = "";

    error[0].innerHTML = "User Created Successfully";
    error[0].style.display = "block";
    error[0].style.color = "green";
    error[0].style.fontSize = "20px";

    setTimeout(() => {
        window.location.href = "./login.html";
    }, 2000);
}


function login(event) {
    event.preventDefault();

    const error = document.querySelectorAll("p")
    console.log(error)
    const loginUserName = document.querySelector(".username");
    const loginUserPassword = document.querySelector(".password");
    console.log(loginUserName, loginUserPassword);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => (user.userName === loginUserName.value && user.userPassword === loginUserPassword.value))
    if (validUser) {
        error[0].innerHTML = "Login Successfully";
        error[0].style.display = "block";
        error[0].style.color = "green";
        error[0].style.fontSize = "20px";
        loginUserName.value = "";
        loginUserPassword.value = "";
        setTimeout(() => {
            window.location.href = "./products.html";
        }, 2000);
    }
    else {
        error[0].innerHTML = "Invalid username or password";
        error[0].style.display = "block";
        error[0].style.color = "red";
        error[0].style.fontSize = "20px";

        loginUserName.value = "";
        loginUserPassword.value = "";

        setTimeout(() => {
            error[0].style.display = "none";
        }, 3000);
    }
}


function addToCart(productId) {
    const cartitem = document.querySelector(".cart-item");
    console.log(cartitem)

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
    const product = products.find(p => p.id === productId);
    console.log(product)

    if (product) {
        let existingProduct = cart.find(item => item.id === product.id)
        if (existingProduct) {
            existingProduct.quantity += 1
        }
        else {
            product.quantity = 1
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        cartitem.innerHTML = (`${product.name} has been added to your cart!`);

        setTimeout(() => {
            cartitem.innerHTML = "";
        }, 2000)

    } else {
        cartitem.innerHTML = (`${product.name} Product not found!`);
    }
}

function order(e) {
    e.preventDefault()
    console.log("thanks for your order")

    let orderName = document.querySelector(".name").value
    console.log(orderName)
    let orderNum = document.querySelector(".number").value
    console.log(orderNum)
    let orderEmail = document.querySelector(".email").value
    console.log(orderEmail)

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users[0].userEmail)

    let emailMatch = users.map( user  => user.userEmail === orderEmail )
    console.log(emailMatch)

}