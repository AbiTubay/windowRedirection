$( "#home" ).click(function(){
    console.log("Button clicked");
    printAlert(window.location.href);
    setTimeout(function(){
        alert("Redirecting to homepage in 5");
        window.location.href = "index.html";
        
    }, 5000);
});

$( "#about" ).click(function(){
    console.log("Button clicked");
    printAlert(window.location.href);
    setTimeout(function(){
        alert("Redirecting to about page in 5");
        window.location.href = "about.html";
    }, 5000);
    
});

(window).onload = function(loc) {
    if(window.location != loc){
        alert("window redirection successful");
    }
}

function printAlert(loc) {
    console.log(loc);
    if(loc != window.location){
        console.log("Location changed from "+loc+" to "+ window.location.href);
        alert("Location changed from "+loc+" to "+ window.location.href);
    }
}