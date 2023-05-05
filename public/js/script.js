// REGISTER FUNCTIONS
function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (
        username == "" ||
        email == "" ||
        password == "" ||
        confirm_password == ""
    ) {
        alert("Harap lengkapi semua kolom input");
    } else if (password != confirm_password) {
        alert("Sandi tidak cocok, silahkan coba lagi");
    } else {
        // Save the user's information to a database or local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Registrasi berhasil, kamu akan segera Login");
        // Redirect the user to the login page
        window.location.href = "./login.html";
    }
}

// LOGIN FUNCTIONS
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var stored_email = localStorage.getItem("email");
    var stored_password = localStorage.getItem("password");
    if (email == stored_email && password == stored_password) {
        alert("Login berhasil!");
        // Redirect the user to the main page
        window.location.href = "./formPetugas.html";
    } else {
        alert("Email dan sandi tidak cocok, silahkan coba lagi");
    }
}

// FORM PETUGAS VALIDATE FUNCTIONS
function validate() {
    const nameInput = document.getElementById("name");
    const addressInput = document.getElementById("address");
    const cityInput = document.getElementById("city");
    const commentInput = document.getElementById("comment");

    if (
        nameInput.value.trim() === "" ||
        addressInput.value.trim() === "" ||
        cityInput.value === "" ||
        commentInput.value.trim() === ""
    ) {
        alert("Harap lengkapi semua kolom input");
        return false;
    }

    alert("Data sudah terkirim");
    return true;
}
