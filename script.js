/* General Page Styling */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: white;
    color: black;
    transition: background 0.5s, color 0.5s;
}

/* Dark Mode */
.dark-mode {
    background-color: #1a1a1a;
    color: white;
}

/* Logo Styling */
.logo {
    height: 50px;
    margin-top: 20px;
}

/* Border Line */
.border-line {
    width: 100%;
    height: 3px;
    background-color: black;
    margin: 10px 0;
}

/* Typing Effect */
h1 {
    font-size: 2rem;
}

h1 span {
    font-weight: bold;
    color: blue;
}

/* Toggle Switch */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top: 20px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: blue;
}

input:checked + .slider:before {
    transform: translateX(26px);
}
