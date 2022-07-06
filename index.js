const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passwordEl1 = document.getElementById("password-block-1")
let passwordEl2 = document.getElementById("password-block-2")


function generate(){
    let n = document.getElementById("length").value;
    let str1 = ""
    let str2 = ""
    for (let i = 0; i < n; i++){
        randIndex1 = Math.floor(Math.random()*characters.length)
        randIndex2 = Math.floor(Math.random()*characters.length)
    
        str1 += characters[randIndex1]
        str2 += characters[randIndex2]
    }

    passwordEl1.textContent = str1
    passwordEl2.textContent = str2
}

function copy1() {
    /* Get the text field */
    var copyText = document.getElementById("password-block-1");
  
    /* Select the text field */
    /*copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.textContent);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.textContent);
}

function copy2() {
/* Get the text field */
var copyText = document.getElementById("password-block-2");

/* Select the text field */
/*copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
navigator.clipboard.writeText(copyText.textContent);

/* Alert the copied text */
alert("Copied the text: " + copyText.textContent);
}





