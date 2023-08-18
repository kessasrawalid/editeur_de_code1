var texte= document.getElementById("texte");
var delet = document.getElementById("delete");
var play= document.getElementById("play");
var resultat= document.getElementById("resultat");




play.onclick = ()=>{
resultat.innerHTML= texte.value;
localStorage.setItem("result",texte.value)

}

delet.onclick=()=>{
    resultat.innerHTML="";
    texte.value="";

}

onload=()=>{
texte.value=localStorage.getItem("result");


}

