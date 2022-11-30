function showPassword() {
    let showPassword = document.getElementById("psw");
    let icon = document.getElementById("icon");
    if (showPassword.type == "password") {
        showPassword.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        showPassword.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }

}
