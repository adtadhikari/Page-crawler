
//document.body.style.background = 'yellow';
//alert(document.getElementsByClassName("profile-view-grid").innerHTML);


/*
function myMain (evt) {
    //alert(document.body.innerHTML);
    console.log(document.documentElement.innerHTML);
}

window.addEventListener ("load", myMain, false);

*/

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    /* If the received message has the expected format... */
    if (msg.text == "report_back") {
        console.log(document.all[0].innerHTML);
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
          
    sendResponse(document.all[0].innerHTML);
    }
});

