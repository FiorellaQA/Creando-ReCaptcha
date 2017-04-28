document.getElementById("bt").addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("x").value = generateCaptcha();
});
function generateCaptcha(){
    var text = "";
    var abec = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 6; i++ ){
        text += abec.charAt(Math.floor(Math.random() * abec.length));
    }
    return text;
}
document.getElementById("x").innerHTML = generateCaptcha();