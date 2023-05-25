const btnOff = document.getElementById("btnOff");
const btnOn = document.getElementById("btnOn");
const imgCatGif = document.getElementById("imgCatGif");

btnOn.addEventListener("click", function(e){
    imgCatGif.src = "../img/byuntear-sad.gif"
    imgCatGif.className ="tiltLeft"
});

btnOff.addEventListener("click", function(e){
    let kontakt = confirm("Vil du have en grædende kat?")
    if(kontakt){
        imgCatGif.src = "../img/banana-cat-crying.gif"
        imgCatGif.className ="tiltRight"
    }
    // imgCatGif.classList.toggle("tiltLeft")
});