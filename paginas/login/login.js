const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById("email").value; // Obtiene el correo
    const password = document.getElementById("password").value; // Obtiene la contraseña

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Almacena el usuario logueado
        alert("Inicio de sesión exitoso");
        window.location.href = "/index.html"; // Redirige a la página principal
    } else {
        alert("Credenciales incorrectas");
    }
});