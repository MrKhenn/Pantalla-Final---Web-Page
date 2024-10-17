const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById("name").value; // Obtiene el nombre
    const email = document.getElementById("email").value; // Obtiene el correo
    const password = document.getElementById("password").value; // Obtiene la contraseña

    const userData = {
        name: name,
        email: email,
        password: password,
        photo: "ruta/a/tu/foto.jpg" // Aquí puedes agregar la ruta a la foto de perfil
    };

    // Guardar el usuario en localStorage
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    alert("Registro exitoso");
    window.location.href = "Login.html"; // Redirige a la página de inicio de sesión
});