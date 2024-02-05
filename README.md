QR Code Generator

    Video Demo: https://youtu.be/cUkXfqavLmY

    Description:

        The "QR Code Generator" Chrome extension simplifies the process of creating QR codes for the current webpage's URL.
        It offers a simple and user-friendly interface allowing users to input a custom URL, generate a corresponding QR code.
        The generated QR code can be viewed on the extension's popup or downloaded as an image.


    Files in Project

        1. Manifest File (manifest.json)
        The manifest.json file is essential for Chrome extensions. It contains metadata about the extension.
        In this project, it specifies the extension's name, version, description, icons of different sizes, and permissions required.

        2.popup.html
        popup.html defines the structure of the extension's "popup", which appears when the extensions browser icon is clicked.
        The file includes links to the necessary styles (popup.css) and scripts (qrcode.min.js and popup.js).
        The popup.html page contains input fields for URL entry, buttons for QR code generation and downloading,
        and a container for displaying the generated QR code.

        3.popup.css
        popup.css provides styling for the popup.html file. It defines the appearance of the input field, buttons, and other elements within the popup.
        The chosen styles aim to create a clean and user-friendly interface. The CSS includes rules for handling focus on the input field and styling the primary and secondary buttons to give a clean aesthetic.

        4.popup.js
        popup.js contains the JavaScript logic responsible for the extension's functionality.
        It uses the chrome.tabs API to query information about the active tab, retrieves the current URL, and populates the input field.
        The script then interacts with the qrcode.min.js library to generate and display the QR code.
        Event listeners are employed to trigger actions such as QR code generation, download initiation, and handling user input.

        5. QR Code Library (qrcode.min.js)
        The qrcode.min.js file is a JavaScript library(From QRCODE.js) that facilitates the generation of QR codes in the "QR Code Generator" Chrome extension.
        This library is responsible for creating the QR code representation of the input URL provided by the user.
        Its compact, minified form is included in the extension to keep the extension's footprint minimal.
        The library is utilized within popup.js to dynamically generate QR codes based on user input, providing a visual representation of the associated URL within the extension's popup.

        6. Images(folder)
        The images folder contains all image files that serve as the extensions icons.
        
    Installation

        Download or clone the repository to your local machine.
        Open Google Chrome.
        Navigate to chrome://extensions/ in the address bar.
        Enable "Developer mode" in the top-right corner.
        Click on "Load unpacked" and select the extension directory.

    Features

        Dynamic URL Retrieval:
        The extension automatically retrieves and populates the input field with the URL of the current webpage,
        simplifying the process of qrcode generation for users.

        QR Code Generation:
        Users can input a custom URL, and the extension generates a corresponding QR code using the qrcode.js library.
        Users can also generate qrcodes to represent text and numerical values.

        Download Option:
        The extension provides a "Download" button that allows users to save the generated QR code as a PNG image.
        The download functionality involves converting the SVG-based QR code to a PNG format.

        User-Friendly Interface:
        The design of the popup aims for simplicity and clarity, making it easy for users to understand and interact with the extension.

    Design choices

        1. Automatic URL Retrieval
        The decision to automatically retrieve and display the URL of the current webpage in the input field enhances user convenience.
        Users can quickly generate QR codes for the page they are currently viewing without manual URL entry. 
        The only drawback is that the user will always have to view the current pages qrcode even when the goal is to generate a different qrcode.

        2. QR Code Download
        This choice was made to enable users to use the generated QR codes in various contexts, such as printing or sharing on platforms that accept image uploads, 
        converting the images from SVG TO PNG files was also done to make them more versatile since PNG is a more widely used image format.

        3. Code Structure and Readability
        The JavaScript code in popup.js is structured to ensure readability and maintainability.
        Event listeners, functions, and logic are organized logically to enhance comprehension  
        and comments are provided to explain complex sections of the code.
