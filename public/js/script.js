// DEFINE API
const API_URL = "https://645130aee1f6f1bb22aaa3e5.mockapi.io/api/v1/petugas";

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

// FORM PETUGAS FUNCTIONS
// const form = document.getElementById("form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   fetch(API_URL, {
//     method: "POST",
//     body: formData
//   })
//   .then(response => {
//     if (response.ok) {
//       alert("Data telah dikirimkan");
//     } else {
//       throw new Error("Terjadi kesalahan saat mengirim data");
//     }
//   })
//   .catch(error => {
//     console.error(error);
//     alert("Terjadi kesalahan saat mengirim data");
//   });
// });

function btnData() {
    window.location.href = "./dataPetugas.html";
}

// DATA PETUGAS FUNCTIONS
// Ambil elemen HTML untuk menampilkan data kota
const cityContainer = document.querySelector(".city-container");

// Lakukan request API untuk mendapatkan data kota
fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
        // Lakukan pengolahan data untuk menghitung jumlah data kota yang sama
        const cityCount = data.reduce((acc, cur) => {
            if (acc[cur.city]) {
                acc[cur.city]++;
            } else {
                acc[cur.city] = 1;
            }
            return acc;
        }, {});

        // Tampilkan data kota dalam card
        Object.keys(cityCount).forEach((city) => {
            const card = `
      <a
  href="#"
  class="group flex justify-between rounded-xl bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8"
>
  <div>
    <h3 class="text-3xl font-bold text-green-600 sm:text-3xl">${cityCount[city]} Data</h3>

    <div class="mt-4 border-t-2 border-gray-100 pt-4">
      <p class="text-sm font-large uppercase text-gray-500">${city}</p>
    </div>
  </div>

  <div
    class="mt-8 inline-flex items-center gap-2 text-green-600 sm:mt-12 lg:mt-16"
  >
    <p class="font-medium sm:text-lg"></p>

  </div>
</a>
    `;
            cityContainer.innerHTML += card;
        });
    })
    .catch((error) => console.error(error));
