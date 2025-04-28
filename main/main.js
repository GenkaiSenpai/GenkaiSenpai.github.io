const doc = document.getElementById("timer");

let text = "I am Dum! UwU";

let i = 0;
let text_sub = "";

setInterval(TextWrite, 400);

function TextWrite(){
    if(i <= text.length){
        text_sub += text.charAt(i);
        doc.innerText = text_sub;
    } else {
        text_sub = "";
        i = -1;
    }
    i++;
}