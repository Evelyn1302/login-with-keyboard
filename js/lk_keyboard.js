/*
    Project 03
*/


// Creates the div for keyboard
// Returns main_keyboard div
function _create_main_keyboard(){
    let main_keyboard = document.createElement('div');
    main_keyboard.classList.add("keyboard");
    main_keyboard.id = "keyboard";
    Keyboard.elements.main = main_keyboard;

    return main_keyboard;
}

// Creates the div inside keyboard to contain the keys
// Returns container div
function _create_keys_container(){
    let container = document.createElement('div');
    container.classList.add("keys_container");
    Keyboard.elements.keys_container = container;
    
    return container;
}

// Returns the icon from Google Material Icons
function _create_icon_html(icon_name){
    return `<span class="material-icons">${icon_name}</span>`;
}

// Creates keys for keyboard
// Returns fragment
function _create_keys(key_layout){
    let right_key = [];                 // list of the most right keys on keyboard

    // define the list of the most right keys depending on the keyboard layout used
    switch(Keyboard.properties.layout){
        case "symbol":
            right_key = ["/", "enter", "123"];
            break;

        case "number":
            right_key = ["3", "7", "0"];
            break;

        default:
            right_key = ["p", "enter", "123"];
            break;
    }

    const fragment = document.createDocumentFragment();     // creates document fragment

    // creates all buttons and define their attributes and class names
    // defines what happens when the key is clicked
    key_layout.forEach(function(key){
        let key_button = document.createElement('button');
        key_button.classList.add("keyboard_key");           // all keys have class name of keyboard_key

        switch(key){
            case "backspace":
                key_button.classList.add("key_small");
                key_button.innerHTML = _create_icon_html("backspace");

                key_button.addEventListener("click", () => {
                    switch(Login.input){
                        case "username":
                            Login.username_value = Login.username_value.substring(0, Login.username_value.length - 1);
                            username_input.value = Login.username_value;
                            break;

                        case "password":
                            Login.password_value = Login.password_value.substring(0, Login.password_value.length - 1);
                            password_input.value = Login.password_value;
                            break;
                    }
                });
                break;

            case "caps":
                key_button.classList.add("key_medium");
                key_button.innerHTML = _create_icon_html("keyboard_capslock");

                key_button.addEventListener("click", () => {
                    _toggle_caps_lock();
                });
                break;

            case "enter":
                key_button.classList.add("key_medium");
                key_button.innerHTML = _create_icon_html("keyboard_return");

                key_button.addEventListener("click", () => {
                    switch(Login.input){
                        case "username":
                            Login.input = 'password';
                            username_input.blur();
                            password_input.focus();
                            break;

                        case "password":
                            break;
                    }
                });
                break;

            case "space":
                key_button.classList.add("key_large");
                key_button.innerHTML = _create_icon_html("space_bar");

                key_button.addEventListener("click", () => {
                    switch(Login.input){
                        case "username":
                            Login.username_value += " ";
                            username_input.value = Login.username_value;
                            break;

                        case "password":
                            Login.password_value += " ";
                            password_input.value = Login.password_value;
                            break;
                    }
                });
                break;

            case "=/<":
                key_button.classList.add("key_medium");
                key_button.innerText = key;

                key_button.addEventListener("click", () => {
                    Keyboard.properties.layout = "symbol";
                    _render_keys(container);
                });
                break;
            
            case "123":
                key_button.classList.add("key_medium");
                key_button.innerText = key;

                key_button.addEventListener("click", () => {
                    Keyboard.properties.layout = "number";
                    _render_keys(container);
                });
                break;

            case "abc":
                key_button.classList.add("key_medium");
                key_button.innerText = key;

                key_button.addEventListener("click", () => {
                    Keyboard.properties.layout = "default";
                    _render_keys(container);
                });
                break;

            default:
                key_button.classList.add("key_small");
                key_button.innerText = Keyboard.properties.caps_lock ? key.toUpperCase() : key.toLowerCase();

                key_button.addEventListener("click", () => {
                    switch(Login.input){
                        case "username":
                            Login.username_value += Keyboard.properties.caps_lock ? key.toUpperCase() : key.toLowerCase();
                            username_input.value = Login.username_value;
                            break;

                        case "password":
                            Login.password_value += Keyboard.properties.caps_lock ? key.toUpperCase() : key.toLowerCase();
                            password_input.value = Login.password_value;
                            break;
                    }
                });
                break;
        }

        fragment.appendChild(key_button);               // append key to fragment

        if (right_key.indexOf(key) != -1){              // returns -1 if 'key' is not in the 'right_key' list
            let line_break = document.createElement('br');
            fragment.appendChild(line_break);
        }
    });

    return fragment;
}

// Creates main_keyboard with container div in it
// Appends main_keyboard in document body
// Returns container div
function _render_keyboard(){
    let main_keyboard = _create_main_keyboard();
    let container = _create_keys_container();

    document.body.appendChild(main_keyboard);
    main_keyboard.appendChild(container);

    return container;
}

// Creates keys based on the selected layout
// Appends keys fragment into container div
function _render_keys(container){
    container.innerHTML = '';
    let key_layout = [];

    // select keyboard layout based on the value of Keyboard.properties.layout
    switch(Keyboard.properties.layout){
        case "symbol":
            key_layout = symbol_layout;
            break;

        case "number":
            key_layout = number_layout;
            break;

        default:
            key_layout = default_layout;
            break;
    }

    let keys_fragment = _create_keys(key_layout);
    container.appendChild(keys_fragment);

    // Stores the list of keys (based of layout) in Keyboard.elements.key_container
    Keyboard.elements.keys = Keyboard.elements.keys_container.querySelectorAll(".keyboard_key");
}

// Change the caps_lock state whenever the caps lock button is clicked
// Re-render the keys whenever the caps lock button is clicked
function _toggle_caps_lock(){
    Keyboard.properties.caps_lock = !Keyboard.properties.caps_lock;

    Keyboard.elements.keys.forEach(function(key){
        if (key.childElementCount == 0){                // key.childElementCount = 0 when the key is not a symbol
            key.innerText = Keyboard.properties._toggle_caps_lock ? key.innerText.toUpperCase() : key.innerText.toLowerCase();
        }
    });

    _render_keys(container);
}

// Renders the keyboard when the page is first loaded
let container = _render_keyboard();
_render_keys(container);