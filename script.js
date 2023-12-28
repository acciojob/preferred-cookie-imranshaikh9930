//your JS code here. If required.
const fontSize = document.querySelector("#fontsize");
const fontColor = document.querySelector("#fontcolor");
const btn = document.querySelector('input[type="submit"]')


btn.addEventListener("click",(e)=>{

    document.body.style.fontSize = fontSize.value + "px";
    document.body.style.color = fontColor.value;
   
    setcookies("fontsize",fontSize.value,365)
    setcookies("fontcolor",fontColor.value,365);
})

function setcookies(Name,value,days){

    let expires = "";
    if(days){
        let date = new Date();
        date.setTime(date.getTime()+ (days * 24* 60 * 60* 1000));
        
        expires = "; expires="+date.toUTCString();

    
    }   

    document.cookie = Name + "="+ value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loadPreference(){
    let fontSizes = getCookie("fontSize");
    let fontColors = getCookie("fontColor");

    // Apply preferences if cookies exist
    if (fontSizes) {
        document.body.style.fontSizes = fontSizes + "px";
        document.getElementById("fontSize").value = fontSizes;
    }

    if (fontColors) {
        document.body.style.color = fontColors;
        document.getElementById("fontColor").value = fontColors;
    }

}