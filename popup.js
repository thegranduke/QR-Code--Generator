document.addEventListener('DOMContentLoaded', function () {

    qrcode = new QRCode("qrcode");
        
    // function to handle creating qrcode
    function makeCode (){
        var desired_url = document.getElementById("current_url");

        // Ensuring the url input field is not empty
        if (!desired_url.value) {
            alert("Input a url");
            desired_url.focus();
            return;
            }

            //Creating qrcode
            qrcode.makeCode(desired_url.value);
        }

    // Using chrome API to gain access to data in the currently open window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currentTab = tabs[0];
        var url = currentTab.url;

        //Filling input field with current webpage url
        current_url = document.getElementById("current_url");
        current_url.value = url;

        // Calling the function
        makeCode()
        
        // Enable creation of a new qrcode element after a user enters a url and clicks anywhere else on the page
        //document.getElementById("current_url").addEventListener("blur", function () {
        //    makeCode();
        //});

        // Enable creation of a new qrcode when the user clicks enter key on keyboard  
        document.getElementById("current_url").addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
              makeCode();
            }
        });
  
      });
      
      

    // Adding an event listener for the download button
    document.getElementById('download-qrcode').addEventListener('click', function () {

    // Selecting the element with the qrcode
    var qrcodeDiv = document.getElementById('qrcode');

    // Checking if the div exists
    if (qrcodeDiv) {

        // Serialize HTML content of the div and its children
        var serializer = new XMLSerializer();
        var serializedHTML = serializer.serializeToString(qrcodeDiv);

        //Create image element and canvas element to turn svg to png
        var img = new Image();
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        // Selecting the img element to get the qrcode image
        var imgElement = qrcodeDiv.querySelector('img');

        if (imgElement) {
            // Get the source url of the img tag and store it in a variable
            var imageUrl = imgElement.src;
        } else {
                console.error('Image tag not found within the "qrcode" div.');
        }

    // Set image source to the serialized HTML (base64 encoded)
    img.src = 'data:image/svg+xml;base64,' + btoa(serializedHTML);
   
        // Set canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image on the canvas
        context.drawImage(img, 0, 0);

        // Create a link for download
        var link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = imageUrl;

        // Ensure that there is a valid qrcode before download
        if (!imageUrl){
            alert("Enter a valid url");
            return
        }

        // Trigger a click on the link to initiate the download
        link.click();
    
} else {
    console.error('Div with id "qrcode" not found.');
}

    });

      // Listening for the users click to create another qrcode
      document.getElementById('generate-qrcode').addEventListener('click', function () {

        var desired_url = document.getElementById("current_url");
        // Ensuring the url input field is not empty
        if (!desired_url.value) {
            alert("Input a url");
            desired_url.focus();
            return;
        }

        //clearing qrcode to prepare for the next qrcode
        qrcode.clear();

        //Clearing the visible qrcode from popup.html
        var clear = document.getElementById('qrcode');
        clear.innerHTML = '';

        // Create new QRcode instance
        qrcode = new QRCode("qrcode");

        // Calling the function to generate a new qrcode
        makeCode()
          
        document.getElementById("current_url").addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
              makeCode();
            }
        });

     });


});





