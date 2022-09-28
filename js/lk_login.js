/*
    Project 03
*/


const main_keyboard = document.getElementById("keyboard");

username_input.readOnly = true;
password_input.readOnly = true;

document.body.addEventListener("click", () =>{
    document.body.style.backgroundImage = "linear-gradient(to top left, rgb(235, 225, 169),rgb(248, 198, 181))";
    login.style.opacity = 1;
    main_keyboard.style.opacity = 1;
    header_name.style.transform = "translateY(0px)";
}, true);

login_button.addEventListener("click", () => {
    Login.input = null;
    Login.username_value = '';
    Login.password_value = '';
    username_input.value = Login.username_value;
    password_input.value = Login.password_value;

    document.body.style.backgroundImage = "linear-gradient(to bottom right, rgb(235, 225, 169),rgb(248, 198, 181))";
    login.style.opacity = 0;
    main_keyboard.style.opacity = 0;
    header_name.style.transform = "translateY(30vh)";
});

username_input.addEventListener("click", () => {
    Login.input = 'username';
});

password_input.addEventListener("click", () => {
    Login.input = 'password';
});

visibility_button.addEventListener("click", () => {
    Login.password_visibility = !Login.password_visibility;
    let visibility_icon = document.getElementById("visibility");

    switch(Login.password_visibility){
        case true:
            visibility_icon.innerHTML = "";
            visibility_icon.innerHTML = "visibility";
            password_input.type = 'text';
            break;
        
        case false:
            visibility_icon.innerHTML = "";
            visibility_icon.innerHTML = "visibility_off";
            password_input.type = 'password';
            break;
    }
});