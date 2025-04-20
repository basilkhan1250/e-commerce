// localStorage.clear(); 


let products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 59.99,
        category: "Electronics",
        image: "https://www.action.pk/cdn/shop/files/p9-wireless-bluetooth-headphones-random-colors-5.webp?v=1730371051",
        inStock: true
    },
    {
        id: 2,
        name: "Smartphone with 128GB Storage",
        price: 399.99,
        category: "Electronics",
        image: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E1_OnlineExclusive_SapphireBlue_Lockup_1600x1200.jpg",
        inStock: true
    },
    {
        id: 3,
        name: "4K Ultra HD Smart TV",
        price: 699.99,
        category: "Electronics",
        image: "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/5ed1ddf8-4e73-11ef-a427-bea7e36404f4.jpg",
        inStock: false
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        price: 39.99,
        category: "Electronics",
        image: "https://cubeonline.pk/cdn/shop/files/earfun-air-wireless-earbuds_1024x1024.jpg?v=1696404511",
        inStock: true
    },
    {
        id: 5,
        name: "Portable Bluetooth Speaker",
        price: 29.99,
        category: "Electronics",
        image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9481.jpg?auto=webp&quality=75&width=1024",
        inStock: true
    },
    {
        id: 6,
        name: "USB-C Fast Charger",
        price: 24.99,
        category: "Electronics",
        image: "https://techpoint.pk/wp-content/uploads/2022/12/mix-ch-3-min.jpg",
        inStock: true
    }
];
console.log(products)

let productsListEl = document.querySelectorAll(".products-list-container")[0];

function listProducts(products) {
    for (let i = 0; i < products.length; i++) {
        let productsCard = makeProductsCard(products[i]);
        productsListEl.innerHTML += productsCard;
    }
}

listProducts(products);


function makeProductsCard(products) {
    return `<div class="products"> 
                <img class="products-image" src="${products.image}" alt="${products.name}"/>
                <h2 class="products-text" >${products.name}</h2>
                <p class="products-text" >${products.category}</p>
                <p class="products-text" >$${products.price}</p>
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




