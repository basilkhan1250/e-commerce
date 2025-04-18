// localStorage.clear(); 


let carsData = [
    {
        name: 'Lamborghini',
        model: "Urus",
        color: 'Orange',
        price: 300000,
        imgSrc: "https://hips.hearstapps.com/hmg-prod/images/2025-lamborghini-urus-se-phev-106-67005496322ba.jpg?crop=0.633xw:0.534xh;0.223xw,0.427xh&resize=1200:*",
        isImported: true
    },
    {
        name: 'Mehran',
        model: "VX",
        color: 'Silver',
        price: 2500,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJtBX7b_ukY1rNcPgP_Y7BzG2AwWJecct6Q&s",
        isImported: false
    },
    {
        name: 'Sonata',
        model: "N Line",
        color: 'White',
        price: 60000,
        imgSrc: "https://propakistani.pk/wp-content/uploads/2025/01/N-Line.jpg",
        isImported: true
    },
    {
        name: 'Havel',
        model: "H6",
        color: 'black',
        price: 40000,
        imgSrc: "https://i.ytimg.com/vi/wAC15UwhCXo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUbNTquKFO2W1t_bhbheKPMdYgrg",
        isImported: false
    }
];


let carListEl = document.querySelectorAll(".cars-list-container")[0];

function listCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        let carCard = makeCarCard(cars[i]);
        carListEl.innerHTML += carCard;
    }
}

listCars(carsData);


function makeCarCard(car) {
    return `<div>
                <img src="${car.imgSrc}" alt="${car.name}"/>
                <h2>${car.name} ${car.model}</h2>
                <p>${car.color}</p>
                <p>${car.price}</p>
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




