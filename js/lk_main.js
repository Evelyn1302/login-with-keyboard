/*
    Project 03
*/


// Define the properties of the keyboard
const Keyboard = {
    elements: {                     // elements of the keyboard
        main: null,
        keys_container: null,
        keys: []                    // initialise empty keys list
    },

    properties: {                   // properties of the keyboard
        caps_lock: false,           // set caps lock as false by default
        layout: null
    }
}

const Login = {
    input: null,
    username_value: "",
    password_value: "",
    password_visibility: false
}

// Default keyboard layout
const default_layout = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "=/<", "z", "x", "c", "v", "b", "n", "m", "backspace", "123",
    "space"
];

// Symbol keyboard layout
const symbol_layout = [
    "@", "#", "$", "_", "&", "-", "+", "(", ")", "/",
    ">", "<", "*", '"', "'", ":", ";", "!", "?", "^", "enter",
    "abc", "~", "%", "=", "[", "]", ",", ".", "backspace", "123",
    "space"
];

// Number pad layout
const number_layout = [
    "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "0",
    "abc", "backspace", "=/<"
];

const login_button = document.getElementById("login_button");
const login = document.getElementById("login");
const header_name = document.getElementById("name");

const username_input = document.getElementById("username");
const password_input = document.getElementById("password");
const visibility_button = document.getElementById("visibility");