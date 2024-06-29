function generatePassword() {
    var length = 12; // Default length of the generated password
    var strength = document.getElementById("strength").value;
    var charset = "";

    if (strength === "weak") {
        charset = "abcdefghijklmnopqrstuvwxyz";
    } else if (strength === "medium") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (strength === "strong") {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    }

    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}
