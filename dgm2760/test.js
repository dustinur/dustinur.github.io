function welcomeMessage() {
    alert("Please complete all forms before submission");
}

function popitup(url) {
    newwindow=window.open(url,'name','height=400,width=300');
    if (window.focus) {newwindow.focus();
}
    return false;
}

function topGames() {
    var index;
    var text = "<ul>";
    var gameTitles = ["Red Dead", "GTA", "LA Noire", "Bully"];
    for (index = 0; index < gameTitles.length; index++) {
        text += "<li>" + gameTitles[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("titles").innerHTML = text;
   
   var redDead ={
        name:"Red Dead",
        releaseDate:2010,
    };
    var gta ={
        name:"GTA",
        releaseDate:2015,
    };
    var maxPayne ={
        name:"LA Noire",
        releaseDate:2011,
    };
    var bully ={
        name:"Max Payne 3",
        releaseDate:2006,
    };  

}


function process() {
    'use strict';
    var okay = true;
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');  
    // Validate the email address:
    if (!email || !email.value || (email.value.length < 8) || (email.value.indexOf('@') == -1)) {
        okay = false;
        alert('Please enter a valid email address!');
    }

    // Validate the comments:
    if (!comments || !comments.value || (comments.value.indexOf('<') != -1) ) {
        okay = false;
        alert('Please enter your comments, without any HTML!');
    }
    showNumbers();
    calculate();
    return false;
    
} // End of process() function.

function mOver(obj) {
    obj.innerHTML = "Creative Content Inspired By Rockstar games";
}

function mOut(obj) {
    obj.innerHTML = "Inspiration";
}



// image files to be used
var theImages = new Array();
// Potentital to add more images to the array

theImages[0] = 'images/max1.jpg';
theImages[1] = 'images/GTAIV.jpg';
theImages[2] = 'images/duke.jpg';
theImages[3] = 'images/gtavsketch.jpg';
theImages[4] = 'images/bully1.png';
theImages[5] = 'images/max3.jpg';
theImages[6] = 'images/red_dead1.jpg';

var j = 0;
var p = theImages.length;
var preBuffer = new Array();
for (i = 0; i < p; i++){
   preBuffer[i] = new Image();
   preBuffer[i].src = theImages[i];
}

var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
}



if (document.images) {
    max1 = new Image;
    max2 = new Image;

    max1.src = "images/max1.jpg";
    max2.src = "images/max5.jpg";
}


function swapImage(thisImage,newImage) {
    if (document.images) {
        document[thisImage].src = eval(newImage + ".src");
    }
}

